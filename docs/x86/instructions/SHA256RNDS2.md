<b>SHA256RNDS2</b> — Perform Two Rounds of SHA256 Operation
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op/En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F 38 CB /r SHA256RNDS2 xmm1, xmm2/m128, <XMM0></td>
		<td>RM0</td>
		<td>V/V</td>
		<td>SHA</td>
		<td>Perform 2 rounds of SHA256 operation using an initial SHA256 state (C,D,G,H) from xmm1, an initial SHA256 state (A,B,E,F) from xmm2/m128, and a pre-computed sum of the next 2 round mes- sage dwords and the corresponding round constants from the implicit operand XMM0, storing the updated SHA256 state (A,B,E,F) result in xmm1.</td>
	</tr>
</table>


### Instruction Operand Encoding
<table>
	<tr>
		<td><b>Op/En</b></td>
		<td><b>Operand 1</b></td>
		<td><b>Operand 2</b></td>
		<td><b>Operand 3</b></td>
	</tr>
	<tr>
		<td>RMI</td>
		<td>ModRM:reg (r, w)</td>
		<td>ModRM:r/m (r)</td>
		<td>Implicit XMM0 (r)</td>
	</tr>
</table>


### Description
The SHA256RNDS2 instruction performs 2 rounds of SHA256 operation using an initial SHA256 state (C,D,G,H)
from the first operand, an initial SHA256 state (A,B,E,F) from the second operand, and a pre-computed sum of the
next 2 round message dwords and the corresponding round constants from the implicit operand xmm0. Note that
only the two lower dwords of XMM0 are used by the instruction.

The updated SHA256 state (A,B,E,F) is written to the first operand, and the second operand can be used as the
updated state (C,D,G,H) in later rounds.

### Operation


#### SHA256RNDS2
```java
A_0 ← SRC2[127:96]; 
B_0 ← SRC2[95:64]; 
C_0 ← SRC1[127:96]; 
D_0 ← SRC1[95:64]; 
E_0 ← SRC2[63:32]; 
F_0 ← SRC2[31:0]; 
G_0 ← SRC1[63:32]; 
H_0 ← SRC1[31:0]; 
WK0 ← XMM0[31: 0]; 
WK1 ← XMM0[63: 32]; 
FOR i = 0 to 1
    A_(i +1) ← Ch (E_i, F_i, G_i) +Σ1( E_i) +WKi+ H_i + Maj(A_i , B_i, C_i) +Σ0( A_i); 
    B_(i +1) ← A_i; 
    C_(i +1) ← B_i ; 
    D_(i +1) ← C_i; 
    E_(i +1) ← Ch (E_i, F_i, G_i) +Σ1( E_i) +WKi+ H_i + D_i; 
    F_(i +1) ← E_i ; 
    G_(i +1) ← F_i; 
    H_(i +1) ← G_i; 
ENDFOR
DEST[127:96] ← A_2; 
DEST[95:64] ← B_2; 
DEST[63:32] ← E_2; 
DEST[31:0] ← F_2; 
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
SHA256RNDS2: __m128i _mm_sha256rnds2_epu32(__m128i, __m128i, __m128i);
```
### Flags Affected
None

### SIMD Floating-Point Exceptions

None

### Other Exceptions

See Exceptions Type 4.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
