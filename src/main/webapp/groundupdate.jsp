<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.util.*"%>
<%@ page import="com.fssa.bookandplay.model.GroundOwner"%>
<%@ page import="java.util.Locale"%>
<%@ page import="java.time.format.DateTimeFormatter"%>
<%@ page import="java.time.LocalTime"%>
<%@ page import="com.fssa.bookandplay.model.Ground"%>
<%@ page import="com.fssa.bookandplay.exceptions.DAOException"%>
<%@ page import="com.fssa.bookandplay.service.GroundService"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<meta charset="ISO-8859-1">
<title>Book and Play</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
        integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
 <link rel="stylesheet" type="text/css" href="/bookandplay-web/assets/css/updateground.css">
 	    <link rel="icon" type="image/icon" href="https://iili.io/J9lLgxR.png">
</head>
<body>

	<%
Ground selectedGround = (Ground) request.getAttribute("adminGround");
      
	%>
	


<a href="./adminproduct.html"><button class="backbtn">Back to your profile</button></a>
    <div class="formcontainer">
        <!-- <button class="closebtn">
            <i class="fa-solid fa-xmark fa-bounce"></i>
        </button> -->

        <form id="formbtn" action="groundupdatation" method="post">
            <div class="box1">
              <input type="hidden" name="groundId" value="<%=selectedGround.getGroundId()%>">
                <div class="groundname">
                    <label class="labelgroname"> Ground Name:</label>
                    <input type="name" placeholder="Ground Name " id="groname" name="groundname1" aria-label="name"
                        pattern="^[a-zA-Z ]{3,50}$"   value="<%=selectedGround.getGroundName()%>"
                        title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 50 characters."
                        required disabled>
                    <br>
                </div>

                <label class="labelnamep"> Ground Main Area:</label>
                <input type="name" placeholder="Ground Location" name="groundlname1"id="grolname" aria-label="name"
                    pattern="^[a-zA-Z ]{3,60}$"  value="<%=selectedGround.getGroundMainArea()%>"
                    title="the input field  should contains only alphabetic characters (both upper and lower case) and has a length between 3 and 60 characters."
                    required disabled>
                <br>
            </div>

            <div class="groundlocationbox">

                <label class="labelname"> Ground Address:</label>
                <input type="name" placeholder="Ground Location"  name="groundaddress1" id="groaddress" aria-label="name"
                    pattern="^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':&quot;\\|,.<>\/?~` ]{3,400}$"  value="<%=selectedGround.getGroundAddress()%>"
                    title="Please enter a valid input (letters and spaces only, between 3 to 400 characters)" required disabled>
                <br>
                <label class="labelnamell"> Ground Location Link:</label>
                <input type="url" placeholder="Ground Location" id="grolink" name="grolink1" aria-label="name" value="<%=selectedGround.getGroundLocationLink()%>"  required disabled>
                <br>

            </div>
            <div class="values">
                <p class="dis">Distict</p>
         <select id="sportsvalue" name="groundselecteddistrict" required disabled>
       <%
       

               String selectedDistrict = selectedGround.getDistrict();
               String[] districtOptions = {"Chennai", "Coimbatore", "Salem", "Erode", "Madurai", "Bangalore"};

               for (String option : districtOptions) {
                   out.print("<option value=\"" + option + "\"");
                   if (option.equals(selectedDistrict)) {
                       out.print(" selected");
                   }
                   out.println(">" + option + "</option>");
               }
       %>
    </select>
            </div>
              <div class="groundimageupload">
                <label class="labelnamei"> Upload your Ground images:</label>
                <br>
                <input type="url" placeholder="Upload " name="groundimg1" id="grimg1" aria-label="groundimg" value="<%=selectedGround.getGroundImages().get(0)%>" required disabled>
                <br>
                <input type="url" placeholder="Upload " name="groundimg2" id="grimg2" aria-label="groundimg"value="<%=selectedGround.getGroundImages().get(1)%>""required disabled>
                <br>
                <input type="url" placeholder="Upload " name="groundimg3" id="grimg3" aria-label="groundimg"value="<%=selectedGround.getGroundImages().get(1)%>" required disabled>
                <br>

            </div>

            <!-- <div class="groundimgshow">
                    
                </div> -->
                 
<%
                 
                 List<String> selectedSports = selectedGround.getSportsAvailable();
                 %>
<div class="sportsavailable">
    <label class="labelnames"> Sports Available:</label>
    <br>
    <input type="checkbox" id="sportsavail1" name="sportsAvailable1" aria-label="sportsavail" value="Cricket" <%= selectedSports.contains("Cricket") ? "checked" : "" %>>
    <label class="sname">Cricket</label>
    <br>
    <input type="checkbox" id="sportsavail2" name="sportsAvailable1" aria-label="sportsavail" value="Football" <%= selectedSports.contains("Football") ? "checked" : "" %>>
    <label class="sname">Football</label>
    <br>
    <input type="checkbox" id="sportsavail3" name="sportsAvailable1" aria-label="sportsavail" value="Tennis" <%= selectedSports.contains("Tennis") ? "checked" : "" %>>
    <label class="sname">Tennis</label>
    <br>
</div>
  <div class="groundtiming">
                <label class="">Timings </label>
                <br>
                <!-- <p>From</p>
                    <input type="time" id="timingsfrom" aria-label="sportsavail" pattern="(0[1-9]|1[0-2]):[0-5][0-9] (am|pm)" required>
                    <p>To</p>
                    <input type="time" id="timingsto" aria-label="sportsavail"required > -->
          <span>Start Time: </span>  <input type="text" id="startTime" name="groundstartTime1" required placeholder="12:00" value="<%=selectedGround.getStartTime()%>" disabled><br>
               <span> End Time: </span> <input type="text" id="endTime" name="groundendTime1" required placeholder="12:00" value="<%=selectedGround.getEndTime()%>"  disabled>

            </div>

            <div class="groundrules">
                <label class="">Add Your Ground rules </label>
                <br>
               <textarea id="rules" pattern="^[a-zA-Z0-9\s]{3,600}$" name="groundupdateRules"
    title="Please enter a valid input (letters, numbers and spaces only, between 3 to 600 characters)"
    rows="8" cols="30" required disabled>
    <%=selectedGround.getGroundRules()%>
</textarea>
                <br>
            </div>
            <div class="groundprice1">

                <label class="">Enter your price</label>
                <br>
                <input type="number" id="amount" name="groundprice" aria-label="sportsavail"
                    pattern="^([1-4][0-9]{2}|5000|[1-9][0-9]|[1-9])$" title="Please enter a number between 1 and 5000"
                    required disabled value="<%=(int)selectedGround.getPrice()%>" >
                <br>

            </div>
            <div class="groundprice2">

                <label class="">Enter your increasing price for extra hours like actual price+increasing price </label>
                <br>
                <input type="number" id="increaseamount" name="groundincreaseprice" aria-label="sportsavail"
                    pattern="^([1-4][0-9]{2}|5000|[1-9][0-9]|[1-9])$" title="Please enter a number between 1 and 5000"
                    required disabled  value="<%=(int)selectedGround.getIncreasingPriceForExtraHours()%>" >
                <br>

            </div>
            <div class="groundcourt">

                <label class="court">Courts Available</label>
                <br>
                <select id="sportscourts" name="groundselectedCourts" required disabled value="<%=selectedGround.getCourtsAvailable()%>">
            <%
                    int selectedCourts = selectedGround.getCourtsAvailable();
                    int maxCourts = 6; // The maximum number of courts
                    
                    for (int i = 1; i <= maxCourts; i++) {
                        out.print("<option value=\"" + i + "\"");
                        if (i == selectedCourts) {
                            out.print(" selected");
                        }
                        out.println(">" + i + "</option>");
                    }
            %>

                </select>
            </div>

            <div class="buttonsbox">
                <button type="button" id="editbtn">Edit</button>
                 

               
         <button type="submit" id="updatebtnuu"> Update</button>
            </div>
  
        </form>
        
       <form id="formbtn2" action="grounddisable" method="post">
        <input type="hidden" name="groundIddis" value="<%=selectedGround.getGroundId()%>">

        <button type="submit" id="deletebtn"  >Disable</button>
       </form>
        

</div>

  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="/bookandplay-web/assets/js/updateground.js"></script>
</body>
</html>