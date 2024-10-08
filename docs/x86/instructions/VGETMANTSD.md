<b>VGETMANTSD</b> — Extract Float64 of Normalized Mantissas from Float64 Scalar
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.NDS.LIG.66.0F3A.W1 27 /r ib VGETMANTSD xmm1 {k1}{z}, xmm2, xmm3/m64{sae}, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Extract the normalized mantissa of the low float64 element in xmm3/m64 using imm8 for sign control and mantissa interval normalization. Store the mantissa to xmm1 under the writemask k1 and merge with the other elements of xmm2.</td>
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
Convert the double-precision floating values in the low quadword element of the second source operand (the third
operand) to DP FP value with the mantissa normalization and sign control specified by the imm8 byte, see
Figure 5-15. The converted result is written to the low quadword element of the destination operand (the first
operand) using writemask k1. Bits (127:64) of the XMM register destination are copied from corresponding
bits in the first source operand. The normalized mantissa is specified by interv (imm8[1:0]) and the sign control
(sc) is specified by bits 3:2 of the immediate byte.

The conversion operation is:

GetMant(x) = ±2k|x.significand|

where:

1 <= |x.significand| < 2

Unbiased exponent k depends on the interval range defined by interv and whether the exponent of the source is
even or odd. The sign of the final result is determined by sc and the source sign.

If interv != 0 then k = -1, otherwise K = 0. The encoded value of imm8[1:0] and sign control are shown in
Figure 5-15.
The converted DP FP result is encoded according to the sign control, the unbiased exponent k (adding bias) and a
mantissa normalized to the range specified by interv.

The GetMant() function follows Table 5-16 when dealing with floating-point special numbers.

This instruction is writemasked, so only those elements with the corresponding bit set in vector mask register k1
are computed and stored into zmm1. Elements in zmm1 with the corresponding bit clear in k1 retain their previous
values.

### Operation

```java
// GetNormalizeMantissaDP(SRC[63:0], SignCtrl[1:0], Interv[1:0]) is defined in the operation section of VGETMANTPD
```
#### VGETMANTSD (EVEX encoded version)
```java
SignCtrl[1:0] ← IMM8[3:2];
Interv[1:0] ← IMM8[1:0];
IF k1[0] OR *no writemask*
    THEN DEST[63:0] ←
            GetNormalizedMantissaDP(SRC2[63:0], SignCtrl, Interv)
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[63:0] remains unchanged*
            ELSE 
                            ; zeroing-masking
                DEST[63:0] ← 0
        FI
FI;
DEST[127:64] ← SRC1[127:64] 
DEST[MAXVL-1:128] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VGETMANTSD __m128d _mm_getmant_sd( __m128d a, __m128 b, enum intv, enum sgn);
VGETMANTSD __m128d _mm_mask_getmant_sd(__m128d s, __mmask8 k, __m128d a, __m128d b, enum intv, enum sgn);
VGETMANTSD __m128d _mm_maskz_getmant_sd( __mmask8 k, __m128 a, __m128d b, enum intv, enum sgn);
VGETMANTSD __m128d _mm_getmant_round_sd( __m128d a, __m128 b, enum intv, enum sgn, int r);
VGETMANTSD __m128d _mm_mask_getmant_round_sd(__m128d s, __mmask8 k, __m128d a, __m128d b, enum intv, enum sgn, int r);
VGETMANTSD __m128d _mm_maskz_getmant_round_sd( __mmask8 k, __m128d a, __m128d b, enum intv, enum sgn, int r);
```
### SIMD Floating-Point Exceptions
Denormal, Invalid

### Other Exceptions

See Exceptions Type E3.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
