<b>IRET / IRETD</b> — Interrupt Return
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
		<td>CF</td>
		<td>IRET</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Interrupt return (16-bit operand size).</td>
	</tr>
	<tr>
		<td>CF</td>
		<td>IRETD</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Interrupt return (32-bit operand size).</td>
	</tr>
	<tr>
		<td>REX.W + CF</td>
		<td>IRETQ</td>
		<td>ZO</td>
		<td>Valid</td>
		<td>N.E.</td>
		<td>Interrupt return (64-bit operand size).</td>
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
Returns program control from an exception or interrupt handler to a program or procedure that was interrupted by
an exception, an external interrupt, or a software-generated interrupt. These instructions are also used to perform
a return from a nested task. (A nested task is created when a CALL instruction is used to initiate a task switch or
when an interrupt or exception causes a task switch to an interrupt or exception handler.) See the section titled
“Task Linking” in Chapter 7 of the Intel® 64 and IA-32 Architectures Software Developer’s Manual, Volume 3A.

IRET and IRETD are mnemonics for the same opcode. The IRETD mnemonic (interrupt return double) is intended
for use when returning from an interrupt when using the 32-bit operand size; however, most assemblers use the
IRET mnemonic interchangeably for both operand sizes.

In Real-Address Mode, the IRET instruction preforms a far return to the interrupted program or procedure. During
this operation, the processor pops the return instruction pointer, return code segment selector, and EFLAGS image
from the stack to the EIP, CS, and EFLAGS registers, respectively, and then resumes execution of the interrupted
program or procedure.

In Protected Mode, the action of the IRET instruction depends on the settings of the NT (nested task) and VM flags
in the EFLAGS register and the VM flag in the EFLAGS image stored on the current stack. Depending on the setting
of these flags, the processor performs the following types of interrupt returns:

 *  Return from virtual-8086 mode.

 *  Return to virtual-8086 mode.

 * Intra-privilege level return.

 * Inter-privilege level return.

 *  Return from nested task (task switch).

If the NT flag (EFLAGS register) is cleared, the IRET instruction performs a far return from the interrupt procedure,
without a task switch. The code segment being returned to must be equally or less privileged than the interrupt
handler routine (as indicated by the RPL field of the code segment selector popped from the stack).

As with a real-address mode interrupt return, the IRET instruction pops the return instruction pointer, return code
segment selector, and EFLAGS image from the stack to the EIP, CS, and EFLAGS registers, respectively, and then
resumes execution of the interrupted program or procedure. If the return is to another privilege level, the IRET
instruction also pops the stack pointer and SS from the stack, before resuming program execution. If the return is
to virtual-8086 mode, the processor also pops the data segment registers from the stack.

If the NT flag is set, the IRET instruction performs a task switch (return) from a nested task (a task called with a
CALL instruction, an interrupt, or an exception) back to the calling or interrupted task. The updated state of the
task executing the IRET instruction is saved in its TSS. If the task is re-entered later, the code that follows the IRET
instruction is executed.

If the NT flag is set and the processor is in IA-32e mode, the IRET instruction causes a general protection excep-
tion.

If nonmaskable interrupts (NMIs) are blocked (see Section 6.7.1, “Handling Multiple NMIs” in the Intel® 64 and
IA-32 Architectures Software Developer’s Manual, Volume 3A), execution of the IRET instruction unblocks NMIs.
This unblocking occurs even if the instruction causes a fault. In such a case, NMIs are unmasked before the excep-
tion handler is invoked.

In 64-bit mode, the instruction’s default operation size is 32 bits. Use of the REX.W prefix promotes operation to 64
bits (IRETQ). See the summary chart at the beginning of this section for encoding data and limits.

See “Changes to Instruction Behavior in VMX Non-Root Operation” in Chapter 25 of the Intel® 64 and IA-32 Archi-
tectures Software Developer’s Manual, Volume 3C, for more information about the behavior of this instruction in
VMX non-root operation.

### Operation

```java
IF PE = 0
    THEN GOTO REAL-ADDRESS-MODE;
ELSIF (IA32_EFER.LMA = 0)
    THEN
        IF (EFLAGS.VM = 1)
            THEN GOTO RETURN-FROM-VIRTUAL-8086-MODE;
            ELSE GOTO PROTECTED-MODE;
        FI;
    ELSE GOTO IA-32e-MODE;
FI;
REAL-ADDRESS-MODE;
    IF OperandSize = 32
        THEN
            EIP ← Pop();
            CS ← Pop(); (* 32-bit pop, high-order 16 bits discarded *)
            tempEFLAGS ← Pop();
            EFLAGS ← (tempEFLAGS AND 257FD5H) OR (EFLAGS AND 1A0000H);
        ELSE (* OperandSize = 16 *)
            EIP ← Pop(); (* 16-bit pop; clear upper 16 bits *)
            CS ← Pop(); (* 16-bit pop *)
            EFLAGS[15:0] ← Pop();
    FI;
    END;
RETURN-FROM-VIRTUAL-8086-MODE: 
(* Processor is in virtual-8086 mode when IRET is executed and stays in virtual-8086 mode *)
    IF IOPL = 3 (* Virtual mode: PE = 1, VM = 1, IOPL = 3 *)
        THEN IF OperandSize = 32
            THEN
                EIP ← Pop();
                CS ← Pop(); (* 32-bit pop, high-order 16 bits discarded *)
                EFLAGS ← Pop();
                (* VM, IOPL,VIP and VIF EFLAG bits not modified by pop *)
                IF EIP not within CS limit
                    THEN #GP(0); FI;
            ELSE (* OperandSize = 16 *)
                EIP ← Pop(); (* 16-bit pop; clear upper 16 bits *)
                CS ← Pop(); (* 16-bit pop *)
                EFLAGS[15:0] ← Pop(); (* IOPL in EFLAGS not modified by pop *)
                IF EIP not within CS limit
                    THEN #GP(0); FI;
            FI;
        ELSE 
            #GP(0); (* Trap to virtual-8086 monitor: PE = 1, VM = 1, IOPL < 3 *)
    FI;
END;
PROTECTED-MODE:
    IF NT = 1
        THEN GOTO TASK-RETURN; (* PE = 1, VM = 0, NT = 1 *)
    FI;
    IF OperandSize = 32
        THEN
            EIP ← Pop();
            CS ← Pop(); (* 32-bit pop, high-order 16 bits discarded *)
            tempEFLAGS ← Pop();
        ELSE (* OperandSize = 16 *)
            EIP ← Pop(); (* 16-bit pop; clear upper bits *)
            CS ← Pop(); (* 16-bit pop *)
            tempEFLAGS ← Pop(); (* 16-bit pop; clear upper bits *)
    FI;
    IF tempEFLAGS(VM) = 1 and CPL = 0
        THEN GOTO RETURN-TO-VIRTUAL-8086-MODE; 
        ELSE GOTO PROTECTED-MODE-RETURN;
    FI;
TASK-RETURN: (* PE = 1, VM = 0, NT = 1 *)
    SWITCH-TASKS (without nesting) to TSS specified in link field of current TSS;
    Mark the task just abandoned as NOT BUSY;
    IF EIP is not within CS limit
        THEN #GP(0); FI;
END;
RETURN-TO-VIRTUAL-8086-MODE: 
    (* Interrupted procedure was in virtual-8086 mode: PE = 1, CPL=0, VM = 1 in flag image *)
    IF EIP not within CS limit
        THEN #GP(0); FI;
    EFLAGS ← tempEFLAGS;
    ESP ← Pop();
    SS ← Pop(); (* Pop 2 words; throw away high-order word *)
    ES ← Pop(); (* Pop 2 words; throw away high-order word *)
    DS ← Pop(); (* Pop 2 words; throw away high-order word *)
    FS ← Pop(); (* Pop 2 words; throw away high-order word *)
    GS ← Pop(); (* Pop 2 words; throw away high-order word *)
    CPL ← 3;
    (* Resume execution in Virtual-8086 mode *)
END;
PROTECTED-MODE-RETURN: (* PE = 1 *)
    IF CS(RPL) > CPL
        THEN GOTO RETURN-TO-OUTER-PRIVILEGE-LEVEL;
        ELSE GOTO RETURN-TO-SAME-PRIVILEGE-LEVEL; FI;
END;
RETURN-TO-OUTER-PRIVILEGE-LEVEL:
    IF OperandSize = 32
        THEN
            ESP ← Pop();
            SS ← Pop(); (* 32-bit pop, high-order 16 bits discarded *)
    ELSE IF OperandSize = 16 
        THEN
            ESP ← Pop(); (* 16-bit pop; clear upper bits *)
            SS ← Pop(); (* 16-bit pop *)
        ELSE (* OperandSize = 64 *)
            RSP ← Pop();
            SS ← Pop(); (* 64-bit pop, high-order 48 bits discarded *)
    FI;
    IF new mode ≠ 64-Bit Mode
        THEN
            IF EIP is not within CS limit
                THEN #GP(0); FI;
        ELSE (* new mode = 64-bit mode *)
            IF RIP is non-canonical
                    THEN #GP(0); FI;
    FI;
    EFLAGS (CF, PF, AF, ZF, SF, TF, DF, OF, NT) ← tempEFLAGS;
    IF OperandSize = 32 or or OperandSize = 64
        THEN EFLAGS(RF, AC, ID) ← tempEFLAGS; FI;
    IF CPL ≤ IOPL 
        THEN EFLAGS(IF) ← tempEFLAGS; FI;
    IF CPL = 0
        THEN
            EFLAGS(IOPL) ← tempEFLAGS;
            IF OperandSize = 32 or OperandSize = 64
                THEN EFLAGS(VIF, VIP) ← tempEFLAGS; FI;
    FI;
    CPL ← CS(RPL);
    FOR each SegReg in (ES, FS, GS, and DS)
        DO
            tempDesc ← descriptor cache for SegReg (* hidden part of segment register *)
            IF (SegmentSelector == NULL) OR (tempDesc(DPL) < CPL AND tempDesc(Type) is (data or non-conforming code)))
                THEN (* Segment register invalid *)
                    SegmentSelector ← 0; (*Segment selector becomes null*)
            FI;
        OD;
END;
RETURN-TO-SAME-PRIVILEGE-LEVEL: (* PE = 1, RPL = CPL *)
    IF new mode ≠ 64-Bit Mode
        THEN
            IF EIP is not within CS limit
                THEN #GP(0); FI;
        ELSE (* new mode = 64-bit mode *)
            IF RIP is non-canonical
                    THEN #GP(0); FI;
    FI;
    EFLAGS (CF, PF, AF, ZF, SF, TF, DF, OF, NT) ← tempEFLAGS;
    IF OperandSize = 32 or OperandSize = 64
        THEN EFLAGS(RF, AC, ID) ← tempEFLAGS; FI;
    IF CPL ≤ IOPL
        THEN EFLAGS(IF) ← tempEFLAGS; FI;
    IF CPL = 0 
 
         THEN 
             EFLAGS(IOPL) ← tempEFLAGS;
             IF OperandSize = 32 or OperandSize = 64
                THEN EFLAGS(VIF, VIP) ← tempEFLAGS; FI;
 
    FI;
END;
IA-32e-MODE:
    IF NT = 1
        THEN #GP(0);
    ELSE IF OperandSize = 32
        THEN
            EIP ← Pop();
            CS ← Pop();
            tempEFLAGS ← Pop();
        ELSE IF OperandSize = 16 
            THEN
                EIP ← Pop(); (* 16-bit pop; clear upper bits *)
                CS ← Pop(); (* 16-bit pop *)
                tempEFLAGS ← Pop(); (* 16-bit pop; clear upper bits *)
            FI;
        ELSE (* OperandSize = 64 *)
            THEN
                    RIP ← Pop();
                    CS ← Pop(); (* 64-bit pop, high-order 48 bits discarded *)
                    tempRFLAGS ← Pop();
    FI;
    IF CS.RPL > CPL
        THEN GOTO RETURN-TO-OUTER-PRIVILEGE-LEVEL;
        ELSE
            IF instruction began in 64-Bit Mode
                THEN
                    IF OperandSize = 32
                        THEN
                            ESP ← Pop();
                            SS ← Pop(); (* 32-bit pop, high-order 16 bits discarded *)
                    ELSE IF OperandSize = 16 
                        THEN
                            ESP ← Pop(); (* 16-bit pop; clear upper bits *)
                            SS ← Pop(); (* 16-bit pop *)
                        ELSE (* OperandSize = 64 *)
                            RSP ← Pop();
                            SS ← Pop(); (* 64-bit pop, high-order 48 bits discarded *)
                    FI;
            FI;
            GOTO RETURN-TO-SAME-PRIVILEGE-LEVEL; FI;
END;
```
### Flags Affected
All the flags and fields in the EFLAGS register are potentially modified, depending on the mode of operation of the
processor. If performing a return from a nested task to a previous task, the EFLAGS register will be modified
according to the EFLAGS image stored in the previous task’s TSS.

### Protected Mode Exceptions
<p>#GP(0)
If the return code or stack segment selector is NULL.
If the return instruction pointer is not within the return code segment limit.
<p>#GP(selector)
If a segment selector index is outside its descriptor table limits.
If the return code segment selector RPL is less than the CPL.
If the DPL of a conforming-code segment is greater than the return code segment selector
RPL.
If the DPL for a nonconforming-code segment is not equal to the RPL of the code segment
selector.
If the stack segment descriptor DPL is not equal to the RPL of the return code segment
selector.
If the stack segment is not a writable data segment.
If the stack segment selector RPL is not equal to the RPL of the return code segment selector.
If the segment descriptor for a code segment does not indicate it is a code segment.
If the segment selector for a TSS has its local/global bit set for local.
If a TSS segment descriptor specifies that the TSS is not busy.
If a TSS segment descriptor specifies that the TSS is not available.
<p>#SS(0)
If the top bytes of stack are not within stack limits.
If the return stack segment is not present.
<p>#NP (selector)
If the return code segment is not present.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If an unaligned memory reference occurs when the CPL is 3 and alignment checking is
enabled.
<p>#UD
If the LOCK prefix is used.

### Real-Address Mode Exceptions

<p>#GP
If the return instruction pointer is not within the return code segment limit.
<p>#SS
If the top bytes of stack are not within stack limits.

### Virtual-8086 Mode Exceptions

<p>#GP(0)
If the return instruction pointer is not within the return code segment limit.
IF IOPL not equal to 3.
<p>#PF(fault-code)
If a page fault occurs.
<p>#SS(0)
If the top bytes of stack are not within stack limits.
<p>#AC(0)
If an unaligned memory reference occurs and alignment checking is enabled.
<p>#UD
If the LOCK prefix is used.

### Compatibility Mode Exceptions

<p>#GP(0)
If EFLAGS.NT[bit 14] = 1.
Other exceptions same as in Protected Mode.

### 64-Bit Mode Exceptions
<p>#GP(0)
If EFLAGS.NT[bit 14] = 1.
If the return code segment selector is NULL.
If the stack segment selector is NULL going back to compatibility mode.
If the stack segment selector is NULL going back to CPL3 64-bit mode.
If a NULL stack segment selector RPL is not equal to CPL going back to non-CPL3 64-bit mode.
If the return instruction pointer is not within the return code segment limit.
If the return instruction pointer is non-canonical.
<p>#GP(Selector)
If a segment selector index is outside its descriptor table limits.
If a segment descriptor memory address is non-canonical.
If the segment descriptor for a code segment does not indicate it is a code segment.
If the proposed new code segment descriptor has both the D-bit and L-bit set.
If the DPL for a nonconforming-code segment is not equal to the RPL of the code segment
selector.
If CPL is greater than the RPL of the code segment selector.
If the DPL of a conforming-code segment is greater than the return code segment selector
RPL.
If the stack segment is not a writable data segment.
If the stack segment descriptor DPL is not equal to the RPL of the return code segment
selector.
If the stack segment selector RPL is not equal to the RPL of the return code segment selector.
<p>#SS(0)
If an attempt to pop a value off the stack violates the SS limit.
If an attempt to pop a value off the stack causes a non-canonical address to be referenced.
If the return stack segment is not present.
<p>#NP (selector)
If the return code segment is not present.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If an unaligned memory reference occurs when the CPL is 3 and alignment checking is
enabled.
<p>#UD
If the LOCK prefix is used.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
