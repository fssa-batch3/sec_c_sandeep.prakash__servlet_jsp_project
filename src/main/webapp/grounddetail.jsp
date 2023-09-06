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
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/grounddetail.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
	crossorigin="anonymous" referrerpolicy="no-referrer">
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
  	<script type="text/javascript" src="/bookandplay-web/assets/js/grounddetail.js"></script>



</body>
</html>