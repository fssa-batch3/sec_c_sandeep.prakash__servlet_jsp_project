<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Ground</title>
    <link rel="icon" type="image/icon" href="<%=request.getContextPath()%>/assets/images/faviicon...png">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/assets/css/groundbookingadmin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Noto+Serif+Khojki:wght@500&family=Roboto&display=swap"
        rel="stylesheet">
</head>

<body>

    <!-- header -->
    <header>
  
        <a href="../../index.html">
<img class="logo" src="<%=request.getContextPath()%>/assets/images/Logo.png" alt="Book and play">
</a>
    </header>
    <!-- header -->

    <!-- main1 search-->
    <!-- <div class="main1"> -->
      
        <!-- <h3 class="content1">Search Grounds Around you</h3>
        <img class="locationicon" src="../../assets/images/locationicon.gif" alt="locationicon">
        <select class="locationselect" id="selectlocation">
            <option value="">Select by City</option>
            <option value="all">All Areas</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Salem">Salem</option>
            <option value="Erode">Erode</option>
            <option value="Madurai">Madurai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Kolkata">Kolkata</option>

        </select>
        <div class="content2">
            <form class="searchnav">
                <input type="search" placeholder="Search for place,cities,turf,ground names....." id="search2" />
                <button class="searchbtn" type="submit" aria-label="search"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div> -->
    <!-- </div> -->
    <!-- main1 search-->

    <!-- main2 groundslist -->
    <div class="main2">
        <h1 class="req"> Ground Booking</h1>
        
        <div class="parent">
            
            <!-- <div class="child">
          
                <div class="column1">
                    <h4> User Name</h4>
                    <h4>DATE</h4>
                    <h4>TIMING</h4>
                    <h4>SPORTS</h4>
                    <h4>DURATION</h4>
                    <h4>PLAYERS</h4>
                    <h4>PRICE</h4>
                </div>
                <div class="column2">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div class="box4"></div>
                    <div class="box5"></div>
                    <div class="box6"></div>
                    <div class="box7"></div>

                </div> -->
                <!-- <button id="acceptbtn">Accept</button> -->

            </div>
          
        </div>

    </div>
    <!-- main3  groundslist -->
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
    <script src=" https://smtpjs.com/v3/smtp.js"></script>
    	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
     <script type="text/javascript" src="/bookandplay-web/assets/js/groundbookingadmin.js"> </script>

</body>

</html>