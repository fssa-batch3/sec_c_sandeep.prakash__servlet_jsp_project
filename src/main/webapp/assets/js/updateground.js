

/**
 * 
 */

 
// view

const groundName = document.getElementById("groname");

const groundPlace = document.getElementById("grolname");
const groundLocationLink = document.getElementById("grolink");
const groundaddress = document.getElementById("groaddress");
const groundImage1 = document.getElementById("grimg1");
const groundImage2 = document.getElementById("grimg2");
const groundImage3 = document.getElementById("grimg3");
const sportsAvail1 = document.getElementById("sportsavail1");
const sportsAvail2 = document.getElementById("sportsavail2");
const sportsAvail3 = document.getElementById("sportsavail3");
const groundTimingfrom = document.getElementById("startTime");
const groundTimingTo = document.getElementById("endTime");
const groundRules = document.getElementById("rules");
const groundCity = document.getElementById("sportsvalue");
const groundPrice = document.getElementById("amount");
const groundincreasingPrice = document.getElementById("increaseamount");

const groundCourts = document.getElementById("sportscourts");




//edit
let editbtn=document.getElementById("editbtn");
editbtn.addEventListener("click",()=>{

  groundName.removeAttribute("disabled");
  groundPlace.removeAttribute("disabled");
  groundaddress.removeAttribute("disabled");
  groundImage1.removeAttribute("disabled");
  groundImage2.removeAttribute("disabled");
  groundImage3.removeAttribute("disabled"); 
  sportsAvail1.removeAttribute("disabled");
  sportsAvail2.removeAttribute("disabled");  

    sportsAvail3.removeAttribute("disabled");
    groundTimingfrom.removeAttribute("disabled");
    groundTimingTo.removeAttribute("disabled");
    groundRules.removeAttribute("disabled");
 
    groundPrice.removeAttribute("disabled");
    groundincreasingPrice.removeAttribute("disabled");
    groundCourts.removeAttribute("disabled");
   console.log("samdeep");


})





let startTimeValue= null;
let endTimeValue=null;
const timePicker={
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K", 
    time_24hr: false,
  minuteIncrement: 60,
//   defaultDate: "12:00 AM",
  onChange: function(selectedDates, dateStr) {
    // Store selected start and end times in global variables
    if (this.input.id === "startTime") {
      startTime = dateStr;
    } else if (this.input.id === "endTime") {
      endTime = dateStr;
    }
    // localStorage.setItem("startTime", startTime);
    // localStorage.setItem("endTime", endTime);
  }

}
const startTimepicker = flatpickr("#startTime", timePicker);
const endTimepicker = flatpickr("#endTime", timePicker);

  