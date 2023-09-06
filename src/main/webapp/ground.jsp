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



</body>
</html>