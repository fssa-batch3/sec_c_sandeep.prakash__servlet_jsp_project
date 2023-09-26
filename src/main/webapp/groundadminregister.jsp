<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
  <link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/usersignup.css">
<title>Book and Play</title>
	    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
  	   	 <script src="/bookandplay-web/assets/js/sweetalert.min.js"></script>
<body>
   <div id="container">
   
   

   <script>
   <%
        String successmessage=(String)request.getAttribute("Successmessage");
        String errormessage=(String)request.getAttribute("ErrorMessage");
        
        %>
        
        <%
        
        if(successmessage!=null){
        
        %>
            
        <h1><%=successmessage %></h1>
           <%
        
        }%>
         <%
        
        
           if(errormessage!=null){
        
        %>
        
        swal("Failed!","<%=errormessage%>", "error");
        setTimeout(() => {
           
            window.location.href="groundadminregister.jsp";
        }, 4000);
     

       
           <%
        
        }
         
        %>
        </script>
       

   
        <!-- signup form -->
        <div class="forms">
            <!-- <h1>Seller Signup</h1> -->
            <h1 class="signuphead">Create New Account</h1>
<br>
            <form id="signupform" action="adminregistration1" method="post">

                <label>Your Name:</label>
<br>
                <div class="boxform">
                    <input type="name" placeholder="Your Name " id="name1" aria-label="name" name="adminname"
                    pattern="^[a-zA-Z]{3,20}$" title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters." autofocus required>
<br>

                </div>
<br>
                <label>Organisation/Ground Name:</label>
<br>
                <div class="boxform">
                    <input type="name" placeholder="Your Name " id="name2" aria-label="name" name="orgname"
                  title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters." required>
<br>

                </div>
<br>
                <label>Email:</label>
<br>
                <div class="boxform">
                    <input type="email" placeholder="Email address " id="email" aria-label="email" name="email-id"
                    pattern="^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required>
<br>

                </div>
<br>
                <label>Phone Number:</label>
<br>
                <div class="boxform">
                    <input type="tel" placeholder="Phone Number" id="user_phoneno" aria-label="phone number"
                        name="mobile-number" required pattern="[0-9]{10}" title="PLease enter 10 digit number">
<br>

                </div>
<br>
                <label>Password:</label>
<br>
                <div class="boxform">
                    <input type="password" placeholder="Password" id="password" aria-label="Password" name="adminpassword"
                    pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n\s])(?=.*[A-Z])(?=.*[a-z]).*$" title="Your password must be at least 8 characters long, contain at least one digit or special character, one uppercase letter, and one lowercase letter, and must not contain dots or newline characters and white space character" required>
                    <span class="eyesym">
                        <i class="fa-regular fa-eye-slash"></i>
                    </span>
<br>

                </div>
<br>
                <!-- <label>Proof of business certificate:</label><br> -->
                <!-- <div class="boxform">
<input type="file" placeholder="Password" id="poc" aria-label="Password" name="password" title="PLease fill the password with one symbols and Upper case" required><br>
<i class="fa-regular fa-circle-check"></i>
<i class="fa-solid fa-circle-exclamation"></i>
</div><br> -->

        </div>

    </div>
    <button type="submit" id="newlogin">Register</button>
<br>
    </form>

    </div>
</body>
</html>