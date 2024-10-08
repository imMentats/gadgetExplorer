<b>VFMADDSUB132PD / VFMADDSUB213PD / VFMADDSUB231PD</b> — Fused Multiply-Alternating
Add/Subtract of Packed Double-Precision Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.DDS.128.66.0F38.W1 96 /r VFMADDSUB132PD xmm1, xmm2, xmm3/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from xmm1 and xmm3/mem, add/subtract elements in xmm2 and put result in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.DDS.128.66.0F38.W1 A6 /r VFMADDSUB213PD xmm1, xmm2, xmm3/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from xmm1 and xmm2, add/subtract elements in xmm3/mem and put result in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.DDS.128.66.0F38.W1 B6 /r VFMADDSUB231PD xmm1, xmm2, xmm3/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from xmm2 and xmm3/mem, add/subtract elements in xmm1 and put result in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.DDS.256.66.0F38.W1 96 /r VFMADDSUB132PD ymm1, ymm2, ymm3/m256</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from ymm1 and ymm3/mem, add/subtract elements in ymm2 and put result in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.DDS.256.66.0F38.W1 A6 /r VFMADDSUB213PD ymm1, ymm2, ymm3/m256</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from ymm1 and ymm2, add/subtract elements in ymm3/mem and put result in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.DDS.256.66.0F38.W1 B6 /r VFMADDSUB231PD ymm1, ymm2, ymm3/m256</td>
		<td>A</td>
		<td>V/V</td>
		<td>FMA</td>
		<td>Multiply packed double-precision floating-point values from ymm2 and ymm3/mem, add/subtract elements in ymm1 and put result in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.128.66.0F38.W1 A6 /r VFMADDSUB213PD xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from xmm1 and xmm2, add/subtract elements in xmm3/m128/m64bcst and put result in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.128.66.0F38.W1 B6 /r VFMADDSUB231PD xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from xmm2 and xmm3/m128/m64bcst, add/subtract elements in xmm1 and put result in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.128.66.0F38.W1 96 /r VFMADDSUB132PD xmm1 {k1}{z}, xmm2, xmm3/m128/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from xmm1 and xmm3/m128/m64bcst, add/subtract elements in xmm2 and put result in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.256.66.0F38.W1 A6 /r VFMADDSUB213PD ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from ymm1 and ymm2, add/subtract elements in ymm3/m256/m64bcst and put result in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.256.66.0F38.W1 B6 /r VFMADDSUB231PD ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from ymm2 and ymm3/m256/m64bcst, add/subtract elements in ymm1 and put result in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.256.66.0F38.W1 96 /r VFMADDSUB132PD ymm1 {k1}{z}, ymm2, ymm3/m256/m64bcst</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Multiply packed double-precision floating-point values from ymm1 and ymm3/m256/m64bcst, add/subtract elements in ymm2 and put result in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.512.66.0F38.W1 A6 /r VFMADDSUB213PD zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst{er}</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Multiply packed double-precision floating-point values from zmm1and zmm2, add/subtract elements in zmm3/m512/m64bcst and put result in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.512.66.0F38.W1 B6 /r VFMADDSUB231PD zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst{er}</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Multiply packed double-precision floating-point values from zmm2 and zmm3/m512/m64bcst, add/subtract elements in zmm1 and put result in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.DDS.512.66.0F38.W1 96 /r VFMADDSUB132PD zmm1 {k1}{z}, zmm2, zmm3/m512/m64bcst{er}</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Multiply packed double-precision floating-point values from zmm1 and zmm3/m512/m64bcst, add/subtract elements in zmm2 and put result in zmm1 subject to writemask k1.</td>
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
		<td>VEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>Full</td>
		<td>ModRM:reg (r, w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
VFMADDSUB132PD: Multiplies the two, four, or eight packed double-precision floating-point values from the first
source operand to the two or four packed double-precision floating-point values in the third source operand. From
the infinite precision intermediate result, adds the odd double-precision floating-point elements and subtracts the
even double-precision floating-point values in the second source operand, performs rounding and stores the
resulting two or four packed double-precision floating-point values to the destination operand (first source
operand).

VFMADDSUB213PD: Multiplies the two, four, or eight packed double-precision floating-point values from the
second source operand to the two or four packed double-precision floating-point values in the first source operand.
From the infinite precision intermediate result, adds the odd double-precision floating-point elements and
subtracts the even double-precision floating-point values in the third source operand, performs rounding and
stores the resulting two or four packed double-precision floating-point values to the destination operand (first
source operand).

VFMADDSUB231PD: Multiplies the two, four, or eight packed double-precision floating-point values from the
second source operand to the two or four packed double-precision floating-point values in the third source
operand. From the infinite precision intermediate result, adds the odd double-precision floating-point elements and
subtracts the even double-precision floating-point values in the first source operand, performs rounding and stores
the resulting two or four packed double-precision floating-point values to the destination operand (first source
operand).

EVEX encoded versions: The destination operand (also first source operand) and the second source operand are
ZMM/YMM/XMM register. The third source operand is a ZMM/YMM/XMM register, a 512/256/128-bit memory location
 or a 512/256/128-bit vector broadcasted from a 64-bit memory location. The destination operand is condition-
ally updated with write mask k1.

VEX.256 encoded version: The destination operand (also first source operand) is a YMM register and encoded in
reg_field. The second source operand is a YMM register and encoded in VEX.vvvv. The third source operand is a
YMM register or a 256-bit memory location and encoded in rm_field.
VEX.128 encoded version: The destination operand (also first source operand) is a XMM register and encoded in
reg_field. The second source operand is a XMM register and encoded in VEX.vvvv. The third source operand is a
XMM register or a 128-bit memory location and encoded in rm_field. The upper 128 bits of the YMM destination
register are zeroed.

Compiler tools may optionally support a complementary mnemonic for each instruction mnemonic listed in the
opcode/instruction column of the summary table. The behavior of the complementary mnemonic in situations
involving NANs are governed by the definition of the instruction mnemonic defined in the opcode/instruction
column.

### Operation

```java
In the operations below, “*” and “-” symbols represent multiplication and subtraction with infinite precision inputs and outputs (no 
rounding).
```
#### VFMADDSUB132PD DEST, SRC2, SRC3
```java
IF (VEX.128) THEN 
    DEST[63:0] ←RoundFPControl_MXCSR(DEST[63:0]*SRC3[63:0] - SRC2[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(DEST[127:64]*SRC3[127:64] + SRC2[127:64])
    DEST[MAXVL-1:128] ←0
ELSEIF (VEX.256)
    DEST[63:0] ←RoundFPControl_MXCSR(DEST[63:0]*SRC3[63:0] - SRC2[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(DEST[127:64]*SRC3[127:64] + SRC2[127:64])
    DEST[191:128] ←RoundFPControl_MXCSR(DEST[191:128]*SRC3[191:128] - SRC2[191:128])
    DEST[255:192] ←RoundFPControl_MXCSR(DEST[255:192]*SRC3[255:192] + SRC2[255:192]
FI
```
#### VFMADDSUB213PD DEST, SRC2, SRC3
```java
IF (VEX.128) THEN 
    DEST[63:0] ←RoundFPControl_MXCSR(SRC2[63:0]*DEST[63:0] - SRC3[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(SRC2[127:64]*DEST[127:64] + SRC3[127:64])
    DEST[MAXVL-1:128] ←0
ELSEIF (VEX.256)
    DEST[63:0] ←RoundFPControl_MXCSR(SRC2[63:0]*DEST[63:0] - SRC3[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(SRC2[127:64]*DEST[127:64] + SRC3[127:64])
    DEST[191:128] ←RoundFPControl_MXCSR(SRC2[191:128]*DEST[191:128] - SRC3[191:128])
    DEST[255:192] ←RoundFPControl_MXCSR(SRC2[255:192]*DEST[255:192] + SRC3[255:192]
FI
```
#### VFMADDSUB231PD DEST, SRC2, SRC3
```java
IF (VEX.128) THEN 
    DEST[63:0] ←RoundFPControl_MXCSR(SRC2[63:0]*SRC3[63:0] - DEST[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(SRC2[127:64]*SRC3[127:64] + DEST[127:64])
    DEST[MAXVL-1:128] ←0
ELSEIF (VEX.256)
    DEST[63:0] ←RoundFPControl_MXCSR(SRC2[63:0]*SRC3[63:0] - DEST[63:0])
    DEST[127:64] ←RoundFPControl_MXCSR(SRC2[127:64]*SRC3[127:64] + DEST[127:64])
    DEST[191:128] ←RoundFPControl_MXCSR(SRC2[191:128]*SRC3[191:128] - DEST[191:128])
    DEST[255:192] ←RoundFPControl_MXCSR(SRC2[255:192]*SRC3[255:192] + DEST[255:192]
FI
```
#### VFMADDSUB132PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a register)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
IF (VL = 512) AND (EVEX.b = 1)
    THEN
        SET_RM(EVEX.RC);
    ELSE 
        SET_RM(MXCSR.RM);
FI;
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN DEST[i+63:i] ← 
                    RoundFPControl(DEST[i+63:i]*SRC3[i+63:i] - SRC2[i+63:i])
                ELSE DEST[i+63:i] ← 
                    RoundFPControl(DEST[i+63:i]*SRC3[i+63:i] + SRC2[i+63:i])
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VFMADDSUB132PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a memory source)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(DEST[i+63:i]*SRC3[63:0] - SRC2[i+63:i])
                        ELSE 
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(DEST[i+63:i]*SRC3[i+63:i] - SRC2[i+63:i])
                FI;
                ELSE 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(DEST[i+63:i]*SRC3[63:0] + SRC2[i+63:i])
                        ELSE 
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(DEST[i+63:i]*SRC3[i+63:i] + SRC2[i+63:i])
                FI;
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VFMADDSUB213PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a register)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
IF (VL = 512) AND (EVEX.b = 1)
    THEN
        SET_RM(EVEX.RC);
    ELSE 
        SET_RM(MXCSR.RM);
FI;
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN DEST[i+63:i] ← 
                    RoundFPControl(SRC2[i+63:i]*DEST[i+63:i] - SRC3[i+63:i])
                ELSE DEST[i+63:i] ← 
                    RoundFPControl(SRC2[i+63:i]*DEST[i+63:i] + SRC3[i+63:i])
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VFMADDSUB213PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a memory source)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(SRC2[i+63:i]*DEST[i+63:i] - SRC3[63:0])
                        ELSE 
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(SRC2[i+63:i]*DEST[i+63:i] - SRC3[i+63:i])
                    FI;
                ELSE 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(SRC2[i+63:i]*DEST[i+63:i] + SRC3[63:0])
                        ELSE 
                            DEST[i+63:i] ← 
                    RoundFPControl_MXCSR(SRC2[i+63:i]*DEST[i+63:i] + SRC3[i+63:i])
                    FI;
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VFMADDSUB231PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a register)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
IF (VL = 512) AND (EVEX.b = 1)
    THEN
        SET_RM(EVEX.RC);
    ELSE 
        SET_RM(MXCSR.RM);
FI;
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN DEST[i+63:i] ← 
                    RoundFPControl(SRC2[i+63:i]*SRC3[i+63:i] - DEST[i+63:i])
                ELSE DEST[i+63:i] ← 
                    RoundFPControl(SRC2[i+63:i]*SRC3[i+63:i] + DEST[i+63:i])
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VFMADDSUB231PD DEST, SRC2, SRC3 (EVEX encoded version, when src3 operand is a memory source)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask*
        THEN 
            IF j *is even*
                THEN 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                        RoundFPControl_MXCSR(SRC2[i+63:i]*SRC3[63:0] - DEST[i+63:i])
                        ELSE 
                            DEST[i+63:i] ← 
                        RoundFPControl_MXCSR(SRC2[i+63:i]*SRC3[i+63:i] - DEST[i+63:i])
                    FI;
                ELSE 
                    IF (EVEX.b = 1) 
                        THEN
                            DEST[i+63:i] ← 
                        RoundFPControl_MXCSR(SRC2[i+63:i]*SRC3[63:0] + DEST[i+63:i])
                        ELSE 
                            DEST[i+63:i] ← 
                        RoundFPControl_MXCSR(SRC2[i+63:i]*SRC3[i+63:i] + DEST[i+63:i])
                    FI;
            FI
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VFMADDSUBxxxPD __m512d _mm512_fmaddsub_pd(__m512d a, __m512d b, __m512d c);
VFMADDSUBxxxPD __m512d _mm512_fmaddsub_round_pd(__m512d a, __m512d b, __m512d c, int r);
VFMADDSUBxxxPD __m512d _mm512_mask_fmaddsub_pd(__m512d a, __mmask8 k, __m512d b, __m512d c);
VFMADDSUBxxxPD __m512d _mm512_maskz_fmaddsub_pd(__mmask8 k, __m512d a, __m512d b, __m512d c);
VFMADDSUBxxxPD __m512d _mm512_mask3_fmaddsub_pd(__m512d a, __m512d b, __m512d c, __mmask8 k);
VFMADDSUBxxxPD __m512d _mm512_mask_fmaddsub_round_pd(__m512d a, __mmask8 k, __m512d b, __m512d c, int r);
VFMADDSUBxxxPD __m512d _mm512_maskz_fmaddsub_round_pd(__mmask8 k, __m512d a, __m512d b, __m512d c, int r);
VFMADDSUBxxxPD __m512d _mm512_mask3_fmaddsub_round_pd(__m512d a, __m512d b, __m512d c, __mmask8 k, int r);
VFMADDSUBxxxPD __m256d _mm256_mask_fmaddsub_pd(__m256d a, __mmask8 k, __m256d b, __m256d c);
VFMADDSUBxxxPD __m256d _mm256_maskz_fmaddsub_pd(__mmask8 k, __m256d a, __m256d b, __m256d c);
VFMADDSUBxxxPD __m256d _mm256_mask3_fmaddsub_pd(__m256d a, __m256d b, __m256d c, __mmask8 k);
VFMADDSUBxxxPD __m128d _mm_mask_fmaddsub_pd(__m128d a, __mmask8 k, __m128d b, __m128d c);
VFMADDSUBxxxPD __m128d _mm_maskz_fmaddsub_pd(__mmask8 k, __m128d a, __m128d b, __m128d c);
VFMADDSUBxxxPD __m128d _mm_mask3_fmaddsub_pd(__m128d a, __m128d b, __m128d c, __mmask8 k);
VFMADDSUBxxxPD __m128d _mm_fmaddsub_pd (__m128d a, __m128d b, __m128d c);
VFMADDSUBxxxPD __m256d _mm256_fmaddsub_pd (__m256d a, __m256d b, __m256d c);
```
### SIMD Floating-Point Exceptions
Overflow, Underflow, Invalid, Precision, Denormal

### Other Exceptions

VEX-encoded instructions, see Exceptions Type 2.
EVEX-encoded instructions, see Exceptions Type E2.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
