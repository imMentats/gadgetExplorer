SGX INSTRUCTION REFERENCES
<b>ENCLU</b> — Execute an Enclave User Function of Specified Leaf Number
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F 01 D7 ENCLU</td>
		<td>NP</td>
		<td>V/V</td>
		<td>NA</td>
		<td>This instruction is used to execute non-privileged Intel SGX leaf functions.</td>
	</tr>
</table>


### Instruction Operand Encoding
<table>
	<tr>
		<td><b>Op/En</b></td>
		<td><b>Operand 1</b></td>
		<td><b>Operand 2</b></td>
		<td><b>Operand 3</b></td>
		<td><b>Implicit Register Operands</b></td>
	</tr>
	<tr>
		<td>NP</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
		<td>See Section 40.4</td>
	</tr>
</table>


### Description
The ENCLU instruction invokes the specified non-privileged Intel SGX leaf functions. Software specifies the leaf
function by setting the appropriate value in the register EAX as input. The registers RBX, RCX, and RDX have leaf-
specific purpose, and may act as input, as output, or may be unused. In 64-bit mode, the instruction ignores upper
32 bits of the RAX register.

The ENCLU instruction produces an invalid-opcode exception (\#UD) if CR0.PE = 0 or RFLAGS.VM = 1, or if it is
executed in system-management mode (SMM). Additionally, any attempt to execute this instruction when CPL < 3
results in \#UD. The instruction produces a general-protection exception (\#GP) if either CR0.PG or CR0.NE is 0, or
if an attempt is made to invoke an undefined leaf function. The ENCLU instruction produces a device not available
exception (\#NM) if CR0.TS = 1.

Addresses and operands are 32 bits outside 64-bit mode (IA32_EFER.LMA = 0 or CS.L = 0) and are 64 bits in 64-bit
 mode (IA32_EFER.LMA = 1 and CS.L = 1). CS.D value has no impact on address calculation. The DS segment
is used to create linear addresses.

Segment override prefixes and address-size override prefixes are ignored, as is the REX prefix in 64-bit mode.

### Operation

```java
IN_64BIT_MODE← 0;
IF TSX_ACTIVE
    THEN GOTO TSX_ABORT_PROCESSING; FI;
IF CR0.PE= 0 or RFLAGS.VM = 1 or in SMM or CPUID.SGX_LEAF.0:EAX.SE1 = 0
    THEN #UD; FI;
IF CR0.TS = 1
    THEN #NM; FI;
IF CPL < 3
    THEN #UD; FI;
IF IA32_FEATURE_CONTROL.LOCK = 0 or IA32_FEATURE_CONTROL.SGX_ENABLE = 0
    THEN #GP(0); FI;
IF EAX is invalid leaf number
    THEN #GP(0); FI;
IF CR0.PG = 0 or CR0.NE = 0
    THEN #GP(0); FI;
IN_64BIT_MODE ← IA32_EFER.LMA AND CS.L ? 1 : 0;
(* Check not in 16-bit mode and DS is not a 16-bit segment *)
IF not in 64-bit mode and (CS.D = 0 or DS.B = 0) 
                            Vol. 3D 40-11
SGX INSTRUCTION REFERENCES
    THEN #GP(0); FI;
IF CR_ENCLAVE_MODE = 1 and (EAX = 2 or EAX = 3) (* EENTER or ERESUME *)
    THEN #GP(0); FI;
IF CR_ENCLAVE_MODE = 0 and (EAX = 0 or EAX = 1 or EAX = 4 or EAX = 5 or EAX = 6 or EAX = 7)
(* EREPORT, EGETKEY, EEXIT, EACCEPT, EMODPE, or EACCEPTCOPY *)
    THEN #GP(0); FI;
Jump to leaf specific flow
```
### Flags Affected
See individual leaf functions

### Protected Mode Exceptions

<p>#UD
If any of the LOCK/OSIZE/REP/VEX prefix is used.
If current privilege level is not 3.
If CPUID.(EAX=12H,ECX=0):EAX.SGX1 [bit 0] = 0.
If logical processor is in SMM.
<p>#GP(0)
If IA32_FEATURE_CONTROL.LOCK = 0.
If IA32_FEATURE_CONTROL.SGX_ENABLE = 0.
If input value in EAX encodes an unsupported leaf.
If input value in EAX encodes EENTER/ERESUME and ENCLAVE_MODE = 1.
If input value in EAX encodes EGETKEY/EREPORT/EEXIT/EACCEPT/EACCEPTCOPY/EMODPE
and ENCLAVE_MODE = 0.
If operating in 16-bit mode.
If data segment is in 16-bit mode.
If CR0.PG = 0 or CR0.NE= 0.
<p>#NM
If CR0.TS = 1.

### Real-Address Mode Exceptions

<p>#UD
ENCLS is not recognized in real mode.

### Virtual-8086 Mode Exceptions

<p>#UD
ENCLS is not recognized in virtual-8086 mode.

### Compatibility Mode Exceptions

Same exceptions as in protected mode.

40-12 Vol. 3D
SGX INSTRUCTION REFERENCES

### 64-Bit Mode Exceptions

<p>#UD
If any of the LOCK/OSIZE/REP/VEX prefix is used.
If current privilege level is not 3.
If CPUID.(EAX=12H,ECX=0):EAX.SGX1 [bit 0] = 0.
If logical processor is in SMM.
<p>#GP(0)
If IA32_FEATURE_CONTROL.LOCK = 0.
If IA32_FEATURE_CONTROL.SGX_ENABLE = 0.
If input value in EAX encodes an unsupported leaf.
If input value in EAX encodes EENTER/ERESUME and ENCLAVE_MODE = 1.
If input value in EAX encodes EGETKEY/EREPORT/EEXIT/EACCEPT/EACCEPTCOPY/EMODPE
and ENCLAVE_MODE = 0.
If CR0.NE= 0.
<p>#NM
If CR0.TS = 1.

Vol. 3D 40-13

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
