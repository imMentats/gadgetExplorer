<b>PACKSSWB / PACKSSDW / VPACKSSWB / VPACKSSDW</b> — Pack with Signed Saturation
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F 63 /r1 PACKSSWB mm1, mm2/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Converts 4 packed signed word integers from mm1 and from mm2/m64 into 8 packed signed byte integers in mm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>66 0F 63 /r PACKSSWB xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Converts 8 packed signed word integers from xmm1 and from xxm2/m128 into 16 packed signed byte integers in xxm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>NP 0F 6B /r1 PACKSSDW mm1, mm2/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Converts 2 packed signed doubleword integers from mm1 and from mm2/m64 into 4 packed signed word integers in mm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>66 0F 6B /r PACKSSDW xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Converts 4 packed signed doubleword integers from xmm1 and from xxm2/m128 into 8 packed signed word integers in xxm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG 63 /r VPACKSSWB xmm1,xmm2, xmm3/m128</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Converts 8 packed signed word integers from xmm2 and from xmm3/m128 into 16 packed signed byte integers in xmm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG 6B /r VPACKSSDW xmm1,xmm2, xmm3/m128</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Converts 4 packed signed doubleword integers from xmm2 and from xmm3/m128 into 8 packed signed word integers in xmm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG 63 /r VPACKSSWB ymm1, ymm2, ymm3/m256</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Converts 16 packed signed word integers from ymm2 and from ymm3/m256 into 32 packed signed byte integers in ymm1 using signed saturation.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG 6B /r VPACKSSDW ymm1, ymm2, ymm3/m256</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Converts 8 packed signed doubleword integers from ymm2 and from ymm3/m256 into 16 packed signed word integers in ymm1using signed saturation.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.WIG 63 /r VPACKSSWB xmm1 {k1}{z}, xmm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Converts packed signed word integers from xmm2 and from xmm3/m128 into packed signed byte integers in xmm1 using signed saturation under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.WIG 63 /r VPACKSSWB ymm1 {k1}{z}, ymm2, ymm3/m256</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Converts packed signed word integers from ymm2 and from ymm3/m256 into packed signed byte integers in ymm1 using signed saturation under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.WIG 63 /r VPACKSSWB zmm1 {k1}{z}, zmm2, zmm3/m512</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Converts packed signed word integers from zmm2 and from zmm3/m512 into packed signed byte integers in zmm1 using signed saturation under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.W0 6B /r VPACKSSDW xmm1 {k1}{z}, xmm2, xmm3/m128/m32bcst</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Converts packed signed doubleword integers from xmm2 and from xmm3/m128/m32bcst into packed signed word integers in xmm1 using signed saturation under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.W0 6B /r VPACKSSDW ymm1 {k1}{z}, ymm2, ymm3/m256/m32bcst</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Converts packed signed doubleword integers from ymm2 and from ymm3/m256/m32bcst into packed signed word integers in ymm1 using signed saturation under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.W0 6B /r VPACKSSDW zmm1 {k1}{z}, zmm2, zmm3/m512/m32bcst</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX512BW </td>
		<td>Converts packed signed doubleword integers from zmm2 and from zmm3/m512/m32bcst into packed signed word integers in zmm1 using signed saturation under writemask k1.</td>
	</tr>
</table>

1. See note in Section 2.4, “AVX and SSE Instruction Exception Specification” in the Intel® 64 and IA-32 Architectures Software
Developer’s Manual, Volume 2A and Section 22.25.3, “Exception Conditions of Legacy SIMD Instructions Operating on MMX Registers”
in the Intel® 64 and IA-32 Architectures Software Developer’s Manual, Volume 3A.

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
		<td>Full Mem</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>D</td>
		<td>Full</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Converts packed signed word integers into packed signed byte integers (PACKSSWB) or converts packed signed
doubleword integers into packed signed word integers (PACKSSDW), using saturation to handle overflow condi-
tions. See Figure 4-6 for an example of the packing operation.
<table>
	<tr>
		<td colspan=12 rowspan=5><b>64-Bit SRC D C 64-Bit DEST B A D’ B’ C’ A’ 64-Bit DEST</b></td>
	</tr>
	<tr>
		<td>D</td>
		<td colspan=3>C</td>
		<td colspan=2>B</td>
		<td>A</td>
	</tr>
	<tr>
	</tr>
	<tr>
		<td>D’</td>
		<td colspan=2>C’</td>
		<td>B’</td>
		<td colspan=2>A’</td>
	</tr>
	<tr>
	</tr>
</table>

Figure 4-6.  Operation of the PACKSSDW Instruction Using 64-bit Operands

PACKSSWB converts packed signed word integers in the first and second source operands into packed signed byte
integers using signed saturation to handle overflow conditions beyond the range of signed byte integers. If the
signed doubleword value is beyond the range of an unsigned word (i.e. greater than 7FH or less than 80H), the
saturated signed byte integer value of 7FH or 80H, respectively, is stored in the destination. PACKSSDW converts
packed signed doubleword integers in the first and second source operands into packed signed word integers using
signed saturation to handle overflow conditions beyond 7FFFH and 8000H.

EVEX encoded PACKSSWB: The first source operand is a ZMM/YMM/XMM register. The second source operand is a
ZMM/YMM/XMM register or a 512/256/128-bit memory location. The destination operand is a ZMM/YMM/XMM
register, updated conditional under the writemask k1.

EVEX encoded PACKSSDW: The first source operand is a ZMM/YMM/XMM register. The second source operand is a
ZMM/YMM/XMM register, a 512/256/128-bit memory location, or a 512/256/128-bit vector broadcasted from a 32-
bit memory location. The destination operand is a ZMM/YMM/XMM register, updated conditional under the
writemask k1.
VEX.256 encoded version: The first source operand is a YMM register. The second source operand is a YMM register
or a 256-bit memory location. The destination operand is a YMM register. The upper bits (MAXVL-1:256) of the
corresponding ZMM register destination are zeroed.

VEX.128 encoded version: The first source operand is an XMM register. The second source operand is an XMM
register or 128-bit memory location. The destination operand is an XMM register. The upper bits (MAXVL-1:128) of
the corresponding ZMM register destination are zeroed.

128-bit Legacy SSE version: The first source operand is an XMM register. The second operand can be an XMM
register or an 128-bit memory location. The destination is not distinct from the first source XMM register and the
upper bits (MAXVL-1:128) of the corresponding ZMM destination register destination are unmodified.

### Operation


#### PACKSSWB instruction (128-bit Legacy SSE version)
```java
    DEST[7:0] ← SaturateSignedWordToSignedByte (DEST[15:0]);
    DEST[15:8] ← SaturateSignedWordToSignedByte (DEST[31:16]); 
    DEST[23:16] ← SaturateSignedWordToSignedByte (DEST[47:32]);
    DEST[31:24] ← SaturateSignedWordToSignedByte (DEST[63:48]);
    DEST[39:32] ← SaturateSignedWordToSignedByte (DEST[79:64]);
    DEST[47:40] ← SaturateSignedWordToSignedByte (DEST[95:80]);
    DEST[55:48] ← SaturateSignedWordToSignedByte (DEST[111:96]);
    DEST[63:56] ← SaturateSignedWordToSignedByte (DEST[127:112]);
    DEST[71:64] ← SaturateSignedWordToSignedByte (SRC[15:0]);
    DEST[79:72] ← SaturateSignedWordToSignedByte (SRC[31:16]);
    DEST[87:80] ← SaturateSignedWordToSignedByte (SRC[47:32]);
    DEST[95:88] ← SaturateSignedWordToSignedByte (SRC[63:48]);
    DEST[103:96] ← SaturateSignedWordToSignedByte (SRC[79:64]);
    DEST[111:104] ← SaturateSignedWordToSignedByte (SRC[95:80]);
    DEST[119:112] ← SaturateSignedWordToSignedByte (SRC[111:96]);
    DEST[127:120] ← SaturateSignedWordToSignedByte (SRC[127:112]);
    DEST[MAXVL-1:128] (Unmodified)
```
#### PACKSSDW instruction (128-bit Legacy SSE version)
```java
    DEST[15:0] ← SaturateSignedDwordToSignedWord (DEST[31:0]);
    DEST[31:16] ← SaturateSignedDwordToSignedWord (DEST[63:32]);
    DEST[47:32] ← SaturateSignedDwordToSignedWord (DEST[95:64]);
    DEST[63:48] ← SaturateSignedDwordToSignedWord (DEST[127:96]);
    DEST[79:64] ← SaturateSignedDwordToSignedWord (SRC[31:0]);
    DEST[95:80] ← SaturateSignedDwordToSignedWord (SRC[63:32]);
    DEST[111:96] ← SaturateSignedDwordToSignedWord (SRC[95:64]);
    DEST[127:112] ← SaturateSignedDwordToSignedWord (SRC[127:96]);
    DEST[MAXVL-1:128] (Unmodified)
```
#### VPACKSSWB instruction (VEX.128 encoded version)
```java
    DEST[7:0] ← SaturateSignedWordToSignedByte (SRC1[15:0]);
    DEST[15:8] ← SaturateSignedWordToSignedByte (SRC1[31:16]); 
    DEST[23:16] ← SaturateSignedWordToSignedByte (SRC1[47:32]);
    DEST[31:24] ← SaturateSignedWordToSignedByte (SRC1[63:48]);
    DEST[39:32] ← SaturateSignedWordToSignedByte (SRC1[79:64]);
    DEST[47:40] ← SaturateSignedWordToSignedByte (SRC1[95:80]);
    DEST[55:48] ← SaturateSignedWordToSignedByte (SRC1[111:96]);
    DEST[63:56] ← SaturateSignedWordToSignedByte (SRC1[127:112]);
    DEST[71:64] ← SaturateSignedWordToSignedByte (SRC2[15:0]);
    DEST[79:72] ← SaturateSignedWordToSignedByte (SRC2[31:16]);
    DEST[87:80] ← SaturateSignedWordToSignedByte (SRC2[47:32]);
    DEST[95:88] ← SaturateSignedWordToSignedByte (SRC2[63:48]);
    DEST[103:96] ← SaturateSignedWordToSignedByte (SRC2[79:64]);
    DEST[111:104] ← SaturateSignedWordToSignedByte (SRC2[95:80]);
    DEST[119:112] ← SaturateSignedWordToSignedByte (SRC2[111:96]);
    DEST[127:120] ← SaturateSignedWordToSignedByte (SRC2[127:112]);
    DEST[MAXVL-1:128] ← 0;
```
#### VPACKSSDW instruction (VEX.128 encoded version)
```java
    DEST[15:0] ← SaturateSignedDwordToSignedWord (SRC1[31:0]);
    DEST[31:16] ← SaturateSignedDwordToSignedWord (SRC1[63:32]);
    DEST[47:32] ← SaturateSignedDwordToSignedWord (SRC1[95:64]);
    DEST[63:48] ← SaturateSignedDwordToSignedWord (SRC1[127:96]);
    DEST[79:64] ← SaturateSignedDwordToSignedWord (SRC2[31:0]);
    DEST[95:80] ← SaturateSignedDwordToSignedWord (SRC2[63:32]);
    DEST[111:96] ← SaturateSignedDwordToSignedWord (SRC2[95:64]);
    DEST[127:112] ← SaturateSignedDwordToSignedWord (SRC2[127:96]);
    DEST[MAXVL-1:128] ← 0;
```
#### VPACKSSWB instruction (VEX.256 encoded version)
```java
    DEST[7:0] ← SaturateSignedWordToSignedByte (SRC1[15:0]);
    DEST[15:8] ← SaturateSignedWordToSignedByte (SRC1[31:16]); 
    DEST[23:16] ← SaturateSignedWordToSignedByte (SRC1[47:32]);
    DEST[31:24] ← SaturateSignedWordToSignedByte (SRC1[63:48]);
    DEST[39:32] ← SaturateSignedWordToSignedByte (SRC1[79:64]);
    DEST[47:40] ← SaturateSignedWordToSignedByte (SRC1[95:80]);
    DEST[55:48] ← SaturateSignedWordToSignedByte (SRC1[111:96]);
    DEST[63:56] ← SaturateSignedWordToSignedByte (SRC1[127:112]);
    DEST[71:64] ← SaturateSignedWordToSignedByte (SRC2[15:0]);
    DEST[79:72] ← SaturateSignedWordToSignedByte (SRC2[31:16]);
    DEST[87:80] ← SaturateSignedWordToSignedByte (SRC2[47:32]);
    DEST[95:88] ← SaturateSignedWordToSignedByte (SRC2[63:48]);
    DEST[103:96] ← SaturateSignedWordToSignedByte (SRC2[79:64]);
    DEST[111:104] ← SaturateSignedWordToSignedByte (SRC2[95:80]);
    DEST[119:112] ← SaturateSignedWordToSignedByte (SRC2[111:96]);
    DEST[127:120] ← SaturateSignedWordToSignedByte (SRC2[127:112]);
    DEST[135:128] ← SaturateSignedWordToSignedByte (SRC1[143:128]);
    DEST[143:136] ← SaturateSignedWordToSignedByte (SRC1[159:144]); 
    DEST[151:144] ← SaturateSignedWordToSignedByte (SRC1[175:160]);
    DEST[159:152] ← SaturateSignedWordToSignedByte (SRC1[191:176]);
    DEST[167:160] ← SaturateSignedWordToSignedByte (SRC1[207:192]);
    DEST[175:168] ← SaturateSignedWordToSignedByte (SRC1[223:208]);
    DEST[183:176] ← SaturateSignedWordToSignedByte (SRC1[239:224]);
    DEST[191:184] ← SaturateSignedWordToSignedByte (SRC1[255:240]);
    DEST[199:192] ← SaturateSignedWordToSignedByte (SRC2[143:128]);
    DEST[207:200] ← SaturateSignedWordToSignedByte (SRC2[159:144]);
    DEST[215:208] ← SaturateSignedWordToSignedByte (SRC2[175:160]);
    DEST[223:216] ← SaturateSignedWordToSignedByte (SRC2[191:176]);
    DEST[231:224] ← SaturateSignedWordToSignedByte (SRC2[207:192]);
    DEST[239:232] ← SaturateSignedWordToSignedByte (SRC2[223:208]);
    DEST[247:240] ← SaturateSignedWordToSignedByte (SRC2[239:224]);
    DEST[255:248] ← SaturateSignedWordToSignedByte (SRC2[255:240]);
    DEST[MAXVL-1:256] ← 0;
```
#### VPACKSSDW instruction (VEX.256 encoded version)
```java
    DEST[15:0] ← SaturateSignedDwordToSignedWord (SRC1[31:0]);
    DEST[31:16] ← SaturateSignedDwordToSignedWord (SRC1[63:32]);
    DEST[47:32] ← SaturateSignedDwordToSignedWord (SRC1[95:64]);
    DEST[63:48] ← SaturateSignedDwordToSignedWord (SRC1[127:96]);
    DEST[79:64] ← SaturateSignedDwordToSignedWord (SRC2[31:0]);
    DEST[95:80] ← SaturateSignedDwordToSignedWord (SRC2[63:32]);
    DEST[111:96] ← SaturateSignedDwordToSignedWord (SRC2[95:64]);
    DEST[127:112] ← SaturateSignedDwordToSignedWord (SRC2[127:96]);
    DEST[143:128] ← SaturateSignedDwordToSignedWord (SRC1[159:128]);
    DEST[159:144] ← SaturateSignedDwordToSignedWord (SRC1[191:160]);
    DEST[175:160] ← SaturateSignedDwordToSignedWord (SRC1[223:192]);
    DEST[191:176] ← SaturateSignedDwordToSignedWord (SRC1[255:224]);
    DEST[207:192] ← SaturateSignedDwordToSignedWord (SRC2[159:128]);
    DEST[223:208] ← SaturateSignedDwordToSignedWord (SRC2[191:160]);
    DEST[239:224] ← SaturateSignedDwordToSignedWord (SRC2[223:192]);
    DEST[255:240] ← SaturateSignedDwordToSignedWord (SRC2[255:224]);
    DEST[MAXVL-1:256] ← 0;
```
#### VPACKSSWB (EVEX encoded versions)
```java
(KL, VL) = (16, 128), (32, 256), (64, 512)
TMP_DEST[7:0] ← SaturateSignedWordToSignedByte (SRC1[15:0]);
TMP_DEST[15:8] ← SaturateSignedWordToSignedByte (SRC1[31:16]); 
TMP_DEST[23:16] ← SaturateSignedWordToSignedByte (SRC1[47:32]);
TMP_DEST[31:24] ← SaturateSignedWordToSignedByte (SRC1[63:48]);
TMP_DEST[39:32] ← SaturateSignedWordToSignedByte (SRC1[79:64]);
TMP_DEST[47:40] ← SaturateSignedWordToSignedByte (SRC1[95:80]);
TMP_DEST[55:48] ← SaturateSignedWordToSignedByte (SRC1[111:96]);
TMP_DEST[63:56] ← SaturateSignedWordToSignedByte (SRC1[127:112]);
TMP_DEST[71:64] ← SaturateSignedWordToSignedByte (SRC2[15:0]);
TMP_DEST[79:72] ← SaturateSignedWordToSignedByte (SRC2[31:16]);
TMP_DEST[87:80] ← SaturateSignedWordToSignedByte (SRC2[47:32]);
TMP_DEST[95:88] ← SaturateSignedWordToSignedByte (SRC2[63:48]);
TMP_DEST[103:96] ← SaturateSignedWordToSignedByte (SRC2[79:64]);
TMP_DEST[111:104] ← SaturateSignedWordToSignedByte (SRC2[95:80]);
TMP_DEST[119:112] ← SaturateSignedWordToSignedByte (SRC2[111:96]);
TMP_DEST[127:120] ← SaturateSignedWordToSignedByte (SRC2[127:112]);
IF VL >= 256
    TMP_DEST[135:128]← SaturateSignedWordToSignedByte (SRC1[143:128]);
    TMP_DEST[143:136] ← SaturateSignedWordToSignedByte (SRC1[159:144]); 
    TMP_DEST[151:144] ← SaturateSignedWordToSignedByte (SRC1[175:160]);
    TMP_DEST[159:152] ← SaturateSignedWordToSignedByte (SRC1[191:176]);
    TMP_DEST[167:160] ← SaturateSignedWordToSignedByte (SRC1[207:192]);
    TMP_DEST[175:168] ← SaturateSignedWordToSignedByte (SRC1[223:208]);
    TMP_DEST[183:176] ← SaturateSignedWordToSignedByte (SRC1[239:224]);
    TMP_DEST[191:184] ← SaturateSignedWordToSignedByte (SRC1[255:240]);
    TMP_DEST[199:192] ← SaturateSignedWordToSignedByte (SRC2[143:128]);
    TMP_DEST[207:200] ← SaturateSignedWordToSignedByte (SRC2[159:144]);
    TMP_DEST[215:208] ← SaturateSignedWordToSignedByte (SRC2[175:160]);
    TMP_DEST[223:216] ← SaturateSignedWordToSignedByte (SRC2[191:176]);
    TMP_DEST[231:224] ← SaturateSignedWordToSignedByte (SRC2[207:192]);
    TMP_DEST[239:232] ← SaturateSignedWordToSignedByte (SRC2[223:208]);
    TMP_DEST[247:240] ← SaturateSignedWordToSignedByte (SRC2[239:224]);
    TMP_DEST[255:248] ← SaturateSignedWordToSignedByte (SRC2[255:240]);
FI;
IF VL >= 512
    TMP_DEST[263:256] ← SaturateSignedWordToSignedByte (SRC1[271:256]);
    TMP_DEST[271:264] ← SaturateSignedWordToSignedByte (SRC1[287:272]); 
    TMP_DEST[279:272] ← SaturateSignedWordToSignedByte (SRC1[303:288]);
    TMP_DEST[287:280] ← SaturateSignedWordToSignedByte (SRC1[319:304]);
    TMP_DEST[295:288] ← SaturateSignedWordToSignedByte (SRC1[335:320]);
    TMP_DEST[303:296] ← SaturateSignedWordToSignedByte (SRC1[351:336]);
    TMP_DEST[311:304] ← SaturateSignedWordToSignedByte (SRC1[367:352]);
    TMP_DEST[319:312] ← SaturateSignedWordToSignedByte (SRC1[383:368]);
    TMP_DEST[327:320] ← SaturateSignedWordToSignedByte (SRC2[271:256]);
    TMP_DEST[335:328] ← SaturateSignedWordToSignedByte (SRC2[287:272]); 
    TMP_DEST[343:336] ← SaturateSignedWordToSignedByte (SRC2[303:288]);
    TMP_DEST[351:344] ← SaturateSignedWordToSignedByte (SRC2[319:304]);
    TMP_DEST[359:352] ← SaturateSignedWordToSignedByte (SRC2[335:320]);
    TMP_DEST[367:360] ← SaturateSignedWordToSignedByte (SRC2[351:336]);
    TMP_DEST[375:368] ← SaturateSignedWordToSignedByte (SRC2[367:352]);
    TMP_DEST[383:376] ← SaturateSignedWordToSignedByte (SRC2[383:368]);
    TMP_DEST[391:384] ← SaturateSignedWordToSignedByte (SRC1[399:384]);
    TMP_DEST[399:392] ← SaturateSignedWordToSignedByte (SRC1[415:400]);
    TMP_DEST[407:400] ← SaturateSignedWordToSignedByte (SRC1[431:416]);
    TMP_DEST[415:408] ← SaturateSignedWordToSignedByte (SRC1[447:432]);
    TMP_DEST[423:416] ← SaturateSignedWordToSignedByte (SRC1[463:448]);
    TMP_DEST[431:424] ← SaturateSignedWordToSignedByte (SRC1[479:464]);
    TMP_DEST[439:432] ← SaturateSignedWordToSignedByte (SRC1[495:480]);
    TMP_DEST[447:440] ← SaturateSignedWordToSignedByte (SRC1[511:496]);
    TMP_DEST[455:448] ← SaturateSignedWordToSignedByte (SRC2[399:384]);
    TMP_DEST[463:456] ← SaturateSignedWordToSignedByte (SRC2[415:400]);
    TMP_DEST[471:464] ← SaturateSignedWordToSignedByte (SRC2[431:416]);
    TMP_DEST[479:472] ← SaturateSignedWordToSignedByte (SRC2[447:432]);
    TMP_DEST[487:480] ← SaturateSignedWordToSignedByte (SRC2[463:448]);
    TMP_DEST[495:488] ← SaturateSignedWordToSignedByte (SRC2[479:464]);
    TMP_DEST[503:496] ← SaturateSignedWordToSignedByte (SRC2[495:480]);
    TMP_DEST[511:504] ← SaturateSignedWordToSignedByte (SRC2[511:496]);
FI;
FOR j ← 0 TO KL-1
    i ← j * 8
    IF k1[j] OR *no writemask*
        THEN 
            DEST[i+7:i] ← TMP_DEST[i+7:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+7:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+7:i] ← 0
            FI
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0
```
#### VPACKSSDW (EVEX encoded versions)
```java
(KL, VL) = (8, 128), (16, 256), (32, 512)
FOR j ← 0 TO ((KL/2) - 1)
    i ← j * 32
    IF (EVEX.b == 1) AND (SRC2 *is memory*)
        THEN
            TMP_SRC2[i+31:i] ← SRC2[31:0]
        ELSE 
            TMP_SRC2[i+31:i] ← SRC2[i+31:i]
    FI;
ENDFOR;
TMP_DEST[15:0] ← SaturateSignedDwordToSignedWord (SRC1[31:0]);
TMP_DEST[31:16] ← SaturateSignedDwordToSignedWord (SRC1[63:32]);
TMP_DEST[47:32] ← SaturateSignedDwordToSignedWord (SRC1[95:64]);
TMP_DEST[63:48] ← SaturateSignedDwordToSignedWord (SRC1[127:96]);
TMP_DEST[79:64] ← SaturateSignedDwordToSignedWord (TMP_SRC2[31:0]);
TMP_DEST[95:80] ← SaturateSignedDwordToSignedWord (TMP_SRC2[63:32]);
TMP_DEST[111:96] ← SaturateSignedDwordToSignedWord (TMP_SRC2[95:64]);
TMP_DEST[127:112] ← SaturateSignedDwordToSignedWord (TMP_SRC2[127:96]);
IF VL >= 256
    TMP_DEST[143:128] ← SaturateSignedDwordToSignedWord (SRC1[159:128]);
    TMP_DEST[159:144] ← SaturateSignedDwordToSignedWord (SRC1[191:160]);
    TMP_DEST[175:160] ← SaturateSignedDwordToSignedWord (SRC1[223:192]);
    TMP_DEST[191:176] ← SaturateSignedDwordToSignedWord (SRC1[255:224]);
    TMP_DEST[207:192] ← SaturateSignedDwordToSignedWord (TMP_SRC2[159:128]);
    TMP_DEST[223:208] ← SaturateSignedDwordToSignedWord (TMP_SRC2[191:160]);
    TMP_DEST[239:224] ← SaturateSignedDwordToSignedWord (TMP_SRC2[223:192]);
    TMP_DEST[255:240] ← SaturateSignedDwordToSignedWord (TMP_SRC2[255:224]);
FI;
IF VL >= 512
    TMP_DEST[271:256] ← SaturateSignedDwordToSignedWord (SRC1[287:256]);
    TMP_DEST[287:272] ← SaturateSignedDwordToSignedWord (SRC1[319:288]);
    TMP_DEST[303:288] ← SaturateSignedDwordToSignedWord (SRC1[351:320]);
    TMP_DEST[319:304] ← SaturateSignedDwordToSignedWord (SRC1[383:352]);
    TMP_DEST[335:320] ← SaturateSignedDwordToSignedWord (TMP_SRC2[287:256]);
    TMP_DEST[351:336] ← SaturateSignedDwordToSignedWord (TMP_SRC2[319:288]);
    TMP_DEST[367:352] ← SaturateSignedDwordToSignedWord (TMP_SRC2[351:320]);
    TMP_DEST[383:368] ← SaturateSignedDwordToSignedWord (TMP_SRC2[383:352]);
    TMP_DEST[399:384] ← SaturateSignedDwordToSignedWord (SRC1[415:384]);
    TMP_DEST[415:400] ← SaturateSignedDwordToSignedWord (SRC1[447:416]);
    TMP_DEST[431:416] ← SaturateSignedDwordToSignedWord (SRC1[479:448]);
    TMP_DEST[447:432] ← SaturateSignedDwordToSignedWord (SRC1[511:480]);
    TMP_DEST[463:448] ← SaturateSignedDwordToSignedWord (TMP_SRC2[415:384]);
    TMP_DEST[479:464] ← SaturateSignedDwordToSignedWord (TMP_SRC2[447:416]);
    TMP_DEST[495:480] ← SaturateSignedDwordToSignedWord (TMP_SRC2[479:448]);
    TMP_DEST[511:496] ← SaturateSignedDwordToSignedWord (TMP_SRC2[511:480]);
FI;
FOR j ← 0 TO KL-1
    i ← j * 16
    IF k1[j] OR *no writemask*
        THEN DEST[i+15:i] ← TMP_DEST[i+15:i]
        ELSE 
            IF *merging-masking*
                            ; merging-masking
                THEN *DEST[i+15:i] remains unchanged*
                ELSE *zeroing-masking*
                            ; zeroing-masking
                    DEST[i+15:i] ← 0
            FI
    FI;
ENDFOR;
DEST[MAXVL-1:VL] ← 0
```
#### Intel C/C++ Compiler Intrinsic Equivalents
```java
VPACKSSDW__m512i _mm512_packs_epi32(__m512i m1, __m512i m2);
VPACKSSDW__m512i _mm512_mask_packs_epi32(__m512i s, __mmask32 k, __m512i m1, __m512i m2);
VPACKSSDW__m512i _mm512_maskz_packs_epi32( __mmask32 k, __m512i m1, __m512i m2);
VPACKSSDW__m256i _mm256_mask_packs_epi32( __m256i s, __mmask16 k, __m256i m1, __m256i m2);
VPACKSSDW__m256i _mm256_maskz_packs_epi32( __mmask16 k, __m256i m1, __m256i m2);
VPACKSSDW__m128i _mm_mask_packs_epi32( __m128i s, __mmask8 k, __m128i m1, __m128i m2);
VPACKSSDW__m128i _mm_maskz_packs_epi32( __mmask8 k, __m128i m1, __m128i m2);
VPACKSSWB__m512i _mm512_packs_epi16(__m512i m1, __m512i m2);
VPACKSSWB__m512i _mm512_mask_packs_epi16(__m512i s, __mmask32 k, __m512i m1, __m512i m2);
VPACKSSWB__m512i _mm512_maskz_packs_epi16( __mmask32 k, __m512i m1, __m512i m2);
VPACKSSWB__m256i _mm256_mask_packs_epi16( __m256i s, __mmask16 k, __m256i m1, __m256i m2);
VPACKSSWB__m256i _mm256_maskz_packs_epi16( __mmask16 k, __m256i m1, __m256i m2);
VPACKSSWB__m128i _mm_mask_packs_epi16( __m128i s, __mmask8 k, __m128i m1, __m128i m2);
VPACKSSWB__m128i _mm_maskz_packs_epi16( __mmask8 k, __m128i m1, __m128i m2);
PACKSSWB __m128i _mm_packs_epi16(__m128i m1, __m128i m2)
PACKSSDW __m128i _mm_packs_epi32(__m128i m1, __m128i m2)
VPACKSSWB __m256i _mm256_packs_epi16(__m256i m1, __m256i m2)
VPACKSSDW __m256i _mm256_packs_epi32(__m256i m1, __m256i m2)
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

Non-EVEX-encoded instruction, see Exceptions Type 4.

EVEX-encoded VPACKSSDW, see Exceptions Type E4NF.

EVEX-encoded VPACKSSWB, see Exceptions Type E4NF.nb.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
