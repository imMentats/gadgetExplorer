<b>CMPPS</b> — Compare Packed Single-Precision Floating-Point Values
<table>
	<tr>
		<td><b>Opcode/ Instruction</b></td>
		<td><b>Op / En</b></td>
		<td><b>64/32 bit Mode Support</b></td>
		<td><b>CPUID Feature Flag</b></td>
		<td><b>Description</b></td>
	</tr>
	<tr>
		<td>NP 0F C2 /r ib CMPPS xmm1, xmm2/m128, imm8</td>
		<td>A</td>
		<td>V/V</td>
		<td>SSE</td>
		<td>Compare packed single-precision floating-point values in xmm2/m128 and xmm1 using bits 2:0 of imm8 as a comparison predicate.</td>
	</tr>
	<tr>
		<td>VEX.NDS.128.0F.WIG C2 /r ib VCMPPS xmm1, xmm2, xmm3/m128, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Compare packed single-precision floating-point values in xmm3/m128 and xmm2 using bits 4:0 of imm8 as a comparison predicate.</td>
	</tr>
	<tr>
		<td>VEX.NDS.256.0F.WIG C2 /r ib VCMPPS ymm1, ymm2, ymm3/m256, imm8</td>
		<td>B</td>
		<td>V/V</td>
		<td>AVX</td>
		<td>Compare packed single-precision floating-point values in ymm3/m256 and ymm2 using bits 4:0 of imm8 as a comparison predicate.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.128.0F.W0 C2 /r ib VCMPPS k1 {k2}, xmm2, xmm3/m128/m32bcst, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Compare packed single-precision floating-point values in xmm3/m128/m32bcst and xmm2 using bits 4:0 of imm8 as a comparison predicate with writemask k2 and leave the result in mask register k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.256.0F.W0 C2 /r ib VCMPPS k1 {k2}, ymm2, ymm3/m256/m32bcst, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512VL AVX512F</td>
		<td>Compare packed single-precision floating-point values in ymm3/m256/m32bcst and ymm2 using bits 4:0 of imm8 as a comparison predicate with writemask k2 and leave the result in mask register k1.</td>
	</tr>
	<tr>
		<td>EVEX.NDS.512.0F.W0 C2 /r ib VCMPPS k1 {k2}, zmm2, zmm3/m512/m32bcst{sae}, imm8</td>
		<td>C</td>
		<td>V/V</td>
		<td>AVX512F</td>
		<td>Compare packed single-precision floating-point values in zmm3/m512/m32bcst and zmm2 using bits 4:0 of imm8 as a comparison predicate with writemask k2 and leave the result in mask register k1.</td>
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
		<td>NA</td>
		<td>ModRM:reg (r, w)</td>
		<td>ModRM:r/m (r)</td>
		<td>Imm8</td>
		<td>NA</td>
	</tr>
	<tr>
		<td>B</td>
		<td>NA</td>
		<td>ModRM:reg (w)</td>
		<td>VEX.vvvv</td>
		<td>ModRM:r/m (r)</td>
		<td>Imm8</td>
	</tr>
	<tr>
		<td>C</td>
		<td>Full</td>
		<td>ModRM:reg (w)</td>
		<td>EVEX.vvvv</td>
		<td>ModRM:r/m (r)</td>
		<td>Imm8</td>
	</tr>
</table>


### Description
Performs a SIMD compare of the packed single-precision floating-point values in the second source operand and
the first source operand and returns the results of the comparison to the destination operand. The comparison
predicate operand (immediate byte) specifies the type of comparison performed on each of the pairs of packed
values.

EVEX encoded versions: The first source operand (second operand) is a ZMM/YMM/XMM register. The second
source operand can be a ZMM/YMM/XMM register, a 512/256/128-bit memory location or a 512/256/128-bit vector
broadcasted from a 32-bit memory location. The destination operand (first operand) is an opmask register.
Comparison results are written to the destination operand under the writemask k2. Each comparison result is a
single mask bit of 1 (comparison true) or 0 (comparison false).

VEX.256 encoded version: The first source operand (second operand) is a YMM register. The second source operand
(third operand) can be a YMM register or a 256-bit memory location. The destination operand (first operand) is a
YMM register. Eight comparisons are performed with results written to the destination operand. The result of each
comparison is a doubleword mask of all 1s (comparison true) or all 0s (comparison false).

128-bit Legacy SSE version: The first source and destination operand (first operand) is an XMM register. The
second source operand (second operand) can be an XMM register or 128-bit memory location. Bits (MAXVL-1:128)
of the corresponding ZMM destination register remain unchanged. Four comparisons are performed with results
written to bits 127:0 of the destination operand. The result of each comparison is a doubleword mask of all 1s
(comparison true) or all 0s (comparison false).
VEX.128 encoded version: The first source operand (second operand) is an XMM register. The second source
operand (third operand) can be an XMM register or a 128-bit memory location. Bits (MAXVL-1:128) of the destination
 ZMM register are zeroed. Four comparisons are performed with results written to bits 127:0 of the destination
operand.

The comparison predicate operand is an 8-bit immediate:

 * For instructions encoded using the VEX prefix and EVEX prefix, bits 4:0 define the type of comparison to be
performed (see Table 3-1). Bits 5 through 7 of the immediate are reserved.

 * For instruction encodings that do not use VEX prefix, bits 2:0 define the type of comparison to be made (see
the first 8 rows of Table 3-1). Bits 3 through 7 of the immediate are reserved.

The unordered relationship is true when at least one of the two source operands being compared is a NaN; the
ordered relationship is true when neither source operand is a NaN.

A subsequent computational instruction that uses the mask result in the destination operand as an input operand
will not generate an exception, because a mask of all 0s corresponds to a floating-point value of +0.0 and a mask
of all 1s corresponds to a QNaN.

Note that processors with “CPUID.1H:ECX.AVX =0” do not implement the “greater-than”, “greater-than-or-equal”,
“not-greater than”, and “not-greater-than-or-equal relations” predicates. These comparisons can be made either
by using the inverse relationship (that is, use the “not-less-than-or-equal” to make a “greater-than” comparison)
or by using software emulation. When using software emulation, the program must swap the operands (copying
registers when necessary to protect the data that will now be in the destination), and then perform the compare
using a different predicate. The predicate to be used for these emulations is listed in the first 8 rows of Table 3-7
(Intel 64 and IA-32 Architectures Software Developer’s Manual Volume 2A) under the heading Emulation.

Compilers and assemblers may implement the following two-operand pseudo-ops in addition to the three-operand
CMPPS instruction, for processors with “CPUID.1H:ECX.AVX =0”. See Table 3-4. Compiler should treat reserved
Imm8 values as illegal syntax.

Table 3-4. Pseudo-Op and CMPPS Implementation
:
<table>
	<tr>
		<td><b>Pseudo-Op</b></td>
		<td><b>CMPPS Implementation</b></td>
	</tr>
	<tr>
		<td>CMPEQPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 0</td>
	</tr>
	<tr>
		<td>CMPLTPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 1</td>
	</tr>
	<tr>
		<td>CMPLEPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 2</td>
	</tr>
	<tr>
		<td>CMPUNORDPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 3</td>
	</tr>
	<tr>
		<td>CMPNEQPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 4</td>
	</tr>
	<tr>
		<td>CMPNLTPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 5</td>
	</tr>
	<tr>
		<td>CMPNLEPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 6</td>
	</tr>
	<tr>
		<td>CMPORDPS xmm1, xmm2</td>
		<td>CMPPS xmm1, xmm2, 7</td>
	</tr>
</table>

The greater-than relations that the processor does not implement require more than one instruction to emulate in
software and therefore should not be implemented as pseudo-ops. (For these, the programmer should reverse the
operands of the corresponding less than relations and use move instructions to ensure that the mask is moved to
the correct destination register and that the source operand is left intact.)

Processors with “CPUID.1H:ECX.AVX =1” implement the full complement of 32 predicates shown in Table 3-5, soft-
ware emulation is no longer needed. Compilers and assemblers may implement the following three-operand
pseudo-ops in addition to the four-operand VCMPPS instruction. See Table 3-5, where the notation of reg1 and
reg2 represent either XMM registers or YMM registers. Compiler should treat reserved Imm8 values as illegal
syntax. Alternately, intrinsics can map the pseudo-ops to pre-defined constants to support a simpler intrinsic inter-
face. Compilers and assemblers may implement three-operand pseudo-ops for EVEX encoded VCMPPS instructions
in a similar fashion by extending the syntax listed in Table 3-5.

:
Table 3-5. Pseudo-Op and VCMPPS Implementation
<table>
	<tr>
		<td><b>Pseudo-Op</b></td>
		<td><b>CMPPS Implementation</b></td>
	</tr>
	<tr>
		<td>VCMPEQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0</td>
	</tr>
	<tr>
		<td>VCMPLTPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1</td>
	</tr>
	<tr>
		<td>VCMPLEPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 2</td>
	</tr>
	<tr>
		<td>VCMPUNORDPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 3</td>
	</tr>
	<tr>
		<td>VCMPNEQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 4</td>
	</tr>
	<tr>
		<td>VCMPNLTPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 5</td>
	</tr>
	<tr>
		<td>VCMPNLEPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 6</td>
	</tr>
	<tr>
		<td>VCMPORDPS reg1, reg2, reg3 VCMPEQ_UQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 7 VCMPPS reg1, reg2, reg3, 8</td>
	</tr>
	<tr>
		<td>VCMPNGEPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 9</td>
	</tr>
	<tr>
		<td>VCMPNGTPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0AH</td>
	</tr>
	<tr>
		<td>VCMPFALSEPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0BH</td>
	</tr>
	<tr>
		<td>VCMPNEQ_OQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0CH</td>
	</tr>
	<tr>
		<td>VCMPGEPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0DH</td>
	</tr>
	<tr>
		<td>VCMPGTPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0EH</td>
	</tr>
	<tr>
		<td>VCMPTRUEPS reg1, reg2, reg3 VCMPEQ_OSPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 0FH VCMPPS reg1, reg2, reg3, 10H</td>
	</tr>
	<tr>
		<td>VCMPLT_OQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 11H</td>
	</tr>
	<tr>
		<td>VCMPLE_OQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 12H</td>
	</tr>
	<tr>
		<td>VCMPUNORD_SPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 13H</td>
	</tr>
	<tr>
		<td>VCMPNEQ_USPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 14H</td>
	</tr>
	<tr>
		<td>VCMPNLT_UQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 15H</td>
	</tr>
	<tr>
		<td>VCMPNLE_UQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 16H</td>
	</tr>
	<tr>
		<td>VCMPORD_SPS reg1, reg2, reg3 VCMPEQ_USPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 17H VCMPPS reg1, reg2, reg3, 18H</td>
	</tr>
	<tr>
		<td>VCMPNGE_UQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 19H</td>
	</tr>
	<tr>
		<td>VCMPNGT_UQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1AH</td>
	</tr>
	<tr>
		<td>VCMPFALSE_OSPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1BH</td>
	</tr>
	<tr>
		<td>VCMPNEQ_OSPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1CH</td>
	</tr>
	<tr>
		<td>VCMPGE_OQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1DH</td>
	</tr>
	<tr>
		<td>VCMPGT_OQPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1EH</td>
	</tr>
	<tr>
		<td>VCMPTRUE_USPS reg1, reg2, reg3</td>
		<td>VCMPPS reg1, reg2, reg3, 1FH</td>
	</tr>
</table>


### Operation

```java
CASE (COMPARISON PREDICATE) OF
    0: OP3 ← EQ_OQ; OP5 ← EQ_OQ;
    1: OP3 ← LT_OS; OP5 ← LT_OS;
    2: OP3 ← LE_OS; OP5 ← LE_OS;
    3: OP3 ← UNORD_Q; OP5 ← UNORD_Q;
    4: OP3 ← NEQ_UQ; OP5 ← NEQ_UQ;
    5: OP3 ← NLT_US; OP5 ← NLT_US;
    6: OP3 ← NLE_US; OP5 ← NLE_US;
    7: OP3 ← ORD_Q; OP5 ← ORD_Q;
    8: OP5 ← EQ_UQ;
    9: OP5 ← NGE_US;
    10: OP5 ← NGT_US;
    11: OP5 ← FALSE_OQ;
    12: OP5 ← NEQ_OQ;
    13: OP5 ← GE_OS;
    14: OP5 ← GT_OS;
    15: OP5 ← TRUE_UQ;
    16: OP5 ← EQ_OS;
    17: OP5 ← LT_OQ;
    18: OP5 ← LE_OQ;
    19: OP5 ← UNORD_S;
    20: OP5 ← NEQ_US;
    21: OP5 ← NLT_UQ;
    22: OP5 ← NLE_UQ;
    23: OP5 ← ORD_S;
    24: OP5 ← EQ_US;
    25: OP5 ← NGE_UQ;
    26: OP5 ← NGT_UQ;
    27: OP5 ← FALSE_OS;
    28: OP5 ← NEQ_OS;
    29: OP5 ← GE_OQ;
    30: OP5 ← GT_OQ;
    31: OP5 ← TRUE_US;
    DEFAULT: Reserved
ESAC;
```
#### VCMPPS (EVEX encoded versions)
```java
(KL, VL) = (4, 128), (8, 256), (16, 512)
FOR j ← 0 TO KL-1
    i ← j * 32
    IF k2[j] OR *no writemask*
        THEN 
            IF (EVEX.b = 1) AND (SRC2 *is memory*)
                THEN
                    CMP ← SRC1[i+31:i] OP5 SRC2[31:0]
                ELSE 
                    CMP ← SRC1[i+31:i] OP5 SRC2[i+31:i]
            FI;
            IF CMP = TRUE
                THEN DEST[j] ← 1;
                ELSE DEST[j] ← 0; FI;
        ELSE 
                DEST[j] ← 0
                            ; zeroing-masking onlyFI;
    FI;
ENDFOR
DEST[MAX_KL-1:KL] ← 0
```
#### VCMPPS (VEX.256 encoded version)
```java
CMP0 ← SRC1[31:0] OP5 SRC2[31:0];
CMP1 ← SRC1[63:32] OP5 SRC2[63:32];
CMP2 ← SRC1[95:64] OP5 SRC2[95:64];
CMP3 ← SRC1[127:96] OP5 SRC2[127:96];
CMP4 ← SRC1[159:128] OP5 SRC2[159:128];
CMP5 ← SRC1[191:160] OP5 SRC2[191:160];
CMP6 ← SRC1[223:192] OP5 SRC2[223:192];
CMP7 ← SRC1[255:224] OP5 SRC2[255:224];
IF CMP0 = TRUE
    THEN DEST[31:0] ←FFFFFFFFH;
    ELSE DEST[31:0] ← 000000000H; FI;
IF CMP1 = TRUE
    THEN DEST[63:32] ← FFFFFFFFH;
    ELSE DEST[63:32] ←000000000H; FI;
IF CMP2 = TRUE
    THEN DEST[95:64] ← FFFFFFFFH;
    ELSE DEST[95:64] ← 000000000H; FI;
IF CMP3 = TRUE
    THEN DEST[127:96] ← FFFFFFFFH;
    ELSE DEST[127:96] ← 000000000H; FI;
IF CMP4 = TRUE
    THEN DEST[159:128] ← FFFFFFFFH;
    ELSE DEST[159:128] ← 000000000H; FI;
IF CMP5 = TRUE
    THEN DEST[191:160] ← FFFFFFFFH;
    ELSE DEST[191:160] ← 000000000H; FI;
IF CMP6 = TRUE
    THEN DEST[223:192] ← FFFFFFFFH;
    ELSE DEST[223:192] ←000000000H; FI;
IF CMP7 = TRUE
    THEN DEST[255:224] ← FFFFFFFFH;
    ELSE DEST[255:224] ← 000000000H; FI;
DEST[MAXVL-1:256] ← 0
```
#### VCMPPS (VEX.128 encoded version)
```java
CMP0 ← SRC1[31:0] OP5 SRC2[31:0];
CMP1 ← SRC1[63:32] OP5 SRC2[63:32];
CMP2 ← SRC1[95:64] OP5 SRC2[95:64];
CMP3 ← SRC1[127:96] OP5 SRC2[127:96];
IF CMP0 = TRUE
    THEN DEST[31:0] ←FFFFFFFFH;
    ELSE DEST[31:0] ← 000000000H; FI;
IF CMP1 = TRUE
    THEN DEST[63:32] ← FFFFFFFFH;
    ELSE DEST[63:32] ← 000000000H; FI;
IF CMP2 = TRUE
    THEN DEST[95:64] ← FFFFFFFFH;
    ELSE DEST[95:64] ← 000000000H; FI;
IF CMP3 = TRUE
    THEN DEST[127:96] ← FFFFFFFFH;
    ELSE DEST[127:96] ←000000000H; FI;
DEST[MAXVL-1:128] ← 0
```
#### CMPPS (128-bit Legacy SSE version)
```java
CMP0 ← SRC1[31:0] OP3 SRC2[31:0];
CMP1 ← SRC1[63:32] OP3 SRC2[63:32];
CMP2 ← SRC1[95:64] OP3 SRC2[95:64];
CMP3 ← SRC1[127:96] OP3 SRC2[127:96];
IF CMP0 = TRUE
    THEN DEST[31:0] ←FFFFFFFFH;
    ELSE DEST[31:0] ← 000000000H; FI;
IF CMP1 = TRUE
    THEN DEST[63:32] ← FFFFFFFFH;
    ELSE DEST[63:32] ← 000000000H; FI;
IF CMP2 = TRUE
    THEN DEST[95:64] ← FFFFFFFFH;
    ELSE DEST[95:64] ← 000000000H; FI;
IF CMP3 = TRUE
    THEN DEST[127:96] ← FFFFFFFFH;
    ELSE DEST[127:96] ←000000000H; FI;
DEST[MAXVL-1:128] (Unmodified)
```
### Intel C/C++ Compiler Intrinsic Equivalent
```c
VCMPPS __mmask16 _mm512_cmp_ps_mask( __m512 a, __m512 b, int imm);
VCMPPS __mmask16 _mm512_cmp_round_ps_mask( __m512 a, __m512 b, int imm, int sae);
VCMPPS __mmask16 _mm512_mask_cmp_ps_mask( __mmask16 k1, __m512 a, __m512 b, int imm);
VCMPPS __mmask16 _mm512_mask_cmp_round_ps_mask( __mmask16 k1, __m512 a, __m512 b, int imm, int sae);
VCMPPD __mmask8 _mm256_cmp_ps_mask( __m256 a, __m256 b, int imm);
VCMPPS __mmask8 _mm256_mask_cmp_ps_mask( __mmask8 k1, __m256 a, __m256 b, int imm);
VCMPPS __mmask8 _mm_cmp_ps_mask( __m128 a, __m128 b, int imm);
VCMPPS __mmask8 _mm_mask_cmp_ps_mask( __mmask8 k1, __m128 a, __m128 b, int imm);
VCMPPS __m256 _mm256_cmp_ps(__m256 a, __m256 b, int imm)
CMPPS __m128 _mm_cmp_ps(__m128 a, __m128 b, int imm)
```
### SIMD Floating-Point Exceptions
Invalid if SNaN operand and invalid if QNaN and predicate as listed in Table 3-1.

Denormal

### Other Exceptions
VEX-encoded instructions, see Exceptions Type 2.
EVEX-encoded instructions, see Exceptions Type E2.

 --- 
<p align="right"><i>Source: Intel® Architecture Software Developer's Manual (May 2018)<br>Generated: 5-6-2018</i></p>
