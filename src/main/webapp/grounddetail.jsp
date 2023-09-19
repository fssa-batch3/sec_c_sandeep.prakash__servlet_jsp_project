<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.time.format.DateTimeFormatter"%>
<%@ page import="java.time.LocalTime"%>
<%@ page import="com.fssa.bookandplay.model.Ground"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Book and Play</title>
<link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/grounddetail.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
	crossorigin="anonymous" referrerpolicy="no-referrer">
		    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
<body>

    
    <!-- header -->
	<jsp:include page="header.jsp"></jsp:include>
  <!-- header -->
 <section>
    <h3 class="content1">Book your ground</h3>
  </section>
	
	  <div class="main">
    <div class="main2">
    </div>
    </div>
    
  
    





  <!-- footer  -->
	<jsp:include page="footer.jsp"></jsp:include>
  <!-- footer -->
    	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>

  
	   

     const url = "http://localhost:8080/bookandplay-web/GetUserSession";

    
     axios.get(url)
         .then(function (response) {
             // handle success
             
             const responseUserData = response.data.substring(response.data.indexOf('{'));
             const userLogin = JSON.parse(responseUserData);
          
                 // You can now access the "userLogin" session attribute in userLogin variable
                 console.log(userLogin);
                 
                 
                 const loginbtn = document.querySelector(".login")

                 if (userLogin == null) {
             // nothing
                 }
                 else if (userLogin !== null) {
                 loginbtn.style.display = "none"
                 const myprofile = document.createElement("button");
                 myprofile.setAttribute("class", "login");
                 myprofile.innerText = "My Account"
                 myprofile.style.width = "150px";
                 myprofile.style.left = "50px"
                 myprofile.addEventListener("click", () => {
                   window.location.href = "/bookandplay-web/userprofile.jsp"
                 });
                 document.querySelector(".contact").append(myprofile)
               }
               else {
                 loginbtn.style.display = "block"

               }
             // checking the user is player
                 const findplayersbtn = document.querySelector(".findplayers")
                 findplayersbtn.addEventListener("click", (e) => {
           

                if( userLogin.playerStatus === false){
                 alert("Please join as a player to find players. To join as a player please tick the box on your profile page ");
                 e.preventDefault();
               }

                   else {
                     window.location.href = "/bookandplay-web/findplayers.jsp";
                   }
                   // if(loginUser==false){
                   //   console.log("ofmofkf");
                   //   alert("Please join as a player to find players ")
                   //   e.preventDefault();
                   // }

                 })
                 
                 
            
         })
         .catch(function (error) {
             // handle error
             console.log(error);
             const findplayersbtn = document.querySelector(".findplayers")
             findplayersbtn.addEventListener("click", (e) => {
           
             alert("Please login to find players ")
             e.preventDefault();
           })
         });
  </script> 
  	<script type="text/javascript" src="/bookandplay-web/assets/js/grounddetail.js"></script>



</body>
</html>