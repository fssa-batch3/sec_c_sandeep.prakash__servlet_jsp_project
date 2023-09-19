// const formButton = document.getElementById("formbtn");
// const id_generator = Math.floor(Math.random() * 300);

// formButton.addEventListener("submit", e => {

//     e.preventDefault();
//     getSellerGround();
// });
// function getSellerGround() {
//     const groundName = (document.getElementById("groname").value);
//     const groundPlace = (document.getElementById("grolname").value);
//     const Groundaddress=(document.getElementById("groaddress").value)
//     const groundLocationLink = (document.getElementById("grolink").value);
//     const groundImage1 = (document.getElementById("grimg1").value);
//     const groundImage2 = (document.getElementById("grimg2").value);
//     const groundImage3 = (document.getElementById("grimg3").value);
//     const sportsAvail1 = (document.getElementById("sportsavail1").checked);
//     const sportsAvail2 = (document.getElementById("sportsavail2").checked);
//     const sportsAvail3 = (document.getElementById("sportsavail3").checked);
//     const groundTimingfrom = (document.getElementById("timingsfrom").value);
//     const groundTimingTo = (document.getElementById("timingsto").value);
//     const groundRules = (document.getElementById("rules").value);
//     const groundCity = (document.getElementById("sportsvalue").value);
//     const groundPrice = (document.getElementById("amount").value);

//     console.log(id_generator);
//     let groundOwnerRecords = new Array();
//     groundOwnerRecords = JSON.parse(localStorage.getItem("ground_info")) ?
//         JSON.parse(localStorage.getItem("ground_info")) : []

//     if (groundOwnerRecords.some((v) => {
//         return v.ground_name == groundName
//     })) {
//         alert("the ground name is already there")
//     }
//     else {

//         groundOwnerRecords.push({
//             "ground_id": id_generator,
//             "ground_name": groundName,
//             "ground_Place": groundPlace,
//             "ground_Address":Groundaddress,
//             "ground_locat_link": groundLocationLink,
//             "groundimg1": groundImage1,
//             "groundimg2": groundImage2,
//             "groundimg3": groundImage3,
//             "sport_avail_1": sportsAvail1,
//             "sport_avail_2": sportsAvail2,
//             "sport_avail_3": sportsAvail3,
//             "ground_timing_from": groundTimingfrom,
//             "ground_timing_to": groundTimingTo,
//             "ground_rules": groundRules,
//             "ground_city": groundCity,
//             "ground_price": groundPrice,
//             "status": true
//         });

//     }
//     localStorage.setItem("ground_info", JSON.stringify(groundOwnerRecords))

// }

// // local storage

// // view

// let groundRecords = JSON.parse(localStorage.getItem("ground_info"));

// const groundName = document.getElementById("groname");
// const groundPlace = (document.getElementById("grolname"));
// const groundLocationLink = (document.getElementById("grolink"));
// const groundaddress=(document.getElementById("groaddress"));
// const groundImage1 = (document.getElementById("grimg1"));
// const groundImage2 = (document.getElementById("grimg2"));
// const groundImage3 = (document.getElementById("grimg3"));
// const sportsAvail1 = (document.getElementById("sportsavail1"));
// const sportsAvail2 = (document.getElementById("sportsavail2"));
// const sportsAvail3 = (document.getElementById("sportsavail3"));
// const groundTimingfrom = (document.getElementById("timingsfrom"));
// const groundTimingTo = (document.getElementById("timingsfrom"));
// const groundRules = (document.getElementById("rules"));
// const groundCity = (document.getElementById("sportsvalue"));
// const groundPrice = (document.getElementById("amount"));

// // view

// const url2 = window.location.search;
// console.log(url2)
// const urlParameter2 = new URLSearchParams(url2);
// // console.log(urlParameter)
// const groundSearch2 = urlParameter2.get("userId");
// // console.log(groundSearch2);

// let show2;
// groundRecords.find(function (e) {
//     if (e["ground_id"] == groundSearch2) {
//         return show2 = e;

//     }
//     else {
//         return show2 = 0;
//     }
// })

// groundRecords.find((e=>{

// if(show2["ground_id"]==e["ground_id"]){
//  groundName.value = show2["ground_name"]
// groundPlace.value = show2["ground_Place"]
// groundaddress.value=show2["ground_Address"]
// groundLocationLink.value = show2["ground_locat_link"]
// groundImage1.value = show2["groundimg1"]
// groundImage2.value = show2["groundimg2"]
// groundImage3.value = show2["groundimg3"]
// sportsAvail1.checked = show2["sport_avail_1"]
// sportsAvail2.checked = show2["sport_avail_2"]
// sportsAvail3.checked = show2["sport_avail_3"]
// groundTimingTo.value = show2["ground_timing_to"]
// groundRules.value = show2["ground_rules"]
// groundCity.value = show2["ground_city"]
// groundPrice.value = show2["ground_price"]

// }

// }))

// let groundRecords2 = JSON.parse(localStorage.getItem("ground_info"));

// // // update

// const updatebutton = document.getElementById("updatebtn")
// updatebutton.addEventListener("click", () => {

//     groundRecords2.find((e => {
//         if (show2["ground_id"] === e["ground_id"]) {
//             e["ground_name"] = groundName.value;
//             e["ground_Place"] = groundPlace.value
//             e["ground_locat_link"] = groundLocationLink.value
//             e["groundimg1"] = groundImage1.value
//             e["groundimg2"] = groundImage2.value
//             e["groundimg3"] = groundImage3.value
//             e["sport_avail_1"] = sportsAvail1.checked
//             e["sport_avail_2"] = sportsAvail2.checked
//             e["sport_avail_3"] = sportsAvail3.checked
//             e["ground_timing_to"] = groundTimingTo.value
//             e["ground_rules"] = groundRules.value
//             e["ground_city"] = groundCity.value
//             e["ground_price"] = groundPrice.value

//             localStorage.setItem("ground_info", JSON.stringify(groundRecords2))

//         }
//     }))

// })

// // update

// const deletebutton = document.getElementById("deletebtn")
// deletebutton.addEventListener("click", () => {

//     let groundRecords2 = JSON.parse(localStorage.getItem("ground_info"));
//     groundRecords2.find(function (item) {
//         console.log(show2);
//         if (show2["ground_id"] === item["ground_id"]) {
//             item["status"] = false

//         }
//         localStorage.setItem("ground_info", JSON.stringify(groundRecords2))
//     })
// })
