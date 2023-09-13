<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Book and Play</title>
  <link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/userlogin.css">
		    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
<body>
 <div id="container">
    <!-- signinform -->
    <div class="forms">
       
      <h1 class="sign">Seller Sign in</h1>
      <form id="loginform"  action="adminlogin1" method="post">
        <input type="email" name="email_id" placeholder="Email address " id="email" aria-label="email" pattern="^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" autofocus>
<br>
        <input type="password" placeholder="Password" name="adminpass"id="password" aria-label="password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
        title="PLease fill the password with one symbols and Upper case">
<br>
        <!-- <a href="../../index.html"><input type="button" value="Login" id="login" aria-label="button" ></a> -->
        <button id="login" type="submit">Login</button>
<br>
    
<br>
        <p class="newsign">New user</p>
<br>
        <!-- <button id="newlogin" type="button" onclick="getData()">Create New Account</button><br> -->
        <a href="/bookandplay-web/groundadminregister.jsp">
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