<HTML>
<HEAD>
<TITLE>Calculator</TITLE>

<SCRIPT language="JavaScript"> 
 
function calculate() {
 
A = document.frmOne.txtFirstNumber.value
B = document.frmOne.txtSecondNumber.value
 
A = Number(A)
B = Number(B)
C = (A + B)
document.frmOne.txtThirdNumber.value = C
}
 
function calculate2() {
 
A = document.frmOne.txtFirstNumber.value
B = document.frmOne.txtSecondNumber.value
 
A = Number(A)
B = Number(B)
C=(A* B)
document.frmOne.txtThirdNumber.value = C
}
 
function calculate3() {
 
A = document.frmOne.txtFirstNumber.value
B = document.frmOne.txtSecondNumber.value
 
A = Number(A)
B = Number(B)
C=(A/B)
document.frmOne.txtThirdNumber.value = C
}
 
function calculate4() {
 
A = document.frmOne.txtFirstNumber.value
B = document.frmOne.txtSecondNumber.value
 
A = Number(A)
B = Number(B)
C=(A-B)
document.frmOne.txtThirdNumber.value = C

}

</SCRIPT>

</HEAD>
<BODY>
<p><b>Mathematical Calculator.</b></p>


<FORM NAME = frmOne> 
            Number One: 
            <INPUT TYPE = Text NAME = txtFirstNumber SIZE = 5 value =""> 
            Number Two: 
            <INPUT TYPE = Text NAME = txtSecondNumber SIZE = 5 value =""> 
            <P> Total: 
              <INPUT TYPE = Text NAME = txtThirdNumber SIZE = 5 value = ""> 
            <P> 
              <Input Type = Button NAME = b1 VALUE = "Add Numbers" onClick = calculate()> 
              <Input Type = Button NAME = b2 VALUE = "Multiply Numbers" onClick = calculate2()> 
              <Input Type = Button NAME = b3 VALUE = "Divide Numbers" onClick = calculate3()> 
              <Input Type = Button NAME = b4 VALUE = "Subtract Numbers" onClick = calculate4()> 
</FORM> 

<br>

<INPUT TYPE = Button VALUE = "Red Background" Onclick = "document.bgColor = 'Red'">

<INPUT TYPE = Button VALUE = "Blue Text" Onclick = "document.fgColor = 'Blue'">

<INPUT TYPE = Button VALUE = "Black Text" Onclick = "document.fgColor = 'Black'">

<INPUT TYPE = Button VALUE = "White Text" Onclick = "document.fgColor = 'White'">

<INPUT TYPE = Button VALUE = "Green Background" Onclick = "document.bgColor = 'Green'">

<INPUT TYPE = Button VALUE = "White Background" Onclick = "document.bgColor = 'White'">

<INPUT TYPE = Button VALUE = "Black Background" Onclick = "document.bgColor = 'Black'">

<INPUT TYPE = Button VALUE = "Yellow Background" Onclick = "document.bgColor = 'Yellow'">

<p><b><center>Written by Gheter</center></b></p>

</BODY>
</HTML>
