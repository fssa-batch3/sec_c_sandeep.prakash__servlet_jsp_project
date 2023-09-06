<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

    <link rel="icon" type="image/icon" href="../../assets/images/faviicon...png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" type="text/css"
	href="/bookandplay-web/assets/css/usersignup.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</head>
<body>


 <!-- signup container -->
    <div id="container">
        <!-- signup form -->
        <div class="forms">
            <h1 class="signuphead">Create New Account</h1>
            <br>
            <form id="signupform"  method="post"  action="UserSignUp">

                <label>First Name:</label>
                <br>
                <div class="boxform">
                    <input type="name" placeholder="Your Name " id="name1" aria-label="name" name="fname"
                        pattern="^[a-zA-Z]{3,20}$"
                        title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                        required>
                    <br>

                </div>
                <br>
                <label>Last Name:</label>
                <br>
                <div class="boxform">
                    <input type="name" placeholder="Your Name " id="name2" aria-label="name" name="lname"
                        pattern="^[a-zA-Z]{3,20}$"
                        title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 20 characters."
                        required>
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
                    <input type="tel" placeholder="Phone Number" name="mobile-number" id="user_phoneno" aria-label="phone number"
                         pattern="[0-9]{10}" title="PLease enter 10 digit number" required>
                    <br>

                </div>
                <br>
                <label>Password:</label>
                <br>
                <div class="boxform">
                    <input type="password" placeholder="Password" id="password" aria-label="Password" name="upassword"
                        pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n\s])(?=.*[A-Z])(?=.*[a-z]).*$"
                        title="Your password must be at least 8 characters long, contain at least one digit or special character, one uppercase letter, and one lowercase letter, and must not contain dots or newline characters and white space character"
                        required>
                    <span class="eyesym">
                        <i class="fa-regular fa-eye-slash"></i>
                    </span>
                    <br>

                </div>
                <br>
                <!-- <p class="alert">By Entering the information you are expected receive <br>email or sms OTP when you are sign again</p><br> -->
                <!-- <a href="../../pages/login/accountcreated.html" ><input type="button" value="Register" id="newlogin"></a> -->
                <!-- <button  id="newlogin" type="button" onclick="getUserData()" >Register</button><br> -->
                <div class="joinplayer">
                    <input type="checkbox" id="checkjoinplayer" name="checkjoinplayer">
                    <label>Join as a player</label>
                </div>
        </div>

        <div class="joinplayercontainer">
            <!-- <p class="labelname"> Display Name:</p><br>
        <input type="name" placeholder="Your Name " id="name" aria-label="name" ><br>  -->
            <p class="labelnameage">Age :</p>
            <br>
            <input type="number" placeholder="Age " name="uage"id="age" aria-label="age" min="8" max="90"
                pattern="^(1[8-9]|[2-9][0-9])$" title="The age should contain 1 to 120">
            <br>

            <div class="select">
                <p class="labelnamegen">Gender</p>
                <br>
           
   <select  placeholder="Gender " name="ugender" id="gender" aria-label="gender">
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

                <p class="labelnamespor">Known Sports:</p>
                <br>

                <div class="sportsavailable">

                    <input type="checkbox" id="sportsavail1" aria-label="sportsavail" name="sportsKnown"value="Cricket">
                    <label class="sportname">Cricket</label>
                    <br>
                    <input type="checkbox" id="sportsavail2" aria-label="sportsavail"name="sportsKnown" value="Football">
                    <label class="sportname">Football</label>
                    <br>
                    <input type="checkbox" id="sportsavail3" aria-label="sportsavail"name="sportsKnown" value="Tennis">
                    <label class="sportname">Tennis</label>
                    <br>

                </div>
                <!-- <select id="sportss" required>
               
        <option value="Cricket">Cricket</option>
        <option value="Football">Football </option>
        <option value="Tennis">Tennis</option>
               
        </select><br> -->
                <p class="labelnameloc">Location</p>
                <br>
                <select id="locationselect" name="ulocation">
                    <option value="">Select location</option>
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
                <!-- <input type="time" id="timingsfrom" aria-label="timingsfrom" value="4:00"> -->
                <input type="text" id="startTime" name="ustartTime" placeholder="12:00">
                <br>

                <p class="toword">To</p>
                <br>
 
                <input type="text" id="endTime"  name="uendTime"placeholder="12:00">
            </div>
            <br>

            <!-- <button class="profile" type="button" onclick="getPlayerData()">Join</button> -->

        </div>

    </div>
    <button type="submit" id="newlogin">Register</button>
    <br>
    </form>

    </div>
    <!-- signup form -->
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  	 <script src="/bookandplay-web/assets/js/usersignup.js"></script>


</body>
</html>