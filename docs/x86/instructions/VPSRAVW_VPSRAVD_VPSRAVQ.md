<b>VPSRAVW / VPSRAVD / VPSRAVQ</b> — Variable Bit Shift Right Arithmetic
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F38.W0 46 /r VPSRAVD xmm1, xmm2, xmm3/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift doublewords in xmm2 right by amount specified in the corresponding element of xmm3/m128 while shifting in sign bits.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F38.W0 46 /r VPSRAVD ymm1, ymm2, ymm3/m256</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift doublewords in ymm2 right by amount specified in the corresponding element of ymm3/m256 while shifting in sign bits.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F38.W1 11 /r VPSRAVW xmm1 {k1}{z}, xmm2, xmm3/m128</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in xmm2 right by amount specified in the corresponding element of xmm3/m128 while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F38.W1 11 /r VPSRAVW ymm1 {k1}{z}, ymm2, ymm3/m256</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in ymm2 right by amount specified in the corresponding element of ymm3/m256 while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F38.W1 11 /r VPSRAVW zmm1 {k1}{z}, zmm2, zmm3/m512</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Shift words in zmm2 right by amount specified in the corresponding element of zmm3/m512 while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F38.W0 46 /r VPSRAVD xmm1 {k1}{z}, xmm2, xmm3/m128/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in xmm2 right by amount specified in the corresponding element of xmm3/m128/m32bcst while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F38.W0 46 /r VPSRAVD ymm1 {k1}{z}, ymm2, ymm3/m256/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in ymm2 right by amount specified in the corresponding element of ymm3/m256/m32bcst while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F38.W0 46 /r VPSRAVD zmm1 {k1}{z}, zmm2, zmm3/m512/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift doublewords in zmm2 right by amount specified in the corresponding element of zmm3/m512/m32bcst while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F38.W1 46 /r VPSRAVQ xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in xmm2 right by amount specified in the corresponding element of xmm3/m128/m64bcst while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F38.W1 46 /r VPSRAVQ ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in ymm2 right by amount specified in the corresponding element of ymm3/m256/m64bcst while shifting in sign bits using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F38.W1 46 /r VPSRAVQ zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift quadwords in zmm2 right by amount specified in the corresponding element of zmm3/m512/m64bcst while shifting in sign bits using writemask k1.</td>
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
		<td>NA</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>Full Mem</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>C</td>
		<td>Full</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Shifts the bits in the individual data elements (word/doublewords/quadword) in the first source operand (the
second operand) to the right by the number of bits specified in the count value of respective data elements in the
second source operand (the third operand). As the bits in the data elements are shifted right, the empty high-order
bits are set to the MSB (sign extension).

The count values are specified individually in each data element of the second source operand. If the unsigned
integer value specified in the respective data element of the second source operand is greater than 15 (for words),
31 (for doublewords), or 63 (for a quadword), then the destination data element are filled with the corresponding
sign bit of the source element.

The count values are specified individually in each data element of the second source operand. If the unsigned
integer value specified in the respective data element of the second source operand is greater than 16 (for word),
31 (for doublewords), or 63 (for a quadword), then the destination data element are written with 0.

VEX.128 encoded version: The destination and first source operands are XMM registers. The count operand can be
either an XMM register or a 128-bit memory location. Bits (MAXVL-1:128) of the corresponding destination register
are zeroed.

VEX.256 encoded version: The destination and first source operands are YMM registers. The count operand can be
either an YMM register or a 256-bit memory. Bits (MAXVL-1:256) of the corresponding destination register are
zeroed.

EVEX.512/256/128 encoded VPSRAVD/W: The destination and first source operands are ZMM/YMM/XMM registers.
The count operand can be either a ZMM/YMM/XMM register, a 512/256/128-bit memory location or a
512/256/128-bit vector broadcasted from a 32/64-bit memory location. The destination is conditionally updated
with writemask k1.

EVEX.512/256/128 encoded VPSRAVQ: The destination and first source operands are ZMM/YMM/XMM registers.
The count operand can be either a ZMM/YMM/XMM register, a 512/256/128-bit memory location. The destination
is conditionally updated with writemask k1.

### Operation


#### VPSRAVW (EVEX encoded version)
```java
(KL, VL) = (8, 128), (16, 256), (32, 512)
FOR j ← 0 TO KL-1
    i ← j * 16
    IF k1[j] OR *no writemask*
        THEN 
            COUNT ← SRC2[i+3:i]
            IF COUNT < 16
                THEN 
                        DEST[i+15:i] ← SignExtend(SRC1[i+15:i] >> COUNT)
                ELSE 
                    FOR k← 0 TO 15 
                        DEST[i+k] ← SRC1[i+15]
                    ENDFOR;
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+15:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+15:i] ← 0
            FI
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0;
```
#### VPSRAVD (VEX.128 version)
```java
COUNT_0 ← SRC2[31 : 0]
    (* Repeat Each COUNT_i for the 2nd through 4th dwords of SRC2*)
COUNT_3 ← SRC2[100 : 96];
DEST[31:0] ← SignExtend(SRC1[31:0] >> COUNT_0);
    (* Repeat shift operation for 2nd through 4th dwords *)
DEST[127:96] ← SignExtend(SRC1[127:96] >> COUNT_3);
DEST[MAXVL-1:128] ← 0;
```
#### VPSRAVD (VEX.256 version)
```java
COUNT_0 ← SRC2[31 : 0];
    (* Repeat Each COUNT_i for the 2nd through 8th dwords of SRC2*)
COUNT_7 ← SRC2[228 : 224];
DEST[31:0] ← SignExtend(SRC1[31:0] >> COUNT_0);
    (* Repeat shift operation for 2nd through 7th dwords *)
DEST[255:224] ← SignExtend(SRC1[255:224] >> COUNT_7);
DEST[MAXVL-1:256] ← 0;
```
#### VPSRAVD (EVEX encoded version)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] OR *no writemask* THEN
            IF (EVEX.b = 1) AND (SRC2 *is memory*)
                THEN 
                    COUNT ← SRC2[4:0]
                    IF COUNT < 32
                        THEN 
                            DEST[i+31:i] ← SignExtend(SRC1[i+31:i] >> COUNT)
                        ELSE 
                            FOR k← 0 TO 31 
                            DEST[i+k] ← SRC1[i+31]
                            ENDFOR;
                    FI
                ELSE 
                    COUNT ← SRC2[i+4:i]
                    IF COUNT < 32
                        THEN 
                            DEST[i+31:i] ← SignExtend(SRC1[i+31:i] >> COUNT)
                        ELSE 
                            FOR k← 0 TO 31 
                            DEST[i+k] ← SRC1[i+31]
                            ENDFOR;
                    FI
            FI;
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[31:0] remains unchanged*
            ELSE 
                            ; zeroing-masking
                DEST[31:0] ← 0
            FI
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0;
```
#### VPSRAVQ (EVEX encoded version)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask* THEN
            IF (EVEX.b = 1) AND (SRC2 *is memory*)
                THEN 
                    COUNT ← SRC2[5:0]
                    IF COUNT < 64
                        THEN 
                            DEST[i+63:i] ← SignExtend(SRC1[i+63:i] >> COUNT)
                        ELSE 
                            FOR k← 0 TO 63 
                            DEST[i+k] ← SRC1[i+63]
                            ENDFOR;
                    FI
                ELSE 
                    COUNT ← SRC2[i+5:i]
                    IF COUNT < 64
                        THEN 
                            DEST[i+63:i] ← SignExtend(SRC1[i+63:i] >> COUNT)
                        ELSE 
                            FOR k← 0 TO 63 
                            DEST[i+k] ← SRC1[i+63]
                            ENDFOR;
                    FI
            FI;
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[63:0] remains unchanged*
            ELSE 
                            ; zeroing-masking
                DEST[63:0] ← 0
            FI
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0;
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VPSRAVD __m512i _mm512_srav_epi32(__m512i a, __m512i cnt);
VPSRAVD __m512i _mm512_mask_srav_epi32(__m512i s, __mmask16 m, __m512i a, __m512i cnt);
VPSRAVD __m512i _mm512_maskz_srav_epi32(__mmask16 m, __m512i a, __m512i cnt);
VPSRAVD __m256i _mm256_srav_epi32(__m256i a, __m256i cnt);
VPSRAVD __m256i _mm256_mask_srav_epi32(__m256i s, __mmask8 m, __m256i a, __m256i cnt);
VPSRAVD __m256i _mm256_maskz_srav_epi32(__mmask8 m, __m256i a, __m256i cnt);
VPSRAVD __m128i _mm_srav_epi32(__m128i a, __m128i cnt);
VPSRAVD __m128i _mm_mask_srav_epi32(__m128i s, __mmask8 m, __m128i a, __m128i cnt);
VPSRAVD __m128i _mm_maskz_srav_epi32(__mmask8 m, __m128i a, __m128i cnt);
VPSRAVQ __m512i _mm512_srav_epi64(__m512i a, __m512i cnt);
VPSRAVQ __m512i _mm512_mask_srav_epi64(__m512i s, __mmask8 m, __m512i a, __m512i cnt);
VPSRAVQ __m512i _mm512_maskz_srav_epi64( __mmask8 m, __m512i a, __m512i cnt);
VPSRAVQ __m256i _mm256_srav_epi64(__m256i a, __m256i cnt);
VPSRAVQ __m256i _mm256_mask_srav_epi64(__m256i s, __mmask8 m, __m256i a, __m256i cnt);
VPSRAVQ __m256i _mm256_maskz_srav_epi64( __mmask8 m, __m256i a, __m256i cnt);
VPSRAVQ __m128i _mm_srav_epi64(__m128i a, __m128i cnt);
VPSRAVQ __m128i _mm_mask_srav_epi64(__m128i s, __mmask8 m, __m128i a, __m128i cnt);
VPSRAVQ __m128i _mm_maskz_srav_epi64( __mmask8 m, __m128i a, __m128i cnt);
VPSRAVW __m512i _mm512_srav_epi16(__m512i a, __m512i cnt);
VPSRAVW __m512i _mm512_mask_srav_epi16(__m512i s, __mmask32 m, __m512i a, __m512i cnt);
VPSRAVW __m512i _mm512_maskz_srav_epi16(__mmask32 m, __m512i a, __m512i cnt);
VPSRAVW __m256i _mm256_srav_epi16(__m256i a, __m256i cnt);
VPSRAVW __m256i _mm256_mask_srav_epi16(__m256i s, __mmask16 m, __m256i a, __m256i cnt);
VPSRAVW __m256i _mm256_maskz_srav_epi16(__mmask16 m, __m256i a, __m256i cnt);
VPSRAVW __m128i _mm_srav_epi16(__m128i a, __m128i cnt);
VPSRAVW __m128i _mm_mask_srav_epi16(__m128i s, __mmask8 m, __m128i a, __m128i cnt);
VPSRAVW __m128i _mm_maskz_srav_epi32(__mmask8 m, __m128i a, __m128i cnt);
VPSRAVD __m256i _mm256_srav_epi32 (__m256i m, __m256i count)
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

Non-EVEX-encoded instruction, see Exceptions Type 4.
EVEX-encoded instruction, see Exceptions Type E4.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
