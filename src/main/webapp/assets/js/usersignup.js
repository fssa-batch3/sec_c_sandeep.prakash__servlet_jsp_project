/**
 * 
 */
 const startTimeValue= null;
const endTimeValue=null;
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

// join as a player
const checkjoinPlayer = document.getElementById("checkjoinplayer");
const joinplayerForm = document.querySelector(".joinplayercontainer");
const forms1 = document.querySelector(".forms");
const body = document.querySelector("body");
const sportLocation = document.getElementById("locationselect");
checkjoinPlayer.addEventListener("click", (e) => {
  // for uncheck the checbox
  if (checkjoinPlayer.checked == false) {
    joinplayerForm.style.display = "none";
    forms1.style.position = "relative";
    forms1.style.right = "0px";
    joinplayerForm.style.left = "0px";
    body.style.overflowY = "";
  } else {
    joinplayerForm.style.display = "block";
    forms1.style.position = "relative";
    forms1.style.right = "350px";
    joinplayerForm.style.left = "900px";
    body.style.overflowY = "hidden";

    const age = document.getElementById("age");

    const gender = document.getElementById("gender");
    // const sportChoose = (document.getElementById("sportss"))
    // const sportLocation = (document.getElementById("locationselect"))

    const timingsfrom0 = document.getElementById("startTime");

    const timingsto0 = document.getElementById("endTime");

    age.required = true;
    gender.required = true;
    // sportChoose.required = true;
    sportLocation.required = true;
    timingsfrom0.required = true;
    timingsto0.required = true;
const sportsCheckboxes = document.querySelectorAll('input[name="sportsKnown"]');


  }
});




//password
let eye=document.querySelector(".eyesym i")
eye.addEventListener("click",()=>{

 let  user_password2 = document.getElementById("password")
    // eye.setAttribute("class","fa-solid fa-eye")

    if(user_password2.type=="password"){
       
        user_password2.type="text"
     eye.classList.remove("fa-eye-slash");
     eye.classList.add("fa-eye")
    }
    else{
  
        user_password2.type="password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        
    }
    
})












