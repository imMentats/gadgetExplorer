<b>VRANGESS</b> — Range Restriction Calculation From a Pair of Scalar Float32 Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>EVEX.NDS.LIG.66.0F3A.W0 51 /r VRANGESS xmm1 {k1}{z}, xmm2, xmm3/m32{sae}, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>AVX512DQ</td>
		<td>Calculate a RANGE operation output value from 2 single-precision floating-point values in xmm2 and xmm3/m32, store the output to xmm1 under writemask. Imm8 specifies the comparison and sign of the range operation.</td>
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
		<td>EVEX.vvvv (r)</td>
		<td>ModRM:r/m (r)</td>
		<td>NA</td>
	</tr>
</table>


### Description
This instruction calculates a range operation output from two input single-precision FP values in the low dword
element of the first source operand (the second operand) and second source operand (the third operand). The
range output is written to the low dword element of the destination operand (the first operand) under the
writemask k1.

Bits7:4 of imm8 byte must be zero. The range operation output is performed in two parts, each configured by a
two-bit control field within imm8[3:0]:

 * Imm8[1:0] specifies the initial comparison operation to be one of max, min, max absolute value or min
absolute value of the input value pair. Each comparison of two input values produces an intermediate result that
combines with the sign selection control (Imm8[3:2]) to determine the final range operation output.

 * Imm8[3:2] specifies the sign of the range operation output to be one of the following: from the first input
value, from the comparison result, set or clear.

The encodings of Imm8[1:0] and Imm8[3:2] are shown in Figure 5-27.

Bits 128:31 of the destination operand are copied from the respective elements of the first source operand.

When one or more of the input value is a NAN, the comparison operation may signal invalid exception (IE). Details
with one of more input value is NAN is listed in Table 5-19. If the comparison raises an IE, the sign select control
(Imm8[3:2]) has no effect to the range operation output, this is indicated also in Table 5-19.

When both input values are zeros of opposite signs, the comparison operation of MIN/MAX in the range compare
operation is slightly different from the conceptually similar FP MIN/MAX operation that are found in the instructions
VMAXPD/VMINPD. The details of MIN/MAX/MIN_ABS/MAX_ABS operation for VRANGEPD/PS/SD/SS for magni-
tude-0, opposite-signed input cases are listed in Table 5-20.

Additionally, non-zero, equal-magnitude with opposite-sign input values perform MIN_ABS or MAX_ABS compar-
ison operation with result listed in Table 5-21.

### Operation

```java
RangeSP(SRC1[31:0], SRC2[31:0], CmpOpCtl[1:0], SignSelCtl[1:0])
{
    // Check if SNAN and report IE, see also Table 5-19
    IF (SRC1=SNAN) THEN RETURN (QNAN(SRC1), set IE);
    IF (SRC2=SNAN) THEN RETURN (QNAN(SRC2), set IE);
    Src1.exp ← SRC1[30:23];
    Src1.fraction ← SRC1[22:0];
    IF ((Src1.exp = 0 ) and (Src1.fraction != 0 )) THEN// Src1 is a denormal number
        IF DAZ THEN Src1.fraction ← 0;
        ELSE IF (SRC2 <> QNAN) Set DE; FI;
    FI;
    Src2.exp ← SRC2[30:23];
    Src2.fraction ← SRC2[22:0];
    IF ((Src2.exp = 0 ) and (Src2.fraction != 0 )) THEN// Src2 is a denormal number
        IF DAZ THEN Src2.fraction ← 0;
        ELSE IF (SRC1 <> QNAN) Set DE; FI;
    FI;
    IF 
        (SRC2 = QNAN) THEN{TMP[31:0] ← SRC1[31:0]}
    ELSE IF(SRC1 = QNAN) THEN{TMP[31:0] ← SRC2[31:0]}
    ELSE IF (Both SRC1, SRC2 are magnitude-0 and opposite-signed) TMP[31:0] ← from Table 5-20
    ELSE IF (Both SRC1, SRC2 are magnitude-equal and opposite-signed and CmpOpCtl[1:0] > 01) TMP[31:0] ← from Table 5-21
    ELSE 
        Case(CmpOpCtl[1:0])
        00: TMP[31:0] ← (SRC1[31:0] ≤ SRC2[31:0]) ? SRC1[31:0] : SRC2[31:0];
        01: TMP[31:0] ← (SRC1[31:0] ≤ SRC2[31:0]) ? SRC2[31:0] : SRC1[31:0];
        10: TMP[31:0] ← (ABS(SRC1[31:0]) ≤ ABS(SRC2[31:0])) ? SRC1[31:0] : SRC2[31:0];
        11: TMP[31:0] ← (ABS(SRC1[31:0]) ≤ ABS(SRC2[31:0])) ? SRC2[31:0] : SRC1[31:0];
        ESAC;
    FI;
    Case(SignSelCtl[1:0])
    00: dest ← (SRC1[31] << 31) OR (TMP[30:0]);// Preserve Src1 sign bit
    01: dest ← TMP[31:0];// Preserve sign of compare result
    10: dest ← (0 << 31) OR (TMP[30:0]);// Zero out sign bit
    11: dest ← (1 << 31) OR (TMP[30:0]);// Set the sign bit
    ESAC;
    RETURN dest[31:0];
}
CmpOpCtl[1:0]= imm8[1:0];
SignSelCtl[1:0]=imm8[3:2];
```
#### VRANGESS
```java
IF k1[0] OR *no writemask*
        THEN DEST[31:0] ← RangeSP (SRC1[31:0], SRC2[31:0], CmpOpCtl[1:0], SignSelCtl[1:0]);
    ELSE 
        IF *merging-masking*
                            ; merging-masking
            THEN *DEST[31:0] remains unchanged*
            ELSE 
                            ; zeroing-masking
                DEST[31:0] = 0
        FI;
FI;
DEST[127:32] ← SRC1[127:32]
DEST[MAXVL-1:128] ← 0
The following example describes a common usage of this instruction for checking that the input operand is bound-
ed between ±150.
VRANGESS zmm_dst, zmm_src, zmm_150, 02h;
Where:
xmm_dst is the destination operand.
xmm_src is the input operand to compare against ±150.
xmm_150 is the reference operand, contains the value of 150.
IMM=02(imm8[1:0]=’10) selects the Min Absolute value operation with selection of src1.sign.
In case |xmm_src| < 150, then its value will be written into zmm_dst. Otherwise, the value stored in xmm_dst
will get the value of 150 (received on zmm_150).
However, the sign control (imm8[3:2]=’00) instructs to select the sign of SRC1 received from xmm_src. So, even
in the case of |xmm_src| ≥ 150, the selected sign of SRC1 is kept. 
Thus, if xmm_src < -150, the result of VRANGESS will be the minimal value of -150 while if xmm_src > +150,
the result of VRANGE will be the maximal value of +150.
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VRANGESS __m128 _mm_range_ss ( __m128 a, __m128 b, int imm);
VRANGESS __m128 _mm_range_round_ss ( __m128 a, __m128 b, int imm, int sae);
VRANGESS __m128 _mm_mask_range_ss (__m128 s, __mmask8 k, __m128 a, __m128 b, int imm);
VRANGESS __m128 _mm_mask_range_round_ss (__m128 s, __mmask8 k, __m128 a, __m128 b, int imm, int sae);
VRANGESS __m128 _mm_maskz_range_ss ( __mmask8 k, __m128 a, __m128 b, int imm);
VRANGESS __m128 _mm_maskz_range_round_ss ( __mmask8 k, __m128 a, __m128 b, int imm, int sae);
```
### SIMD Floating-Point Exceptions
Invalid, Denormal

### Other Exceptions

See Exceptions Type E3.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
