<b>SARX / SHLX / SHRX</b> —  Shift Without Affecting Flags
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 -bit Mode</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.F3.0F38.W0 F7 /r SARX r32a, r/m32, r32b</td>
		<td>RMV</td>
		<td>V/V</td>
		<td>BMI2</td>
		<td>Shift r/m32 arithmetically right with count specified in r32b.</td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.66.0F38.W0 F7 /r SHLX r32a, r/m32, r32b</td>
		<td>RMV</td>
		<td>V/V</td>
		<td>BMI2</td>
		<td>Shift r/m32 logically left with count specified in r32b.</td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.F2.0F38.W0 F7 /r SHRX r32a, r/m32, r32b</td>
		<td>RMV</td>
		<td>V/V</td>
		<td>BMI2</td>
		<td>Shift r/m32 logically right with count specified in r32b.</td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.F3.0F38.W1 F7 /r SARX r64a, r/m64, r64b</td>
		<td>RMV</td>
		<td>V/N.E.</td>
		<td>BMI2</td>
		<td>Shift r/m64 arithmetically right with count specified in r64b.</td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.66.0F38.W1 F7 /r SHLX r64a, r/m64, r64b</td>
		<td>RMV</td>
		<td>V/N.E.</td>
		<td>BMI2</td>
		<td>Shift r/m64 logically left with count specified in r64b.</td>
	</tr>
	<tr>
		<td>VEX.NDS.LZ.F2.0F38.W1 F7 /r SHRX r64a, r/m64, r64b</td>
		<td>RMV</td>
		<td>V/N.E.</td>
		<td>BMI2</td>
		<td>Shift r/m64 logically right with count specified in r64b.</td>
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
		<td>RMV</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>VEX.vvvv (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Shifts the bits of the first source operand (the second operand) to the left or right by a COUNT value specified in the
second source operand (the third operand). The result is written to the destination operand (the first operand).

The shift arithmetic right (SARX) and shift logical right (SHRX) instructions shift the bits of the destination operand
to the right (toward less significant bit locations), SARX keeps and propagates the most significant bit (sign bit)
while shifting.

The logical shift left (SHLX) shifts the bits of the destination operand to the left (toward more significant bit locations
).

This instruction is not supported in real mode and virtual-8086 mode. The operand size is always 32 bits if not in
64-bit mode. In 64-bit mode operand size 64 requires VEX.W1. VEX.W1 is ignored in non-64-bit modes. An
attempt to execute this instruction with VEX.L not equal to 0 will cause \#UD.

If the value specified in the first source operand exceeds OperandSize -1, the COUNT value is masked.

SARX,SHRX, and SHLX instructions do not update flags.

### Operation

```java
TEMP ← SRC1;
IF VEX.W1 and CS.L = 1
THEN
    countMASK ←3FH;
ELSE
    countMASK ←1FH;
FI
COUNT ← (SRC2 AND countMASK)
DEST[OperandSize -1] = TEMP[OperandSize -1];
DO WHILE (COUNT ≠ 0)
    IF instruction is SHLX
        THEN
            DEST[] ← DEST *2;
        ELSE IF instruction is SHRX
            THEN
                DEST[] ← DEST /2; //unsigned divide
        ELSE
                    // SARX
                DEST[] ← DEST /2; // signed divide, round toward negative infinity
    FI;
    COUNT ← COUNT - 1;
OD
```
### Flags Affected
None.

### Intel C/C++ Compiler Intrinsic Equivalent
```c
Auto-generated from high-level language.
```
### SIMD Floating-Point Exceptions

None

### Other Exceptions

See Section 2.5.1, “Exception Conditions for VEX-Encoded GPR Instructions”, Table 2-29; additionally
<p>#UD
If VEX.W = 1.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
