<b>VRNDSCALESS</b> — Round Scalar Float32 Value To Include A Given Number Of Fraction Bits
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.NDS.LIG.66.0F3A.W0 0A /r ib VRNDSCALESS xmm1 {k1}{z}, xmm2, xmm3/m32{sae}, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Rounds scalar single-precision floating-point value in xmm3/m32 to a number of fraction bits specified by the imm8 field. Stores the result in xmm1 register under writemask.</td>
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
		<td>Tuple1 Scalar</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Rounds the single-precision floating-point value in the low doubleword element of the second source operand (the
third operand) by the rounding mode specified in the immediate operand (see Figure 5-29) and places the result in
the corresponding element of the destination operand (the first operand) according to the writemask. The double-
word elements at bits 127:32 of the destination are copied from the first source operand (the second operand).

The destination and first source operands are XMM registers, the 2nd source operand can be an XMM register or
memory location. Bits MAXVL-1:128 of the destination register are cleared.

The rounding process rounds the input to an integral value, plus number bits of fraction that are specified by
imm8[7:4] (to be included in the result) and returns the result as a single-precision floating-point value.

It should be noticed that no overflow is induced while executing this instruction (although the source is scaled by
the imm8[7:4] value).

The immediate operand also specifies control fields for the rounding operation, three bit fields are defined and
shown in the “Immediate Control Description” figure below. Bit 3 of the immediate byte controls the processor
behavior for a precision exception, bit 2 selects the source of rounding mode control. Bits 1:0 specify a non-sticky
rounding-mode value (Immediate control tables below lists the encoded values for rounding-mode field).

The Precision Floating-Point Exception is signaled according to the immediate operand. If any source operand is an
SNaN then it will be converted to a QNaN. If DAZ is set to ‘1 then denormals will be converted to zero before
rounding.

The sign of the result of this instruction is preserved, including the sign of zero.

The formula of the operation for VRNDSCALESS is
ROUND(x) = 2-M\*Round_to_INT(x\*2M, round_ctrl),

round_ctrl = imm[3:0];

M=imm[7:4];
The operation of x\*2M is computed as if the exponent range is unlimited (i.e. no overflow ever occurs).

VRNDSCALESS is a more general form of the VEX-encoded VROUNDSS instruction. In VROUNDSS, the formula of
the operation on each element is

ROUND(x) = Round_to_INT(x, round_ctrl),

round_ctrl = imm[3:0];

EVEX encoded version: The source operand is a XMM register or a 32-bit memory location. The destination operand
is a XMM register.

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
VRNDSCALESS (EVEX encoded version)
IF k1[0] or *no writemask*
    THEN
            DEST[31:0] ← RoundToIntegerSP(SRC2[31:0], Zero_upper_imm[7:0])
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[31:0] remains unchanged*
            ELSE 
                            ; zeroing-masking
                THEN DEST[31:0] ← 0
        FI;
FI;
DEST[127:32] ← SRC1[127:32]
DEST[MAXVL-1:128] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VRNDSCALESS __m128 _mm_roundscale_ss ( __m128 a, __m128 b, int imm);
VRNDSCALESS __m128 _mm_roundscale_round_ss ( __m128 a, __m128 b, int imm, int sae);
VRNDSCALESS __m128 _mm_mask_roundscale_ss (__m128 s, __mmask8 k, __m128 a, __m128 b, int imm);
VRNDSCALESS __m128 _mm_mask_roundscale_round_ss (__m128 s, __mmask8 k, __m128 a, __m128 b, int imm, int sae);
VRNDSCALESS __m128 _mm_maskz_roundscale_ss ( __mmask8 k, __m128 a, __m128 b, int imm);
VRNDSCALESS __m128 _mm_maskz_roundscale_round_ss ( __mmask8 k, __m128 a, __m128 b, int imm, int sae);
```
### SIMD Floating-Point Exceptions
Invalid, Precision

If SPE is enabled, precision exception is not reported (regardless of MXCSR exception mask).

### Other Exceptions

See Exceptions Type E3.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
