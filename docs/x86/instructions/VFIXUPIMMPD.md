<b>VFIXUPIMMPD</b> — Fix Up Special Packed Float64 Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F3A.W1 54 /r ib VFIXUPIMMPD xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Fix up special numbers in float64 vector xmm1, float64 vector xmm2 and int64 vector xmm3/m128/m64bcst and store the result in xmm1, under writemask.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F3A.W1 54 /r ib VFIXUPIMMPD ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Fix up special numbers in float64 vector ymm1, float64 vector ymm2 and int64 vector ymm3/m256/m64bcst and store the result in ymm1, under writemask.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F3A.W1 54 /r ib VFIXUPIMMPD zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst{sae}, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Fix up elements of float64 vector in zmm2 using int64 vector table in zmm3/m512/m64bcst, combine with preserved elements from zmm1, and store the result in zmm1.</td>
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
		<td>ModRM:reg (r, w)</td>
		<td>EVEX.vvvv</td>
		<td>ModRM:r/m (r)</td>
		<td>Imm8</td>
	</tr>
</table>


### Description
Perform fix-up of quad-word elements encoded in double-precision floating-point format in the first source operand
(the second operand) using a 32-bit, two-level look-up table specified in the corresponding quadword element of
the second source operand (the third operand) with exception reporting specifier imm8. The elements that are
fixed-up are selected by mask bits of 1 specified in the opmask k1. Mask bits of 0 in the opmask k1 or table
response action of 0000b preserves the corresponding element of the first operand. The fixed-up elements from
the first source operand and the preserved element in the first operand are combined as the final results in the
destination operand (the first operand).

The destination and the first source operands are ZMM/YMM/XMM registers. The second source operand can be a
ZMM/YMM/XMM register, a 512/256/128-bit memory location or a 512/256/128-bit vector broadcasted from a 64-bit
 memory location.

The two-level look-up table perform a fix-up of each DP FP input data in the first source operand by decoding the
input data encoding into 8 token types. A response table is defined for each token type that converts the input
encoding in the first source operand with one of 16 response actions.

This instruction is specifically intended for use in fixing up the results of arithmetic calculations involving one source
so that they match the spec, although it is generally useful for fixing up the results of multiple-instruction
sequences to reflect special-number inputs. For example, consider rcp(0). Input 0 to rcp, and you should get INF
according to the DX10 spec. However, evaluating rcp via Newton-Raphson, where x=approx(1/0), yields an incor-
rect result. To deal with this, VFIXUPIMMPD can be used after the N-R reciprocal sequence to set the result to the
correct value (i.e. INF when the input is 0).

If MXCSR.DAZ is not set, denormal input elements in the first source operand are considered as normal inputs and
do not trigger any fixup nor fault reporting.

Imm8 is used to set the required flags reporting. It supports \#ZE and \#IE fault reporting (see details below).

MXCSR mask bits are ignored and are treated as if all mask bits are set to masked response). If any of the imm8
bits is set and the condition met for fault reporting, MXCSR.IE or MXCSR.ZE might be updated.

This instruction is writemasked, so only those elements with the corresponding bit set in vector mask register k1
are computed and stored into zmm1. Elements in the destination with the corresponding bit clear in k1 retain their
previous values or are set to 0.

### Operation

```java
enum TOKEN_TYPE
{
    QNAN_TOKEN ← 0,
    SNAN_TOKEN ← 1,
    ZERO_VALUE_TOKEN ← 2,
    POS_ONE_VALUE_TOKEN ← 3,
    NEG_INF_TOKEN ← 4,
    POS_INF_TOKEN ← 5,
    NEG_VALUE_TOKEN ← 6,
    POS_VALUE_TOKEN ← 7
}
FIXUPIMM_DP (dest[63:0], src1[63:0],tbl3[63:0], imm8 [7:0]){
    tsrc[63:0] ← ((src1[62:52] = 0) AND (MXCSR.DAZ =1)) ? 0.0 : src1[63:0]
    CASE(tsrc[63:0] of TOKEN_TYPE) {
        QNAN_TOKEN: j ← 0;
        SNAN_TOKEN: j ← 1;
        ZERO_VALUE_TOKEN: j ← 2;
        POS_ONE_VALUE_TOKEN: j ← 3;
        NEG_INF_TOKEN: j ← 4;
        POS_INF_TOKEN: j ← 5;
        NEG_VALUE_TOKEN: j ← 6;
        POS_VALUE_TOKEN: j ← 7;
    }
        ; end source special CASE(tsrc…)
    ; The required response from src3 table is extracted
    token_response[3:0] = tbl3[3+4*j:4*j];
    CASE(token_response[3:0]) {
        0000: dest[63:0] ← dest[63:0];  
                            ; preserve content of DEST
        0001: dest[63:0] ← tsrc[63:0];   
                            ; pass through src1 normal input value, denormal as zero
        0010: dest[63:0] ← QNaN(tsrc[63:0]);
        0011: dest[63:0] ← QNAN_Indefinite;
        0100: dest[63:0] ← -INF;
        0101: dest[63:0] ← +INF;
        0110: dest[63:0] ← tsrc.sign? –INF : +INF;
        0111: dest[63:0] ← -0;
        1000: dest[63:0] ← +0;
        1001: dest[63:0] ← -1;
        1010: dest[63:0] ← +1;
        1011: dest[63:0] ← ½;
        1100: dest[63:0] ← 90.0;
        1101: dest[63:0] ← PI/2;
        1110: dest[63:0] ← MAX_FLOAT;
        1111: dest[63:0] ← -MAX_FLOAT;
    } 
            ; end of token_response CASE
    ; The required fault reporting from imm8 is extracted
    ; TOKENs are mutually exclusive and TOKENs priority defines the order.  
    ; Multiple faults related to a single token can occur simultaneously.
    IF (tsrc[63:0] of TOKEN_TYPE: ZERO_VALUE_TOKEN) AND imm8[0] then set #ZE;
    IF (tsrc[63:0] of TOKEN_TYPE: ZERO_VALUE_TOKEN) AND imm8[1] then set #IE;
    IF (tsrc[63:0] of TOKEN_TYPE: ONE_VALUE_TOKEN) AND imm8[2] then set #ZE;
    IF (tsrc[63:0] of TOKEN_TYPE: ONE_VALUE_TOKEN) AND imm8[3] then set #IE;
    IF (tsrc[63:0] of TOKEN_TYPE: SNAN_TOKEN) AND imm8[4] then set #IE;
    IF (tsrc[63:0] of TOKEN_TYPE: NEG_INF_TOKEN) AND imm8[5] then set #IE;
    IF (tsrc[63:0] of TOKEN_TYPE: NEG_VALUE_TOKEN) AND imm8[6] then set #IE;
    IF (tsrc[63:0] of TOKEN_TYPE: POS_INF_TOKEN) AND imm8[7] then set #IE;
        ; end fault reporting 
    return dest[63:0];
} 
        ; end of FIXUPIMM_DP()
```
#### VFIXUPIMMPD
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF (EVEX.b = 1) AND (SRC2 *is memory*)
                THEN
                    DEST[i+63:i] ← FIXUPIMM_DP(DEST[i+63:i], SRC1[i+63:i], SRC2[63:0], imm8 [7:0])
                ELSE 
                    DEST[i+63:i] ← FIXUPIMM_DP(DEST[i+63:i], SRC1[i+63:i], SRC2[i+63:i], imm8 [7:0])
            FI;
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE  DEST[i+63:i] ← 0
                            ; zeroing-masking
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
Immediate Control Description:
<table>
	<tr>
		<td><b>7 6 5 4 3 2 1 0 + INF  #IE - VE   #IE - INF  #IE SNaN  #IE ONE   #IE ONE   #ZE ZERO  #IE ZERO  #ZE</b></td>
	</tr>
</table>

```
#### Figure 5-9.  VFIXUPIMMPD Immediate Control Description
```java
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VFIXUPIMMPD __m512d _mm512_fixupimm_pd( __m512d a, __m512i tbl, int imm);
VFIXUPIMMPD __m512d _mm512_mask_fixupimm_pd(__m512d s, __mmask8 k, __m512d a, __m512i tbl, int imm);
VFIXUPIMMPD __m512d _mm512_maskz_fixupimm_pd( __mmask8 k, __m512d a, __m512i tbl, int imm);
VFIXUPIMMPD __m512d _mm512_fixupimm_round_pd( __m512d a, __m512i tbl, int imm, int sae);
VFIXUPIMMPD __m512d _mm512_mask_fixupimm_round_pd(__m512d s, __mmask8 k, __m512d a, __m512i tbl, int imm, int sae);
VFIXUPIMMPD __m512d _mm512_maskz_fixupimm_round_pd( __mmask8 k, __m512d a, __m512i tbl, int imm, int sae);
VFIXUPIMMPD __m256d _mm256_fixupimm_pd( __m256d a, __m256i tbl, int imm);
VFIXUPIMMPD __m256d _mm256_mask_fixupimm_pd(__m256d s, __mmask8 k, __m256d a, __m256i tbl, int imm);
VFIXUPIMMPD __m256d _mm256_maskz_fixupimm_pd( __mmask8 k, __m256d a, __m256i tbl, int imm);
VFIXUPIMMPD __m128d _mm_fixupimm_pd( __m128d a, __m128i tbl, int imm);
VFIXUPIMMPD __m128d _mm_mask_fixupimm_pd(__m128d s, __mmask8 k, __m128d a, __m128i tbl, int imm);
VFIXUPIMMPD __m128d _mm_maskz_fixupimm_pd( __mmask8 k, __m128d a, __m128i tbl, int imm);
```
### SIMD Floating-Point Exceptions
Zero, Invalid

### Other Exceptions

See Exceptions Type E2.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
