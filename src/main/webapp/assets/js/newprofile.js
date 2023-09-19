
const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2");
const formsdiv = document.querySelector(".forms")


editbtn.addEventListener("click", () => {

    containerprofile.style.display = "block"


})
const fsidename = document.querySelector(".nameperson")
const namebox = document.getElementById("name1")
const user_email = document.getElementById("userEmail")
const user_phone = document.getElementById("phoneno1")
const user_password = document.getElementById("password")
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


let user_record = JSON.parse(localStorage.getItem("user_details"));
// let user_sports_choosed=user_record.sport_Choosed;
let loggedIn = JSON.parse(localStorage.getItem("user_logged_in"));
let check=document.querySelectorAll(`input[name="sport"]`)

// time am and pm

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



const editbutn1 = document.querySelector(".profile2");
// for book ground user

for (let i = 0; i < user_record.length; i++) {


    if (loggedIn[0]["user_email"] == user_record[i]["user_email"]) {

        // if a user is not  a player

        if (user_record[i]["player"] == false) {
            fsidename.innerText = user_record[i]["user_name"];
            namebox.value = user_record[i]["user_name"];
            user_email.value = user_record[i]["user_email"];
            user_phone.value = user_record[i]["user_phoneno"];
            user_password.value = user_record[i]["user_password"];

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



            let p_jointext = document.createElement("p");
            p_jointext.setAttribute("class", "pjointext");
            p_jointext.innerText = "If you want to join as a player click the join player box\n once you click it you will join as a player";
            joinform.append(p_jointext);
            console.log(p_jointext);



        }
        
        else {

              // if a user is   a player

            //  p_jointext.style.display="none";
            join_as_player.style.display = "none"
            join_player_word.style.display = "none"
            if (loggedIn[0]["user_email"] == user_record[i]["user_email"]) {

                fsidename.innerText = user_record[i]["user_name"];
                namebox.value = user_record[i]["user_name"];
                user_email.value = user_record[i]["user_email"];
                user_phone.value = user_record[i]["user_phoneno"];
                user_password.value = user_record[i]["user_password"];
                user_age.value = user_record[i]["user_age"];
                user_genders.value=user_record[i]["user_gender"];
                textarea.value=user_record[i]["aboutplayers"]
                //  imageShow.setAttribute("class","profileimg")



                document.getElementById("locationselect").value = user_record[i]["sportLocationPlay"];
                //  document.getElementById("sportss").value  = user_record[i]["sport_Choosed"];
                user_timingsfrom.value = user_record[i]["timingsfrom"];
                user_timingsto.value = user_record[i]["timingsto"];
                cricket.checked = user_record[i]["sports_choosed_cricket"];
                football.checked = user_record[i]["sports_choosed_football"];
                tennis.checked = user_record[i]["sports_choosed_tennis"];


                user_age.required = true;
                user_location.setAttribute("required", true);
                user_timingsfrom.required = true;
                user_timingsto.required = true;
            //     sportname1.required = true;
            //  sportname2.required = true;
            //  sportname3.required = true;
             user_genders.required = true;
             textarea.required = true;


            //  let checkval=false;

            //  for(let i=0;i<check.length;i++){
            //     if(check[i].checked){
            //         checkval=true;
            //         break
            //     }
            //  }
            //  if(!checkval){
            //     alert("please select atleast one sport");
                
               
            //  }
            //  let checkval=false;

            //  for(let i=0;i<check.length;i++){
            //     if(check[i].checked){
            //         checkval=true;
            //         break
            //     }
            //  }
            //  if(!checkval){
            //     alert("please select atleast one sport");
                
               
            //  }

                // if(user_record[i].sport_Choosed.includes("cricket")){
                //     cricket.checked=true
                //     console.log(cricket);
                // }
                // if(user_record[i].sport_Choosed.includes("football")){
                //     football.checked=true
                // }
                // if(user_record[i].sport_Choosed.includes("tennis")){
                //     tennis.checked=true
                // }

                break;

            }
     





        }
    }
}


const joinPlayer=document.querySelector(".pjointext");
// console.log(joinPlayer+12);






// // for all user
//     for (let i = 0; i < user_record.length; i++) {

//         if (loggedIn == user_record[i]["user_email"]) {

//             fsidename.innerText=user_record[i]["user_name"];
//            namebox.value = user_record[i]["user_name"];
//           user_email.value = user_record[i]["user_email"];
//           user_phone.value = user_record[i]["user_phoneno"];
//         user_password.value = user_record[i]["user_password"];
//          user_age.value = user_record[i]["user_age"];

//          document.getElementById("locationselect").value = user_record[i]["sportLocationPlay"];
//         //  document.getElementById("sportss").value  = user_record[i]["sport_Choosed"];
//            user_timingsfrom.value = user_record[i]["timingsfrom"];
//             user_timingsto.value = user_record[i]["timingsto"];
//             cricket.checked=user_record[i]["sports_choosed_cricket"];
//             football.checked=user_record[i]["sports_choosed_football"];
//             tennis.checked=user_record[i]["sports_choosed_tennis"];

//             // if(user_record[i].sport_Choosed.includes("cricket")){
//             //     cricket.checked=true
//             //     console.log(cricket);
//             // }
//             // if(user_record[i].sport_Choosed.includes("football")){
//             //     football.checked=true
//             // }
//             // if(user_record[i].sport_Choosed.includes("tennis")){
//             //     tennis.checked=true
//             // }

//             break;

//         }

//     }


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
 
  

    for (let i = 0; i < user_record.length; i++) {

        if (loggedIn[0]["user_email"] == user_record[i]["user_email"]) {
            user_record[i]["player"] = true;
            loggedIn[0]["player_status"]=true;
            break
        }
    }

        localStorage.setItem("user_details", JSON.stringify(user_record));
  localStorage.setItem("user_logged_in",JSON.stringify(loggedIn))
 



})




// // updating the profile
const editbutn = document.getElementById("formbox");

// const editbutn1 = document.querySelector(".profile2");

editbutn.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log("nfff");



    if (editbutn1.innerHTML == "Edit") {


        editbutn1.innerHTML = "Save"
        console.log("namebox disabled before:", namebox.disabled);
        // user_email.removeAttribute("disabled")
        namebox.removeAttribute("disabled");
        fsidename.removeAttribute("disabled")
        user_phone.removeAttribute("disabled");
        user_password.removeAttribute("disabled")
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


       
 

    }


   

    else if (editbutn1.innerHTML == "Save") {


      
        editbutn1.innerHTML = "Edit";
        namebox.setAttribute("disabled", "");
        // user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled", "");
        user_password.setAttribute("disabled", "")
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




    user_record.find(e => {



        if (user_email.value == e["user_email"]) {

            e["user_name"] = fsidename.innerText
            e["user_name"] = namebox.value
            e["user_email"] = user_email.value
            e["user_phoneno"] = user_phone.value
            e["user_password"] = user_password.value
            e["user_age"] = user_age.value
            e["sportLocationPlay"] = user_location.value
            e["sport_Choosed"] = user_sports.value
            e["timingsfrom"] = user_timingsfrom.value
            e["timingsto"] = user_timingsto.value
            e["sports_choosed_cricket"] = cricket.checked;
            e["sports_choosed_football"] = football.checked;
            e["sports_choosed_tennis"] = tennis.checked;
            e["aboutplayers"]=textarea.value
            e["user_gender"]=user_genders.value

            //   if(cricket.checked){
            //    e["sport_Choosed"]=true
            // }
            // if(football.checked){
            //     e["sport_Choosed"]=true
            // }
            // if(tennis.checked){
            //     e["sport_Choosed"]=true
            // }

            localStorage.setItem("user_details", JSON.stringify(user_record));



        }


    })  }



})
// for (i = 0; i < user_record.length; i++) {
//     if (loggedIn == user_record[i]["user_email"]) {

//         user_record[i]["user_name"]=fsidename.innerText
//         user_record[i]["user_name"] =namebox.value
//         user_record[i]["user_email"] = user_email.value
//         user_record[i]["user_phoneno"] =user_phone.value
//         user_record[i]["user_password"] =user_password.value
//         user_record[i]["user_age"] = user_age.value
//         user_record[i]["sportLocationPlay"] = user_location.value
//         user_record[i]["sport_Choosed"] =user_sports.value
//         user_record[i]["timingsfrom"] = user_timingsfrom.value
//         user_record[i]["timingsto"] = user_timingsto.value



//         alert("your profile updated");
//         localStorage.setItem("user_details", JSON.stringify(user_record));
//         break;


//     }







// if()
// console.log(user_record);





// function onDelete() {
//     alert("Are you sure want to delete your account")
//     //     alert("your account deleted")
//     // const currentEmailUser= user_record.find(y=> y.user_email === userEmail);
//     // const filterRecords =user_record.filter(v=> v.user_email !==currentEmailUser);
//     // user_record=filterRecords;
//     // localStorage.setItem("user_details",JSON.stringify(user_record));
//     for (i = 0; i < user_record.length; i++) {
//         if (document.getElementById("userEmail").value == user_record[i]["user_email"]) {
//             user_record.splice(i, 1)
//             localStorage.setItem("user_details", JSON.stringify(user_record));

//         }

//     }
// }



// password
let eye=document.querySelector(".eyesym i")
eye.addEventListener("click",()=>{
    // eye.setAttribute("class","fa-solid fa-eye")

    if(user_password.type=="password"){
       
        user_password.type="text"
     eye.classList.remove("fa-eye-slash");
     eye.classList.add("fa-eye")
    }
    else{
  
        user_password.type="password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        
    }
    
})
//logout
const logOut = document.querySelector(".logout")
logOut.addEventListener("click", (e) => {

    const log_out = delete loggedIn

    localStorage.setItem("user_logged_in", log_out);
    window.location.href = "../../pages/login/login.html"


})




// imageShow.src=ok


//profile image
const imageFileUpload = document.getElementById("input-file");
// const imageShow = document.querySelector(".profileimg");

imageFileUpload.addEventListener("change", (e) => {

    const file = e.target.files[0];

    // if (file != file.type.match("image.*")) {
    //     alert("please choose the image ");

    // };

    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.onload = (e) => {
        imageShow.src = e.target.result;

        const userRecords = JSON.parse(localStorage.getItem("user_details"))
        const user_logged = JSON.parse(localStorage.getItem("user_logged_in"));


        for (let i = 0; i < userRecords.length; i++) {

            if (user_logged[0]["user_email"] == userRecords[i]["user_email"]) {
                // let user_data;
                // user_data = {

                //     imagename: file.name,
                //     url: e.target.result
                // };
                console.log(userRecords[i])
                //4
                console.log(userRecords[i]["imagename"])
                userRecords[i]["imagename"] = file.name;
                userRecords[i]["url"] = e.target.result;


                break;
            };


        }
        localStorage.setItem("user_details", JSON.stringify(userRecords));
    };
    fileReader.readAsDataURL(file);


});

// refresh
const userRecords = JSON.parse(localStorage.getItem("user_details"));
const user_logged = JSON.parse(localStorage.getItem("user_logged_in"));
for (let i = 0; i < userRecords.length; i++) {
    if (user_logged[0]["user_email"] == userRecords[i]["user_email"]) {
        const savedImage = userRecords[i];
        console.log(savedImage);
        if (savedImage && savedImage.url) {
            imageShow.src = savedImage.url;
        }
        else {
            imageShow.src = "https://iili.io/HkW7U4S.jpg"
        }
        break;
    }
}



for (let i = 0; i < user_record.length; i++) {


    if (user_logged[0]["user_email"] == user_record[i]["user_email"]) {


        let box2 = document.querySelector(".box2")
        anchorbk = document.createElement("a");
        anchorbk.setAttribute("href", "../../pages/bookinground/mybooking.html?userid=" + user_record[i]["user_id"])
        // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
        box2.append(anchorbk)

        let bookinghistoryDiv = document.querySelector(".bookinghistory");
        anchorbk.append(bookinghistoryDiv);




    }
}




// for diabling option
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
// const loginbtn = document.querySelector(".login");


// for message 
const messbtn = document.querySelector(".message");
// messbtn.addEventListener("click", (e) => {

  if (loginUser[0].player_status == false) {
    messbtn.style.filter = "blur(3px)";
 
    }
//   });

messbtn.addEventListener("click", (e) => {
    // alert("p,")
    if (loginUser[0].player_status == false) {
        // messbtn.style.filter = "blur(3px)";
          alert(
            "Please join as a player to get the message feature "
          );
          e.preventDefault();
        } else {
          window.location.href = "../../pages/player/playermessages.html";
        }
})

// for friend

const friendlistbtn = document.querySelector(".friendslist");


if (loginUser[0].player_status == false) {
    friendlistbtn.style.filter = "blur(3px)";
 
    }


    
friendlistbtn.addEventListener("click", (e) => {
    // alert("p,")
    if (loginUser[0].player_status == false) {
        // messbtn.style.filter = "blur(3px)";
          alert(
            "Please join as a player to get the friends "
          );
          e.preventDefault();
        } else {
          window.location.href = "../../pages/player/playermessages.html";
        }
})


// friendreq

const friendreqbtn = document.querySelector(".friendsrequest");



if (loginUser[0].player_status == false) {
    friendreqbtn.style.filter = "blur(3px)";
 
    }

    
    
friendreqbtn.addEventListener("click", (e) => {
    // alert("p,")
    if (loginUser[0].player_status == false) {
        // messbtn.style.filter = "blur(3px)";
          alert(
            "Please join as a player to get the friends "
          );
          e.preventDefault();
        } else {
          window.location.href = "../../pages/player/playermessages.html";
        }
})

