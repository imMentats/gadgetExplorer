<b>PEXTRB / PEXTRD / PEXTRQ</b> —  Extract Byte/Dword/Qword
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>66 0F 3A 14 /r ib PEXTRB reg/m8, xmm2, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE4_1</td>
		<td>Extract a byte integer value from xmm2 at the source byte offset specified by imm8 into reg or m8. The upper bits of r32 or r64 are zeroed.</td>
	</tr>
	<tr>
		<td>66 0F 3A 16 /r ib PEXTRD r/m32, xmm2, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE4_1</td>
		<td>Extract a dword integer value from xmm2 at the source dword offset specified by imm8 into r/m32.</td>
	</tr>
	<tr>
		<td>66 REX.W 0F 3A 16 /r ib PEXTRQ r/m64, xmm2, imm8</td>
		<td>A</td>
		<td>V/N.E.</td>
		<td>SSE4_1</td>
		<td>Extract a qword integer value from xmm2 at the source qword offset specified by imm8 into r/m64.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F3A.W0 14 /r ib VPEXTRB reg/m8, xmm2, imm8</td>
		<td>A</td>
		<td>V1/V</td>
		<td>AVX</td>
		<td>Extract a byte integer value from xmm2 at the source byte offset specified by imm8 into reg or m8. The upper bits of r64/r32 is filled with zeros.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F3A.W0 16 /r ib VPEXTRD r32/m32, xmm2, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Extract a dword integer value from xmm2 at the source dword offset specified by imm8 into r32/m32.</td>
	</tr>
	<tr>
		<td>VEX.128.66.0F3A.W1 16 /r ib VPEXTRQ r64/m64, xmm2, imm8</td>
		<td>A</td>
		<td>V/I2</td>
		<td>AVX</td>
		<td>Extract a qword integer value from xmm2 at the source dword offset specified by imm8 into r64/m64.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F3A.WIG 14 /r ib VPEXTRB reg/m8, xmm2, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512BW </td>
		<td>Extract a byte integer value from xmm2 at the source byte offset specified by imm8 into reg or m8. The upper bits of r64/r32 is filled with zeros.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F3A.W0 16 /r ib VPEXTRD r32/m32, xmm2, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX512DQ </td>
		<td>Extract a dword integer value from xmm2 at the source dword offset specified by imm8 into r32/m32.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F3A.W1 16 /r ib VPEXTRQ r64/m64, xmm2, imm8</td>
		<td>B</td>
		<td>V/N.E.2</td>
		<td>AVX512DQ </td>
		<td>Extract a qword integer value from xmm2 at the source dword offset specified by imm8 into r64/m64.</td>
	</tr>
</table>

NOTES:
1. In 64-bit mode, VEX.W1 is ignored for VPEXTRB (similar to legacy REX.W=1 prefix in PEXTRB).
2. VEX.W/EVEX.W in non-64 bit is ignored; the instructions behaves as if the W0 version is used.

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
		<td>imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>Tuple1 Scalar</td>
		<td>ModRM:r/m (w)</td>
		<td>ModRM:reg (r)</td>
		<td>imm8</td>
		<td>NA</td>
	</tr>
</table>


### Description
Extract a byte/dword/qword integer value from the source XMM register at a byte/dword/qword offset determined
from imm8[3:0]. The destination can be a register or byte/dword/qword memory location. If the destination is a
register, the upper bits of the register are zero extended.

In legacy non-VEX encoded version and if the destination operand is a register, the default operand size in 64-bit
mode for PEXTRB/PEXTRD is 64 bits, the bits above the least significant byte/dword data are filled with zeros.
PEXTRQ is not encodable in non-64-bit modes and requires REX.W in 64-bit mode.

Note: In VEX.128 encoded versions, VEX.vvvv is reserved and must be 1111b, VEX.L must be 0, otherwise the
instruction will \#UD. In EVEX.128 encoded versions, EVEX.vvvv is reserved and must be 1111b, EVEX.L”L must be
0, otherwise the instruction will \#UD. If the destination operand is a register, the default operand size in 64-bit
mode for VPEXTRB/VPEXTRD is 64 bits, the bits above the least significant byte/word/dword data are filled with
zeros.

### Operation

```java
CASE of
    PEXTRB: SEL ← COUNT[3:0];
            TEMP ← (Src >> SEL*8) AND FFH;
            IF (DEST = Mem8)
                THEN
                Mem8 ← TEMP[7:0];
            ELSE IF (64-Bit Mode and 64-bit register selected)
                THEN
                    R64[7:0] ← TEMP[7:0];
                    r64[63:8] ← ZERO_FILL; };
            ELSE
                    R32[7:0] ← TEMP[7:0];
                    r32[31:8] ← ZERO_FILL; };
            FI;
    PEXTRD:SEL ← COUNT[1:0];
            TEMP ← (Src >> SEL*32) AND FFFF_FFFFH;
            DEST ← TEMP;
    PEXTRQ: SEL ← COUNT[0];
            TEMP ← (Src >> SEL*64);
            DEST ← TEMP;
EASC:
```
#### VPEXTRTD/VPEXTRQ
```java
IF (64-Bit Mode and 64-bit dest operand)
THEN
    Src_Offset ← Imm8[0]
    r64/m64 ←(Src >> Src_Offset * 64)
ELSE
    Src_Offset ← Imm8[1:0]
    r32/m32 ← ((Src >> Src_Offset *32) AND 0FFFFFFFFh);
FI
```
#### VPEXTRB ( dest=m8)
```java
SRC_Offset ← Imm8[3:0]
Mem8 ← (Src >> Src_Offset*8)
```
#### VPEXTRB ( dest=reg)
```java
IF (64-Bit Mode )
THEN
    SRC_Offset ← Imm8[3:0] 
    DEST[7:0] ← ((Src >> Src_Offset*8) AND 0FFh)
    DEST[63:8] ←ZERO_FILL;
ELSE
    SRC_Offset ←. Imm8[3:0];
    DEST[7:0] ← ((Src >> Src_Offset*8) AND 0FFh);
    DEST[31:8] ←ZERO_FILL;
FI
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
PEXTRB:
int _mm_extract_epi8 (__m128i src, const int ndx);
PEXTRD: 
int _mm_extract_epi32 (__m128i src, const int ndx);
PEXTRQ:
__int64 _mm_extract_epi64 (__m128i src, const int ndx);
```
### Flags Affected
None.

### SIMD Floating-Point Exceptions

None.

### Other Exceptions

Non-EVEX-encoded instruction, see Exceptions Type 5;
EVEX-encoded instruction, see Exceptions Type E9NF.
<p>#UD
If VEX.L = 1 or EVEX.L’L > 0.
If VEX.vvvv != 1111B or EVEX.vvvv != 1111B.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
