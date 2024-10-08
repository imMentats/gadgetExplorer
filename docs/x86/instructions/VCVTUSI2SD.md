<b>VCVTUSI2SD</b> — Convert Unsigned Integer to Scalar Double-Precision Floating-Point Value
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.NDS.LIG.F2.0F.W0 7B /r VCVTUSI2SD xmm1, xmm2, r/m32</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Convert one unsigned doubleword integer from r/m32 to one double-precision floating-point value in xmm1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.LIG.F2.0F.W1 7B /r VCVTUSI2SD xmm1, xmm2, r/m64{er}</td>
		<td>A</td>
		<td>V/N.E.1</td>
		<td>AVX512F</td>
		<td>Convert one unsigned quadword integer from r/m64 to one double-precision floating-point value in xmm1.</td>
	</tr>
</table>

NOTES:
1. For this specific instruction, EVEX.W in non-64 bit is ignored; the instructions behaves as if the W0 version is
used.

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
		<td>EVEX.vvvv</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
Converts an unsigned doubleword integer (or unsigned quadword integer if operand size is 64 bits) in the second
source operand to a double-precision floating-point value in the destination operand. The result is stored in the low
quadword of the destination operand. When conversion is inexact, the value returned is rounded according to the
rounding control bits in the MXCSR register.

The second source operand can be a general-purpose register or a 32/64-bit memory location. The first source and
destination operands are XMM registers. Bits (127:64) of the XMM register destination are copied from corresponding
 bits in the first source operand. Bits (MAXVL-1:128) of the destination register are zeroed.

EVEX.W1 version: promotes the instruction to use 64-bit input value in 64-bit mode.

EVEX.W0 version: attempt to encode this instruction with EVEX embedded rounding is ignored.

### Operation


#### VCVTUSI2SD (EVEX encoded version)
```java
IF (SRC2 *is register*) AND (EVEX.b = 1) 
    THEN
        SET_RM(EVEX.RC);
    ELSE 
        SET_RM(MXCSR.RM);
FI;
IF 64-Bit Mode And OperandSize = 64
THEN
    DEST[63:0] ← Convert_UInteger_To_Double_Precision_Floating_Point(SRC2[63:0]);
ELSE
    DEST[63:0] ← Convert_UInteger_To_Double_Precision_Floating_Point(SRC2[31:0]);
FI;
DEST[127:64] ← SRC1[127:64]
DEST[MAXVL-1:128] ← 0
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VCVTUSI2SD __m128d _mm_cvtu32_sd( __m128d s, unsigned a); 
VCVTUSI2SD __m128d _mm_cvtu64_sd( __m128d s, unsigned __int64 a);
VCVTUSI2SD __m128d _mm_cvt_roundu64_sd( __m128d s, unsigned __int64 a, int r);
```
### SIMD Floating-Point Exceptions
Precision

### Other Exceptions

See Exceptions Type E3NF if W1, else type E10NF.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
