const user_record = JSON.parse(localStorage.getItem("user_details"));
const loggedIn = localStorage.getItem("logged_in");

for (let i = 0; i < user_record.length; i++) {
  if (loggedIn == user_record[i].user_as_ground.user_email) {
    document.getElementById("name1").value =
      user_record[i].user_as_ground.user_name;
    document.getElementById("userEmail").value =
      user_record[i].user_as_ground.user_email;
    document.getElementById("phoneno1").value =
      user_record[i].user_as_ground.user_phoneno;
    document.getElementById("password").value =
      user_record[i].user_as_ground.user_password;
    document.getElementById("age").value =
      user_record[i].user_as_player.user_age;
    document.getElementById("locationselect").value =
      user_record[i].user_as_player.sportLocationPlay;
    document.getElementById("sportss").value =
      user_record[i].user_as_player.sport_Choosed;
    document.getElementById("timingsfrom").value =
      user_record[i].user_as_player.timingsfrom;
    document.getElementById("timingsto").value =
      user_record[i].user_as_player.timingsto;

    break;
  }
}
console.log(user_record);

function update() {
  for (i = 0; i < user_record.length; i++) {
    if (loggedIn == user_record[i].user_as_ground.user_email) {
      user_record[i].user_as_ground.user_name =
        document.getElementById("name1").value;
      user_record[i].user_as_ground.user_email =
        document.getElementById("userEmail").value;
      user_record[i].user_as_ground.user_phoneno =
        document.getElementById("phoneno1").value;
      user_record[i].user_as_ground.user_password =
        document.getElementById("password").value;
      user_record[i].user_as_player.user_age =
        document.getElementById("age").value;
      user_record[i].user_as_player.sportLocationPlay =
        document.getElementById("locationselect").value;
      user_record[i].user_as_player.sport_Choosed =
        document.getElementById("sportss").value;
      user_record[i].user_as_player.timingsfrom =
        document.getElementById("timingsfrom").value;
      user_record[i].user_as_player.timingsto =
        document.getElementById("timingsto").value;

      localStorage.setItem("user_details", JSON.stringify(user_record));
      alert("your profile updated");

      break;
    }
  }
}

// function update(){
//     let userData =
// }
// function update(){
//     // let userData= JSON.parse(localStorage.getItem("user_details"));
//     // let userData2=JSON.parse(localStorage.getItem("players_details"));

// for(let i=0;i<user_record.length;i++){

//     if(loggedIn==user_record[i]["user_as_ground"]["user_email"]){
//         user_record[i].user_name= document.getElementById("name1").value
//         user_record[i].user_email= document.getElementById("userEmail").value
//         user_record[i].user_phoneno= document.getElementById("phoneno1").value
//         user_record[i].user_password= document.getElementById("password").value

//     }

// }
//     if(document.getElementById("name1").value != "" && document.getElementById("userEmail").value!="" && document.getElementById("phoneno1").value!="" &&  document.getElementById("password").value!=""){
//         localStorage.setItem("user_details",JSON.stringify(user_record));
//         alert("your profile updated")

//     }

// for(let j=0;j<players_records.length;j++){

//         players_records[j].user_age= document.getElementById("age").value
//         players_records[j].sportLocationPlay= document.getElementById("locationselect").value
//         players_records[j].sport_Choosed= document.getElementById("sportss").value
//     players_records[j].timingsfrom= document.getElementById("timingsfrom").value
//     players_records[j].timingsto=  document.getElementById("timingsto").value

// }

//     if(document.getElementById("age").value != "" && document.getElementById("locationselect").value!="" && document.getElementById("sportss").value!="" &&  document.getElementById("timingsfrom").value!="" && document.getElementById("timingsto").value  ){
//         localStorage.setItem("players_details",JSON.stringify(players_records));
//     }
//         alert("your profile updated")
//     }

//     console.log(players_records);

function onDelete() {
  alert("Are you sure want to delete your account");
  //     alert("your account deleted")
  // const currentEmailUser= user_record.find(y=> y.user_email === userEmail);
  // const filterRecords =user_record.filter(v=> v.user_email !==currentEmailUser);
  // user_record=filterRecords;
  // localStorage.setItem("user_details",JSON.stringify(user_record));
  for (i = 0; i < user_record.length; i++) {
    if (
      document.getElementById("userEmail").value ==
      user_record[i].user_as_ground.user_email
    ) {
      user_record.splice(i, 1);
      localStorage.setItem("user_details", JSON.stringify(user_record));
    }
  }
}
