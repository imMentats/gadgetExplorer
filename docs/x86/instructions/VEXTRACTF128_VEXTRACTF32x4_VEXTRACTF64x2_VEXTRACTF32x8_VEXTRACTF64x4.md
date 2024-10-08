<b>VEXTRACTF128 / VEXTRACTF32x4 / VEXTRACTF64x2 / VEXTRACTF32x8 / VEXTRACTF64x4</b> — Extra
ct Packed Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.256.66.0F3A.W0 19 /r ib VEXTRACTF128 xmm1/m128, ymm2, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Extract 128 bits of packed floating-point values from ymm2 and store results in xmm1/m128.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F3A.W0 19 /r ib VEXTRACTF32X4 xmm1/m128 {k1}{z}, ymm2, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Extract 128 bits of packed single-precision floating- point values from ymm2 and store results in xmm1/m128 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F3A.W0 19 /r ib VEXTRACTF32x4 xmm1/m128 {k1}{z}, zmm2, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Extract 128 bits of packed single-precision floating- point values from zmm2 and store results in xmm1/m128 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F3A.W1 19 /r ib VEXTRACTF64X2 xmm1/m128 {k1}{z}, ymm2, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Extract 128 bits of packed double-precision floating-point values from ymm2 and store results in xmm1/m128 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F3A.W1 19 /r ib VEXTRACTF64X2 xmm1/m128 {k1}{z}, zmm2, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Extract 128 bits of packed double-precision floating-point values from zmm2 and store results in xmm1/m128 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F3A.W0 1B /r ib VEXTRACTF32X8 ymm1/m256 {k1}{z}, zmm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Extract 256 bits of packed single-precision floating- point values from zmm2 and store results in ymm1/m256 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F3A.W1 1B /r ib VEXTRACTF64x4 ymm1/m256 {k1}{z}, zmm2, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Extract 256 bits of packed double-precision floating-point values from zmm2 and store results in ymm1/m256 subject to writemask k1.</td>
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
		<td>ModRM:r/m (w)</td>
		<td>ModRM:reg (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>Tuple2</td>
		<td>ModRM:r/m (w)</td>
		<td>ModRM:reg (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>C</td>
		<td>Tuple4</td>
		<td>ModRM:r/m (w)</td>
		<td>ModRM:reg (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>D</td>
		<td>Tuple8</td>
		<td>ModRM:r/m (w)</td>
		<td>ModRM:reg (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
</table>


### Description
VEXTRACTF128/VEXTRACTF32x4 and VEXTRACTF64x2 extract 128-bits of single-precision floating-point values
from the source operand (the second operand) and store to the low 128-bit of the destination operand (the first
operand). The 128-bit data extraction occurs at an 128-bit granular offset specified by imm8[0] (256-bit) or
imm8[1:0] as the multiply factor. The destination may be either a vector register or an 128-bit memory location.

VEXTRACTF32x4: The low 128-bit of the destination operand is updated at 32-bit granularity according to the
writemask.

VEXTRACTF32x8 and VEXTRACTF64x4 extract 256-bits of double-precision floating-point values from the source
operand (second operand) and store to the low 256-bit of the destination operand (the first operand). The 256-bit
data extraction occurs at an 256-bit granular offset specified by imm8[0] (256-bit) or imm8[0] as the multiply
factor The destination may be either a vector register or a 256-bit memory location.

VEXTRACTF64x4: The low 256-bit of the destination operand is updated at 64-bit granularity according to the
writemask.

VEX.vvvv and EVEX.vvvv are reserved and must be 1111b otherwise instructions will \#UD.

The high 6 bits of the immediate are ignored.

If VEXTRACTF128 is encoded with VEX.L= 0, an attempt to execute the instruction encoded with VEX.L= 0 will
cause an \#UD exception.

### Operation


#### VEXTRACTF32x4 (EVEX encoded versions) when destination is a register
```java
VL = 256, 512
IF VL = 256
    CASE (imm8[0]) OF
        0: TMP_DEST[127:0] ← SRC1[127:0]
        1: TMP_DEST[127:0] ← SRC1[255:128]
    ESAC.
FI;
IF VL = 512 
    CASE (imm8[1:0]) OF
        00: TMP_DEST[127:0] ← SRC1[127:0]
        01: TMP_DEST[127:0] ← SRC1[255:128]
        10: TMP_DEST[127:0] ← SRC1[383:256]
        11: TMP_DEST[127:0] ← SRC1[511:384]
    ESAC.
FI;
FOR j ← 0 TO 3
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
DEST[MAXVL-1:128] ← 0
```
#### VEXTRACTF32x4 (EVEX encoded versions) when destination is memory
```java
VL = 256, 512
IF VL = 256
    CASE (imm8[0]) OF
        0: TMP_DEST[127:0] ← SRC1[127:0]
        1: TMP_DEST[127:0] ← SRC1[255:128]
    ESAC.
FI;
IF VL = 512 
    CASE (imm8[1:0]) OF
        00: TMP_DEST[127:0] ← SRC1[127:0]
        01: TMP_DEST[127:0] ← SRC1[255:128]
        10: TMP_DEST[127:0] ← SRC1[383:256]
        11: TMP_DEST[127:0] ← SRC1[511:384]
    ESAC.
FI;
FOR j ← 0 TO 3
    i ← j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← TMP_DEST[i+31:i]
        ELSE *DEST[i+31:i] remains unchanged*
                            ; merging-masking
    FI;
ENDFOR
```
#### VEXTRACTF64x2 (EVEX encoded versions) when destination is a register
```java
VL = 256, 512
IF VL = 256
    CASE (imm8[0]) OF
        0: TMP_DEST[127:0] ← SRC1[127:0]
        1: TMP_DEST[127:0] ← SRC1[255:128]
    ESAC.
FI;
IF VL = 512 
    CASE (imm8[1:0]) OF
        00: TMP_DEST[127:0] ← SRC1[127:0]
        01: TMP_DEST[127:0] ← SRC1[255:128]
        10: TMP_DEST[127:0] ← SRC1[383:256]
        11: TMP_DEST[127:0] ← SRC1[511:384]
    ESAC.
FI;
FOR j ← 0 TO 1
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
DEST[MAXVL-1:128] ← 0
```
#### VEXTRACTF64x2 (EVEX encoded versions) when destination is memory
```java
VL = 256, 512
IF VL = 256
    CASE (imm8[0]) OF
        0: TMP_DEST[127:0] ← SRC1[127:0]
        1: TMP_DEST[127:0] ← SRC1[255:128]
    ESAC.
FI;
IF VL = 512 
    CASE (imm8[1:0]) OF
        00: TMP_DEST[127:0] ← SRC1[127:0]
        01: TMP_DEST[127:0] ← SRC1[255:128]
        10: TMP_DEST[127:0] ← SRC1[383:256]
        11: TMP_DEST[127:0] ← SRC1[511:384]
    ESAC.
FI;
FOR j ← 0 TO 1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← TMP_DEST[i+63:i]
        ELSE *DEST[i+63:i] remains unchanged*
                            ; merging-masking
    FI;
ENDFOR
```
#### VEXTRACTF32x8 (EVEX.U1.512 encoded version) when destination is a register
```java
VL = 512
CASE (imm8[0]) OF
    0: TMP_DEST[255:0] ← SRC1[255:0]
    1: TMP_DEST[255:0] ← SRC1[511:256]
ESAC.
FOR j ← 0 TO 7
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
DEST[MAXVL-1:256] ← 0
```
#### VEXTRACTF32x8 (EVEX.U1.512 encoded version) when destination is memory
```java
CASE (imm8[0]) OF
    0: TMP_DEST[255:0] ← SRC1[255:0]
    1: TMP_DEST[255:0] ← SRC1[511:256]
ESAC.
FOR j ← 0 TO 7
    i ← j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← TMP_DEST[i+31:i]
        ELSE *DEST[i+31:i] remains unchanged*
                            ; merging-masking
    FI;
ENDFOR
```
#### VEXTRACTF64x4 (EVEX.512 encoded version) when destination is a register
```java
VL = 512
CASE (imm8[0]) OF
    0: TMP_DEST[255:0] ← SRC1[255:0]
    1: TMP_DEST[255:0] ← SRC1[511:256]
ESAC.
FOR j ← 0 TO 3
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
DEST[MAXVL-1:256] ← 0
```
#### VEXTRACTF64x4 (EVEX.512 encoded version) when destination is memory
```java
CASE (imm8[0]) OF
    0: TMP_DEST[255:0] ← SRC1[255:0]
    1: TMP_DEST[255:0] ← SRC1[511:256]
ESAC.
FOR j ← 0 TO 3
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← TMP_DEST[i+63:i]
        ELSE 
                ; merging-masking
            *DEST[i+63:i] remains unchanged*
    FI;
ENDFOR
```
#### VEXTRACTF128 (memory destination form)
```java
CASE (imm8[0]) OF
    0: DEST[127:0] ←SRC1[127:0]
    1: DEST[127:0] ←SRC1[255:128]
ESAC.
```
#### VEXTRACTF128 (register destination form)
```java
CASE (imm8[0]) OF
    0: DEST[127:0] ←SRC1[127:0]
    1: DEST[127:0] ←SRC1[255:128]
ESAC.
DEST[MAXVL-1:128] ←0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VEXTRACTF32x4 __m128 _mm512_extractf32x4_ps(__m512 a, const int nidx);
VEXTRACTF32x4 __m128 _mm512_mask_extractf32x4_ps(__m128 s, __mmask8 k, __m512 a, const int nidx);
VEXTRACTF32x4 __m128 _mm512_maskz_extractf32x4_ps( __mmask8 k, __m512 a, const int nidx);
VEXTRACTF32x4 __m128 _mm256_extractf32x4_ps(__m256 a, const int nidx);
VEXTRACTF32x4 __m128 _mm256_mask_extractf32x4_ps(__m128 s, __mmask8 k, __m256 a, const int nidx);
VEXTRACTF32x4 __m128 _mm256_maskz_extractf32x4_ps( __mmask8 k, __m256 a, const int nidx);
VEXTRACTF32x8 __m256 _mm512_extractf32x8_ps(__m512 a, const int nidx);
VEXTRACTF32x8 __m256 _mm512_mask_extractf32x8_ps(__m256 s, __mmask8 k, __m512 a, const int nidx);
VEXTRACTF32x8 __m256 _mm512_maskz_extractf32x8_ps( __mmask8 k, __m512 a, const int nidx);
VEXTRACTF64x2 __m128d _mm512_extractf64x2_pd(__m512d a, const int nidx);
VEXTRACTF64x2 __m128d _mm512_mask_extractf64x2_pd(__m128d s, __mmask8 k, __m512d a, const int nidx);
VEXTRACTF64x2 __m128d _mm512_maskz_extractf64x2_pd( __mmask8 k, __m512d a, const int nidx);
VEXTRACTF64x2 __m128d _mm256_extractf64x2_pd(__m256d a, const int nidx);
VEXTRACTF64x2 __m128d _mm256_mask_extractf64x2_pd(__m128d s, __mmask8 k, __m256d a, const int nidx);
VEXTRACTF64x2 __m128d _mm256_maskz_extractf64x2_pd( __mmask8 k, __m256d a, const int nidx);
VEXTRACTF64x4 __m256d _mm512_extractf64x4_pd( __m512d a, const int nidx);
VEXTRACTF64x4 __m256d _mm512_mask_extractf64x4_pd(__m256d s, __mmask8 k, __m512d a, const int nidx);
VEXTRACTF64x4 __m256d _mm512_maskz_extractf64x4_pd( __mmask8 k, __m512d a, const int nidx);
VEXTRACTF128 __m128 _mm256_extractf128_ps (__m256 a, int offset);
VEXTRACTF128 __m128d _mm256_extractf128_pd (__m256d a, int offset);
VEXTRACTF128 __m128i_mm256_extractf128_si256(__m256i a, int offset);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

VEX-encoded instructions, see Exceptions Type 6;
EVEX-encoded instructions, see Exceptions Type E6NF.
<p>#UD
IF VEX.L = 0.
<p>#UD
If VEX.vvvv != 1111B or EVEX.vvvv != 1111B.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
