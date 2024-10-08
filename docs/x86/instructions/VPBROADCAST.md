<b>VPBROADCASTB / VPBROADCASTW / VPBROADCASTD / VPBROADCASTQ / VBROADCASTI32x2 / VBROADCASTI128 / VBROADCASTI32x4 / VBROADCASTI64x2 / VBROADCASTI32x8 / VBROADCASTI64x4</b> — Load Integer and Broadcast
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 78 /r VPBROADCASTB xmm1, xmm2/m8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a byte integer in the source operand to sixteen locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 78 /r VPBROADCASTB ymm1, xmm2/m8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a byte integer in the source operand to thirty-two locations in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 78 /r VPBROADCASTB xmm1{k1}{z}, xmm2/m8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Broadcast a byte integer in the source operand to locations in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 78 /r VPBROADCASTB ymm1{k1}{z}, xmm2/m8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Broadcast a byte integer in the source operand to locations in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 78 /r VPBROADCASTB zmm1{k1}{z}, xmm2/m8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Broadcast a byte integer in the source operand to 64 locations in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 79 /r VPBROADCASTW xmm1, xmm2/m16</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a word integer in the source operand to eight locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 79 /r VPBROADCASTW ymm1, xmm2/m16</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a word integer in the source operand to sixteen locations in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 79 /r VPBROADCASTW xmm1{k1}{z}, xmm2/m16</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Broadcast a word integer in the source operand to locations in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 79 /r VPBROADCASTW ymm1{k1}{z}, xmm2/m16</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Broadcast a word integer in the source operand to locations in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 79 /r VPBROADCASTW zmm1{k1}{z}, xmm2/m16</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Broadcast a word integer in the source operand to 32 locations in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 58 /r VPBROADCASTD xmm1, xmm2/m32</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a dword integer in the source operand to four locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 58 /r VPBROADCASTD ymm1, xmm2/m32</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a dword integer in the source operand to eight locations in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 58 /r VPBROADCASTD xmm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast a dword integer in the source operand to locations in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 58 /r VPBROADCASTD ymm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast a dword integer in the source operand to locations in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 58 /r VPBROADCASTD zmm1 {k1}{z}, xmm2/m32</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast a dword integer in the source operand to locations in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 59 /r VPBROADCASTQ xmm1, xmm2/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a qword element in source operand to two locations in xmm1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 59 /r VPBROADCASTQ ymm1, xmm2/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast a qword element in source operand to four locations in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W1 59 /r VPBROADCASTQ xmm1 {k1}{z}, xmm2/m64</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast a qword element in source operand to locations in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W1 59 /r VPBROADCASTQ ymm1 {k1}{z}, xmm2/m64</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast a qword element in source operand to locations in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 59 /r VPBROADCASTQ zmm1 {k1}{z}, xmm2/m64</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast a qword element in source operand to locations in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 59 /r VBROADCASTI32x2 xmm1 {k1}{z}, xmm2/m64</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Broadcast two dword elements in source operand to locations in xmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 59 /r VBROADCASTI32x2 ymm1 {k1}{z}, xmm2/m64</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Broadcast two dword elements in source operand to locations in ymm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 59 /r VBROADCASTI32x2 zmm1 {k1}{z}, xmm2/m64</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast two dword elements in source operand to locations in zmm1 subject to writemask k1.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 5A /r VBROADCASTI128 ymm1, m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Broadcast 128 bits of integer data in mem to low and high 128-bits in ymm1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 5A /r VBROADCASTI32x4 ymm1 {k1}{z}, m128</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Broadcast 128 bits of 4 doubleword integer data in mem to locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 5A /r VBROADCASTI32x4 zmm1 {k1}{z}, m128</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast 128 bits of 4 doubleword integer data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W1 5A /r VBROADCASTI64x2 ymm1 {k1}{z}, m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512DQ</td>
		<td>Broadcast 128 bits of 2 quadword integer data in mem to locations in ymm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 5A /r VBROADCASTI64x2 zmm1 {k1}{z}, m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast 128 bits of 2 quadword integer data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 5B /r VBROADCASTI32x8 zmm1 {k1}{z}, m256</td>
		<td>E</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Broadcast 256 bits of 8 doubleword integer data in mem to locations in zmm1 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 5B /r VBROADCASTI64x4 zmm1 {k1}{z}, m256</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Broadcast 256 bits of 4 quadword integer data in mem to locations in zmm1 using writemask k1.</td>
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
Load integer data from the source operand (the second operand) and broadcast to all elements of the destination
operand (the first operand).

VEX256-encoded VPBROADCASTB/W/D/Q: The source operand is 8-bit, 16-bit, 32-bit, 64-bit memory location or
the low 8-bit, 16-bit 32-bit, 64-bit data in an XMM register. The destination operand is a YMM register.
VPBROADCASTI128 support the source operand of 128-bit memory location. Register source encodings for
VPBROADCASTI128 is reserved and will \#UD. Bits (MAXVL-1:256) of the destination register are zeroed.

EVEX-encoded VPBROADCASTD/Q: The source operand is a 32-bit, 64-bit memory location or the low 32-bit, 64-bit
 data in an XMM register. The destination operand is a ZMM/YMM/XMM register and updated according to the
writemask k1.

VPBROADCASTI32X4 and VPBROADCASTI64X4: The destination operand is a ZMM register and updated according
to the writemask k1. The source operand is 128-bit or 256-bit memory location. Register source encodings for
VBROADCASTI32X4 and VBROADCASTI64X4 are reserved and will \#UD.
Note: VEX.vvvv and EVEX.vvvv are reserved and must be 1111b otherwise instructions will \#UD.

If VPBROADCASTI128 is encoded with VEX.L= 0, an attempt to execute the instruction encoded with VEX.L= 0 will
cause an \#UD exception.
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

Figure 5-16.  VPBROADCASTD Operation (VEX.256 encoded version)
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

Figure 5-17.  VPBROADCASTD Operation (128-bit version)
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

Figure 5-18.  VPBROADCASTQ Operation (256-bit version)
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

Figure 5-19.  VBROADCASTI128 Operation (256-bit version)
<table>
	<tr>
		<td colspan=6 rowspan=5><b>m256 X0 X0 DEST X0</b></td>
	</tr>
	<tr>
		<td colspan=2>X0</td>
		<td colspan=2 rowspan=4></td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td colspan=2>X0</td>
		<td colspan=2>X0</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 5-20.  VBROADCASTI256 Operation (512-bit version)

### Operation


#### VPBROADCASTB (EVEX encoded versions)
```java
(KL, VL) = (16, 128), (32, 256), (64, 512)
FOR j ← 0 TO KL-1
    i ←j * 8
    IF k1[j] OR *no writemask*
        THEN DEST[i+7:i] ← SRC[7:0]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+7:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+7:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VPBROADCASTW (EVEX encoded versions)
```java
(KL, VL) = (8, 128), (16, 256), (32, 512)
FOR j ← 0 TO KL-1
    i ←j * 16
    IF k1[j] OR *no writemask*
        THEN DEST[i+15:i] ← SRC[15:0]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+15:i] remains unchanged*
                ELSE 
                            ; zeroing-masking
                    DEST[i+15:i] ← 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VPBROADCASTD (128 bit version)
```java
temp ← SRC[31:0]
DEST[31:0] ← temp
DEST[63:32] ← temp
DEST[95:64] ← temp
DEST[127:96] ← temp
DEST[MAXVL-1:128] ← 0
```
#### VPBROADCASTD (VEX.256 encoded version)
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
VPBROADCASTD (EVEX encoded versions)
(KL, VL) = (4, 128), (8, 256), (16, 512)
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
#### VPBROADCASTQ (VEX.256 encoded version)
```java
temp ← SRC[63:0]
DEST[63:0] ← temp
DEST[127:64] ← temp
DEST[191:128] ← temp
DEST[255:192] ← temp
DEST[MAXVL-1:256] ← 0
```
#### VPBROADCASTQ (EVEX encoded versions)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
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
VBROADCASTI32x2 (EVEX encoded versions)
(KL, VL) = (4, 128), (8, 256), (16, 512)
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
#### VBROADCASTI128 (VEX.256 encoded version)
```java
temp ← SRC[127:0]
DEST[127:0] ← temp
DEST[255:128] ← temp
DEST[MAXVL-1:256] ← 0
```
#### VBROADCASTI32X4 (EVEX encoded versions)
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
#### VBROADCASTI64X2 (EVEX encoded versions)
```java
(KL, VL) = (8, 256), (16, 512)
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
#### VBROADCASTI32X8 (EVEX.U1.512 encoded version)
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
#### VBROADCASTI64X4 (EVEX.512 encoded version)
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
VPBROADCASTB __m512i _mm512_broadcastb_epi8( __m128i a);
VPBROADCASTB __m512i _mm512_mask_broadcastb_epi8(__m512i s, __mmask64 k, __m128i a);
VPBROADCASTB __m512i _mm512_maskz_broadcastb_epi8( __mmask64 k, __m128i a);
VPBROADCASTB __m256i _mm256_broadcastb_epi8(__m128i a);
VPBROADCASTB __m256i _mm256_mask_broadcastb_epi8(__m256i s, __mmask32 k, __m128i a);
VPBROADCASTB __m256i _mm256_maskz_broadcastb_epi8( __mmask32 k, __m128i a);
VPBROADCASTB __m128i _mm_mask_broadcastb_epi8(__m128i s, __mmask16 k, __m128i a);
VPBROADCASTB __m128i _mm_maskz_broadcastb_epi8( __mmask16 k, __m128i a);
VPBROADCASTB __m128i _mm_broadcastb_epi8(__m128i a);
VPBROADCASTD __m512i _mm512_broadcastd_epi32( __m128i a);
VPBROADCASTD __m512i _mm512_mask_broadcastd_epi32(__m512i s, __mmask16 k, __m128i a);
VPBROADCASTD __m512i _mm512_maskz_broadcastd_epi32( __mmask16 k, __m128i a);
VPBROADCASTD __m256i _mm256_broadcastd_epi32( __m128i a);
VPBROADCASTD __m256i _mm256_mask_broadcastd_epi32(__m256i s, __mmask8 k, __m128i a);
VPBROADCASTD __m256i _mm256_maskz_broadcastd_epi32( __mmask8 k, __m128i a);
VPBROADCASTD __m128i _mm_broadcastd_epi32(__m128i a);
VPBROADCASTD __m128i _mm_mask_broadcastd_epi32(__m128i s, __mmask8 k, __m128i a);
VPBROADCASTD __m128i _mm_maskz_broadcastd_epi32( __mmask8 k, __m128i a);
VPBROADCASTQ __m512i _mm512_broadcastq_epi64( __m128i a);
VPBROADCASTQ __m512i _mm512_mask_broadcastq_epi64(__m512i s, __mmask8 k, __m128i a);
VPBROADCASTQ __m512i _mm512_maskz_broadcastq_epi64( __mmask8 k, __m128i a);
VPBROADCASTQ __m256i _mm256_broadcastq_epi64(__m128i a);
VPBROADCASTQ __m256i _mm256_mask_broadcastq_epi64(__m256i s, __mmask8 k, __m128i a);
VPBROADCASTQ __m256i _mm256_maskz_broadcastq_epi64( __mmask8 k, __m128i a);
VPBROADCASTQ __m128i _mm_broadcastq_epi64(__m128i a);
VPBROADCASTQ __m128i _mm_mask_broadcastq_epi64(__m128i s, __mmask8 k, __m128i a);
VPBROADCASTQ __m128i _mm_maskz_broadcastq_epi64( __mmask8 k, __m128i a);
VPBROADCASTW __m512i _mm512_broadcastw_epi16(__m128i a);
VPBROADCASTW __m512i _mm512_mask_broadcastw_epi16(__m512i s, __mmask32 k, __m128i a);
VPBROADCASTW __m512i _mm512_maskz_broadcastw_epi16( __mmask32 k, __m128i a);
VPBROADCASTW __m256i _mm256_broadcastw_epi16(__m128i a);
VPBROADCASTW __m256i _mm256_mask_broadcastw_epi16(__m256i s, __mmask16 k, __m128i a);
VPBROADCASTW __m256i _mm256_maskz_broadcastw_epi16( __mmask16 k, __m128i a);
VPBROADCASTW __m128i _mm_broadcastw_epi16(__m128i a);
VPBROADCASTW __m128i _mm_mask_broadcastw_epi16(__m128i s, __mmask8 k, __m128i a);
VPBROADCASTW __m128i _mm_maskz_broadcastw_epi16( __mmask8 k, __m128i a);
VBROADCASTI32x2 __m512i _mm512_broadcast_i32x2( __m128i a);
VBROADCASTI32x2 __m512i _mm512_mask_broadcast_i32x2(__m512i s, __mmask16 k, __m128i a);
VBROADCASTI32x2 __m512i _mm512_maskz_broadcast_i32x2( __mmask16 k, __m128i a);
VBROADCASTI32x2 __m256i _mm256_broadcast_i32x2( __m128i a);
VBROADCASTI32x2 __m256i _mm256_mask_broadcast_i32x2(__m256i s, __mmask8 k, __m128i a);
VBROADCASTI32x2 __m256i _mm256_maskz_broadcast_i32x2( __mmask8 k, __m128i a);
VBROADCASTI32x2 __m128i _mm_broadcast_i32x2(__m128i a);
VBROADCASTI32x2 __m128i _mm_mask_broadcast_i32x2(__m128i s, __mmask8 k, __m128i a);
VBROADCASTI32x2 __m128i _mm_maskz_broadcast_i32x2( __mmask8 k, __m128i a);
VBROADCASTI32x4 __m512i _mm512_broadcast_i32x4( __m128i a);
VBROADCASTI32x4 __m512i _mm512_mask_broadcast_i32x4(__m512i s, __mmask16 k, __m128i a);
VBROADCASTI32x4 __m512i _mm512_maskz_broadcast_i32x4( __mmask16 k, __m128i a);
VBROADCASTI32x4 __m256i _mm256_broadcast_i32x4( __m128i a);
VBROADCASTI32x4 __m256i _mm256_mask_broadcast_i32x4(__m256i s, __mmask8 k, __m128i a);
VBROADCASTI32x4 __m256i _mm256_maskz_broadcast_i32x4( __mmask8 k, __m128i a);
VBROADCASTI32x8 __m512i _mm512_broadcast_i32x8( __m256i a);
VBROADCASTI32x8 __m512i _mm512_mask_broadcast_i32x8(__m512i s, __mmask16 k, __m256i a);
VBROADCASTI32x8 __m512i _mm512_maskz_broadcast_i32x8( __mmask16 k, __m256i a);
VBROADCASTI64x2 __m512i _mm512_broadcast_i64x2( __m128i a);
VBROADCASTI64x2 __m512i _mm512_mask_broadcast_i64x2(__m512i s, __mmask8 k, __m128i a);
VBROADCASTI64x2 __m512i _mm512_maskz_broadcast_i64x2( __mmask8 k, __m128i a);
VBROADCASTI64x2 __m256i _mm256_broadcast_i64x2( __m128i a);
VBROADCASTI64x2 __m256i _mm256_mask_broadcast_i64x2(__m256i s, __mmask8 k, __m128i a);
VBROADCASTI64x2 __m256i _mm256_maskz_broadcast_i64x2( __mmask8 k, __m128i a);
VBROADCASTI64x4 __m512i _mm512_broadcast_i64x4( __m256i a);
VBROADCASTI64x4 __m512i _mm512_mask_broadcast_i64x4(__m512i s, __mmask8 k, __m256i a);
VBROADCASTI64x4 __m512i _mm512_maskz_broadcast_i64x4( __mmask8 k, __m256i a);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

EVEX-encoded instructions, see Exceptions Type 6;
EVEX-encoded instructions, syntax with reg/mem operand, see Exceptions Type E6.
<p>#UD
If VEX.L = 0 for VPBROADCASTQ, VPBROADCASTI128.

If EVEX.L’L = 0 for VBROADCASTI32X4/VBROADCASTI64X2.

If EVEX.L’L < 10b for VBROADCASTI32X8/VBROADCASTI64X4.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
