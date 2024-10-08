<b>PSLLW / PSLLD / PSLLQ</b> — Shift Packed Data Left Logical
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F F1 /r1 PSLLW mm, mm/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift words in mm left mm/m64 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F F1 /r PSLLW xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift words in xmm1 left by xmm2/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>NP 0F 71 /6 ib PSLLW mm1, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift words in mm left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F 71 /6 ib PSLLW xmm1, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift words in xmm1 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>NP 0F F2 /r1 PSLLD mm, mm/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift doublewords in mm left by mm/m64 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F F2 /r PSLLD xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift doublewords in xmm1 left by xmm2/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>NP 0F 72 /6 ib1 PSLLD mm, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift doublewords in mm left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F 72 /6 ib PSLLD xmm1, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift doublewords in xmm1 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>NP 0F F3 /r1 PSLLQ mm, mm/m64</td>
		<td>A</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift quadword in mm left by mm/m64 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F F3 /r PSLLQ xmm1, xmm2/m128</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift quadwords in xmm1 left by xmm2/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>NP 0F 73 /6 ib1 PSLLQ mm, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>MMX</td>
		<td>Shift quadword in mm left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>66 0F 73 /6 ib PSLLQ xmm1, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>SSE2</td>
		<td>Shift quadwords in xmm1 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG F1 /r VPSLLW xmm1, xmm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift words in xmm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.128.66.0F.WIG 71 /6 ib VPSLLW xmm1, xmm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift words in xmm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG F2 /r VPSLLD xmm1, xmm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift doublewords in xmm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.128.66.0F.WIG 72 /6 ib VPSLLD xmm1, xmm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift doublewords in xmm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.66.0F.WIG F3 /r VPSLLQ xmm1, xmm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift quadwords in xmm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.128.66.0F.WIG 73 /6 ib VPSLLQ xmm1, xmm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Shift quadwords in xmm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG F1 /r VPSLLW ymm1, ymm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift words in ymm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.256.66.0F.WIG 71 /6 ib VPSLLW ymm1, ymm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift words in ymm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG F2 /r VPSLLD ymm1, ymm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift doublewords in ymm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.256.66.0F.WIG 72 /6 ib VPSLLD ymm1, ymm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift doublewords in ymm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.66.0F.WIG F3 /r VPSLLQ ymm1, ymm2, xmm3/m128</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift quadwords in ymm2 left by amount specified in xmm3/m128 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>VEX.NDD.256.66.0F.WIG 73 /6 ib VPSLLQ ymm1, ymm2, imm8</td>
		<td>D</td>
		<td>V/V</td>
		<td>AVX2</td>
		<td>Shift quadwords in ymm2 left by imm8 while shifting in 0s.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.WIG F1 /r VPSLLW xmm1 {k1}{z}, xmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in xmm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.WIG F1 /r VPSLLW ymm1 {k1}{z}, ymm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in ymm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.WIG F1 /r VPSLLW zmm1 {k1}{z}, zmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Shift words in zmm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.128.66.0F.WIG 71 /6 ib VPSLLW xmm1 {k1}{z}, xmm2/m128, imm8</td>
		<td>E</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in xmm2/m128 left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.256.66.0F.WIG 71 /6 ib VPSLLW ymm1 {k1}{z}, ymm2/m256, imm8</td>
		<td>E</td>
		<td>V/V</td>
		<td>AVX512VL AVX512BW</td>
		<td>Shift words in ymm2/m256 left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.512.66.0F.WIG 71 /6 ib VPSLLW zmm1 {k1}{z}, zmm2/m512, imm8</td>
		<td>E</td>
		<td>V/V</td>
		<td>AVX512BW</td>
		<td>Shift words in zmm2/m512 left by imm8 while shifting in 0 using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.W0 F2 /r VPSLLD xmm1 {k1}{z}, xmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in xmm2 left by amount specified in xmm3/m128 while shifting in 0s under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.W0 F2 /r VPSLLD ymm1 {k1}{z}, ymm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in ymm2 left by amount specified in xmm3/m128 while shifting in 0s under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.W0 F2 /r VPSLLD zmm1 {k1}{z}, zmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift doublewords in zmm2 left by amount specified in xmm3/m128 while shifting in 0s under writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.128.66.0F.W0 72 /6 ib VPSLLD xmm1 {k1}{z}, xmm2/m128/m32bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in xmm2/m128/m32bcst left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.256.66.0F.W0 72 /6 ib VPSLLD ymm1 {k1}{z}, ymm2/m256/m32bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift doublewords in ymm2/m256/m32bcst left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.512.66.0F.W0 72 /6 ib VPSLLD zmm1 {k1}{z}, zmm2/m512/m32bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift doublewords in zmm2/m512/m32bcst left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.66.0F.W1 F3 /r VPSLLQ xmm1 {k1}{z}, xmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in xmm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.66.0F.W1 F3 /r VPSLLQ ymm1 {k1}{z}, ymm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in ymm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.66.0F.W1 F3 /r VPSLLQ zmm1 {k1}{z}, zmm2, xmm3/m128</td>
		<td>G</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift quadwords in zmm2 left by amount specified in xmm3/m128 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.128.66.0F.W1 73 /6 ib VPSLLQ xmm1 {k1}{z}, xmm2/m128/m64bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in xmm2/m128/m64bcst left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.256.66.0F.W1 73 /6 ib VPSLLQ ymm1 {k1}{z}, ymm2/m256/m64bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Shift quadwords in ymm2/m256/m64bcst left by imm8 while shifting in 0s using writemask k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDD.512.66.0F.W1 73 /6 ib VPSLLQ zmm1 {k1}{z}, zmm2/m512/m64bcst, imm8</td>
		<td>F</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Shift quadwords in zmm2/m512/m64bcst left by imm8 while shifting in 0s using writemask k1.</td>
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
		<td>ModRM:r/m (r, w)</td>
		<td>imm8</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>C</td>
		<td>NA</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>D</td>
		<td>NA</td>
		<td>VEX.vvvv (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>E</td>
		<td>Full Mem</td>
		<td>EVEX.vvvv (w)</td>
		<td>ModRM:r/m (R)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>F</td>
		<td>Full</td>
		<td>EVEX.vvvv (w)</td>
		<td>ModRM:r/m (R)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>G</td>
		<td>Mem128</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Shifts the bits in the individual data elements (words, doublewords, or quadword) in the destination operand (first
operand) to the left by the number of bits specified in the count operand (second operand). As the bits in the data
elements are shifted left, the empty low-order bits are cleared (set to 0). If the value specified by the count
operand is greater than 15 (for words), 31 (for doublewords), or 63 (for a quadword), then the destination operand
is set to all 0s. Figure 4-17 gives an example of shifting words in a 64-bit operand.
<table>
	<tr>
		<td colspan=14 rowspan=5><b>Pre-Shift DEST Shift Left with Zero Extension Post-Shift DEST X3 X2 X1 X0 X3 << COUNT X2 << COUNT X1 << COUNT X0 << COUNT</b></td>
	</tr>
	<tr>
		<td colspan=3>X3</td>
		<td colspan=3>X2</td>
		<td colspan=3>X1</td>
		<td colspan=3>X0</td>
	</tr>
	<tr>
		<td colspan=3 rowspan=3>X2 << COUNT</td>
		<td colspan=3 rowspan=3>X1 << COUNT</td>
		<td colspan=3 rowspan=3>X0 << COUNT</td>
		<td colspan=2 rowspan=3></td>
	</tr>
	<tr>
	</tr>
	<tr>
	</tr>
</table>

Figure 4-17.  PSLLW, PSLLD, and PSLLQ Instruction Operation Using 64-bit Operand

The (V)PSLLW instruction shifts each of the words in the destination operand to the left by the number of bits spec-
ified in the count operand; the (V)PSLLD instruction shifts each of the doublewords in the destination operand; and
the (V)PSLLQ instruction shifts the quadword (or quadwords) in the destination operand.

In 64-bit mode and not encoded with VEX/EVEX, using a REX prefix in the form of REX.R permits this instruction to
access additional registers (XMM8-XMM15).

Legacy SSE instructions 64-bit operand: The destination operand is an MMX technology register; the count
operand can be either an MMX technology register or an 64-bit memory location.
128-bit Legacy SSE version: The destination and first source operands are XMM registers. Bits (MAXVL-1:128) of
the corresponding YMM destination register remain unchanged. The count operand can be either an XMM register
or a 128-bit memory location or an 8-bit immediate. If the count operand is a memory address, 128 bits are loaded
but the upper 64 bits are ignored.

VEX.128 encoded version: The destination and first source operands are XMM registers. Bits (MAXVL-1:128) of the
destination YMM register are zeroed. The count operand can be either an XMM register or a 128-bit memory location
 or an 8-bit immediate. If the count operand is a memory address, 128 bits are loaded but the upper 64 bits are
ignored.

VEX.256 encoded version: The destination operand is a YMM register. The source operand is a YMM register or a
memory location. The count operand can come either from an XMM register or a memory location or an 8-bit imme-
diate. Bits (MAXVL-1:256) of the corresponding ZMM register are zeroed.

EVEX encoded versions: The destination operand is a ZMM register updated according to the writemask. The count
operand is either an 8-bit immediate (the immediate count version) or an 8-bit value from an XMM register or a
memory location (the variable count version). For the immediate count version, the source operand (the second
operand) can be a ZMM register, a 512-bit memory location or a 512-bit vector broadcasted from a 32/64-bit
memory location. For the variable count version, the first source operand (the second operand) is a ZMM register,
the second source operand (the third operand, 8-bit variable count) can be an XMM register or a memory location.

Note: In VEX/EVEX encoded versions of shifts with an immediate count, vvvv of VEX/EVEX encode the destination
register, and VEX.B/EVEX.B + ModRM.r/m encodes the source register.

Note: For shifts with an immediate count (VEX.128.66.0F 71-73 /6, or EVEX.128.66.0F 71-73 /6),
VEX.vvvv/EVEX.vvvv encodes the destination register.

### Operation


#### PSLLW (with 64-bit operand)
```java
    IF (COUNT > 15)
    THEN 
        DEST[64:0] ← 0000000000000000H;
    ELSE
        DEST[15:0] ← ZeroExtend(DEST[15:0] << COUNT);
        (* Repeat shift operation for 2nd and 3rd words *)
        DEST[63:48] ← ZeroExtend(DEST[63:48] << COUNT);
    FI;
```
#### PSLLD (with 64-bit operand)
```java
    IF (COUNT > 31)
    THEN 
        DEST[64:0] ← 0000000000000000H;
    ELSE
        DEST[31:0] ← ZeroExtend(DEST[31:0] << COUNT);
        DEST[63:32] ← ZeroExtend(DEST[63:32] << COUNT);
    FI;
```
#### PSLLQ (with 64-bit operand)
```java
    IF (COUNT > 63)
    THEN 
        DEST[64:0] ← 0000000000000000H;
    ELSE
        DEST ← ZeroExtend(DEST << COUNT);
    FI;
LOGICAL_LEFT_SHIFT_WORDS(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 15)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
ELSE
    DEST[15:0] ←ZeroExtend(SRC[15:0] << COUNT);
    (* Repeat shift operation for 2nd through 7th words *)
    DEST[127:112] ←ZeroExtend(SRC[127:112] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_DWORDS1(SRC, COUNT_SRC)
COUNT ← COUNT_SRC[63:0];
IF (COUNT > 31)
THEN
    DEST[31:0] ← 0
ELSE
    DEST[31:0] ← ZeroExtend(SRC[31:0] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_DWORDS(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 31)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
ELSE
    DEST[31:0] ←ZeroExtend(SRC[31:0] << COUNT);
    (* Repeat shift operation for 2nd through 3rd words *)
    DEST[127:96] ←ZeroExtend(SRC[127:96] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_QWORDS1(SRC, COUNT_SRC)
COUNT ← COUNT_SRC[63:0];
IF (COUNT > 63)
THEN
    DEST[63:0] ← 0
ELSE
    DEST[63:0] ← ZeroExtend(SRC[63:0] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_QWORDS(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 63)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
ELSE
    DEST[63:0] ←ZeroExtend(SRC[63:0] << COUNT);
    DEST[127:64] ←ZeroExtend(SRC[127:64] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_WORDS_256b(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 15)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
    DEST[255:128] ←00000000000000000000000000000000H
ELSE
    DEST[15:0] ←ZeroExtend(SRC[15:0] << COUNT);
    (* Repeat shift operation for 2nd through 15th words *)
    DEST[255:240] ←ZeroExtend(SRC[255:240] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 31)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
    DEST[255:128] ←00000000000000000000000000000000H
ELSE
    DEST[31:0] ←ZeroExtend(SRC[31:0] << COUNT);
    (* Repeat shift operation for 2nd through 7th words *)
    DEST[255:224] ←ZeroExtend(SRC[255:224] << COUNT);
FI;
LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC, COUNT_SRC)
COUNT ←COUNT_SRC[63:0];
IF (COUNT > 63)
THEN
    DEST[127:0] ←00000000000000000000000000000000H
    DEST[255:128] ←00000000000000000000000000000000H
ELSE
    DEST[63:0] ←ZeroExtend(SRC[63:0] << COUNT);
    DEST[127:64] ←ZeroExtend(SRC[127:64] << COUNT)
    DEST[191:128] ←ZeroExtend(SRC[191:128] << COUNT);
    DEST[255:192] ←ZeroExtend(SRC[255:192] << COUNT);
FI;
```
#### VPSLLW (EVEX versions, xmm/m128)
```java
(KL, VL) = (8, 128), (16, 256), (32, 512)
IF VL = 128
    TMP_DEST[127:0] ← LOGICAL_LEFT_SHIFT_WORDS_128b(SRC1[127:0], SRC2)
FI;
IF VL = 256
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1[255:0], SRC2)
FI;
IF VL = 512
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1[255:0], SRC2)
    TMP_DEST[511:256] ← LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1[511:256], SRC2)
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
                    DEST[i+15:i] = 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VPSLLW (EVEX versions, imm8)
```java
(KL, VL) = (8, 128), (16, 256), (32, 512)
IF VL = 128
    TMP_DEST[127:0] ← LOGICAL_LEFT_SHIFT_WORDS_128b(SRC1[127:0], imm8)
FI;
IF VL = 256
    TMP_DEST[255:0] ← LOGICAL_RIGHT_SHIFT_WORDS_256b(SRC1[255:0], imm8)
FI;
IF VL = 512
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1[255:0], imm8)
    TMP_DEST[511:256] ← LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1[511:256], imm8)
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
                    DEST[i+15:i] = 0
            FI
    FI;
ENDFOR
DEST[MAXVL-1:VL] ← 0
```
#### VPSLLW (ymm, ymm, xmm/m128) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_WORDS_256b(SRC1, SRC2)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLW (ymm, imm8) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_WORD_256b(SRC1, imm8)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLW (xmm, xmm, xmm/m128) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_WORDS(SRC1, SRC2)
DEST[MAXVL-1:128] ←0
```
#### VPSLLW (xmm, imm8) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_WORDS(SRC1, imm8)
DEST[MAXVL-1:128] ←0
```
#### PSLLW (xmm, xmm, xmm/m128)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_WORDS(DEST, SRC)
DEST[MAXVL-1:128] (Unmodified)
```
#### PSLLW (xmm, imm8)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_WORDS(DEST, imm8)
DEST[MAXVL-1:128] (Unmodified)
```
#### VPSLLD (EVEX versions, imm8)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] OR *no writemask* THEN
            IF (EVEX.b = 1) AND (SRC1 *is memory*)
                THEN DEST[i+31:i] ← LOGICAL_LEFT_SHIFT_DWORDS1(SRC1[31:0], imm8)
                ELSE DEST[i+31:i] ← LOGICAL_LEFT_SHIFT_DWORDS1(SRC1[i+31:i], imm8)
            FI;
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
#### VPSLLD (EVEX versions, xmm/m128)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
IF VL = 128
    TMP_DEST[127:0] ← LOGICAL_LEFT_SHIFT_DWORDS_128b(SRC1[127:0], SRC2)
FI;
IF VL = 256
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC1[255:0], SRC2)
FI;
IF VL = 512
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC1[255:0], SRC2)
    TMP_DEST[511:256] ← LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC1[511:256], SRC2)
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
#### VPSLLD (ymm, ymm, xmm/m128) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC1, SRC2)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLD (ymm, imm8) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_DWORDS_256b(SRC1, imm8)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLD (xmm, xmm, xmm/m128) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_DWORDS(SRC1, SRC2)
DEST[MAXVL-1:128] ←0
```
#### VPSLLD (xmm, imm8) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_DWORDS(SRC1, imm8)
DEST[MAXVL-1:128] ←0
```
#### PSLLD (xmm, xmm, xmm/m128)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_DWORDS(DEST, SRC)
DEST[MAXVL-1:128] (Unmodified)
```
#### PSLLD (xmm, imm8)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_DWORDS(DEST, imm8)
DEST[MAXVL-1:128] (Unmodified)
```
#### VPSLLQ (EVEX versions, imm8)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    IF k1[j] OR *no writemask* THEN
            IF (EVEX.b = 1) AND (SRC1 *is memory*)
                THEN DEST[i+63:i] ← LOGICAL_LEFT_SHIFT_QWORDS1(SRC1[63:0], imm8)
                ELSE DEST[i+63:i] ← LOGICAL_LEFT_SHIFT_QWORDS1(SRC1[i+63:i], imm8)
            FI;
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
```
#### VPSLLQ (EVEX versions, xmm/m128)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
IF VL = 128
    TMP_DEST[127:0] ← LOGICAL_LEFT_SHIFT_QWORDS_128b(SRC1[127:0], SRC2)
FI;
IF VL = 256
    TMP_DEST[255:0] ← LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC1[255:0], SRC2)
FI;
IF VL = 512
    TMP_DEST[255:0] ←LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC1[255:0], SRC2)
    TMP_DEST[511:256] ←LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC1[511:256], SRC2)
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
DEST[MAXVL-1:VL] ←0
```
#### VPSLLQ (ymm, ymm, xmm/m128) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC1, SRC2)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLQ (ymm, imm8) - VEX.256 encoding
```java
DEST[255:0] ←LOGICAL_LEFT_SHIFT_QWORDS_256b(SRC1, imm8)
DEST[MAXVL-1:256] ←0;
```
#### VPSLLQ (xmm, xmm, xmm/m128) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_QWORDS(SRC1, SRC2)
DEST[MAXVL-1:128] ←0
```
#### VPSLLQ (xmm, imm8) - VEX.128 encoding
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_QWORDS(SRC1, imm8)
DEST[MAXVL-1:128] ←0
```
#### PSLLQ (xmm, xmm, xmm/m128)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_QWORDS(DEST, SRC)
DEST[MAXVL-1:128] (Unmodified)
```
#### PSLLQ (xmm, imm8)
```java
DEST[127:0] ←LOGICAL_LEFT_SHIFT_QWORDS(DEST, imm8)
DEST[MAXVL-1:128] (Unmodified)
```
#### Intel C/C++ Compiler Intrinsic Equivalents
```java
VPSLLD __m512i _mm512_slli_epi32(__m512i a, unsigned int imm);
VPSLLD __m512i _mm512_mask_slli_epi32(__m512i s, __mmask16 k, __m512i a, unsigned int imm);
VPSLLD __m512i _mm512_maskz_slli_epi32( __mmask16 k, __m512i a, unsigned int imm);
VPSLLD __m256i _mm256_mask_slli_epi32(__m256i s, __mmask8 k, __m256i a, unsigned int imm);
VPSLLD __m256i _mm256_maskz_slli_epi32( __mmask8 k, __m256i a, unsigned int imm);
VPSLLD __m128i _mm_mask_slli_epi32(__m128i s, __mmask8 k, __m128i a, unsigned int imm);
VPSLLD __m128i _mm_maskz_slli_epi32( __mmask8 k, __m128i a, unsigned int imm);
VPSLLD __m512i _mm512_sll_epi32(__m512i a, __m128i cnt);
VPSLLD __m512i _mm512_mask_sll_epi32(__m512i s, __mmask16 k, __m512i a, __m128i cnt);
VPSLLD __m512i _mm512_maskz_sll_epi32( __mmask16 k, __m512i a, __m128i cnt);
VPSLLD __m256i _mm256_mask_sll_epi32(__m256i s, __mmask8 k, __m256i a, __m128i cnt);
VPSLLD __m256i _mm256_maskz_sll_epi32( __mmask8 k, __m256i a, __m128i cnt);
VPSLLD __m128i _mm_mask_sll_epi32(__m128i s, __mmask8 k, __m128i a, __m128i cnt);
VPSLLD __m128i _mm_maskz_sll_epi32( __mmask8 k, __m128i a, __m128i cnt);
VPSLLQ __m512i _mm512_mask_slli_epi64(__m512i a, unsigned int imm);
VPSLLQ __m512i _mm512_mask_slli_epi64(__m512i s, __mmask8 k, __m512i a, unsigned int imm);
VPSLLQ __m512i _mm512_maskz_slli_epi64( __mmask8 k, __m512i a, unsigned int imm);
VPSLLQ __m256i _mm256_mask_slli_epi64(__m256i s, __mmask8 k, __m256i a, unsigned int imm);
VPSLLQ __m256i _mm256_maskz_slli_epi64( __mmask8 k, __m256i a, unsigned int imm);
VPSLLQ __m128i _mm_mask_slli_epi64(__m128i s, __mmask8 k, __m128i a, unsigned int imm);
VPSLLQ __m128i _mm_maskz_slli_epi64( __mmask8 k, __m128i a, unsigned int imm);
VPSLLQ __m512i _mm512_mask_sll_epi64(__m512i a, __m128i cnt);
VPSLLQ __m512i _mm512_mask_sll_epi64(__m512i s, __mmask8 k, __m512i a, __m128i cnt);
VPSLLQ __m512i _mm512_maskz_sll_epi64( __mmask8 k, __m512i a, __m128i cnt);
VPSLLQ __m256i _mm256_mask_sll_epi64(__m256i s, __mmask8 k, __m256i a, __m128i cnt);
VPSLLQ __m256i _mm256_maskz_sll_epi64( __mmask8 k, __m256i a, __m128i cnt);
VPSLLQ __m128i _mm_mask_sll_epi64(__m128i s, __mmask8 k, __m128i a, __m128i cnt);
VPSLLQ __m128i _mm_maskz_sll_epi64( __mmask8 k, __m128i a, __m128i cnt);
VPSLLW __m512i _mm512_slli_epi16(__m512i a, unsigned int imm);
VPSLLW __m512i _mm512_mask_slli_epi16(__m512i s, __mmask32 k, __m512i a, unsigned int imm);
VPSLLW __m512i _mm512_maskz_slli_epi16( __mmask32 k, __m512i a, unsigned int imm);
VPSLLW __m256i _mm256_mask_slli_epi16(__m256i s, __mmask16 k, __m256i a, unsigned int imm);
VPSLLW __m256i _mm256_maskz_slli_epi16( __mmask16 k, __m256i a, unsigned int imm);
VPSLLW __m128i _mm_mask_slli_epi16(__m128i s, __mmask8 k, __m128i a, unsigned int imm);
VPSLLW __m128i _mm_maskz_slli_epi16( __mmask8 k, __m128i a, unsigned int imm);
VPSLLW __m512i _mm512_sll_epi16(__m512i a, __m128i cnt);
VPSLLW __m512i _mm512_mask_sll_epi16(__m512i s, __mmask32 k, __m512i a, __m128i cnt);
VPSLLW __m512i _mm512_maskz_sll_epi16( __mmask32 k, __m512i a, __m128i cnt);
VPSLLW __m256i _mm256_mask_sll_epi16(__m256i s, __mmask16 k, __m256i a, __m128i cnt);
VPSLLW __m256i _mm256_maskz_sll_epi16( __mmask16 k, __m256i a, __m128i cnt);
VPSLLW __m128i _mm_mask_sll_epi16(__m128i s, __mmask8 k, __m128i a, __m128i cnt);
VPSLLW __m128i _mm_maskz_sll_epi16( __mmask8 k, __m128i a, __m128i cnt);
PSLLW:__m64 _mm_slli_pi16 (__m64 m, int count)
PSLLW:__m64 _mm_sll_pi16(__m64 m, __m64 count)
(V)PSLLW:__m128i _mm_slli_epi16(__m64 m, int count)
(V)PSLLW:__m128i _mm_sll_epi16(__m128i m, __m128i count)
VPSLLW:__m256i _mm256_slli_epi16 (__m256i m, int count)
VPSLLW:__m256i _mm256_sll_epi16 (__m256i m, __m128i count)
PSLLD:__m64 _mm_slli_pi32(__m64 m, int  count)
PSLLD:__m64 _mm_sll_pi32(__m64 m, __m64 count)
(V)PSLLD:__m128i _mm_slli_epi32(__m128i m, int  count)
(V)PSLLD:__m128i _mm_sll_epi32(__m128i m, __m128i count)
VPSLLD:__m256i _mm256_slli_epi32 (__m256i m, int count)
VPSLLD:__m256i _mm256_sll_epi32 (__m256i m, __m128i count)
PSLLQ:__m64 _mm_slli_si64(__m64 m, int  count)
PSLLQ:__m64 _mm_sll_si64(__m64 m, __m64 count)
(V)PSLLQ:__m128i _mm_slli_epi64(__m128i m, int  count)
(V)PSLLQ:__m128i _mm_sll_epi64(__m128i m, __m128i count)
VPSLLQ:__m256i _mm256_slli_epi64 (__m256i m, int count)
VPSLLQ:__m256i _mm256_sll_epi64 (__m256i m, __m128i count)
```
### Flags Affected
None.

### Numeric Exceptions

None.

### Other Exceptions
VEX-encoded instructions:

Syntax with RM/RVM operand encoding (A/C in the operand encoding table), see Exceptions Type 4.

Syntax with MI/VMI operand encoding (B/D in the operand encoding table), see Exceptions Type 7.

EVEX-encoded VPSLLW (E in the operand encoding table), see Exceptions Type E4NF.nb.

EVEX-encoded VPSLLD/Q:

Syntax with Mem128 tuple type (G in the operand encoding table), see Exceptions Type E4NF.nb.

Syntax with Full tuple type (F in the operand encoding table), see Exceptions Type E4.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
