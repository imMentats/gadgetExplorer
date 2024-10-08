<b>UNPCKHPS</b> — Unpack and Interleave High Packed Single-Precision Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F 15 /r UNPCKHPS xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of xmm1 and xmm2/m128.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.0F.WIG 15 /r VUNPCKHPS xmm1, xmm2, xmm3/m128</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of xmm2 and xmm3/m128.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.0F.WIG 15 /r VUNPCKHPS ymm1, ymm2, ymm3/m256</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of ymm2 and ymm3/m256.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.0F.W0 15 /r VUNPCKHPS xmm1 {k1}{z}, xmm2, xmm3/m128/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of xmm2 and xmm3/m128/m32bcst and write result to xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.0F.W0 15 /r VUNPCKHPS ymm1 {k1}{z}, ymm2, ymm3/m256/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of ymm2 and ymm3/m256/m32bcst and write result to ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.0F.W0 15 /r VUNPCKHPS zmm1 {k1}{z}, zmm2, zmm3/m512/m32bcst</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Unpacks and Interleaves single-precision floating-point values from high quadwords of zmm2 and zmm3/m512/m32bcst and write result to zmm1 subject to writemask k1.</td>
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
Performs an interleaved unpack of the high single-precision floating-point values from the first source operand and
the second source operand.

128-bit Legacy SSE version: The second source can be an XMM register or an 128-bit memory location. The destination
 is not distinct from the first source XMM register and the upper bits (MAXVL-1:128) of the corresponding
ZMM register destination are unmodified. When unpacking from a memory operand, an implementation may fetch
only the appropriate 64 bits; however, alignment to 16-byte boundary and normal segment checking will still be
enforced.

VEX.128 encoded version: The first source operand is a XMM register. The second source operand can be a XMM
register or a 128-bit memory location. The destination operand is a XMM register. The upper bits (MAXVL-1:128) of
the corresponding ZMM register destination are zeroed.

VEX.256 encoded version: The second source operand is an YMM register or an 256-bit memory location. The first
source operand and destination operands are YMM registers.
<table>
	<tr>
		<td colspan=10 rowspan=7><b>SRC1 X7 SRC2 Y7 DEST Y7 X6 Y6 X7 X5 Y5 Y6 X4 Y4 X6 X3 Y3 Y3 X2 Y2 X3 X1 Y1 Y2 X0 Y0 X2</b></td>
	</tr>
	<tr>
		<td>X7</td>
		<td>X6</td>
		<td>X5</td>
		<td>X4</td>
		<td>X3</td>
		<td>X2</td>
		<td>X1</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>Y7</td>
		<td>Y6</td>
		<td>Y5</td>
		<td>Y4</td>
		<td>Y3</td>
		<td>Y2</td>
		<td>Y1</td>
		<td>Y0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>Y7</td>
		<td>X7</td>
		<td>Y6</td>
		<td>X6</td>
		<td>Y3</td>
		<td>X3</td>
		<td>Y2</td>
		<td>X2</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 4-27.  VUNPCKHPS Operation

EVEX.512 encoded version: The first source operand is a ZMM register. The second source operand is a ZMM
register, a 512-bit memory location, or a 512-bit vector broadcasted from a 32-bit memory location. The destination
 operand is a ZMM register, conditionally updated using writemask k1.

EVEX.256 encoded version: The first source operand is a YMM register. The second source operand is a YMM
register, a 256-bit memory location, or a 256-bit vector broadcasted from a 32-bit memory location. The destination
 operand is a YMM register, conditionally updated using writemask k1.

EVEX.128 encoded version: The first source operand is a XMM register. The second source operand is a XMM
register, a 128-bit memory location, or a 128-bit vector broadcasted from a 32-bit memory location. The destination
 operand is a XMM register, conditionally updated using writemask k1.

### Operation


#### VUNPCKHPS (EVEX encoded version when SRC2 is a register)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
IF VL >= 128
    TMP_DEST[31:0] ← SRC1[95:64]
    TMP_DEST[63:32] ← SRC2[95:64]
    TMP_DEST[95:64] ← SRC1[127:96]
    TMP_DEST[127:96] ← SRC2[127:96]
FI;
IF VL >= 256
    TMP_DEST[159:128] ← SRC1[223:192]
    TMP_DEST[191:160] ← SRC2[223:192]
    TMP_DEST[223:192] ← SRC1[255:224]
    TMP_DEST[255:224] ← SRC2[255:224]
FI;
IF VL >= 512
    TMP_DEST[287:256] ← SRC1[351:320]
    TMP_DEST[319:288] ← SRC2[351:320]
    TMP_DEST[351:320] ← SRC1[383:352]
    TMP_DEST[383:352] ← SRC2[383:352]
    TMP_DEST[415:384] ← SRC1[479:448]
    TMP_DEST[447:416] ← SRC2[479:448]
    TMP_DEST[479:448] ← SRC1[511:480]
    TMP_DEST[511:480] ← SRC2[511:480]
FI;
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← TMP_DEST[i+31:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VUNPCKHPS (EVEX encoded version when SRC2 is memory)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ← j * 32
    IF (EVEX.b = 1)
        THEN TMP_SRC2[i+31:i] ← SRC2[31:0]
        ELSE TMP_SRC2[i+31:i] ← SRC2[i+31:i]
    FI;
ENDFOR;
IF VL >= 128
    TMP_DEST[31:0] ← SRC1[95:64]
    TMP_DEST[63:32] ← TMP_SRC2[95:64]
    TMP_DEST[95:64] ← SRC1[127:96]
    TMP_DEST[127:96] ← TMP_SRC2[127:96]
FI;
IF VL >= 256
    TMP_DEST[159:128] ← SRC1[223:192]
    TMP_DEST[191:160] ← TMP_SRC2[223:192]
    TMP_DEST[223:192] ← SRC1[255:224]
    TMP_DEST[255:224] ← TMP_SRC2[255:224]
FI;
IF VL >= 512
    TMP_DEST[287:256] ← SRC1[351:320]
    TMP_DEST[319:288] ← TMP_SRC2[351:320]
    TMP_DEST[351:320] ← SRC1[383:352]
    TMP_DEST[383:352] ← TMP_SRC2[383:352]
    TMP_DEST[415:384] ← SRC1[479:448]
    TMP_DEST[447:416] ← TMP_SRC2[479:448]
    TMP_DEST[479:448] ← SRC1[511:480]
    TMP_DEST[511:480] ← TMP_SRC2[511:480]
FI;
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← TMP_DEST[i+31:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VUNPCKHPS (VEX.256 encoded version)
```java
DEST[31:0] ←SRC1[95:64]
DEST[63:32] ←SRC2[95:64]
DEST[95:64] ←SRC1[127:96]
DEST[127:96] ←SRC2[127:96]
DEST[159:128] ←SRC1[223:192]
DEST[191:160] ←SRC2[223:192]
DEST[223:192] ←SRC1[255:224]
DEST[255:224] ←SRC2[255:224]
DEST[MAXVL-1:256] ← 0
```
#### VUNPCKHPS (VEX.128 encoded version)
```java
DEST[31:0] ←SRC1[95:64]
DEST[63:32] ←SRC2[95:64]
DEST[95:64] ←SRC1[127:96]
DEST[127:96] ←SRC2[127:96]
DEST[MAXVL-1:128] ←0
```
#### UNPCKHPS (128-bit Legacy SSE version)
```java
DEST[31:0] ←SRC1[95:64]
DEST[63:32] ←SRC2[95:64]
DEST[95:64] ←SRC1[127:96]
DEST[127:96] ←SRC2[127:96]
DEST[MAXVL-1:128] (Unmodified)
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VUNPCKHPS __m512 _mm512_unpackhi_ps( __m512 a, __m512 b);
VUNPCKHPS __m512 _mm512_mask_unpackhi_ps(__m512 s, __mmask16 k, __m512 a, __m512 b);
VUNPCKHPS __m512 _mm512_maskz_unpackhi_ps(__mmask16 k, __m512 a, __m512 b);
VUNPCKHPS __m256 _mm256_unpackhi_ps (__m256 a, __m256 b);
VUNPCKHPS __m256 _mm256_mask_unpackhi_ps(__m256 s, __mmask8 k, __m256 a, __m256 b);
VUNPCKHPS __m256 _mm256_maskz_unpackhi_ps(__mmask8 k, __m256 a, __m256 b);
UNPCKHPS __m128 _mm_unpackhi_ps (__m128 a, __m128 b);
VUNPCKHPS __m128 _mm_mask_unpackhi_ps(__m128 s, __mmask8 k, __m128 a, __m128 b);
VUNPCKHPS __m128 _mm_maskz_unpackhi_ps(__mmask8 k, __m128 a, __m128 b);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

Non-EVEX-encoded instructions, see Exceptions Type 4.
EVEX-encoded instructions, see Exceptions Type E4NF.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
