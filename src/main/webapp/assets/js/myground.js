// const { doc } = require("prettier");

const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));

const sellerId = sellerloggedDta[0].seller_Id;

const groundRecords = JSON.parse(localStorage.getItem("ground_info"));

const sellerProducts = groundRecords.find(
  (data) => data.seller_id === sellerId
);
console.log(sellerProducts);
// local storage

// time

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
console.log(groundCourts);

// view

// const url2 = window.location.search;
// console.log(url2)
// const urlParameter2 = new URLSearchParams(url2);
// // console.log(urlParameter)
// const groundSearch2 = urlParameter2.get("userId");
// // console.log(groundSearch2);

// let sellerProducts;
// groundRecords.find(function (e) {
//     if (e["ground_id"] == groundSearch2) {
//         return sellerProducts =sellerProducts;

//     }
//    sellerProductslse {
//         return sellerProducts = 0;
//     }
// })

// sellerProducts.find((e=>{
if (sellerProducts) {
  groundName.value = sellerProducts.ground_name;
  groundPlace.value = sellerProducts.ground_Place;
  groundaddress.value = sellerProducts.ground_Address;
  groundLocationLink.value = sellerProducts.ground_locat_link;
  groundImage1.value = sellerProducts.groundimg1;
  groundImage2.value = sellerProducts.groundimg2;
  groundImage3.value = sellerProducts.groundimg3;
  sportsAvail1.checked = sellerProducts.sport_avail_1;
  sportsAvail2.checked = sellerProducts.sport_avail_2;
  sportsAvail3.checked = sellerProducts.sport_avail_3;
  groundTimingfrom.value = sellerProducts.ground_timing_from;
  groundTimingTo.value = sellerProducts.ground_timing_to;
  groundRules.value = sellerProducts.ground_rules;
  groundCity.value = sellerProducts.ground_city;
  groundPrice.value = sellerProducts.ground_price;
  groundincreasingPrice.value = sellerProducts.groundIncreasePrice;
  groundCourts.value = sellerProducts.groundCourt;
}




//edit
let editbtn=document.getElementById("editbtn");
editbtn.addEventListener("click",()=>{


  groundName.removeAttribute("disabled");
  groundPlace.removeAttribute("disabled");
  groundaddress.removeAttribute("disabled");
  groundLocationLink.removeAttribute("disabled");
  groundImage1.removeAttribute("disabled");
  groundImage2.removeAttribute("disabled");
  groundImage3.removeAttribute("disabled"); 
  sportsAvail1.removeAttribute("disabled");
  sportsAvail2.removeAttribute("disabled");  

    sportsAvail3.removeAttribute("disabled");
    groundTimingfrom.removeAttribute("disabled");
    groundTimingTo.removeAttribute("disabled");
    groundRules.removeAttribute("disabled");
    groundCity.removeAttribute("disabled");
    groundPrice.removeAttribute("disabled");
    groundincreasingPrice.removeAttribute("disabled");
    groundCourts.removeAttribute("disabled");
   


})














// }))

// // update

const updatebutton = document.getElementById("formbtn");
updatebutton.addEventListener("submit", (e) => {
  e.preventDefault()

  sellerProducts.ground_name = groundName.value;
  sellerProducts.ground_Place = groundPlace.value;
  sellerProducts.ground_locat_link = groundLocationLink.value;
  sellerProducts.ground_Address = groundaddress.value;
  sellerProducts.ground_locat_link = groundLocationLink.value;
  sellerProducts.groundimg1 = groundImage1.value;
  sellerProducts.groundimg2 = groundImage2.value;
  sellerProducts.groundimg3 = groundImage3.value;
  sellerProducts.sport_avail_1 = sportsAvail1.checked;
  sellerProducts.sport_avail_2 = sportsAvail2.checked;
  sellerProducts.sport_avail_3 = sportsAvail3.checked;
  sellerProducts.ground_timing_from = groundTimingfrom.value;
  sellerProducts.ground_timing_to = groundTimingTo.value;
  sellerProducts.ground_rules = groundRules.value;
  sellerProducts.ground_city = groundCity.value;
  sellerProducts.ground_price = groundPrice.value;
  sellerProducts.groundIncreasePrice = groundincreasingPrice.value;
  sellerProducts.groundCourt = groundCourts.value;

  localStorage.setItem("ground_info", JSON.stringify(groundRecords));





  groundName.setAttribute("disabled", "");
  groundPlace.setAttribute("disabled", "");
  groundaddress.setAttribute("disabled", "");
  groundLocationLink.setAttribute("disabled", "");
  groundImage1.setAttribute("disabled", "");
  groundImage2.setAttribute("disabled", "");
  groundImage3.setAttribute("disabled", "");
  sportsAvail1.setAttribute("disabled", "");
  sportsAvail2.setAttribute("disabled", ""); 

    sportsAvail3.setAttribute("disabled", "");
    groundTimingfrom.setAttribute("disabled", "");
    groundTimingTo.setAttribute("disabled", "");
    groundRules.setAttribute("disabled", "");
    groundCity.setAttribute("disabled", "");
    groundPrice.setAttribute("disabled", "");
    groundincreasingPrice.setAttribute("disabled", "");
    groundCourts.setAttribute("disabled", "");























});
// function replacer(key, value) {
//     if (key === "_flatpickr") {
//       return undefined; // Skip the _flatpickr property
//     }
//     return value;
//   }
// delete

const deletebutton = document.getElementById("deletebtn");
deletebutton.addEventListener("click", () => {
  const groundRecords = JSON.parse(localStorage.getItem("ground_info"));
  groundRecords.find((item) => {
    console.log(sellerProducts);
    if (sellerProducts.ground_id === item.ground_id) {
      item.status = false;
    }
    localStorage.setItem("ground_info", JSON.stringify(groundRecords));
  });
});
