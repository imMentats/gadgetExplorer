<b>BLENDVPS</b> —  Variable Blend Packed Single Precision Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32-bit Mode</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>66 0F 38 14 /r BLENDVPS xmm1, xmm2/m128, XMM_ZERO</td>
		<td>RM0</td>
		<td>V/V</td>
		<td>SSE4_1</td>
		<td>Select packed single precision floating-point values from xmm1 and xmm2/m128 from mask specified in XMM0 and store the values into xmm1.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F3A.W0 4A /r /is4 VBLENDVPS xmm1, xmm2, xmm3/m128, xmm4</td>
		<td>RVMR</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Conditionally copy single-precision floating- point values from xmm2 or xmm3/m128 to xmm1, based on mask bits in the specified mask operand, xmm4.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F3A.W0 4A /r /is4 VBLENDVPS ymm1, ymm2, ymm3/m256, ymm4</td>
		<td>RVMR</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Conditionally copy single-precision floating- point values from ymm2 or ymm3/m256 to ymm1, based on mask bits in the specified mask register, ymm4.</td>
	</tr>
</table>


### Instruction Operand Encoding
<table>
	<tr>
		<td><b>Op/En</b></td>
		<td><b>Operand 1</b></td>
		<td><b>Operand 2</b></td>
		<td><b>Operand 3</b></td>
		<td><b>Operand 4</b></td>
	</tr>
	<tr>
		<td>RM0</td>
		<td>ModRM:reg (r, w)</td>
		<td>ModRM:r/m (r)</td>
		<td>implicit XMM0</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>RVMR</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>imm8[7:4]</td>
	</tr>
</table>


### Description
Conditionally copy each dword data element of single-precision floating-point value from the second source
operand and the first source operand depending on mask bits defined in the mask register operand. The mask bits
are the most significant bit in each dword element of the mask register.

Each quadword element of the destination operand is copied from:

 * the corresponding dword element in the second source operand, if a mask bit is “1”; or

 * the corresponding dword element in the first source operand, if a mask bit is “0”

The register assignment of the implicit mask operand for BLENDVPS is defined to be the architectural register
XMM0.

128-bit Legacy SSE version: The first source operand and the destination operand is the same. Bits (MAXVL-1:128)
of the corresponding YMM destination register remain unchanged. The mask register operand is implicitly defined
to be the architectural register XMM0. An attempt to execute BLENDVPS with a VEX prefix will cause \#UD.

VEX.128 encoded version: The first source operand and the destination operand are XMM registers. The second
source operand is an XMM register or 128-bit memory location. The mask operand is the third source register, and
encoded in bits[7:4] of the immediate byte(imm8). The bits[3:0] of imm8 are ignored. In 32-bit mode, imm8[7] is
ignored. The upper bits (MAXVL-1:128) of the corresponding YMM register (destination register) are zeroed.
VEX.W must be 0, otherwise, the instruction will \#UD.

VEX.256 encoded version: The first source operand and destination operand are YMM registers. The second source
operand can be a YMM register or a 256-bit memory location. The mask operand is the third source register, and
encoded in bits[7:4] of the immediate byte(imm8). The bits[3:0] of imm8 are ignored. In 32-bit mode, imm8[7] is
ignored. VEX.W must be 0, otherwise, the instruction will \#UD.

VBLENDVPS permits the mask to be any XMM or YMM register. In contrast, BLENDVPS treats XMM0 implicitly as the
mask and do not support non-destructive destination operation.

### Operation


#### BLENDVPS (128-bit Legacy SSE version)
```java
MASK ← XMM0
IF (MASK[31] = 0) THEN DEST[31:0] ← DEST[31:0]
        ELSE DEST [31:0] ← SRC[31:0] FI
IF (MASK[63] = 0) THEN DEST[63:32] ← DEST[63:32]
        ELSE DEST [63:32] ← SRC[63:32] FI
IF (MASK[95] = 0) THEN DEST[95:64] ← DEST[95:64]
        ELSE DEST [95:64] ← SRC[95:64] FI
IF (MASK[127] = 0) THEN DEST[127:96] ← DEST[127:96]
        ELSE DEST [127:96] ← SRC[127:96] FI
DEST[MAXVL-1:128] (Unmodified)
```
#### VBLENDVPS (VEX.128 encoded version)
```java
MASK ← SRC3
IF (MASK[31] = 0) THEN DEST[31:0] ← SRC1[31:0]
        ELSE DEST [31:0] ← SRC2[31:0] FI
IF (MASK[63] = 0) THEN DEST[63:32] ← SRC1[63:32]
        ELSE DEST [63:32] ← SRC2[63:32] FI
IF (MASK[95] = 0) THEN DEST[95:64] ← SRC1[95:64]
        ELSE DEST [95:64] ← SRC2[95:64] FI
IF (MASK[127] = 0) THEN DEST[127:96] ← SRC1[127:96]
        ELSE DEST [127:96] ← SRC2[127:96] FI
DEST[MAXVL-1:128] ← 0
```
#### VBLENDVPS (VEX.256 encoded version)
```java
MASK ← SRC3
IF (MASK[31] = 0) THEN DEST[31:0] ← SRC1[31:0]
        ELSE DEST [31:0] ← SRC2[31:0] FI
IF (MASK[63] = 0) THEN DEST[63:32] ← SRC1[63:32]
        ELSE DEST [63:32] ← SRC2[63:32] FI
IF (MASK[95] = 0) THEN DEST[95:64] ← SRC1[95:64]
        ELSE DEST [95:64] ← SRC2[95:64] FI
IF (MASK[127] = 0) THEN DEST[127:96] ← SRC1[127:96]
        ELSE DEST [127:96] ← SRC2[127:96] FI
IF (MASK[159] = 0) THEN DEST[159:128] ← SRC1[159:128]
        ELSE DEST [159:128] ← SRC2[159:128] FI
IF (MASK[191] = 0) THEN DEST[191:160] ← SRC1[191:160]
        ELSE DEST [191:160] ← SRC2[191:160] FI
IF (MASK[223] = 0) THEN DEST[223:192] ← SRC1[223:192]
        ELSE DEST [223:192] ← SRC2[223:192] FI
IF (MASK[255] = 0) THEN DEST[255:224] ← SRC1[255:224]
        ELSE DEST [255:224] ← SRC2[255:224] FI
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
BLENDVPS:
__m128 _mm_blendv_ps(__m128 v1, __m128 v2, __m128 v3);
VBLENDVPS:
__m128 _mm_blendv_ps (__m128 a, __m128 b, __m128 mask);
VBLENDVPS:
__m256 _mm256_blendv_ps (__m256 a, __m256 b, __m256 mask);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions
See Exceptions Type 4; additionally
<p>#UD
If VEX.W = 1.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
