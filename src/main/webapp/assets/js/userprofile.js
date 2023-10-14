/**
 * 
 */

 const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2");
const formsdiv = document.querySelector(".forms")
const id=document.getElementById("userId");

editbtn.addEventListener("click", () => {

    containerprofile.style.display = "block"


})
const fsidename = document.querySelector(".nameperson");
const namebox1 = document.getElementById("name1");
const namebox2 = document.getElementById("name2");
const user_email = document.getElementById("userEmail")
const user_phone = document.getElementById("phoneno1")

const user_age = document.getElementById("age")
const user_location = document.getElementById("locationselect")
const user_sports = document.getElementById("sportss")
const user_timingsfrom = document.getElementById("startTime")
const user_timingsto = document.getElementById("endTime")
const cricket = document.getElementById("sportsavail1")
const football = document.getElementById("sportsavail2")
const tennis = document.getElementById("sportsavail3");
const sportname1 = document.querySelector(".sportname1");
const sportname2 = document.querySelector(".sportname2");
const sportname3 = document.querySelector(".sportname3");
const labellocation = document.querySelector(".labelnamel");
const labelsports = document.querySelector(".labelnames");
const labeltime = document.querySelector(".labelnametime");
const labeltimeto = document.querySelector(".timep");
const labelage = document.querySelector(".labelnamea");
const playerjoin=document.querySelector(".joinplayer");
const join_as_player = document.getElementById("checkjoinplayer1");
const join_player_word = document.querySelector(".joinasplayer");
const joinform = document.getElementById("formbox");
let agelabel=document.querySelector(".labelnamegen")
const user_genders=document.getElementById("gender");
// const joinPlayer=document.querySelector(".pjointext");
// console.log(joinPlayer+"ok");
// profile image
const imageShow = document.querySelector(".profileimg");
let textarea=document.querySelector(".textabout");
let textline=document.querySelector(".linetext")
let ok = "../../assets/images/avatorprofile.jpg"

let check=document.querySelectorAll(`input[name="sport"]`);
const editbutn1 = document.querySelector(".profile2");
  let p_jointext;





const startTimeValue = null;
const endTimeValue = null;
const timePicker = {
  enableTime: true,
  noCalendar: true,
  dateFormat: "h:i K",
  time_24hr: false,
  minuteIncrement: 60,
  //   defaultDate: "12:00 AM",
  onChange: function (selectedDates, dateStr) {
    // Store selected start and end times in global variables
    if (this.input.id === "startTime") {
      startTime = dateStr;
    } else if (this.input.id === "endTime") {
      endTime = dateStr;
    }
    // localStorage.setItem("startTime", startTime);
    // localStorage.setItem("endTime", endTime);
  },
};
const startTimepicker = flatpickr("#startTime", timePicker);
const endTimepicker = flatpickr("#endTime", timePicker);


  const url = "http://localhost:8080/bookandplay-web/GetUserSession";


axios.get(url)
         .then(function (response) {
             // handle success
         // handle success
             console.log(response.data);
             //const responseUserData = response.data.substring(response.data.indexOf('{'));
             //const userLogin = JSON.parse(responseUserData);
             const userLogin =  response.data;
 

id.value=userLogin.userId;




function convertTo12HourFormat(timeString) {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':');
  
    // Convert hours to a number
    const hour = parseInt(hours);
  
    // Determine if it's AM or PM
    const period = hour >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
  
    // Create the formatted time string
    const formattedTime = `${formattedHour}:${minutes} ${period}`;
  
    return formattedTime;
  }
  

        if (userLogin.playerStatus === false) {
            fsidename.innerText = userLogin.firstName;
            namebox1.value =  userLogin.firstName;
             namebox2.value =  userLogin.lastName;
            user_email.value =  userLogin.email;
            user_phone.value = userLogin.phoneNumber;
           

user_genders.style.display = "none"
agelabel.style.display = "none"

            user_age.style.display = "none"
            user_location.style.display = "none"
            user_timingsfrom.style.display = "none"
            user_timingsto.style.display = "none"
            cricket.style.display = "none"
            football.style.display = "none"
            tennis.style.display = "none"
            sportname1.style.display = "none"
            sportname2.style.display = "none"
            sportname3.style.display = "none"
            labellocation.style.display = "none"
            labeltime.style.display = "none"
            labeltimeto.style.display = "none"
            formsdiv.style.height = "790px"
            labelsports.style.display = "none"
            labelage.style.display = "none";
            textarea.style.display="none";
            textline.style.display="none";

            editbutn1.style.bottom = "120px";
            // imageShow.setAttribute("class","profileimg")



            p_jointext = document.createElement("p");
            p_jointext.setAttribute("class", "pjointext");
            p_jointext.innerText = "If you want to join as a player click the join player box\n once you click it you will join as a player";
            joinform.append(p_jointext);
            console.log(p_jointext);



        }
        
        else {

  const formattedStartTime = convertTo12HourFormat(userLogin.timingAvailFrom);
  const formattedEndTime = convertTo12HourFormat(userLogin.timingAvailTo);
              // if a user is   a player

            //  p_jointext.style.display="none";
            join_as_player.style.display = "none";
             join_as_player.checked = true;
            join_player_word.style.display = "none";


                fsidename.innerText = userLogin.firstName;
                namebox1.value = userLogin.firstName;
                namebox2.value = userLogin.lastName;
                user_email.value = userLogin.email;
                user_phone.value = userLogin.phoneNumber;
             
                user_age.value =userLogin.age;
                user_genders.value=userLogin.gender;
                textarea.value=userLogin.about;
                //  imageShow.setAttribute("class","profileimg")



                document.getElementById("locationselect").value = userLogin.location;
                //  document.getElementById("sportss").value  = user_record[i]["sport_Choosed"];
                user_timingsfrom.value =formattedStartTime;
                user_timingsto.value = formattedEndTime;
               // cricket.checked = user_record[i]["sports_choosed_cricket"];
               // football.checked = user_record[i]["sports_choosed_football"];
                //tennis.checked = user_record[i]["sports_choosed_tennis"];


                user_age.required = true;
                user_location.setAttribute("required", true);
                user_timingsfrom.required = true;
                user_timingsto.required = true;

const knownSports = userLogin.knownSports;
const checkboxes = document.querySelectorAll('input[name="sportsKnown1"]');

// Loop through the checkboxes
checkboxes.forEach(checkbox => {
    // Check if the checkbox value is in the knownSports array
    if (knownSports.includes(checkbox.value)) {
        checkbox.checked = true;
    }
});

     



}




const joinPlayer=document.querySelector(".pjointext");






// if a user want  to join as  a player
join_as_player.addEventListener("click", () => {

    user_genders.style.display = "block"
agelabel.style.display = "block"
agelabel.style.top="42px";
user_genders.style.top="30px";
joinPlayer.style.bottom="950px"
    user_age.style.display = "block"
    user_location.style.display = "block"
    user_timingsfrom.style.display = "block"
    user_timingsto.style.display = "block"
    cricket.style.display = "block"
    football.style.display = "block"
    tennis.style.display = "block"
    sportname1.style.display = "block"
    sportname2.style.display = "block"
    sportname3.style.display = "block"
    labellocation.style.display = "block"
    labeltime.style.display = "block"
    labeltimeto.style.display = "block"
    labelsports.style.display = "block"
    labelage.style.display = "block"
    editbutn1.style.top = "142px"
    labelage.style.top = "90px";
    formsdiv.style.height = "1660px"
    user_timingsfrom.style.top = "190px";
    user_timingsto.style.top = "120px";
    labeltime.style.top = "180px"
    labeltimeto.style.top = "190px";
    user_location.style.top = "170px";
    labellocation.style.top = "170px";
    user_age.style.top="70px"
    labelage.style.top="77px"
    // joinPlayer.style.display="none";
    sportname1.style.left = "20px"
    sportname2.style.left = "20px"
    sportname3.style.left = "20px";
    textarea.style.display="block"
    textline.style.display="block";
    textarea.style.top="130px"
    textline.style.top="120px";
    cricket.style.top="50px"
    football.style.top="50px"
    tennis.style.right="150px"
    cricket.style.right="150px"
    football.style.right="150px"
    tennis.style.top="50px"
    sportname1.style.top = "20px"
    sportname2.style.top= "20px"
    sportname3.style.top = "20px";
    sportname1.style.right = "50px"
    sportname2.style.right= "50px"
    sportname3.style.right = "50px";
    labelsports.style.top = "30px";



      user_age.removeAttribute("disabled");
        user_location.removeAttribute("disabled")
        user_sports.removeAttribute("disabled");
        user_timingsfrom.removeAttribute("disabled")
        user_timingsto.removeAttribute("disabled");
        cricket.removeAttribute("disabled");
        football.removeAttribute("disabled");
        tennis.removeAttribute("disabled");
        textarea.removeAttribute("disabled");
        user_genders.removeAttribute("disabled");

    user_age.required = true;
    user_location.setAttribute("required", true);
    user_timingsfrom.required = true;
    user_timingsto.required = true;
    sportname1.required = true;
 sportname2.required = true;
 sportname3.required = true;
 user_genders.required = true;
 textarea.required = true;
 editbutn1.innerHTML = "Save"
 
  
  
/*

        if (loggedIn[0]["user_email"] == user_record[i]["user_email"]) {
            user_record[i]["player"] = true;
            loggedIn[0]["player_status"]=true;
            break
        }
    }

*/
 



})




// // updating the profile
const editbutn = document.getElementById("formbox");





editbutn.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("nfff");



    if (editbutn1.innerHTML == "Edit") {


        editbutn1.innerHTML = "Save"
        //console.log("namebox disabled before:", namebox.disabled);
        // user_email.removeAttribute("disabled")
        namebox1.removeAttribute("disabled");
        namebox2.removeAttribute("disabled");
        fsidename.removeAttribute("disabled")
        user_phone.removeAttribute("disabled");
        //user_password.removeAttribute("disabled")
        user_age.removeAttribute("disabled");
        user_location.removeAttribute("disabled")
        user_sports.removeAttribute("disabled");
        user_timingsfrom.removeAttribute("disabled")
        user_timingsto.removeAttribute("disabled");
        cricket.removeAttribute("disabled");
        football.removeAttribute("disabled");
        tennis.removeAttribute("disabled");
        textarea.removeAttribute("disabled");
        user_genders.removeAttribute("disabled");
console.log(namebox1.value);

    }


   

    else if (editbutn1.innerHTML == "Save") {

const sportsCheckboxes = document.querySelectorAll('input[name="sportsKnown1"]:checked');
const sportsKnownValues = Array.from(sportsCheckboxes).map(checkbox => checkbox.value);
              
        
const requestData = 

//alert(id.value);
	"&uId="+id.value+
	"&fname="+namebox1.value+
	"&lname1="+namebox2.value+
	"&uphonenumber1="+user_phone.value+
	"&joinplayer="+join_as_player.checked+
	"&uage1="+user_age.value+
	"&ugender1="+user_genders.value+
	"&ulocation1="+user_location .value+
	"&ustartTime1="+user_timingsfrom.value+
	"&uendTime1="+user_timingsto.value+
	"&uabout1="+textarea.value+
	"&sportsKnown1=" + sportsKnownValues.join("&sportsKnown1=");
          
       
        console.log(requestData+"ssan");


			const url = "http://localhost:8080/bookandplay-web/UpdateUser?"; 
			axios.post(url, requestData)
			  .then(function (response) {
			    // handle success
			    console.log(response.data+"dadeep");
			    const serverMsg = response.data;
			    
			    if(serverMsg.trim() === 'success') {
			    	console.log("success ");
			    	      swal("Success!","Your Profile Updated successfully", "success");
        setTimeout(() => {
             window.location.href="userprofile.jsp";
           
        }, 1000);
        
        
        
                editbutn1.innerHTML = "Edit";
        namebox1.setAttribute("disabled", "");
                namebox2.setAttribute("disabled", "");
        // user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled", "");
       // user_password.setAttribute("disabled", "")
        user_age.setAttribute("disabled", "");
        user_location.setAttribute("disabled", "")
        user_sports.setAttribute("disabled", "");
        user_timingsfrom.setAttribute("disabled", "")
        user_timingsto.setAttribute("disabled", "");
        cricket.setAttribute("disabled", "");
        football.setAttribute("disabled", "");
        tennis.setAttribute("disabled", "");
        textarea.setAttribute("disabled", "");
        user_genders.setAttribute("disabled", "");
        playerjoin.style.display = "none";
        p_jointext.style.display = "none";
			    }  
			    else {
			    	console.log("not success");
			    	 swal("Failed!",serverMsg, "error");
        setTimeout(() => {

        }, 4000);
     
			    }
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })

        
        

}
 

})





         })
         .catch(function (error) {
             // handle error
             console.log(error+"sandyyyyyyy");
         });
