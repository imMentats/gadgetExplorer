<b>XSAVEOPT / XSAVEOPT64</b> — Save Processor Extended States Optimized
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F AE /6 XSAVEOPT mem</td>
		<td>M</td>
		<td>V/V</td>
		<td>XSAVEOPT</td>
		<td>Save state components specified by EDX:EAX to mem, optimizing if possible.</td>
	</tr>
	<tr>
		<td>NP REX.W + 0F AE /6 XSAVEOPT64 mem</td>
		<td>M</td>
		<td>V/V</td>
		<td>XSAVEOPT</td>
		<td>Save state components specified by EDX:EAX to mem, optimizing if possible.</td>
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

Section 13.9, “Operation of XSAVEOPT,” of Intel® 64 and IA-32 Architectures Software Developer’s Manual,
Volume 1 provides a detailed description of the operation of the XSAVEOPT instruction. The following items provide
a high-level outline:

 * Execution of XSAVEOPT is similar to that of XSAVE. XSAVEOPT differs from XSAVE in that it may use the init and
modified optimizations. The performance of XSAVEOPT will be equal to or better than that of XSAVE.

 *  XSAVEOPT saves state component i only if RFBM[i] = 1 and XINUSE[i] = 1.1 (XINUSE is a bitmap by which the

processor tracks the status of various state components. See Section 13.6, “Processor Tracking of XSAVE-
Managed State.”) Even if both bits are 1, XSAVEOPT may optimize and not save state component i if (1) state
component i has not been modified since the last execution of XRSTOR or XRSTORS; and (2) this execution of
XSAVES corresponds to that last execution of XRSTOR or XRSTORS as determined by the internal value
XRSTOR_INFO (see the Operation section below).

 *  XSAVEOPT does not modify bytes 511:464 of the legacy region of the XSAVE area (see Section 13.4.1, “Legacy

Region of an XSAVE Area”).

 *  XSAVEOPT reads the XSTATE_BV field of the XSAVE header (see Section 13.4.2, “XSAVE Header”) and writes a

modified value back to memory as follows. If RFBM[i] = 1, XSAVEOPT writes XSTATE_BV[i] with the value of
XINUSE[i]. If RFBM[i] = 0, XSAVEOPT writes XSTATE_BV[i] with the value that it read from memory (it does
not modify the bit). XSAVEOPT does not write to any part of the XSAVE header other than the XSTATE_BV field.

 *  XSAVEOPT always uses the standard format of the extended region of the XSAVE area (see Section 13.4.3,

“Extended Region of an XSAVE Area”).

Use of a destination operand not aligned to 64-byte boundary (in either 64-bit or 32-bit modes) will result in a
general-protection (\#GP) exception. In 64-bit mode, the upper 32 bits of RDX and RAX are ignored.

See Section 13.6, “Processor Tracking of XSAVE-Managed State,” of Intel® 64 and IA-32 Architectures Software
Developer’s Manual, Volume 1 for discussion of the bitmap XMODIFIED and of the quantity XRSTOR_INFO.

### Operation

```java
RFBM ← XCR0 AND EDX:EAX;
                            /* bitwise logical AND */
1. There is an exception made for MXCSR and MXCSR_MASK, which belong to state component 1 — SSE. XSAVEOPT always saves 
    these to memory if RFBM[1] = 1 or RFBM[2] = 1, regardless of the value of XINUSE.
OLD_BV ← XSTATE_BV field from XSAVE header;
TO_BE_SAVED ← RFBM AND XINUSE;
IF in VMX non-root operation
    THEN VMXNR ← 1;
    ELSE VMXNR ← 0;
FI;
LAXA ← linear address of XSAVE area;
IF XRSTOR_INFO = CPL,VMXNR,LAXA,00000000_00000000H
    THEN TO_BE_SAVED ← TO_BE_SAVED AND XMODIFIED;
FI;
IF TO_BE_SAVED[0] = 1
    THEN store x87 state into legacy region of XSAVE area;
FI;
IF TO_BE_SAVED[1]
    THEN store XMM registers into legacy region of XSAVE area; // this step does not save MXCSR or MXCSR_MASK
FI;
IF RFBM[1] = 1 or RFBM[2] = 1
    THEN store MXCSR and MXCSR_MASK into legacy region of XSAVE area;
FI;
FOR i ← 2 TO 62
    IF TO_BE_SAVED[i] = 1
        THEN save XSAVE state component i at offset n from base of XSAVE area (n enumerated by CPUID(EAX=0DH,ECX=i):EBX);
    FI;
ENDFOR;
XSTATE_BV field in XSAVE header ← (OLD_BV AND NOT RFBM) OR (XINUSE AND RFBM);
```
### Flags Affected
None.

### Intel C/C++ Compiler Intrinsic Equivalent
```c
XSAVEOPT:
void _xsaveopt( void * , unsigned __int64);
XSAVEOPT:
void _xsaveopt64( void * , unsigned __int64);
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
If CPUID.01H:ECX.XSAVE[bit 26] = 0 or CPUID.(EAX=0DH,ECX=1):EAX.XSAVEOPT[bit 0] =
0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.

### Real-Address Mode Exceptions
<p>#GP
If a memory operand is not aligned on a 64-byte boundary, regardless of segment.
If any part of the operand lies outside the effective address space from 0 to FFFFH.
<p>#NM
If CR0.TS[bit 3] = 1.
<p>#UD
If CPUID.01H:ECX.XSAVE[bit 26] = 0 or CPUID.(EAX=0DH,ECX=1):EAX.XSAVEOPT[bit 0] =
0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.

### Virtual-8086 Mode Exceptions

Same exceptions as in protected mode.

### Compatibility Mode Exceptions

Same exceptions as in protected mode.

### 64-Bit Mode Exceptions

<p>#SS(0)
If a memory address referencing the SS segment is in a non-canonical form.
<p>#GP(0)
If the memory address is in a non-canonical form.
If a memory operand is not aligned on a 64-byte boundary, regardless of segment.
<p>#PF(fault-code)
If a page fault occurs.
<p>#NM
If CR0.TS[bit 3] = 1.
<p>#UD
If CPUID.01H:ECX.XSAVE[bit 26] = 0 or CPUID.(EAX=0DH,ECX=1):EAX.XSAVEOPT[bit 0] =
0.
If CR4.OSXSAVE[bit 18] = 0.
If the LOCK prefix is used.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
