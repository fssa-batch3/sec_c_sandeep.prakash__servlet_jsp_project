<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="com.fssa.bookandplay.model.GroundOwner"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Book and Play</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
      <link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/admindashboard.css">
	 <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
<script src="/bookandplay-web/assets/js/sweetalert.min.js"></script>
<body>



 <div class="mainpoage">
        <div class="sidebar">
            <div class="sidebar1">
                <div class="profilebox">
                    <div class="profileimgplace">
                        <img class="profileimg" src="https://iili.io/HkW7U4S.jpg" alt="profile">
                        <label for="input-file">
                            <i class="bx bxs-plus-circle"></i>
                        </label>
                        <input type="file" accept="image/jpeg,image/png,image/jpg" id="input-file">
                    </div>
                    <div class="name-rankdisplay">
                        <p class="nameperson">GROUND NAME</p>


                    </div>

                    <!-- <button id="editbutton">Edit Profile</button> -->
                    <a href="/bookandplay-web/groundregistration.jsp"> <button class="fillbutton">Fill your ground</button></a>
                </div>
                <div class="hr">

                </div>
                <div class="box2">
                    <!-- <div class="dashboard">
                        <i class="bx bxs-grid-alt"></i>
                        <span>Dash Board</span>
                    </div> -->
                      <a href="<%=request.getContextPath()%>/groundBooking.jsp">
                        <div class="message">
                            <i class="fa-solid fa-message"></i>
                            <span>Bookings</span>
                        </div>
                    </a>
                    <!-- <div class="bookinghistory">
                        <i class="bx bx-history"></i>
                        <span>Cash booking</span>
                    </div> -->
                    <a href=" /bookandplay-web/UpdateGround">
                        <div class="analytics">
                            <i class="bx bxs-analyse"></i>
                            <span>My Ground</span>
                        </div>
                    </a>
                </div>
                <div class="hr">

                </div>
                <!-- <div class="friendslist">
                    <i class='bx bxs-group' ></i>
                    <span>Friends List</span>
                </div>
                
                <div class="friendsrequest">
                    <i class='bx bx-group bx-tada' ></i>
                    <span>Friends Request</span>
                </div> -->

                <a href="/bookandplay-web/AdminLogout"> <button class="logout">
                    <i class="bx bx-log-out"></i>
                    <span>Log out</span>
                </button></a>

            </div>
            <div class="sidebar2">

                <div class="container2">

                    <div class="forms">
                        <br>
                        <h1>Edit your profile anytime</h1>
                        <br>

                        <form id="formbox">
                            <label class="labelname"> Display Name:</label>
                            <br>
                            <input type="name" id="name1" pattern="^[a-zA-Z]{3,20}$"
                                title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                                required disabled >
                            <br>

                            <label class="labelname">Ground Name :</label>
                            <br>
                            <input type="name" id="name2" pattern="^[a-zA-Z ]{3,50}$"
                                title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                                required disabled  >
                            <br>
                            <label class="labelname">Email:</label>
                            <br>
                            <input type="email" id="userEmail"  aria-label="email" disabled>
                            <br>
                            <label class="labelname">Phone Number:</label>
                            <br>
                            <input type="tel" id="phoneno1" aria-label="phone number" pattern="[0-9]{10}"
                                title="PLease enter 10 digit number" required disabled>
                            <br>
                           
                            <br>

                            <button class="profile2" type="submit">Edit</button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    </div>
      	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
   	<script type="text/javascript" src="/bookandplay-web/assets/js/admindashboard.js"></script>
</body>
</html>