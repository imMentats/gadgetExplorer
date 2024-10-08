<b>VGATHERDPS / VGATHERDPD</b> — Gather Packed Single, Packed Double with Signed Dword
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/ En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W0 92 /vsib VGATHERDPS xmm1 {k1}, vm32x</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Using signed dword indices, gather single-precision floating- point values from memory using k1 as completion mask.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W0 92 /vsib VGATHERDPS ymm1 {k1}, vm32y</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Using signed dword indices, gather single-precision floating- point values from memory using k1 as completion mask.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W0 92 /vsib VGATHERDPS zmm1 {k1}, vm32z</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Using signed dword indices, gather single-precision floating- point values from memory using k1 as completion mask.</td>
	</tr>
	<tr>
		<td>EVEX.128.66.0F38.W1 92 /vsib VGATHERDPD xmm1 {k1}, vm32x</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Using signed dword indices, gather float64 vector into float64 vector xmm1 using k1 as completion mask.</td>
	</tr>
	<tr>
		<td>EVEX.256.66.0F38.W1 92 /vsib VGATHERDPD ymm1 {k1}, vm32x</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Using signed dword indices, gather float64 vector into float64 vector ymm1 using k1 as completion mask.</td>
	</tr>
	<tr>
		<td>EVEX.512.66.0F38.W1 92 /vsib VGATHERDPD zmm1 {k1}, vm32y</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Using signed dword indices, gather float64 vector into float64 vector zmm1 using k1 as completion mask.</td>
	</tr>
</table>


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
		<td>Tuple1 Scalar</td>
		<td>ModRM:reg (w)</td>
		<td>BaseReg (R): VSIB:base, VectorReg(R): VSIB:index</td>
		<td>NA</td>
		<td>NA</td>
	</tr>
</table>


### Description
A set of single-precision/double-precision faulting-point memory locations pointed by base address BASE_ADDR
and index vector V_INDEX with scale SCALE are gathered. The result is written into a vector register. The elements
are specified via the VSIB (i.e., the index register is a vector register, holding packed indices). Elements will only
be loaded if their corresponding mask bit is one. If an element’s mask bit is not set, the corresponding element of
the destination register is left unchanged. The entire mask register will be set to zero by this instruction unless it
triggers an exception.

This instruction can be suspended by an exception if at least one element is already gathered (i.e., if the exception
is triggered by an element other than the right most one with its mask bit set). When this happens, the destination
register and the mask register (k1) are partially updated; those elements that have been gathered are placed into
the destination register and have their mask bits set to zero. If any traps or interrupts are pending from already
gathered elements, they will be delivered in lieu of the exception; in this case, EFLAG.RF is set to one so an instruction
 breakpoint is not re-triggered when the instruction is continued.

If the data element size is less than the index element size, the higher part of the destination register and the mask
register do not correspond to any elements being gathered. This instruction sets those higher parts to zero. It may
update these unused elements to one or both of those registers even if the instruction triggers an exception, and
even if the instruction triggers the exception before gathering any elements.

Note that:

 * The values may be read from memory in any order. Memory ordering with other instructions follows the Intel-
64 memory-ordering model.

 * Faults are delivered in a right-to-left manner. That is, if a fault is triggered by an element and delivered, all
elements closer to the LSB of the destination zmm will be completed (and non-faulting). Individual elements
closer to the MSB may or may not be completed. If a given element triggers multiple faults, they are delivered
in the conventional order.

 * Elements may be gathered in any order, but faults must be delivered in a right-to left order; thus, elements to
the left of a faulting one may be gathered before the fault is delivered. A given implementation of this
instruction is repeatable - given the same input values and architectural state, the same set of elements to the
left of the faulting one will be gathered.

 * This instruction does not perform AC checks, and so will never deliver an AC fault.

 *  Not valid with 16-bit effective addresses. Will deliver a \#UD fault.

Note that the presence of VSIB byte is enforced in this instruction. Hence, the instruction will \#UD fault if
ModRM.rm is different than 100b.

This instruction has special disp8\*N and alignment rules. N is considered to be the size of a single vector element.

The scaled index may require more bits to represent than the address bits used by the processor (e.g., in 32-bit
mode, if the scale is greater than one). In this case, the most significant bits beyond the number of address bits are
ignored.

The instruction will \#UD fault if the destination vector zmm1 is the same as index vector VINDEX. The instruction
will \#UD fault if the k0 mask register is specified.

### Operation

```java
BASE_ADDR stands for the memory operand base address (a GPR); may not exist
VINDEX stands for the memory operand vector of indices (a vector register)
SCALE stands for the memory operand scalar (1, 2, 4 or 8)
DISP is the optional 1, 2 or 4 byte displacement
```
#### VGATHERDPS (EVEX encoded version)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k1[j] 
        THEN DEST[i+31:i] ← 
            MEM[BASE_ADDR +
                    SignExtend(VINDEX[i+31:i]) * SCALE + DISP]
            k1[j] ← 0
        ELSE *DEST[i+31:i] ← remains unchanged*
    FI;
ENDFOR
k1[MAX_KL-1:KL] ← 0
DEST[MAXVL-1:VL] ← 0
```
#### VGATHERDPD (EVEX encoded version)
```java
(KL, VL) = (2, 128), (4, 256), (8, 512)
FOR j ← 0 TO KL-1
    i ← j * 64
    k ← j * 32
    IF k1[j] 
        THEN DEST[i+63:i] ← MEM[BASE_ADDR +
                    SignExtend(VINDEX[k+31:k]) * SCALE + DISP]
            k1[j] ← 0
        ELSE *DEST[i+63:i] ← remains unchanged*
    FI;
ENDFOR
k1[MAX_KL-1:KL] ← 0
DEST[MAXVL-1:VL] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VGATHERDPD __m512d _mm512_i32gather_pd( __m256i vdx, void * base, int scale);
VGATHERDPD __m512d _mm512_mask_i32gather_pd(__m512d s, __mmask8 k, __m256i vdx, void * base, int scale);
VGATHERDPD __m256d _mm256_mmask_i32gather_pd(__m256d s, __mmask8 k, __m128i vdx, void * base, int scale);
VGATHERDPD __m128d _mm_mmask_i32gather_pd(__m128d s, __mmask8 k, __m128i vdx, void * base, int scale);
VGATHERDPS __m512 _mm512_i32gather_ps( __m512i vdx, void * base, int scale);
VGATHERDPS __m512 _mm512_mask_i32gather_ps(__m512 s, __mmask16 k, __m512i vdx, void * base, int scale);
VGATHERDPS __m256 _mm256_mmask_i32gather_ps(__m256 s, __mmask8 k, __m256i vdx, void * base, int scale);
GATHERDPS __m128 _mm_mmask_i32gather_ps(__m128 s, __mmask8 k, __m128i vdx, void * base, int scale);
```
### SIMD Floating-Point Exceptions
None

### Other Exceptions

See Exceptions Type E12.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
