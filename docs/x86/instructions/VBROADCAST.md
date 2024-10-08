<b>VBROADCASTSS / VBROADCASTSD / VBROADCASTF128 / VBROADCASTF32x2 / VBROADCASTF32x4 / VBROADCASTF64x2 / VBROADCASTF32x8 / VBROADCASTF64x4</b> — Load with Broadcast Floating-Point Data
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 18 /r VBROADCASTSS xmm1, m32</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Broadcast single-precision floating-point element in mem to four locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 18 /r VBROADCASTSS ymm1, m32</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Broadcast single-precision floating-point element in mem to eight locations in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 19 /r VBROADCASTSD ymm1, m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Broadcast double-precision floating-point element in mem to four locations in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 1A /r VBROADCASTF128 ymm1, m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Broadcast 128 bits of floating-point data in mem to low and high 128-bits in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 18/r VBROADCASTSS xmm1, xmm2</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast the low single-precision floating-point element in the source operand to four locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 18 /r VBROADCASTSS ymm1, xmm2</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast low single-precision floating-point element in the source operand to eight locations in ymm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 19 /r VBROADCASTSD ymm1, xmm2</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast low double-precision floating-point element in the source operand to four locations in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W1 19 /r VBROADCASTSD ymm1 {k1}{z}, xmm2/m64</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast low double-precision floating-point element in xmm2/m64 to four locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 19 /r VBROADCASTSD zmm1 {k1}{z}, xmm2/m64</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast low double-precision floating-point element in xmm2/m64 to eight locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 19 /r VBROADCASTF32X2 ymm1 {k1}{z}, xmm2/m64</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Broadcast two single-precision floating-point elements in xmm2/m64 to locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 19 /r VBROADCASTF32X2 zmm1 {k1}{z}, xmm2/m64</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast two single-precision floating-point elements in xmm2/m64 to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 18 /r VBROADCASTSS xmm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast low single-precision floating-point element in xmm2/m32 to all locations in xmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 18 /r VBROADCASTSS ymm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast low single-precision floating-point element in xmm2/m32 to all locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 18 /r VBROADCASTSS zmm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast low single-precision floating-point element in xmm2/m32 to all locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 1A /r VBROADCASTF32X4 ymm1 {k1}{z}, m128</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast 128 bits of 4 single-precision floating-point data in mem to locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 1A /r VBROADCASTF32X4 zmm1 {k1}{z}, m128</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast 128 bits of 4 single-precision floating-point data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W1 1A /r VBROADCASTF64X2 ymm1 {k1}{z}, m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Broadcast 128 bits of 2 double-precision floating-point data in mem to locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 1A /r VBROADCASTF64X2 zmm1 {k1}{z}, m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast 128 bits of 2 double-precision floating-point data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 1B /r VBROADCASTF32X8 zmm1 {k1}{z}, m256</td>
		<td>E</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast 256 bits of 8 single-precision floating-point data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 1B /r VBROADCASTF64X4 zmm1 {k1}{z}, m256</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast 256 bits of 4 double-precision floating-point data in mem to locations in zmm1 using writemask k1.</td>
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
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>Tuple1 Scalar</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>C</td>
		<td>Tuple2</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>D</td>
		<td>Tuple4</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>E</td>
		<td>Tuple8</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
VBROADCASTSD/VBROADCASTSS/VBROADCASTF128 load floating-point values as one tuple from the source
operand (second operand) in memory and broadcast to all elements of the destination operand (first operand).

VEX256-encoded versions: The destination operand is a YMM register. The source operand is either a 32-bit, 64-bit
, or 128-bit memory location. Register source encodings are reserved and will \#UD. Bits (MAXVL-1:256) of the
destination register are zeroed.

EVEX-encoded versions: The destination operand is a ZMM/YMM/XMM register and updated according to the
writemask k1. The source operand is either a 32-bit, 64-bit memory location or the low doubleword/quadword
element of an XMM register.

VBROADCASTF32X2/VBROADCASTF32X4/VBROADCASTF64X2/VBROADCASTF32X8/VBROADCASTF64X4 load
floating-point values as tuples from the source operand (the second operand) in memory or register and broadcast
to all elements of the destination operand (the first operand). The destination operand is a YMM/ZMM register
updated according to the writemask k1. The source operand is either a register or 64-bit/128-bit/256-bit memory
location.

VBROADCASTSD and VBROADCASTF128,F32x4 and F64x2 are only supported as 256-bit and 512-bit wide
versions and up. VBROADCASTSS is supported in 128-bit, 256-bit and 512-bit wide versions. F32x8 and F64x4 are
only supported as 512-bit wide versions.

VBROADCASTF32X2/VBROADCASTF32X4/VBROADCASTF32X8 have 32-bit granularity. VBROADCASTF64X2 and
VBROADCASTF64X4 have 64-bit granularity.

Note: VEX.vvvv and EVEX.vvvv are reserved and must be 1111b otherwise instructions will \#UD.

If VBROADCASTSD or VBROADCASTF128 is encoded with VEX.L= 0, an attempt to execute the instruction encoded
with VEX.L= 0 will cause an \#UD exception.
<table>
	<tr>
		<td colspan=10 rowspan=5><b>m32 X0 DEST X0 X0 X0 X0 X0 X0 X0 X0</b></td>
	</tr>
	<tr>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-1.  VBROADCASTSS Operation (VEX.256 encoded version)
<table>
	<tr>
		<td colspan=10 rowspan=5><b>m32 X0 DEST 0 0 0 0 X0 X0 X0 X0</b></td>
	</tr>
	<tr>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-2.  VBROADCASTSS Operation (VEX.128-bit version)
<table>
	<tr>
		<td colspan=6 rowspan=5><b>m64 DEST X0 X0 X0 X0 X0</b></td>
	</tr>
	<tr>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-3.  VBROADCASTSD Operation (VEX.256-bit version)
<table>
	<tr>
		<td colspan=4 rowspan=5><b>m128 X0 X0 DEST X0</b></td>
	</tr>
	<tr>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>X0</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-4.  VBROADCASTF128 Operation (VEX.256-bit version)
<table>
	<tr>
		<td colspan=4 rowspan=5><b>m256 X0 X0 DEST X0</b></td>
	</tr>
	<tr>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>X0</td>
		<td>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-5.  VBROADCASTF64X4 Operation (512-bit version with writemask all 1s)

### Operation


#### VBROADCASTSS (128 bit version VEX and legacy)
```java
temp ← SRC[31:0]
DEST[31:0] ← temp
DEST[63:32] ← temp
DEST[95:64] ← temp
DEST[127:96] ← temp
DEST[MAXVL-1:128] ← 0
```
#### VBROADCASTSS (VEX.256 encoded version)
```java
temp ← SRC[31:0]
DEST[31:0] ← temp
DEST[63:32] ← temp
DEST[95:64] ← temp
DEST[127:96] ← temp
DEST[159:128] ← temp
DEST[191:160] ← temp
DEST[223:192] ← temp
DEST[255:224] ← temp
DEST[MAXVL-1:256] ← 0
```
#### VBROADCASTSS (EVEX encoded versions)
```java
(KL, VL) (4, 128), (8, 256),= (16, 512)
FOR j ← 0 TO KL-1
    i ←j * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← SRC[31:0]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VBROADCASTSD (VEX.256 encoded version)
```java
temp ← SRC[63:0]
DEST[63:0] ← temp
DEST[127:64] ← temp
DEST[191:128] ← temp
DEST[255:192] ← temp
DEST[MAXVL-1:256] ← 0
```
#### VBROADCASTSD (EVEX encoded versions)
```java
(KL, VL) = (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ←j * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← SRC[63:0]
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
#### VBROADCASTF32x2 (EVEX encoded versions)
```java
(KL, VL) = (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ←j * 32
    n ←(j mod 2) * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← SRC[n+31:n]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VBROADCASTF128 (VEX.256 encoded version)
```java
temp ← SRC[127:0]
DEST[127:0] ← temp
DEST[255:128] ← temp
DEST[MAXVL-1:256] ← 0
```
#### VBROADCASTF32X4 (EVEX encoded versions)
```java
(KL, VL) = (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ←j* 32
    n ←(j modulo 4) * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← SRC[n+31:n]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VBROADCASTF64X2 (EVEX encoded versions)
```java
(KL, VL) = (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    n ←(j modulo 2) * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← SRC[n+63:n]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+63:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+63:i] = 0
            FI
    FI;
ENDFOR;
```
#### VBROADCASTF32X8 (EVEX.U1.512 encoded version)
```java
FOR j ← 0 TO 15
    i ← j * 32
    n ←(j modulo 8) * 32
    IF k1[j] OR *no writemask*
        THEN DEST[i+31:i] ← SRC[n+31:n]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+31:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+31:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VBROADCASTF64X4 (EVEX.512 encoded version)
```java
FOR j ← 0 TO 7
    i ← j * 64
    n ←(j modulo 4) * 64
    IF k1[j] OR *no writemask*
        THEN DEST[i+63:i] ← SRC[n+63:n]
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
VBROADCASTF32x2 __m512 _mm512_broadcast_f32x2( __m128 a);
VBROADCASTF32x2 __m512 _mm512_mask_broadcast_f32x2(__m512 s, __mmask16 k, __m128 a);
VBROADCASTF32x2 __m512 _mm512_maskz_broadcast_f32x2( __mmask16 k, __m128 a);
VBROADCASTF32x2 __m256 _mm256_broadcast_f32x2( __m128 a);
VBROADCASTF32x2 __m256 _mm256_mask_broadcast_f32x2(__m256 s, __mmask8 k, __m128 a);
VBROADCASTF32x2 __m256 _mm256_maskz_broadcast_f32x2( __mmask8 k, __m128 a);
VBROADCASTF32x4 __m512 _mm512_broadcast_f32x4( __m128 a);
VBROADCASTF32x4 __m512 _mm512_mask_broadcast_f32x4(__m512 s, __mmask16 k, __m128 a);
VBROADCASTF32x4 __m512 _mm512_maskz_broadcast_f32x4( __mmask16 k, __m128 a);
VBROADCASTF32x4 __m256 _mm256_broadcast_f32x4( __m128 a);
VBROADCASTF32x4 __m256 _mm256_mask_broadcast_f32x4(__m256 s, __mmask8 k, __m128 a);
VBROADCASTF32x4 __m256 _mm256_maskz_broadcast_f32x4( __mmask8 k, __m128 a);
VBROADCASTF32x8 __m512 _mm512_broadcast_f32x8( __m256 a);
VBROADCASTF32x8 __m512 _mm512_mask_broadcast_f32x8(__m512 s, __mmask16 k, __m256 a);
VBROADCASTF32x8 __m512 _mm512_maskz_broadcast_f32x8( __mmask16 k, __m256 a);
VBROADCASTF64x2 __m512d _mm512_broadcast_f64x2( __m128d a);
VBROADCASTF64x2 __m512d _mm512_mask_broadcast_f64x2(__m512d s, __mmask8 k, __m128d a);
VBROADCASTF64x2 __m512d _mm512_maskz_broadcast_f64x2( __mmask8 k, __m128d a);
VBROADCASTF64x2 __m256d _mm256_broadcast_f64x2( __m128d a);
VBROADCASTF64x2 __m256d _mm256_mask_broadcast_f64x2(__m256d s, __mmask8 k, __m128d a);
VBROADCASTF64x2 __m256d _mm256_maskz_broadcast_f64x2( __mmask8 k, __m128d a);
VBROADCASTF64x4 __m512d _mm512_broadcast_f64x4( __m256d a);
VBROADCASTF64x4 __m512d _mm512_mask_broadcast_f64x4(__m512d s, __mmask8 k, __m256d a);
VBROADCASTF64x4 __m512d _mm512_maskz_broadcast_f64x4( __mmask8 k, __m256d a);
VBROADCASTSD __m512d _mm512_broadcastsd_pd( __m128d a); 
VBROADCASTSD __m512d _mm512_mask_broadcastsd_pd(__m512d s, __mmask8 k, __m128d a); 
VBROADCASTSD __m512d _mm512_maskz_broadcastsd_pd(__mmask8 k, __m128d a); 
VBROADCASTSD __m256d _mm256_broadcastsd_pd(__m128d a);
VBROADCASTSD __m256d _mm256_mask_broadcastsd_pd(__m256d s, __mmask8 k, __m128d a);
VBROADCASTSD __m256d _mm256_maskz_broadcastsd_pd( __mmask8 k, __m128d a);
VBROADCASTSD __m256d _mm256_broadcast_sd(double *a);
VBROADCASTSS __m512 _mm512_broadcastss_ps( __m128 a); 
VBROADCASTSS __m512 _mm512_mask_broadcastss_ps(__m512 s, __mmask16 k, __m128 a); 
VBROADCASTSS __m512 _mm512_maskz_broadcastss_ps( __mmask16 k, __m128 a); 
VBROADCASTSS __m256 _mm256_broadcastss_ps(__m128 a);
VBROADCASTSS __m256 _mm256_mask_broadcastss_ps(__m256 s, __mmask8 k, __m128 a);
VBROADCASTSS __m256 _mm256_maskz_broadcastss_ps( __mmask8 k, __m128 a);
VBROADCASTSS __m128 _mm_broadcastss_ps(__m128 a);
VBROADCASTSS __m128 _mm_mask_broadcastss_ps(__m128 s, __mmask8 k, __m128 a);
VBROADCASTSS __m128 _mm_maskz_broadcastss_ps( __mmask8 k, __m128 a);
VBROADCASTSS __m128 _mm_broadcast_ss(float *a);
VBROADCASTSS __m256 _mm256_broadcast_ss(float *a);
VBROADCASTF128 __m256 _mm256_broadcast_ps(__m128 * a);
VBROADCASTF128 __m256d _mm256_broadcast_pd(__m128d * a);
```
### Exceptions
VEX-encoded instructions, see Exceptions Type 6;
EVEX-encoded instructions, see Exceptions Type E6.
<p>#UD
If VEX.L = 0 for VBROADCASTSD or VBROADCASTF128.

If EVEX.L’L = 0 for VBROADCASTSD/VBROADCASTF32X2/VBROADCASTF32X4/VBROADCASTF64X2.

If EVEX.L’L < 10b for VBROADCASTF32X8/VBROADCASTF64X4.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
