<b>XSAVE / XSAVE64</b> — Save Processor Extended States
<table>
	<tr>
		<td><b>Opcode / Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F AE /4 XSAVE mem</td>
		<td>M</td>
		<td>V/V</td>
		<td>XSAVE</td>
		<td>Save state components specified by EDX:EAX to mem.</td>
	</tr>
	<tr>
		<td>NP REX.W + 0F AE /4 XSAVE64 mem</td>
		<td>M</td>
		<td>V/N.E.</td>
		<td>XSAVE</td>
		<td>Save state components specified by EDX:EAX to mem.</td>
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
		<td>M</td>
		<td>ModRM:r/m (w)</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
Performs a full or partial save of processor state components to the XSAVE area located at the memory address
specified by the destination operand. The implicit EDX:EAX register pair specifies a 64-bit instruction mask. The
specific state components saved correspond to the bits set in the requested-feature bitmap (RFBM), which is the
logical-AND of EDX:EAX and XCR0.

The format of the XSAVE area is detailed in Section 13.4, “XSAVE Area,” of Intel® 64 and IA-32 Architectures Soft-
ware Developer’s Manual, Volume 1.

Section 13.7, “Operation of XSAVE,” of Intel® 64 and IA-32 Architectures Software Developer’s Manual, Volume 1
provides a detailed description of the operation of the XSAVE instruction. The following items provide a high-level
outline:

 *  XSAVE saves state component i if and only if RFBM[i] = 1.1

 *  XSAVE does not modify bytes 511:464 of the legacy region of the XSAVE area (see Section 13.4.1, “Legacy

Region of an XSAVE Area”).

 *  XSAVE reads the XSTATE_BV field of the XSAVE header (see Section 13.4.2, “XSAVE Header”) and writes a

modified value back to memory as follows. If RFBM[i] = 1, XSAVE writes XSTATE_BV[i] with the value of
XINUSE[i]. (XINUSE is a bitmap by which the processor tracks the status of various state components. See
Section 13.6, “Processor Tracking of XSAVE-Managed State.”) If RFBM[i] = 0, XSAVE writes XSTATE_BV[i] with
the value that it read from memory (it does not modify the bit). XSAVE does not write to any part of the XSAVE
header other than the XSTATE_BV field.

 *  XSAVE always uses the standard format of the extended region of the XSAVE area (see Section 13.4.3,

“Extended Region of an XSAVE Area”).

Use of a destination operand not aligned to 64-byte boundary (in either 64-bit or 32-bit modes) results in a
general-protection (\#GP) exception. In 64-bit mode, the upper 32 bits of RDX and RAX are ignored.

### Operation

```java
RFBM ← XCR0 AND EDX:EAX;
                            /* bitwise logical AND */
OLD_BV ← XSTATE_BV field from XSAVE header;
IF RFBM[0] = 1
    THEN store x87 state into legacy region of XSAVE area;
FI;
IF RFBM[1] = 1
1. An exception is made for MXCSR and MXCSR_MASK, which belong to state component 1 — SSE. XSAVE saves these values to mem-
    ory if either RFBM[1] or RFBM[2] is 1.
    THEN store XMM registers into legacy region of XSAVE area; // this step does not save MXCSR or MXCSR_MASK
FI;
IF RFBM[1] = 1 OR RFBM[2] = 1
    THEN store MXCSR and MXCSR_MASK into legacy region of XSAVE area;
FI;
FOR i ← 2 TO 62
    IF RFBM[i] = 1
        THEN save XSAVE state component i at offset n from base of XSAVE area (n enumerated by CPUID(EAX=0DH,ECX=i):EBX);
    FI;
ENDFOR;
XSTATE_BV field in XSAVE header ← (OLD_BV AND NOT RFBM) OR (XINUSE AND RFBM);
```
### Flags Affected
None.

### Intel C/C++ Compiler Intrinsic Equivalent
```c
XSAVE:
void _xsave( void * , unsigned __int64);
XSAVE:
void _xsave64( void * , unsigned __int64);
```
### Protected Mode Exceptions

<p>#GP(0)
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
If a memory operand is not aligned on a 64-byte boundary, regardless of segment.
<p>#SS(0)
If a memory operand effective address is outside the SS segment limit.
<p>#PF(fault-code)
If a page fault occurs.
<p>#NM
If CR0.TS[bit 3] = 1.
<p>#UD
If CPUID.01H:ECX.XSAVE[bit 26] = 0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.
<p>#AC
If this exception is disabled a general protection exception (<p>#GP) is signaled if the memory
operand is not aligned on a 64-byte boundary, as described above. If the alignment check
exception (<p>#AC) is enabled (and the CPL is 3), signaling of <p>#AC is not guaranteed and may
vary with implementation, as follows. In all implementations where <p>#AC is not signaled, a
general protection exception is signaled in its place. In addition, the width of the alignment
check may also vary with implementation. For instance, for a given implementation, an align-
ment check exception might be signaled for a 2-byte misalignment, whereas a general protec-
tion exception might be signaled for all other misalignments (4-, 8-, or 16-byte
misalignments).

### Real-Address Mode Exceptions

<p>#GP
If a memory operand is not aligned on a 64-byte boundary, regardless of segment.
If any part of the operand lies outside the effective address space from 0 to FFFFH.
<p>#NM
If CR0.TS[bit 3] = 1.
<p>#UD
If CPUID.01H:ECX.XSAVE[bit 26] = 0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.

### Virtual-8086 Mode Exceptions
Same exceptions as in protected mode.

### Compatibility Mode Exceptions

Same exceptions as in protected mode.

### 64-Bit Mode Exceptions

<p>#GP(0)
If the memory address is in a non-canonical form.
If a memory operand is not aligned on a 64-byte boundary, regardless of segment.
<p>#SS(0)
If a memory address referencing the SS segment is in a non-canonical form.
<p>#PF(fault-code)
If a page fault occurs.
<p>#NM
If CR0.TS[bit 3] = 1.
<p>#UD
If CPUID.01H:ECX.XSAVE[bit 26] = 0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.
<p>#AC
If this exception is disabled a general protection exception (<p>#GP) is signaled if the memory
operand is not aligned on a 64-byte boundary, as described above. If the alignment check
exception (<p>#AC) is enabled (and the CPL is 3), signaling of <p>#AC is not guaranteed and may
vary with implementation, as follows. In all implementations where <p>#AC is not signaled, a
general protection exception is signaled in its place. In addition, the width of the alignment
check may also vary with implementation. For instance, for a given implementation, an align-
ment check exception might be signaled for a 2-byte misalignment, whereas a general protec-
tion exception might be signaled for all other misalignments (4-, 8-, or 16-byte
misalignments).

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
