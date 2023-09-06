<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
  <link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/userlogin.css">
</head>
<body>
<div id="container">
    <!-- signinform -->
    <div class="forms">
      <h1 class="sign">Sign in</h1>
      <form id="loginform"  action="userlogin" method="post">
        <input type="email"   name="uemail_id"placeholder="Email address " id="email" aria-label="email" pattern="^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
<br>
        <input type="password" name="userpass" placeholder="Password" id="password" aria-label="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        title="PLease fill the password with one symbols and Upper case" required>
<br>
        <!-- <a href="../../index.html"><input type="button" value="Login" id="login" aria-label="button" ></a> -->
        <button id="login" type="submit">Login</button>
<br>
        <!-- <a class="fp" href="#">Forget password</a><br> -->
        <p class="newsign">New user</p>
<br>
        <!-- <button id="newlogin" type="button" onclick="getData()">Create New Account</button><br> -->
        <a href="../../pages/login/signup.html">
<input type="button" value="Create New Account" id="newlogin"
            aria-label="button"></a>
<br>
      </form>
      <!-- signinform -->
    </div>
    <!-- signin container -->

  </div>
</body>
</html>