<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
      <link rel="stylesheet" type="text/css" href="/bookandplay-web/assets/css/groundregistration.css">
   
</head>
<body>
      <div class="formcontainer">
        <button class="closebtn">
            <i class="fa-solid fa-xmark fa-bounce"></i>
        </button>

        <form id="formbtn" action="groundregistration1" method="post">
            <div class="box1">
                <div class="groundname">
                    <label class="labelgroname"> Ground Name:</label>
                    <input type="name" placeholder="Ground Name " id="groname" name="groname1" aria-label="name"
                        pattern="^[a-zA-Z ]{3,50}$"
                        title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 50 characters."
                        required>
                    <br>
                </div>

                <label class="labelnamep"> Ground Main Area:</label>
                <input type="name" placeholder="Ground Location" id="grolname"  name="grolname1"aria-label="name"
                    pattern="^[a-zA-Z ]{3,60}$"
                    title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 50 characters."
                    required>
                <br>
            </div>

            <div class="groundlocationbox">

                <label class="labelname"> Ground Address:</label>
                <input type="name" placeholder="Ground Location" name="groaddress1" id="groaddress" aria-label="name"
                    pattern="^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':&quot;\\|,.<>\/?~` ]{3,400}$"
                    title="Please enter a valid input (letters and spaces only, between 3 to 400 characters)" required>
                <br>
                <label class="labelnamell"> Ground Location Link:</label>
                <input type="url" placeholder="Ground Location" id="grolink" name="grolink1" aria-label="name" required>
                <br>

            </div>
            <div class="values">
                <p>Distict</p>
                <select id="sportsvalue" name="selecteddistrict"required>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Salem">Salem</option>
                    <option value="Erode">Erode</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Bangalore">Bangalore</option>
                </select>

            </div>
            <div class="groundimageupload">
                <label class="labelname"> Upload your Ground images:</label>
                <br>
                <input type="url" placeholder="Upload " id="grimg1" name="groimg1" aria-label="groundimg" required>
                <br>
                <input type="url" placeholder="Upload " id="grimg2" name="groimg2" aria-label="groundimg" required>
                <br>
                <input type="url" placeholder="Upload " id="grimg3" name="groimg3" aria-label="groundimg" required>
                <br>

            </div>

            <!-- <div class="groundimgshow">
                    
                </div> -->
            <div class="sportsavailable">
                <label class="labelnames"> Sports Available:</label>
                <br>
                <input type="checkbox" id="sportsavail1"  name="sportsAvailable" aria-label="sportsavail" value="Cricket">
                <label class="sname">Cricket</label>
                <br>
                <input type="checkbox" id="sportsavail2"  name="sportsAvailable" aria-label="sportsavail" value="Football">
                <label class="sname">Football</label>
                <br>
                <input type="checkbox" id="sportsavail3"  name="sportsAvailable" aria-label="sportsavail" value="Tennis">
                <label class="sname">Tennis</label>
                <br>

            </div>
            <div class="groundtiming">
                <label class="">Timings </label>
                <br>

                <!-- <div id="demo-range-selection"></div> -->
                <!-- <p>From</p>
                    <input type="time" id="timingsfrom" aria-label="sportsavail" pattern="(0[1-9]|1[0-2]):[0-5][0-9] (am|pm)" required>
                    <p>To</p>
                    <input type="time" id="timingsto" aria-label="sportsavail"required > -->
                Start Time: <input type="text" name="startTime1" id="startTime" required placeholder="12:00">
                End Time: <input type="text"  name="endTime1" id="endTime" required placeholder="12:00">
            </div>

            <div class="groundrules">
                <label class="">Add Your Ground rules </label>
                <br>
                <textarea id="rules" pattern="^[a-zA-Z0-9\s]{3,600}$" name="groundRules"
                    title="Please enter a valid input (letters, numbers and spaces only, between 3 to 600 characters)"
                    rows="8" cols="30" required>
                </textarea><br>

            </div>
            <div class="groundprice">

                <label class="price word">Enter your price</label>
                <br>
                <input type="number" id="amount" name="price" aria-label="sportsavail"
                    pattern="^([1-4][0-9]{2}|5000|[1-9][0-9]|[1-9])$" title="Please enter a number between 1 and 5000"
                    required>
                <br>

            </div>

            <div class="groundprice2">

                <label class="increaseamountword">
                    Enter your increasing price for extra hours<br> like actual price+increasing price
                </label>
                <br>
                <input type="number" id="increaseamount" name="increaseprice"  aria-label="sportsavail"
                    pattern="^([1-4][0-9]{2}|5000|[1-9][0-9]|[1-9])$" title="Please enter a number between 1 and 5000"
                    required>
                <br>

            </div>
            <div class="groundcourt">

                <label class="court">Courts Available</label>
                <br>
                <select id="sportscourts" name="selectedCourts" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>

                </select>
            </div>

            <button type="submit" id="submitbtn">Submit</button>

        </form>

    </div>
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="/bookandplay-web/assets/js/groundregistration.js"></script>
</body>
</html>