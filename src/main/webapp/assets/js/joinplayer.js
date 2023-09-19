// const user_logged = localStorage.getItem("logged_in");

// const data_record = JSON.parse(localStorage.getItem("user_details"));
// console.log(data_record);
// const id_generator = Math.floor(Math.random() * 300);

// function getPlayerData() {

//   // window.location.href="../../index.html";
//   const name1 = (document.getElementById("name1").value)

//   const age = (document.getElementById("age").value)

//   const gender = (document.getElementById("gender").value)
//   const sportChoose = (document.getElementById("sportss").value)
//   const sportLocation = (document.getElementById("locationselect").value)

//   const timingsfrom = (document.getElementById("timingsfrom").value)

//   const timingsto = (document.getElementById("timingsto").value)

//   let playerRecords = JSON.parse(localStorage.getItem("user_details"))

//   for (let i = 0; i <= playerRecords.length - 1; i++) {

//     if (user_logged == playerRecords[i]["user_as_ground"].user_email) {

//       playerRecords[i].user_as_player = {
//         "player_id": id_generator,
//         "user_name": name1,
//         "user_age": age,
//         "user_gender": gender,
//         "sport_Choosed": sportChoose,
//         "sportLocationPlay": sportLocation,
//         "timingsfrom": timingsfrom,
//         "timingsto": timingsto
//       };

//       break;

//     }

//   }

//   localStorage.setItem("user_details", JSON.stringify(playerRecords));

// }
