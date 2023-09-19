<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="java.util.*"%>
<%@ page import="com.fssa.bookandplay.model.Ground"%>

<!DOCTYPE html>
<html>
<head>

<meta charset="ISO-8859-1">
<title>Book and Play</title>
    <link rel="stylesheet" type="text/css" href="/bookandplay-web/assets/css/bookground.css">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
        	    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
</head>
<body>

<jsp:include page="header.jsp"></jsp:include>


<div class="main1">
        <h3 class="content1">Search Grounds Around you</h3>
        <img class="locationicon" src="/bookandplay-web/assets/images/locationicon.gif" alt="locationicon">
        <select class="locationselect" id="selectlocation">
            <option value="">Select by City</option>
            <option value="all">All Areas</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Salem">Salem</option>
            <option value="Erode">Erode</option>
            <option value="Madurai">Madurai</option>
            <option value="Bangalore">Bangalore</option>

        </select>
        <div class="content2">
            <form class="searchnav">
                <input type="search" placeholder="Search for place,cities,turf,ground names....." id="search2">
                <button class="searchbtn" type="submit" aria-label="search">
                    <i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
	<div class="main2">


	<div class="parent">
		<%
		List<Ground> groundList = (List<Ground>) request.getAttribute("GroundDetails");

		if (groundList != null) {
			for (Ground ground : groundList) {
		%>
		<div class="child">
			<br>
			<h3 class="groundn"><%=ground.getGroundName() %></h3>
	<img src=<%= ground.getGroundImages().get(0) %> alt="groundimage" class="groimg">


			<p class="locationn"><%=ground.getGroundMainArea()%></p>
		<div class="symbol">
            <% for (String sport : ground.getSportsAvailable()) { %>
                <% if (sport.equals("cricket")) { %>
                    <img src=https://iili.io/HynDb4f.png alt="cricket_icon" class="sportsicon">
                <% } else if (sport.equals("football")) { %>
                    <img src="https://iili.io/HynDp24.png" alt="football_icon" class="sportsicon">
                <% } else if (sport.equals("tennis")) { %>
                    <img src="https://iili.io/HynDDEG.png" alt="tennis_icon" class="sportsicon">
                <% } %>
            <% } %>
        </div>
			<div class="ratings">
				<i class="fa-solid fa-star"></i> <span class="ratingno">5.0</span>
			</div>
			<a href="/bookandplay-web/grounddetail.jsp?groundId=<%= ground.getgroundId() %>">
	
				<button class="book">Book Now</button>
			</a>
		</div>

		<%
		}

		}

		else {
		%>
		<h1>Empty</h1>
		<%
		}
		%>


	</div>
	</div>
	
	
	<jsp:include page="footer.jsp"></jsp:include>
  
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
</body>
</html>