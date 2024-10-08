<b>VTESTPD / VTESTPS</b> — Packed Bit Test
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 0E /r VTESTPS xmm1, xmm2/m128</td>
		<td>RM V/V</td>
		<td></td>
		<td>AVX</td>
		<td>Set ZF and CF depending on sign bit AND and ANDN of packed single-precision floating-point sources.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 0E /r VTESTPS ymm1, ymm2/m256</td>
		<td>RM V/V</td>
		<td></td>
		<td>AVX</td>
		<td>Set ZF and CF depending on sign bit AND and ANDN of packed single-precision floating-point sources.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F38.W0 0F /r VTESTPD xmm1, xmm2/m128</td>
		<td>RM V/V</td>
		<td></td>
		<td>AVX</td>
		<td>Set ZF and CF depending on sign bit AND and ANDN of packed double-precision floating-point sources.</td>
	</tr>
	<tr>
		<td>VEX.256.66.0F38.W0 0F /r VTESTPD ymm1, ymm2/m256</td>
		<td>RM V/V</td>
		<td></td>
		<td>AVX</td>
		<td>Set ZF and CF depending on sign bit AND and ANDN of packed double-precision floating-point sources.</td>
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
		<td>RM</td>
		<td>ModRM:reg (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
VTESTPS performs a bitwise comparison of all the sign bits of the packed single-precision elements in the first
source operation and corresponding sign bits in the second source operand. If the AND of the source sign bits with
the dest sign bits produces all zeros, the ZF is set else the ZF is clear. If the AND of the source sign bits with the
inverted dest sign bits produces all zeros the CF is set else the CF is clear. An attempt to execute VTESTPS with
VEX.W=1 will cause \#UD.

VTESTPD performs a bitwise comparison of all the sign bits of the double-precision elements in the first source
operation and corresponding sign bits in the second source operand. If the AND of the source sign bits with the dest
sign bits produces all zeros, the ZF is set else the ZF is clear. If the AND the source sign bits with the inverted dest
sign bits produces all zeros the CF is set else the CF is clear. An attempt to execute VTESTPS with VEX.W=1 will
cause \#UD.

The first source register is specified by the ModR/M reg field.

128-bit version: The first source register is an XMM register. The second source register can be an XMM register or
a 128-bit memory location. The destination register is not modified.

VEX.256 encoded version: The first source register is a YMM register. The second source register can be a YMM
register or a 256-bit memory location. The destination register is not modified.

Note: In VEX-encoded versions, VEX.vvvv is reserved and must be 1111b, otherwise instructions will \#UD.

### Operation


#### VTESTPS (128-bit version)
```java
TEMP[127:0] ← SRC[127:0] AND DEST[127:0]
IF (TEMP[31] = TEMP[63] = TEMP[95] = TEMP[127] = 0)
    THEN ZF ←1;
    ELSE ZF ← 0;
TEMP[127:0] ← SRC[127:0] AND NOT DEST[127:0]
IF (TEMP[31] = TEMP[63] = TEMP[95] = TEMP[127] = 0)
    THEN CF ←1;
    ELSE CF ← 0;
DEST (unmodified)
AF ← OF ← PF ← SF ← 0;
```
#### VTESTPS (VEX.256 encoded version)
```java
TEMP[255:0] ← SRC[255:0] AND DEST[255:0]
IF (TEMP[31] = TEMP[63] = TEMP[95] = TEMP[127]= TEMP[160] =TEMP[191] = TEMP[224] = TEMP[255] = 0)
    THEN ZF ←1;
    ELSE ZF ← 0;
TEMP[255:0] ← SRC[255:0] AND NOT DEST[255:0]
IF (TEMP[31] = TEMP[63] = TEMP[95] = TEMP[127]= TEMP[160] =TEMP[191] = TEMP[224] = TEMP[255] = 0)
    THEN CF ←1;
    ELSE CF ← 0;
DEST (unmodified)
AF ← OF ← PF ← SF ← 0;
```
#### VTESTPD (128-bit version)
```java
TEMP[127:0] ← SRC[127:0] AND DEST[127:0]
IF ( TEMP[63] = TEMP[127] = 0)
    THEN ZF ←1;
    ELSE ZF ← 0;
TEMP[127:0] ← SRC[127:0] AND NOT DEST[127:0]
IF ( TEMP[63] = TEMP[127] = 0)
    THEN CF ←1;
    ELSE CF ← 0;
DEST (unmodified)
AF ← OF ← PF ← SF ← 0;
```
#### VTESTPD (VEX.256 encoded version)
```java
TEMP[255:0] ← SRC[255:0] AND DEST[255:0]
IF (TEMP[63] = TEMP[127] = TEMP[191] = TEMP[255] = 0)
    THEN ZF ←1;
    ELSE ZF ← 0;
TEMP[255:0] ← SRC[255:0] AND NOT DEST[255:0]
IF (TEMP[63] = TEMP[127] = TEMP[191] = TEMP[255] = 0)
    THEN CF ←1;
    ELSE CF ← 0;
DEST (unmodified)
AF ← OF ← PF ← SF ← 0;
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VTESTPS
int _mm256_testz_ps (__m256 s1, __m256 s2);
int _mm256_testc_ps (__m256 s1, __m256 s2);
int _mm256_testnzc_ps (__m256 s1, __m128 s2);
int _mm_testz_ps (__m128 s1, __m128 s2);
int _mm_testc_ps (__m128 s1, __m128 s2);
int _mm_testnzc_ps (__m128 s1, __m128 s2);
VTESTPD
int _mm256_testz_pd (__m256d s1, __m256d s2);
int _mm256_testc_pd (__m256d s1, __m256d s2);
int _mm256_testnzc_pd (__m256d s1, __m256d s2);
int _mm_testz_pd (__m128d s1, __m128d s2);
int _mm_testc_pd (__m128d s1, __m128d s2);
int _mm_testnzc_pd (__m128d s1, __m128d s2);
```
### Flags Affected
The 0F, AF, PF, SF flags are cleared and the ZF, CF flags are set according to the operation.

### SIMD Floating-Point Exceptions

None.

### Other Exceptions

See Exceptions Type 4; additionally
<p>#UD
If VEX.vvvv ≠ 1111B.
If VEX.W = 1 for VTESTPS or VTESTPD.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
