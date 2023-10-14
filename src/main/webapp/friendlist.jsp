<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Friend request</title>
    <link rel="icon" type="image/icon" href="../../assets/images/faviicon...png">
    <link rel="stylesheet" href="/bookandplay-web/assets/css/friendlist.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap" rel="stylesheet">

</head>
<body>
    <!-- header -->
<header>
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
   <i class="fa-solid fa-bars"></i>
</label>
    <ul>
     <li>
<a href="<%=request.getContextPath()%>/index.jsp">Home</a> 
</li>
    <li>
<a href="<%=request.getContextPath()%>/ground.jsp"">Book Grounds</a>
</li>
    <li>
<a href="<%=request.getContextPath()%>/contact.jsp">Contact us</a>
</li>
     </ul>
    <a href="<%=request.getContextPath()%>/index.jsp">
 <img class="logo" src="/bookandplay-web/assets/images/Logo.png" alt="Book and play">
</a>   
    </header>
    <!-- header -->
<!-- main1 -->

    <!-- main1 -->

<!-- main2 -->
    <div class="main2">
    <div class="parent">
   
</div>

    </div>
    <!-- footer -->
    <footer>
    <div id="footer1">
    <div class="row">
     <div class="column1">
      <h4 class="foot-heading">Company</h4>
<br>
  
       <p>
<a href="#">About us</a> 
</p>
      <p>
<a href="#">Privacy Policy</a>
</p>
     <p>
<a href="#">Our Service</a>
</p>
     <p>
<a href="#">Our Clients</a>
</p>    
    
    </div>
    <div class="column1">
    <h4 class="foot-heading">Get Help</h4>
<br>
      <p>
<a href="#">FAQ</a> 
</p>
      <p>
<a href="#">Contact</a>
</p>
    </div>

  <div class="column1">
  <h4 class="foot-heading">Connect us on</h4>
<br>

    <a href="#" aria-label="facebook">
 <i class="fa-brands fa-facebook"></i>      
</a>
    <a href="#" aria-label="twitter">
  <i class="fa-brands fa-twitter"></i>     
</a>
    <a href="#" aria-label="instagram">
 <i class="fa-brands fa-instagram"></i>      
</a>
    <a href="#" aria-label="linkedin">
 <i class="fa-brands fa-linkedin"></i>      
</a>
    
</div>
    </div>
    
</div>

    </footer>
    <!-- footer -->
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="/bookandplay-web/assets/js/friendlist.js"></script>
</body>
</html>
