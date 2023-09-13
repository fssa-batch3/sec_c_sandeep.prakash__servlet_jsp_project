<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
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
	href="/bookandplay-web/assets/css/userprofile.css">
	    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
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
                        <p class="nameperson">Sandeep
                        </p>
                        <!-- <div class="rankdisplay">
                            <p class="rank">Rank</p>
                            <p>12200</p>
                        </div> -->

                    </div>

                    <button id="editbutton">Edit Your Profile Anytime</button>
                </div>
                <div class="hr">

                </div>
                <div class="box2">
                    <!-- <div class="dashboard">
 <i class="bx bxs-grid-alt"></i>
                        <span>Dash Board</span>
                    </div> -->
                    <a href="../../pages/player/playermessages.html">
                        <div class="message">
                            <i class="fa-solid fa-message"></i>
                            <span>Messages</span>
                        </div>
                    </a>
                    <div class="bookinghistory">
                        <i class="bx bx-history"></i>
                        <span>Your Booking</span>
                    </div>

                    <!-- <div class="analytics">
                        <i class="bx bxs-analyse"></i>
                        <span>Analytics</span>
                    </div> -->
                </div>
                <div class="hr">

                </div>
                <a href="../../pages/player/friendlist.html">
                    <div class="friendslist">
                        <i class="bx bxs-group"></i>
                        <span>Friends List</span>
                    </div>
                </a>

                <a href="../../pages/player/friendrequest.html">
                    <div class="friendsrequest">
                        <i class="bx bx-group bx-tada"></i>
                        <span>Friends Request</span>
                    </div>
                </a>

                <!-- <button class="logout"> 
                 
                </button>  -->
               <a href="/bookandplay-web/UserLogout">  <button class="logout" role="button">
                    <i class="bx bx-log-out">
                    </i>
                    <span>Log out</span>
                </button></a>
                <a href="../../index.html">
                    <div class="homepage">
                        <i class="fa-solid fa-house-user"></i>
                        <span>Go to Home page</span>
                    </div>
                </a>
                <!-- <button class="button-15" role="button"></button> -->
            </div>
            <div class="sidebar2">

                <div class="container2">

                    <div class="forms">
                        <br>
                        <h1>Edit your profile anytime</h1>
                        <br>

                        <form id="formbox">
                            <label class="labelname">Name:</label>
                            <br>
                            <div class="namediv"
                        >
                            <input type="hidden" name="uId" id="userId">
                            <input type="name" name="fname1" id="name1" pattern="^[a-zA-Z]{3,20}$"
                                title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                                disabled required>
                                      <input type="name" name="lname1"id="name2" pattern="^[a-zA-Z]{3,20}$"
                                title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                                disabled required>
                                </div>
                            <br>

                            <label class="labelname">Email:</label>
                            <br>
                            <input type="email" id="userEmail" name="uemail1"aria-label="email" disabled>
                            <br>
                            <label class="labelname">Phone Number:</label>
                            <br>
                            <input type="tel"   name="uphonenumber1" id="phoneno1"  aria-label="phone number"
                                pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                                title="Please enter a valid 10-digit phone number" disabled required>
                            <br>
                           

                            <br>
                            <div class="joinplayer">
                                <input type="checkbox" id="checkjoinplayer1" name="joinplayer">
                                <label class="joinasplayer">Join as a player</label>
                            </div>
                            <label class="labelnamea">Age :</label>
                            <br>
                            <input type="number" id="age"  name="uage1" min="8" max="90" pattern="^(1[8-9]|[2-9][0-9])$"
                                title="The age should contain 1 to 120" disabled>
                            <br>
                            <br>
                            <p class="labelnamegen">Gender</p>
                            <br>
 <select  placeholder="Gender " name="ugender1" id="gender" aria-label="gender" disabled>
                    <option value="">Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="cisgender">Cisgender</option>
    <option value="transgender">Transgender</option>
    <option value="non-binary">Non-Binary</option>
    <option value="genderqueer">Genderqueer</option>
    <option value="agender">Agender</option>
    <option value="bigender">Bigender</option>
    <option value="two-spirit">Two-Spirit</option>
    <option value="androgyne">Androgyne</option>
    <option value="genderfluid">Genderfluid</option>
    <option value="demiboy">Demiboy</option>
    <option value="demigirl">Demigirl</option>
    <option value="neutrois">Neutrois</option>
    <option value="pangender">Pangender</option>
    <option value="gender questioning">Gender Questioning</option>
    <option value="gender nonconforming">Gender Nonconforming</option>

</select>
                            <br>
                            <div class="select">
                                <p class="labelnames">Known Sports:</p>
                                <br>
                                <div id="sportss" required>

                                    <input type="checkbox" id="sportsavail1" aria-label="sportsavail" name="sportsKnown1"
                                        value="Cricket" disabled>
                                    <label class="sportname1">Cricket</label>
                                    <br>
                                    <input type="checkbox" id="sportsavail2" aria-label="sportsavail" name="sportsKnown1"
                                        value="Football" disabled>
                                    <label class="sportname2">Football</label>
                                    <br>
                                    <input type="checkbox" id="sportsavail3" aria-label="sportsavail" name="sportsKnown1"
                                        value="Tennis" disabled>
                                    <label class="sportname3">Tennis</label>
                                    <br>

                                </div>
                                <br>

                                <p class="labelnamel">Location</p>
                                <br>
                                <br>
                                <select id="locationselect" name="ulocation1" disabled>
                                    <option>Chennai</option>
                                    <option>Coimbatore</option>
                                    <option>Salem</option>
                                    <option>Erode</option>
                                    <option>Madurai</option>
                                    <option>Delhi</option>
                                    <option>Bangalore</option>
                                    <option>Pune</option>
                                    <option>Kolkata</option>
                                </select>
                                <br>
                                <p class="labelnametime">Timing Available</p>
                                <br>
                                <input type="text" id="startTime" name="ustartTime1" required placeholder="12:00" disabled>
                                <!-- <input type="time" id="timingsfrom" aria-label="timingsfrom" value="4:00" disabled> -->
                                <br>

                                <p class="timep">To</p>
                                <input type="text" id="endTime"name="uendTime1" required placeholder="12:00" disabled>
                                <br>
                                <!-- <input type="time" id="timingsto" aria-label="timingtoo" value="5:00" disabled> -->
                                <br>

                                <span class="linetext">Few lines About You</span>
                                <textarea class="textabout" pattern="^[a-zA-Z ]{3,70}$" name="uabout1"
                                    title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 50 characters."
                                    disabled ></textarea>
                            </div>
                            <br>

                            <button class="profile2" type="submit">Edit</button>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
     	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    	<script type="text/javascript" src="/bookandplay-web/assets/js/userprofile.js"></script>
    
</body>
</html>