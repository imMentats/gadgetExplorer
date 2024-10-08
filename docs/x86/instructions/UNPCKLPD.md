<b>UNPCKLPD</b> — Unpack and Interleave Low Packed Double-Precision Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>66 0F 14 /r UNPCKLPD xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Unpacks and Interleaves double-precision floating-point values from low quadwords of xmm1 and xmm2/m128.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG 14 /r VUNPCKLPD xmm1,xmm2, xmm3/m128</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Unpacks and Interleaves double-precision floating-point values from low quadwords of xmm2 and xmm3/m128.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG 14 /r VUNPCKLPD ymm1,ymm2, ymm3/m256</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Unpacks and Interleaves double-precision floating-point values from low quadwords of ymm2 and ymm3/m256.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.W1 14 /r VUNPCKLPD xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Unpacks and Interleaves double precision floating-point values from low quadwords of xmm2 and xmm3/m128/m64bcst subject to write mask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.W1 14 /r VUNPCKLPD ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Unpacks and Interleaves double precision floating-point values from low quadwords of ymm2 and ymm3/m256/m64bcst subject to write mask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.W1 14 /r VUNPCKLPD zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Unpacks and Interleaves double-precision floating-point values from low quadwords of zmm2 and zmm3/m512/m64bcst subject to write mask k1.</td>
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
		<td>ModRM:reg (r, w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>NA</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv (r)</td>
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
Performs an interleaved unpack of the low double-precision floating-point values from the first source operand and
the second source operand.

128-bit Legacy SSE version: The second source can be an XMM register or an 128-bit memory location. The destination
 is not distinct from the first source XMM register and the upper bits (MAXVL-1:128) of the corresponding
ZMM register destination are unmodified. When unpacking from a memory operand, an implementation may fetch
only the appropriate 64 bits; however, alignment to 16-byte boundary and normal segment checking will still be
enforced.

VEX.128 encoded version: The first source operand is a XMM register. The second source operand can be a XMM
register or a 128-bit memory location. The destination operand is a XMM register. The upper bits (MAXVL-1:128) of
the corresponding ZMM register destination are zeroed.

VEX.256 encoded version: The first source operand is a YMM register. The second source operand can be a YMM
register or a 256-bit memory location. The destination operand is a YMM register.

EVEX.512 encoded version: The first source operand is a ZMM register. The second source operand is a ZMM
register, a 512-bit memory location, or a 512-bit vector broadcasted from a 64-bit memory location. The destination
 operand is a ZMM register, conditionally updated using writemask k1.

EVEX.256 encoded version: The first source operand is a YMM register. The second source operand is a YMM
register, a 256-bit memory location, or a 256-bit vector broadcasted from a 64-bit memory location. The destination
 operand is a YMM register, conditionally updated using writemask k1.

EVEX.128 encoded version: The first source operand is an XMM register. The second source operand is a XMM
register, a 128-bit memory location, or a 128-bit vector broadcasted from a 64-bit memory location. The destination
 operand is a XMM register, conditionally updated using writemask k1.

### Operation


#### VUNPCKLPD (EVEX encoded versions when SRC2 is a register)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
IF VL >= 128
    TMP_DEST[63:0] ← SRC1[63:0]
    TMP_DEST[127:64] ← SRC2[63:0]
FI;
IF VL >= 256
    TMP_DEST[191:128] ← SRC1[191:128]
    TMP_DEST[255:192] ← SRC2[191:128]
FI;
IF VL >= 512
    TMP_DEST[319:256] ← SRC1[319:256]
    TMP_DEST[383:320] ← SRC2[319:256]
    TMP_DEST[447:384] ← SRC1[447:384]
    TMP_DEST[511:448] ← SRC2[447:384]
FI;
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← TMP_DEST[i+63:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VUNPCKLPD (EVEX encoded version when SRC2 is memory)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF (EVEX.b = 1)
        THEN TMP_SRC2[i+63:i] ← SRC2[63:0]
        ELSE TMP_SRC2[i+63:i] ← SRC2[i+63:i]
    FI;
ENDFOR;
IF VL >= 128
    TMP_DEST[63:0] ← SRC1[63:0]
    TMP_DEST[127:64] ← TMP_SRC2[63:0]
FI;
IF VL >= 256
    TMP_DEST[191:128] ← SRC1[191:128]
    TMP_DEST[255:192] ← TMP_SRC2[191:128]
FI;
IF VL >= 512
    TMP_DEST[319:256] ← SRC1[319:256]
    TMP_DEST[383:320] ← TMP_SRC2[319:256]
    TMP_DEST[447:384] ← SRC1[447:384]
    TMP_DEST[511:448] ← TMP_SRC2[447:384]
FI;
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← TMP_DEST[i+63:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VUNPCKLPD (VEX.256 encoded version)
```java
DEST[63:0] ←SRC1[63:0]
DEST[127:64] ←SRC2[63:0]
DEST[191:128] ←SRC1[191:128]
DEST[255:192] ←SRC2[191:128]
DEST[MAXVL-1:256] ← 0
```
#### VUNPCKLPD (VEX.128 encoded version)
```java
DEST[63:0] ←SRC1[63:0]
DEST[127:64] ←SRC2[63:0]
DEST[MAXVL-1:128] ←0
```
#### UNPCKLPD (128-bit Legacy SSE version)
```java
DEST[63:0] ←SRC1[63:0]
DEST[127:64] ←SRC2[63:0]
DEST[MAXVL-1:128] (Unmodified)
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VUNPCKLPD __m512d _mm512_unpacklo_pd( __m512d a, __m512d b);
VUNPCKLPD __m512d _mm512_mask_unpacklo_pd(__m512d s, __mmask8 k, __m512d a, __m512d b);
VUNPCKLPD __m512d _mm512_maskz_unpacklo_pd(__mmask8 k, __m512d a, __m512d b);
VUNPCKLPD __m256d _mm256_unpacklo_pd(__m256d a, __m256d b)
VUNPCKLPD __m256d _mm256_mask_unpacklo_pd(__m256d s, __mmask8 k, __m256d a, __m256d b);
VUNPCKLPD __m256d _mm256_maskz_unpacklo_pd(__mmask8 k, __m256d a, __m256d b);
UNPCKLPD __m128d _mm_unpacklo_pd(__m128d a, __m128d b)
VUNPCKLPD __m128d _mm_mask_unpacklo_pd(__m128d s, __mmask8 k, __m128d a, __m128d b);
VUNPCKLPD __m128d _mm_maskz_unpacklo_pd(__mmask8 k, __m128d a, __m128d b);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

Non-EVEX-encoded instructions, see Exceptions Type 4.
EVEX-encoded instructions, see Exceptions Type E4NF.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
