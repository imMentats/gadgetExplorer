<b>JMP</b> — Jump
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
		<td>EB cb</td>
		<td>JMP rel8</td>
		<td>D</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Jump short, RIP = RIP + 8-bit displacement sign extended to 64-bits</td>
	</tr>
	<tr>
		<td>E9 cw</td>
		<td>JMP rel16</td>
		<td>D</td>
		<td>N.S.</td>
		<td>Valid</td>
		<td>Jump near, relative, displacement relative to next instruction. Not supported in 64-bit mode.</td>
	</tr>
	<tr>
		<td>E9 cd</td>
		<td>JMP rel32</td>
		<td>D</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Jump near, relative, RIP = RIP + 32-bit displacement sign extended to 64-bits</td>
	</tr>
	<tr>
		<td>FF /4</td>
		<td>JMP r/m16</td>
		<td>M</td>
		<td>N.S.</td>
		<td>Valid</td>
		<td>Jump near, absolute indirect, address = zero- extended r/m16. Not supported in 64-bit mode.</td>
	</tr>
	<tr>
		<td>FF /4</td>
		<td>JMP r/m32</td>
		<td>M</td>
		<td>N.S.</td>
		<td>Valid</td>
		<td>Jump near, absolute indirect, address given in r/m32. Not supported in 64-bit mode.</td>
	</tr>
	<tr>
		<td>FF /4</td>
		<td>JMP r/m64</td>
		<td>M</td>
		<td>Valid</td>
		<td>N.E.</td>
		<td>Jump near, absolute indirect, RIP = 64-Bit offset from register or memory</td>
	</tr>
	<tr>
		<td>EA cd</td>
		<td>JMP ptr16:16</td>
		<td>D</td>
		<td>Inv.</td>
		<td>Valid</td>
		<td>Jump far, absolute, address given in operand</td>
	</tr>
	<tr>
		<td>EA cp</td>
		<td>JMP ptr16:32</td>
		<td>D</td>
		<td>Inv.</td>
		<td>Valid</td>
		<td>Jump far, absolute, address given in operand</td>
	</tr>
	<tr>
		<td>FF /5</td>
		<td>JMP m16:16</td>
		<td>D</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Jump far, absolute indirect, address given in m16:16</td>
	</tr>
	<tr>
		<td>FF /5</td>
		<td>JMP m16:32</td>
		<td>D</td>
		<td>Valid</td>
		<td>Valid</td>
		<td>Jump far, absolute indirect, address given in m16:32.</td>
	</tr>
	<tr>
		<td>REX.W + FF /5</td>
		<td>JMP m16:64</td>
		<td>D</td>
		<td>Valid</td>
		<td>N.E.</td>
		<td>Jump far, absolute indirect, address given in m16:64.</td>
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
		<td>D</td>
		<td>Offset</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>M</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
Transfers program control to a different point in the instruction stream without recording return information. The
destination (target) operand specifies the address of the instruction being jumped to. This operand can be an
immediate value, a general-purpose register, or a memory location.

This instruction can be used to execute four different types of jumps:

 *  Near jump—A jump to an instruction within the current code segment (the segment currently pointed to by the

CS register), sometimes referred to as an intrasegment jump.

 *  Short jump—A near jump where the jump range is limited to –128 to +127 from the current EIP value.

 * Far jump—A jump to an instruction located in a different segment than the current code segment but at the
same privilege level, sometimes referred to as an intersegment jump.

 * Task switch—A jump to an instruction located in a different task.

A task switch can only be executed in protected mode (see Chapter 7, in the Intel® 64 and IA-32 Architectures
Software Developer’s Manual, Volume 3A, for information on performing task switches with the JMP instruction).

Near and Short Jumps. When executing a near jump, the processor jumps to the address (within the current code
segment) that is specified with the target operand. The target operand specifies either an absolute offset (that is
an offset from the base of the code segment) or a relative offset (a signed displacement relative to the current
value of the instruction pointer in the EIP register). A near jump to a relative offset of 8-bits (rel8) is referred to as
a short jump. The CS register is not changed on near and short jumps.

An absolute offset is specified indirectly in a general-purpose register or a memory location (r/m16 or r/m32). The
operand-size attribute determines the size of the target operand (16 or 32 bits). Absolute offsets are loaded
directly into the EIP register. If the operand-size attribute is 16, the upper two bytes of the EIP register are cleared,
resulting in a maximum instruction pointer size of 16 bits.

A relative offset (rel8, rel16, or rel32) is generally specified as a label in assembly code, but at the machine code
level, it is encoded as a signed 8-, 16-, or 32-bit immediate value. This value is added to the value in the EIP
register. (Here, the EIP register contains the address of the instruction following the JMP instruction). When using
relative offsets, the opcode (for short vs. near jumps) and the operand-size attribute (for near relative jumps)
determines the size of the target operand (8, 16, or 32 bits).

Far Jumps in Real-Address or Virtual-8086 Mode. When executing a far jump in real-address or virtual-8086 mode,
the processor jumps to the code segment and offset specified with the target operand. Here the target operand
specifies an absolute far address either directly with a pointer (ptr16:16 or ptr16:32) or indirectly with a memory
location (m16:16 or m16:32). With the pointer method, the segment and address of the called procedure is
encoded in the instruction, using a 4-byte (16-bit operand size) or 6-byte (32-bit operand size) far address imme-
diate. With the indirect method, the target operand specifies a memory location that contains a 4-byte (16-bit
operand size) or 6-byte (32-bit operand size) far address. The far address is loaded directly into the CS and EIP
registers. If the operand-size attribute is 16, the upper two bytes of the EIP register are cleared.

Far Jumps in Protected Mode. When the processor is operating in protected mode, the JMP instruction can be used
to perform the following three types of far jumps:

 *  A far jump to a conforming or non-conforming code segment.

 *  A far jump through a call gate.

 *  A task switch.

(The JMP instruction cannot be used to perform inter-privilege-level far jumps.)

In protected mode, the processor always uses the segment selector part of the far address to access the corresponding
 descriptor in the GDT or LDT. The descriptor type (code segment, call gate, task gate, or TSS) and access
rights determine the type of jump to be performed.

If the selected descriptor is for a code segment, a far jump to a code segment at the same privilege level is
performed. (If the selected code segment is at a different privilege level and the code segment is non-conforming,
a general-protection exception is generated.) A far jump to the same privilege level in protected mode is very
similar to one carried out in real-address or virtual-8086 mode. The target operand specifies an absolute far
address either directly with a pointer (ptr16:16 or ptr16:32) or indirectly with a memory location (m16:16 or
m16:32). The operand-size attribute determines the size of the offset (16 or 32 bits) in the far address. The new
code segment selector and its descriptor are loaded into CS register, and the offset from the instruction is loaded
into the EIP register. Note that a call gate (described in the next paragraph) can also be used to perform far call to
a code segment at the same privilege level. Using this mechanism provides an extra level of indirection and is the
preferred method of making jumps between 16-bit and 32-bit code segments.

When executing a far jump through a call gate, the segment selector specified by the target operand identifies the
call gate. (The offset part of the target operand is ignored.) The processor then jumps to the code segment specified
 in the call gate descriptor and begins executing the instruction at the offset specified in the call gate. No stack
switch occurs. Here again, the target operand can specify the far address of the call gate either directly with a
pointer (ptr16:16 or ptr16:32) or indirectly with a memory location (m16:16 or m16:32).

Executing a task switch with the JMP instruction is somewhat similar to executing a jump through a call gate. Here
the target operand specifies the segment selector of the task gate for the task being switched to (and the offset
part of the target operand is ignored). The task gate in turn points to the TSS for the task, which contains the
segment selectors for the task’s code and stack segments. The TSS also contains the EIP value for the next instruction
 that was to be executed before the task was suspended. This instruction pointer value is loaded into the EIP
register so that the task begins executing again at this next instruction.

The JMP instruction can also specify the segment selector of the TSS directly, which eliminates the indirection of the
task gate. See Chapter 7 in Intel® 64 and IA-32 Architectures Software Developer’s Manual, Volume 3A, for
detailed information on the mechanics of a task switch.
Note that when you execute at task switch with a JMP instruction, the nested task flag (NT) is not set in the EFLAGS
register and the new TSS’s previous task link field is not loaded with the old task’s TSS selector. A return to the
previous task can thus not be carried out by executing the IRET instruction. Switching tasks with the JMP instruction
 differs in this regard from the CALL instruction which does set the NT flag and save the previous task link information
, allowing a return to the calling task with an IRET instruction.

In 64-Bit Mode — The instruction’s operation size is fixed at 64 bits. If a selector points to a gate, then RIP equals
the 64-bit displacement taken from gate; else RIP equals the zero-extended offset from the far pointer referenced
in the instruction.

See the summary chart at the beginning of this section for encoding data and limits.

### Operation

```java
IF near jump
    IF 64-bit Mode
     
        THEN 
            IF near relative jump
             THEN
                tempRIP ← RIP + DEST; (* RIP is instruction following JMP instruction*)
             ELSE (* Near absolute jump *)
                tempRIP ← DEST;
            FI;
        ELSE
            IF near relative jump
             THEN
                tempEIP ← EIP + DEST; (* EIP is instruction following JMP instruction*)
             ELSE (* Near absolute jump *)
                tempEIP ← DEST;
            FI;
    FI;
    IF (IA32_EFER.LMA = 0 or target mode = Compatibility mode) 
    and tempEIP outside code segment limit 
        THEN #GP(0); FI
    IF 64-bit mode and tempRIP is not canonical
        THEN #GP(0);
    FI;
    IF OperandSize = 32
         THEN 
            EIP ← tempEIP; 
         ELSE 
            IF OperandSize = 16
                THEN (* OperandSize = 16 *)
                    EIP ← tempEIP AND 0000FFFFH;
                 ELSE (* OperandSize = 64)
                    RIP ← tempRIP;
                 
            FI;
     FI;
FI;
IF far jump and (PE = 0 or (PE = 1 AND VM = 1)) (* Real-address or virtual-8086 mode *)
     THEN
         tempEIP ← DEST(Offset); (* DEST is ptr16:32 or [m16:32] *)
         IF tempEIP is beyond code segment limit 
            THEN #GP(0); FI;
         CS ← DEST(segment selector); (* DEST is ptr16:32 or [m16:32] *)
         IF OperandSize = 32
             THEN
                EIP ← tempEIP; (* DEST is ptr16:32 or [m16:32] *)
             ELSE (* OperandSize = 16 *)
                EIP ← tempEIP AND 0000FFFFH; (* Clear upper 16 bits *)
         FI;
FI;
IF far jump and (PE = 1 and VM = 0) 
(* IA-32e mode or protected mode, not virtual-8086 mode *)
     THEN
         IF effective address in the CS, DS, ES, FS, GS, or SS segment is illegal
        or segment selector in target operand NULL
                THEN #GP(0); FI;
         IF segment selector index not within descriptor table limits
            THEN #GP(new selector); FI;
        Read type and access rights of segment descriptor;
        IF (EFER.LMA = 0) 
            THEN
                IF segment type is not a conforming or nonconforming code 
                segment, call gate, task gate, or TSS 
                    THEN #GP(segment selector); FI; 
            ELSE
                IF segment type is not a conforming or nonconforming code segment
                call gate
                    THEN #GP(segment selector); FI; 
        FI;
        Depending on type and access rights:
            GO TO CONFORMING-CODE-SEGMENT;
            GO TO NONCONFORMING-CODE-SEGMENT;
            GO TO CALL-GATE;
            GO TO TASK-GATE;
            GO TO TASK-STATE-SEGMENT;
     ELSE 
         #GP(segment selector);
FI;
CONFORMING-CODE-SEGMENT:
    IF L-Bit = 1 and D-BIT = 1 and IA32_EFER.LMA = 1
        THEN GP(new code segment selector); FI;
     IF DPL > CPL 
        THEN #GP(segment selector); FI;
     IF segment not present
        THEN #NP(segment selector); FI;
    tempEIP ← DEST(Offset);
    IF OperandSize = 16 
         THEN tempEIP ← tempEIP AND 0000FFFFH; 
    FI;
    IF (IA32_EFER.LMA = 0 or target mode = Compatibility mode) and 
    tempEIP outside code segment limit 
        THEN #GP(0); FI
    IF tempEIP is non-canonical
        THEN #GP(0); FI;
    CS ← DEST[segment selector]; (* Segment descriptor information also loaded *)
    CS(RPL) ← CPL
    EIP ← tempEIP;
END;
NONCONFORMING-CODE-SEGMENT:
    IF L-Bit = 1 and D-BIT = 1 and IA32_EFER.LMA = 1
        THEN GP(new code segment selector); FI;
    IF (RPL > CPL) OR (DPL ≠ CPL)
        THEN #GP(code segment selector); FI;
    IF segment not present 
        THEN #NP(segment selector); FI;
    tempEIP ← DEST(Offset);
    IF OperandSize = 16 
         THEN tempEIP ← tempEIP AND 0000FFFFH; FI;
    IF (IA32_EFER.LMA = 0 OR target mode = Compatibility mode) 
    and tempEIP outside code segment limit 
        THEN #GP(0); FI
    IF tempEIP is non-canonical THEN #GP(0); FI;
    CS ← DEST[segment selector]; (* Segment descriptor information also loaded *)
    CS(RPL) ← CPL;
    EIP ← tempEIP;
END;
CALL-GATE:
    IF call gate DPL < CPL 
    or call gate DPL < call gate segment-selector RPL 
            THEN #GP(call gate selector); FI;
    IF call gate not present
        THEN #NP(call gate selector); FI;
    IF call gate code-segment selector is NULL
        THEN #GP(0); FI;
    IF call gate code-segment selector index outside descriptor table limits
        THEN #GP(code segment selector); FI;
    Read code segment descriptor;
    IF code-segment segment descriptor does not indicate a code segment
    or code-segment segment descriptor is conforming and DPL > CPL
    or code-segment segment descriptor is non-conforming and DPL ≠ CPL
            THEN #GP(code segment selector); FI;
    IF IA32_EFER.LMA = 1 and (code-segment descriptor is not a 64-bit code segment 
    or code-segment segment descriptor has both L-Bit and D-bit set)
            THEN #GP(code segment selector); FI;
    IF code segment is not present
        THEN #NP(code-segment selector); FI;
     tempEIP ← DEST(Offset);
     IF GateSize = 16 
         THEN tempEIP ← tempEIP AND 0000FFFFH; FI;
    IF (IA32_EFER.LMA = 0 OR target mode = Compatibility mode) AND tempEIP 
    outside code segment limit 
        THEN #GP(0); FI
    CS ← DEST[SegmentSelector); (* Segment descriptor information also loaded *)
    CS(RPL) ← CPL;
    EIP ← tempEIP;
END;
TASK-GATE:
    IF task gate DPL < CPL 
    or task gate DPL < task gate segment-selector RPL 
        THEN #GP(task gate selector); FI;
    IF task gate not present 
        THEN #NP(gate selector); FI;
    Read the TSS segment selector in the task-gate descriptor;
    IF TSS segment selector local/global bit is set to local
    or index not within GDT limits
    or descriptor is not a TSS segment
    or TSS descriptor specifies that the TSS is busy
        THEN #GP(TSS selector); FI;
     IF TSS not present 
        THEN #NP(TSS selector); FI;
     SWITCH-TASKS to TSS;
     IF EIP not within code segment limit 
        THEN #GP(0); FI;
END;
TASK-STATE-SEGMENT:
    IF TSS DPL < CPL
    or TSS DPL < TSS segment-selector RPL
    or TSS descriptor indicates TSS not available
        THEN #GP(TSS selector); FI;
    IF TSS is not present
        THEN #NP(TSS selector); FI;
    SWITCH-TASKS to TSS;
    IF EIP not within code segment limit 
        THEN #GP(0); FI;
END;
```
### Flags Affected
All flags are affected if a task switch occurs; no flags are affected if a task switch does not occur.

### Protected Mode Exceptions

<p>#GP(0)
If offset in target operand, call gate, or TSS is beyond the code segment limits.
If the segment selector in the destination operand, call gate, task gate, or TSS is NULL.
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
If the DS, ES, FS, or GS register is used to access memory and it contains a NULL segment
selector.
<p>#GP(selector)
If the segment selector index is outside descriptor table limits.
If the segment descriptor pointed to by the segment selector in the destination operand is not
for a conforming-code segment, nonconforming-code segment, call gate, task gate, or task
state segment.
If the DPL for a nonconforming-code segment is not equal to the CPL
(When not using a call gate.) If the RPL for the segment’s segment selector is greater than the
CPL.
If the DPL for a conforming-code segment is greater than the CPL.
If the DPL from a call-gate, task-gate, or TSS segment descriptor is less than the CPL or than
the RPL of the call-gate, task-gate, or TSS’s segment selector.
If the segment descriptor for selector in a call gate does not indicate it is a code segment.
If the segment descriptor for the segment selector in a task gate does not indicate an available
TSS.
If the segment selector for a TSS has its local/global bit set for local.
If a TSS segment descriptor specifies that the TSS is busy or not available.
<p>#SS(0)
If a memory operand effective address is outside the SS segment limit.
<p>#NP (selector)
If the code segment being accessed is not present.
If call gate, task gate, or TSS not present.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made while the
current privilege level is 3. (Only occurs when fetching target from memory.)
<p>#UD
If the LOCK prefix is used.

### Real-Address Mode Exceptions

<p>#GP
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
<p>#SS
If a memory operand effective address is outside the SS segment limit.
<p>#UD
If the LOCK prefix is used.

### Virtual-8086 Mode Exceptions

<p>#GP(0)
If the target operand is beyond the code segment limits.
If a memory operand effective address is outside the CS, DS, ES, FS, or GS segment limit.
<p>#SS(0)
If a memory operand effective address is outside the SS segment limit.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made. (Only occurs
when fetching target from memory.)
<p>#UD
If the LOCK prefix is used.

### Compatibility Mode Exceptions

Same as 64-bit mode exceptions.

### 64-Bit Mode Exceptions

<p>#GP(0)
If a memory address is non-canonical.
If target offset in destination operand is non-canonical.
If target offset in destination operand is beyond the new code segment limit.
If the segment selector in the destination operand is NULL.
If the code segment selector in the 64-bit gate is NULL.
<p>#GP(selector)
If the code segment or 64-bit call gate is outside descriptor table limits.
If the code segment or 64-bit call gate overlaps non-canonical space.
If the segment descriptor from a 64-bit call gate is in non-canonical space.
If the segment descriptor pointed to by the segment selector in the destination operand is not
for a conforming-code segment, nonconforming-code segment, 64-bit call gate.
If the segment descriptor pointed to by the segment selector in the destination operand is a
code segment, and has both the D-bit and the L-bit set.
If the DPL for a nonconforming-code segment is not equal to the CPL, or the RPL for the
segment’s segment selector is greater than the CPL.
If the DPL for a conforming-code segment is greater than the CPL.
If the DPL from a 64-bit call-gate is less than the CPL or than the RPL of the 64-bit call-gate.
If the upper type field of a 64-bit call gate is not 0x0.
If the segment selector from a 64-bit call gate is beyond the descriptor table limits.
If the code segment descriptor pointed to by the selector in the 64-bit gate doesn't have the
L-bit set and the D-bit clear.
If the segment descriptor for a segment selector from the 64-bit call gate does not indicate it
is a code segment.
If the code segment is non-conforming and CPL ≠ DPL.
If the code segment is confirming and CPL < DPL.
<p>#NP(selector)
If a code segment or 64-bit call gate is not present.
<p>#UD
(64-bit mode only) If a far jump is direct to an absolute address in memory.
If the LOCK prefix is used.
<p>#PF(fault-code)
If a page fault occurs.
<p>#AC(0)
If alignment checking is enabled and an unaligned memory reference is made while the
current privilege level is 3.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
