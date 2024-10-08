<b>CMPS / CMPSB / CMPSW / CMPSD / CMPSQ</b> — Compare String Operands
<table>
	<tr>
		<td><b>Opcode</b></td>
		<td><b>Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64-Bit Mode</b></td>
		<td><b>Compat/ Leg Mode</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>A6</td>
		<td>CMPS m8, m8</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare byte at address DS:(E)SI with byte at address ES:(E)DI; For 64-bit mode compare byte at address (R|E)SI to byte at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>A7</td>
		<td>CMPS m16, m16</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare word at address DS:(E)SI with word at address ES:(E)DI; For 64-bit mode compare word at address (R|E)SI with word at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>A7</td>
		<td>CMPS m32, m32</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare dword at address DS:(E)SI at dword at address ES:(E)DI; For 64-bit mode compare dword at address (R|E)SI at dword at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>REX.W + A7</td>
		<td>CMPS m64, m64</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>N.E.</td>
		<td>Compares quadword at address (R|E)SI with quadword at address (R|E)DI and sets the status flags accordingly.</td>
	</tr>
	<tr>
		<td>A6</td>
		<td>CMPSB</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare byte at address DS:(E)SI with byte at address ES:(E)DI; For 64-bit mode compare byte at address (R|E)SI with byte at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>A7</td>
		<td>CMPSW</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare word at address DS:(E)SI with word at address ES:(E)DI; For 64-bit mode compare word at address (R|E)SI with word at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>A7</td>
		<td>CMPSD</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>For legacy mode, compare dword at address DS:(E)SI with dword at address ES:(E)DI; For 64-bit mode compare dword at address (R|E)SI with dword at address (R|E)DI. The status flags are set accordingly.</td>
	</tr>
	<tr>
		<td>REX.W + A7</td>
		<td>CMPSQ</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>N.E.</td>
		<td>Compares quadword at address (R|E)SI with quadword at address (R|E)DI and sets the status flags accordingly.</td>
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
		<td>ZO</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
Compares the byte, word, doubleword, or quadword specified with the first source operand with the byte, word,
doubleword, or quadword specified with the second source operand and sets the status flags in the EFLAGS register
according to the results.

Both source operands are located in memory. The address of the first source operand is read from DS:SI, DS:ESI
or RSI (depending on the address-size attribute of the instruction is 16, 32, or 64, respectively). The address of the
second source operand is read from ES:DI, ES:EDI or RDI (again depending on the address-size attribute of the
instruction is 16, 32, or 64). The DS segment may be overridden with a segment override prefix, but the ES
segment cannot be overridden.

At the assembly-code level, two forms of this instruction are allowed: the “explicit-operands” form and the “no-
operands” form. The explicit-operands form (specified with the CMPS mnemonic) allows the two source operands
to be specified explicitly. Here, the source operands should be symbols that indicate the size and location of the
source values. This explicit-operand form is provided to allow documentation. However, note that the documentation
 provided by this form can be misleading. That is, the source operand symbols must specify the correct type
(size) of the operands (bytes, words, or doublewords, quadwords), but they do not have to specify the correct location
. Locations of the source operands are always specified by the DS:(E)SI (or RSI) and ES:(E)DI (or RDI) registers
, which must be loaded correctly before the compare string instruction is executed.

The no-operands form provides “short forms” of the byte, word, and doubleword versions of the CMPS instructions.
Here also the DS:(E)SI (or RSI) and ES:(E)DI (or RDI) registers are assumed by the processor to specify the location
 of the source operands. The size of the source operands is selected with the mnemonic: CMPSB (byte comparison)
, CMPSW (word comparison), CMPSD (doubleword comparison), or CMPSQ (quadword comparison using
REX.W).

After the comparison, the (E/R)SI and (E/R)DI registers increment or decrement automatically according to the
setting of the DF flag in the EFLAGS register. (If the DF flag is 0, the (E/R)SI and (E/R)DI register increment; if the
DF flag is 1, the registers decrement.) The registers increment or decrement by 1 for byte operations, by 2 for word
operations, 4 for doubleword operations. If operand size is 64, RSI and RDI registers increment by 8 for quadword
operations.

The CMPS, CMPSB, CMPSW, CMPSD, and CMPSQ instructions can be preceded by the REP prefix for block comparisons
. More often, however, these instructions will be used in a LOOP construct that takes some action based on the
setting of the status flags before the next comparison is made. See “REP/REPE/REPZ/REPNE/REPNZ—Repeat
String Operation Prefix” in Chapter 4 of the Intel® 64 and IA-32 Architectures Software Developer’s Manual,
Volume 2B, for a description of the REP prefix.

In 64-bit mode, the instruction’s default address size is 64 bits, 32 bit address size is supported using the prefix
67H. Use of the REX.W prefix promotes doubleword operation to 64 bits (see CMPSQ). See the summary chart at
the beginning of this section for encoding data and limits.

### Operation

```java
temp ← SRC1 - SRC2;
SetStatusFlags(temp);
IF (64-Bit Mode)
    THEN
        IF (Byte comparison)
        THEN IF DF = 0
            THEN 
                (R|E)SI ← (R|E)SI + 1; 
                (R|E)DI ← (R|E)DI + 1; 
            ELSE 
                (R|E)SI ← (R|E)SI – 1; 
                (R|E)DI ← (R|E)DI – 1; 
            FI;
        ELSE IF (Word comparison)
            THEN IF DF = 0
                THEN 
                    (R|E)SI ← (R|E)SI + 2; 
                    (R|E)DI ← (R|E)DI + 2; 
                ELSE 
                    (R|E)SI ← (R|E)SI – 2; 
                    (R|E)DI ← (R|E)DI – 2; 
                FI;
        ELSE IF (Doubleword comparison)
            THEN IF DF = 0
                THEN 
                    (R|E)SI ← (R|E)SI + 4; 
                    (R|E)DI ← (R|E)DI + 4; 
                ELSE 
                    (R|E)SI ← (R|E)SI – 4; 
                    (R|E)DI ← (R|E)DI – 4; 
                FI;
        ELSE (* Quadword comparison *)
            THEN IF DF = 0
                (R|E)SI ← (R|E)SI + 8; 
                (R|E)DI ← (R|E)DI + 8; 
            ELSE 
                (R|E)SI ← (R|E)SI – 8; 
                (R|E)DI ← (R|E)DI – 8; 
            FI;
        FI;
    ELSE (* Non-64-bit Mode *)
        IF (byte comparison)
        THEN IF DF = 0
            THEN 
                (E)SI ← (E)SI + 1; 
                (E)DI ← (E)DI + 1; 
            ELSE 
                (E)SI ← (E)SI – 1; 
                (E)DI ← (E)DI – 1; 
            FI;
        ELSE IF (Word comparison)
            THEN IF DF = 0
                (E)SI ← (E)SI + 2; 
                (E)DI ← (E)DI + 2; 
            ELSE 
                (E)SI ← (E)SI – 2; 
                (E)DI ← (E)DI – 2; 
            FI;
        ELSE (* Doubleword comparison *)
            THEN IF DF = 0
                (E)SI ← (E)SI + 4; 
                (E)DI ← (E)DI + 4; 
            ELSE 
                (E)SI ← (E)SI – 4; 
                (E)DI ← (E)DI – 4; 
            FI;
        FI;
FI;
```
### Flags Affected
The CF, OF, SF, ZF, AF, and PF flags are set according to the temporary result of the comparison.

### Protected Mode Exceptions

<p>#GP(0)
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
If the DS, ES, FS, or GS register contains a NULL segment selector.
<p>#SS(0)
If a memory operand effective address is outside the SS segment limit.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made while the
current privilege level is 3.
<p>#UD
If the LOCK prefix is used.

### Real-Address Mode Exceptions
<p>#GP
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
<p>#SS
If a memory operand effective address is outside the SS segment limit.
<p>#UD
If the LOCK prefix is used.

### Virtual-8086 Mode Exceptions

<p>#GP(0)
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
<p>#SS(0)
If a memory operand effective address is outside the SS segment limit.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made.
<p>#UD
If the LOCK prefix is used.

### Compatibility Mode Exceptions

Same exceptions as in protected mode.

### 64-Bit Mode Exceptions

<p>#SS(0)
If a memory address referencing the SS segment is in a non-canonical form.
<p>#GP(0)
If the memory address is in a non-canonical form.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made while the
current privilege level is 3.
<p>#UD
If the LOCK prefix is used.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
