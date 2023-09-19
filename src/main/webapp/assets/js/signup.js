// const form = document.getElementById("signupform");

// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     getUserData();

// });

// function getUserData(){

//     const name1 =(document.getElementById("name1").value.trim() )
//     const name2 =(document.getElementById("name2").value.trim() )
//     const email = (document.getElementById("email").value.trim()  )
//     const user_phoneno =(document.getElementById("user_phoneno").value.trim()  )
//  const user_password= (document.getElementById("password").value.trim()  )

// //  console.log(name1)
// //  console.log(email)
// //  console.log(phoneno1)
// //  console.log(user_password)
//  let user_records= new Array();

//  user_records= JSON.parse(localStorage.getItem("user_details"))?
//  JSON.parse(localStorage.getItem("user_details")):[]

//  if(user_records.some((v)=>{return v.user_email==email})){
// alert("email id already taken")
//  }

//  else{
//     user_records.push({
//         "user_as_ground":
//          {
//             "user_name":name1,
//             "user_last_name":name2,
//             "user_email":email,
//             "user_phoneno":user_phoneno,
//             "user_password":user_password
//         },

//     }

//      )

//      window.location.href="./login .html"
//  }

//  localStorage.setItem("user_details",JSON.stringify(user_records));

// if(name1===""){
//     setError(name1,"Firstname cannot be blank")

// }
// else{
//     setSuccess(name1)
//     window.location.href="./accountcreated.html";
// }
// if(name2===""){
//     setError(name2,"Lastname cannot be blank")

// }
// else{
//     setSuccess(name2)
//     window.location.href="./accountcreated.html";
// }
// if(email===""){

//     setError(email,"email cannot be blank")
// }
// // else if(!correctEmail(email)){

// // }
// else{
//     setSuccess(email)
//     window.location.href="./accountcreated.html";
// }
// if(user_phoneno===""){

//     setError(user_phoneno,"phone cannot be blank")
// }
// else{
//     setSuccess(user_phoneno)
//     window.location.href="./accountcreated.html";
// }
// if(user_password===""){

//     setError(user_password,"password cannot be blank")
// }
// else{
//     setSuccess(user_password)
//     window.location.href="./accountcreated.html";
// }

// function setError(input){
//     const formError = input.parentElemenet;
//     const inputError = document.querySelector("input")
//     inputError.className="boxform success";

// }

// function setSuccess(input){
//     const formError = input.parentElemenet;
//     const inputError = document.querySelector("input")
//     inputError.className="boxform error";

// }
// time am and pm
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

  }
});

// register

const form = document.getElementById("signupform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserData();
});
let user_password;
function getUserData() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const email = document.getElementById("email").value.trim();
  const user_phoneno = document.getElementById("user_phoneno").value.trim();
  user_password = document.getElementById("password").value.trim();
  //    const name1 = (document.getElementById("name1").value)

  const age = document.getElementById("age").value;

  const gender = document.getElementById("gender").value;
  // const sportChoose = (document.getElementById("sportss").value)
  const sportLocation = document.getElementById("locationselect").value;

  // const timingsfrom = document.getElementById("timingsfrom").value;

  // const timingsto = document.getElementById("timingsto").value;
  const timingsfrom = document.getElementById("startTime").value;

  const timingsto = document.getElementById("endTime").value;
  const id_generator = Math.floor(Math.random() * 300);
  const cricket = document.getElementById("sportsavail1").checked;
  const football = document.getElementById("sportsavail2").checked;
  const tennis = document.getElementById("sportsavail3").checked;
  // sportLocation.required= true

  // const sport_Choosed=[];
  // if(cricket.checked){
  //     sport_Choosed.push("cricket")
  // }
  // if(football.checked){
  //     sport_Choosed.push("football")
  // }
  // if(tennis.checked){
  //     sport_Choosed.push("tennis")
  // }

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("user_details"))
    ? JSON.parse(localStorage.getItem("user_details"))
    : [];

  let user_data;

  if (user_records.some((v) => v.user_email == email)) {
    alert("email id already taken");
  } else {
    user_data = {
      user_id: id_generator,
      user_name: name1,
      user_last_name: name2,
      user_email: email,
      user_phoneno:user_phoneno,
      user_password:user_password,
      player: checkjoinPlayer.checked,
      imagename: "",
      url: "",
    };

    if (checkjoinPlayer.checked == false) {
      window.location.href = "./login.html";
    }
    if (checkjoinPlayer.checked) {
      window.location.href = "./login.html";
    }

  //  if (checkjoinPlayer.checked) {
   //   user_data = {
//...user_data,
  //      "user_age": age,
    //    "user_gender": gender,
        // "sport_Choosed": sport_Choosed,
  //      "sports_choosed_cricket": cricket,
    //    "sports_choosed_football": football,
    //    "sports_choosed_tennis": tennis,
   //     "sportLocationPlay": sportLocation,
     //   "timingsfrom":timingsfrom,
   //     "timingsto":timingsto,
   //    "aboutplayers": "",
      };
    }
    //  window.location.href="./login.html"

   // user_records.push(user_data);

  //  localStorage.setItem("user_details", JSON.stringify(user_records));
   // alert("Account created successfully")
 // }

  // checkjoinPlayer.checked

  //  if(checkjoinPlayer.checked){
  //     user_data={
  //         ...user_data,
  //         "user_age": age,
  //         "user_gender": gender,
  //         "sport_Choosed": sportChoose,
  //         "sportLocationPlay": sportLocation,
  //         "timingsfrom": timingsfrom,
  //         "timingsto": timingsto

  //     }

  //  }

  //  form.reset();
//}


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