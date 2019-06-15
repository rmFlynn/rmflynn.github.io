---
title: Practic your Distrobutions
updated: 2016-01-24 15:56
---



{% include simple-javascript-quiz/index.html %}


<script src="/assets/js/example.js"></script>
script>
    var userPass = document.getElementById('pass');
    var userName = document.getElementById('fName');
    function submit(){
        alert(userPass.value);
    }
</script>
 <table id="login">
        <tr>
            <td><label>User Name</label></td>
        </tr>
        <tr>
            <td colspan="2"><input class="textBox" id="fName" type="text" maxlength="30"    required/></td>
        </tr>
        <tr>
            <td id="pass"><label>Password</label></td>
        <tr>
            <td colspan="2"><input class="textBox" id="pass" type="text" maxlength="30" required/></td>
        </tr>
        <tr>
            <td><input type="button" class="loginButtons" value="Login" onclick="submit();"/>&nbsp&nbsp&nbsp
            <input type="button" class="loginButtons" value="Cancel"/></td>
    </table>