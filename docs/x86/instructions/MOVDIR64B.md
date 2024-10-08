<b>MOVDIR64B</b> — Move 64 Bytes as Direct Store
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>66 0F 38 F8 /r MOVDIR64B r16/r32/r64, m512</td>
		<td>A</td>
		<td>V/V</td>
		<td>MOVDIR64B</td>
		<td>Move 64-bytes as direct-store with guaranteed 64-byte write atomicity from the source memory operand address to destination memory address specified as offset to ES segment in the register operand.</td>
	</tr>
</table>


### Instruction Operand Encoding
<table>
	<tr>
		<td><b>Op/En</b></td>
		<td><b>Tuple</b></td>
		<td><b>Operand 1</b></td>
		<td><b>Operand 2</b></td>
		<td><b>Operand 3</b></td>
		<td><b>Operand 4</b></td>
	</tr>
	<tr>
		<td>A</td>
		<td>NA</td>
		<td>ModRM:reg (w)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
Moves 64-bytes as direct-store with 64-byte write atomicity from source memory address to destination memory
address. The source operand is a normal memory operand (MODRM.MOD != 0b11). The destination operand is a
memory location specified in a general-purpose register. The register content is interpreted as an offset into ES
segment without any segment override. In 64-bit mode, the register operand width is 64-bits (32-bits with 67H
prefix). Outside of 64-bit mode, the register width is 32-bits when CS.D=1 (16-bits with 67H prefix), and 16-bits
when CS.D=0 (32-bits with 67H prefix). MOVDIR64B requires the destination address to be 64-byte aligned. No
alignment restriction is enforced for source operand.

MOVDIR64B reads 64-bytes from the source memory address and performs a 64-byte direct-store operation to the
destination address. The load operation follows normal read ordering based on source address memory-type. The
direct-store is implemented by using the write combining (WC) memory type protocol for writing data. Using this
protocol, the processor does not write the data into the cache hierarchy, nor does it fetch the corresponding cache
line from memory into the cache hierarchy. If the destination address is cached, the line is written-back (if modified) and invalidated from the cache, before the direct-store.

Unlike stores with non-temporal hint which allow UC/WP memory-type for destination to override the non-temporal
hint, direct-stores always follow WC memory type protocol irrespective of destination address memory type
(including UC/WP types). Unlike WC stores and stores with non-temporal hint, direct-stores are eligible for immediate 
eviction from the write-combining buffer, and thus not combined with younger stores (including direct-stores)
to the same address. Older WC and non-temporal stores held in the write-combing buffer may be combined with
younger direct stores to the same address. Because WC protocol used by direct-stores follow weakly-ordered
memory consistency model, fencing operation using SFENCE or MFENCE should follow the MOVDIR64B instruction
to enforce ordering when needed.

There is no atomicity guarantee provided for the 64-byte load operation from source address, and processor 
implementations may use multiple load operations to read the 64-bytes. The 64-byte direct-store issued by MOVDIR64B
guarantees 64-byte write-completion atomicity. This means that the data arrives at the destination in a single 
undivided 64-byte write transaction.

Availability of the MOVDIR64B instruction is indicated by the presence of the CPUID feature flag MOVDIR64B (bit
28 of the ECX register in leaf 07H, see “CPUID — CPU Identification” in Chapter 1).

### Operation

```java
DEST ← SRC;
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
MOVDIR64B void _movdir64b(void *dst, const void* src)
```
### Protected Mode Exceptions
<p>#GP(0)
For an illegal memory operand effective address in the CS, DS, ES, FS or GS segments.
If address in destination (register) operand is not aligned to a 64-byte boundary.
<p>#SS(0)
For an illegal address in the SS segment.
<p>#PF (fault-code)
For a page fault.
<p>#UD
If CPUID.07H.0H:ECX.MOVDIR64B[bit 28] = 0.
If LOCK prefix is used.

### Real-Address Mode Exceptions

<p>#GP
If any part of the operand lies outside the effective address space from 0 to FFFFH.
If address in destination (register) operand is not aligned to a 64-byte boundary.
<p>#UD
If CPUID.07H.0H:ECX.MOVDIR64B[bit 28] = 0.
If LOCK prefix is used.

### Virtual-8086 Mode Exceptions

Same exceptions as in real address mode.
<p>#PF (fault-code)
For a page fault.

### Compatibility Mode Exceptions

Same exceptions as in protected mode.

### 64-Bit Mode Exceptions

<p>#SS(0)
If memory address referencing the SS segment is in non-canonical form.
<p>#GP(0)
If the memory address is in non-canonical form.
If address in destination (register) operand is not aligned to a 64-byte boundary.
<p>#PF (fault-code)
For a page fault.
<p>#UD
If CPUID.07H.0H:ECX.MOVDIR64B[bit 28] = 0.
If LOCK prefix is used.

 --- 
<p align="right"><i>Source: Intel® Architecture Instruction Set Extensions and Future Features Programming Reference (May 2018)<br>Generated: 5-6-2018</i></p>
