<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find players</title>
    <link rel="icon" type="image/icon" href="/bookandplay-web/assets/images/faviicon...png">
    <link rel="stylesheet" href="/bookandplay-web/assets/css/findplayers.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">

</head>
<body>
    <!-- header -->
<jsp:include page="header.jsp"></jsp:include>
    <!-- header -->
<!-- main1 -->
    <div id="main1">
     <h3 class="content1">Search Players</h3>
<div class="content2">
<form id="searchnav">
<input type="search" placeholder="Search for players names....." id="search2">
<button class="searchbtn"type="submit" aria-label="search">
<i class="fa-solid fa-magnifying-glass"></i>
</button>
</form>
      </div>
    <div class="selectsports">
<!-- <p class="selectsportsword">Search by category</p>
 <select class="sportss">
<option>CRICKET</option>
<option>TENNIS</option>
<option>FOOTBALL</option>
       </select> -->
    </div>
    <p class="selectslocationword">Search by location</p>
    <img class="locationicon" src="/bookandplay-web/assets/images/locationicon.gif" alt="locationicon">
    <select class="locationselect">
      <option value="">Select by City</option>
      <option value="all">All Areas</option>
      <option value="Chennai">Chennai</option>
      <option value="Coimbatore">Coimbatore</option>
      <option value="Salem">Salem</option>
      <option value="Erode">Erode</option>
      <option value="Madurai">Madurai</option>
      <option value="Bangalore">Bangalore</option>

    </select>


    </div>
    <!-- main1 -->

<!-- main2 -->
    <div class="main2">
    <div class="parent">

   
</div>

    </div>
    <!-- footer -->
	<jsp:include page="footer.jsp"></jsp:include>
    <!-- footer -->
  
    
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="/bookandplay-web/assets/js/player.js"></script>
     <script>

  
	   

     const url2 = "http://localhost:8080/bookandplay-web/GetUserSession";

    
     axios.get(url2)
         .then(function (response) {
             // handle success
             
             console.log(response.data);
             //const responseUserData = response.data.substring(response.data.indexOf('{'));
             //const userLogin = JSON.parse(responseUserData);
             const userLogin =  response.data;
                 
                 
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
           
                	 if(userLogin==null){
                    	   alert("Please join as a player to find players. To join as a player please tick the box on your profile page ");
                           e.preventDefault();
                    	}
                    

                  	 else if( userLogin.playerStatus === false){
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

    
</body>
</html>
