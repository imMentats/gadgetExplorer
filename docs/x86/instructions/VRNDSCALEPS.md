<b>VRNDSCALEPS</b> — Round Packed Float32 Values To Include A Given Number Of Fraction Bits
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F3A.W0 08 /r ib VRNDSCALEPS xmm1 {k1}{z}, xmm2/m128/m32bcst, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Rounds packed single-precision floating point values in xmm2/m128/m32bcst to a number of fraction bits specified by the imm8 field. Stores the result in xmm1 register. Under writemask.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F3A.W0 08 /r ib VRNDSCALEPS ymm1 {k1}{z}, ymm2/m256/m32bcst, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Rounds packed single-precision floating point values in ymm2/m256/m32bcst to a number of fraction bits specified by the imm8 field. Stores the result in ymm1 register. Under writemask.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F3A.W0 08 /r ib VRNDSCALEPS zmm1 {k1}{z}, zmm2/m512/m32bcst{sae}, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Rounds packed single-precision floating-point values in zmm2/m512/m32bcst to a number of fraction bits specified by the imm8 field. Stores the result in zmm1 register using writemask.</td>
	</tr>
</table>


### Instruction Operand Encoding
<table>
	<tr>
		<td><b>Op/En</b></td>
		<td><b>Tuple Type</b></td>
		<td><b>Operand 1</b></td>
		<td><b>Operand 2</b></td>
		<td><b>Operand 3</b></td>
		<td><b>Operand 4</b></td>
	</tr>
	<tr>
		<td>A</td>
		<td>Full</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
</table>


### Description
Round the single-precision floating-point values in the source operand by the rounding mode specified in the imme-
diate operand (see Figure 5-29) and places the result in the destination operand.

The destination operand (the first operand) is a ZMM register conditionally updated according to the writemask.
The source operand (the second operand) can be a ZMM register, a 512-bit memory location, or a 512-bit vector
broadcasted from a 32-bit memory location.

The rounding process rounds the input to an integral value, plus number bits of fraction that are specified by
imm8[7:4] (to be included in the result) and returns the result as a single-precision floating-point value.

It should be noticed that no overflow is induced while executing this instruction (although the source is scaled by
the imm8[7:4] value).

The immediate operand also specifies control fields for the rounding operation, three bit fields are defined and
shown in the “Immediate Control Description” figure below. Bit 3 of the immediate byte controls the processor
behavior for a precision exception, bit 2 selects the source of rounding mode control. Bits 1:0 specify a non-sticky
rounding-mode value (Immediate control table below lists the encoded values for rounding-mode field).

The Precision Floating-Point Exception is signaled according to the immediate operand. If any source operand is an
SNaN then it will be converted to a QNaN. If DAZ is set to ‘1 then denormals will be converted to zero before
rounding.

The sign of the result of this instruction is preserved, including the sign of zero.

The formula of the operation on each data element for VRNDSCALEPS is
ROUND(x) = 2-M\*Round_to_INT(x\*2M, round_ctrl),

round_ctrl = imm[3:0];

M=imm[7:4];
The operation of x\*2M is computed as if the exponent range is unlimited (i.e. no overflow ever occurs).

VRNDSCALEPS is a more general form of the VEX-encoded VROUNDPS instruction. In VROUNDPS, the formula of
the operation on each element is

ROUND(x) = Round_to_INT(x, round_ctrl),

round_ctrl = imm[3:0];
Note: EVEX.vvvv is reserved and must be 1111b, otherwise instructions will \#UD.

Handling of special case of input values are listed in Table 5-25.

### Operation

```java
RoundToIntegerSP(SRC[31:0], imm8[7:0]) {
    if (imm8[2] = 1)
        rounding_direction ← MXCSR:RC
                            ; get round control from MXCSR
    else
        rounding_direction ← imm8[1:0]
                            ; get round control from imm8[1:0]
    FI
    M ← imm8[7:4]
                        ; get the scaling factor
    case (rounding_direction)
    00: TMP[31:0] ← round_to_nearest_even_integer(2M*SRC[31:0])
    01: TMP[31:0] ← round_to_equal_or_smaller_integer(2M*SRC[31:0])
    10: TMP[31:0] ← round_to_equal_or_larger_integer(2M*SRC[31:0])
    11: TMP[31:0] ← round_to_nearest_smallest_magnitude_integer(2M*SRC[31:0])
    ESAC;
    Dest[31:0] ← 2-M* TMP[31:0] 
                            ; scale down back to 2-M
    if (imm8[3] = 0) Then
                            ; check SPE
        if (SRC[31:0] != Dest[31:0]) Then
                            ; check precision lost
            set_precision()
                            ; set #PE
        FI;
    FI;
    return(Dest[31:0])
}
VRNDSCALEPS (EVEX encoded versions) 
(KL, VL) = (4, 128), (8, 256), (16, 512)
IF *src is a memory operand*
    THEN TMP_SRC ← BROADCAST32(SRC, VL, k1)
    ELSE TMP_SRC ← SRC
FI;
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← RoundToIntegerSP(TMP_SRC[i+31:i]), imm8[7:0])
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[i+31:i] remains unchanged*
            ELSE 
                            ; zeroing-masking
                DEST[i+31:i] ← 0
        FI;
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VRNDSCALEPS __m512 _mm512_roundscale_ps( __m512 a, int imm);
VRNDSCALEPS __m512 _mm512_roundscale_round_ps( __m512 a, int imm, int sae);
VRNDSCALEPS __m512 _mm512_mask_roundscale_ps(__m512 s, __mmask16 k, __m512 a, int imm);
VRNDSCALEPS __m512 _mm512_mask_roundscale_round_ps(__m512 s, __mmask16 k, __m512 a, int imm, int sae);
VRNDSCALEPS __m512 _mm512_maskz_roundscale_ps( __mmask16 k, __m512 a, int imm);
VRNDSCALEPS __m512 _mm512_maskz_roundscale_round_ps( __mmask16 k, __m512 a, int imm, int sae);
VRNDSCALEPS __m256 _mm256_roundscale_ps( __m256 a, int imm);
VRNDSCALEPS __m256 _mm256_mask_roundscale_ps(__m256 s, __mmask8 k, __m256 a, int imm);
VRNDSCALEPS __m256 _mm256_maskz_roundscale_ps( __mmask8 k, __m256 a, int imm);
VRNDSCALEPS __m128 _mm_roundscale_ps( __m256 a, int imm);
VRNDSCALEPS __m128 _mm_mask_roundscale_ps(__m128 s, __mmask8 k, __m128 a, int imm);
VRNDSCALEPS __m128 _mm_maskz_roundscale_ps( __mmask8 k, __m128 a, int imm);
```
### SIMD Floating-Point Exceptions
Invalid, Precision

If SPE is enabled, precision exception is not reported (regardless of MXCSR exception mask).

### Other Exceptions

See Exceptions Type E2.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
