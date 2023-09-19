const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const loginbtn = document.querySelector(".login");
  // for changing login into my account
if (loginUser == null) {
} else if (loginUser !== false) {
    loginbtn.style.display = "none";
    const myprofile = document.createElement("button");
    myprofile.setAttribute("class", "login");
    myprofile.innerText = "My Account";
    myprofile.style.width = "150px";
    myprofile.style.left = "50px";
    myprofile.addEventListener("click", () => {
      window.location.href = "../../pages/player/newprofile.html";
    });
    document.querySelector(".contact").append(myprofile);
  } else {
    loginbtn.style.display = "block";

 }

 // checking the user is player

const findplayersbtn = document.querySelector(".findplayers");
findplayersbtn.addEventListener("click", (e) => {
  if (!loginUser) {
    alert("Please login to find players ");
    e.preventDefault();
  } else if (loginUser[0].player_status == false) {
    alert(
      "Please join as a player to find players. To join as a player please tick the box on your profile page "
    );
    e.preventDefault();
  } else {
    window.location.href = "./pages/player/findplayers.html";
  }
});
const ground_list = [
  // ground1
  {
    groundname: "DNS  TURF",
    image: "../../assets/images/ground1.jpg",
    locationname: "Vyasarpadi",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "5.0",
    valuename: "Chennai",
    // "anchorlocataion":"../../pages/bookinground/ground1.html"
  },

  // "ground_image":{
  //   "source":"../../assets/images/ground2.JPG",
  //   "alter": "image of Annasalai ground"
  // },
  // ground2
  {
    groundname: "Pitch and Play",
    image: "../../assets/images/ground2.JPG",
    locationname: "Annasalai",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "5.0",
    //  "anchorlocataion":"../../pages/bookinground/ground2.html"
    valuename: "Chennai",
  },
  // ground3
  {
    groundname: "Sports Sanity FC Marina",
    image: "../../assets/images/ground3.jpg",
    locationname: "Kilpauk",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.9",
    //  "anchorlocataion":"../../pages/bookinground/ground3.html"
    valuename: "Chennai",
  },
  // ground4
  {
    groundname: "HotFut SPR City",
    image: "../../assets/images/ground4.jpg",
    locationname: "Perambur",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.6",
    //  "anchorlocataion":"../../pages/bookinground/ground4.html"
    valuename: "Coimbatore",
  },
  // ground5
  {
    groundname: "Revolt theTurfWar",
    image: "../../assets/images/ground5.jpg",
    locationname: "Perambur",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.5",
    valuename: "Coimbatore",
    //  "anchorlocataion":"../../pages/bookinground/ground5.html"
  },
  // ground6
  {
    groundname: "Seven Eleven's Turf",
    image: "../../assets/images/ground6.jpg",
    locationname: "Kasi theatre",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.4",
    valuename: "Coimbatore",
    //  "anchorlocataion":"../../pages/bookinground/ground6.html"
  },
  // ground7
  {
    groundname: "Sky Arena",
    image: "../../assets/images/ground7.jpg",
    locationname: "Bengaluru Shivaji Nagar",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.4",
    valuename: "Bangalore",
    //  "anchorlocataion":"../../pages/bookinground/ground7.html"
  },
  // ground8
  {
    groundname: "Tiento Sports",
    image: "../../assets/images/ground8.jpg",
    locationname: "Bengaluru Sudhama Nagar",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.2",
    valuename: "Bangalore",
    //  "anchorlocataion":"../../pages/bookinground/ground8.html"
  },
  // ground9
  {
    groundname: "Fusion The TurfF",
    image: "../../assets/images/ground9.jpg",
    locationname: "Vyasarpadi",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.2",
    valuename: "Chennai",
    //  "anchorlocataion":"../../pages/bookinground/ground9.html"
  },
  // ground10
  {
    groundname: "Kovai Arena - Football Turf",
    image: "../../assets/images/ground10.jpg",
    locationname: "Udayampalayam",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.2",
    valuename: "Coimbatore",
    //  "anchorlocataion":"../../pages/bookinground/ground10.html"
  },
  // ground11
  {
    groundname: "Sport Fit Arena",
    image: "../../assets/images/ground11.jpg",
    locationname: "Elappully",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.0",
    valuename: "Coimbatore",
    //  "anchorlocataion":"../../pages/bookinground/ground11.html"
  },
  // ground12
  {
    groundname: "Turf Time",
    image: "../../assets/images/ground12.jpg",
    locationname: "Salem",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "5.0",
    valuename: "Salem",
    //  "anchorlocataion":"../../pages/bookinground/ground12.html"
  },
  // ground13
  {
    groundname: "Sivan sports turf",
    image: "../../assets/images/ground13.jpg",
    locationname: "Madurai",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.0",
    valuename: "Madurai",
    //  "anchorlocataion":"../../pages/bookinground/ground13.html"
  },
  // ground14
  {
    groundname: "Sopa's Goal Turf - Sports club",
    image: "../../assets/images/ground14.jpg",
    locationname: "Iyer Bungalow, Madurai",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.0",
    valuename: "Madurai",
    //  "anchorlocataion":"../../pages/bookinground/ground14.html"
  },
  // ground15
  {
    groundname: "Turf Play 365",
    image: "../../assets/images/ground15.jpg",
    locationname: "Perungudi Road",
    sportsicon: {
      cricketicon: "../../assets/images/cricketicon.png",

      footballicon: "../../assets/images/footballicon.png",

      tennisicon: "../../assets/images/tennisicon.png",
    },
    ratingsnumber: "4.0",
    valuename: "Coimbatore",
    //  "anchorlocataion":"../../pages/bookinground/ground15.html"
  },
];
// console.log(ground_list);

// let div_parent;
let div_child;
let br_tag;
let h3_card_title;
let img_card;
let p_location_name;
let div_symbol;

let imgicon_card1;
let imgicon_card2;
let imgicon_card3;
let div_ratings;
let i_star;
let ratings_no;
let button_book;
let anchor;

// const ground_names = ["DNS TURF", "Pitch and Play", "Sports Sanity FC Marina"];

// const ground_location_name = ["Vyarsarpadi","Annasalai","Kilpauk"]

// const card_ground_images = ["../../assets/images/ground1.jpg", "../../assets/images/ground2.JPG", "../../assets/images/ground3.jpg", "../../assets/images/ground4.jpg"]

// let my_div=document.getElementsByClassName("parent")

// for (let i = 0; i < 15; i++) {
//   //  <div class="child"> </div>
//   div_child = document.createElement("div");
//   div_child.setAttribute("class", "child");
//   div_child.setAttribute("value", ground_list[i]["valuename"])
//   // console.log(div_child);
//   //<br>
//   br_tag = document.createElement("br");
//   div_child.append(br_tag);
//   //  <h3 class="card-title"> </h5>
//   h3_card_title = document.createElement("h3");
//   h3_card_title.setAttribute("class", "groundn");
//   h3_card_title.innerText = ground_list[i]["groundname"];
//   div_child.append(h3_card_title);

//   //  <img src="" class="groimg" alt=""/>
//   img_card = document.createElement("img");
//   img_card.setAttribute("src", ground_list[i]["image"]);
//   img_card.setAttribute("alt", "groundimage");
//   img_card.setAttribute("class", "groimg");
//   div_child.append(img_card);

//   //  <p class="location_name"> </p>
//   p_location_name = document.createElement("p");
//   p_location_name.setAttribute("class", "locationn");
//   p_location_name.innerText = ground_list[i]["locationname"];
//   div_child.append(p_location_name);

//   //  <div class="symbol"> </div>
//   div_symbol = document.createElement("div");
//   div_symbol.setAttribute("class", "symbol");
//   div_child.append(div_symbol);

//   //  <img src="" class="sportsicon" alt=""/>
//   imgicon_card1 = document.createElement("img");
//   imgicon_card1.setAttribute("class", "sportsicon");
//   imgicon_card1.setAttribute("src", ground_list[i]["sportsicon"]["cricketicon"]);
//   imgicon_card1.setAttribute("alt", "icons");
//   div_symbol.append(imgicon_card1);

//   //  <img src="" class="sportsicon" alt=""/>
//   imgicon_card2 = document.createElement("img");
//   imgicon_card2.setAttribute("class", "sportsicon");
//   imgicon_card2.setAttribute("src", ground_list[i]["sportsicon"]["footballicon"]);
//   imgicon_card2.setAttribute("alt", "icons");
//   div_symbol.append(imgicon_card2);

//   //  <img src="" class="sportsicon" alt=""/>
//   imgicon_card3 = document.createElement("img");
//   imgicon_card3.setAttribute("class", "sportsicon");
//   imgicon_card3.setAttribute("src", ground_list[i]["sportsicon"]["tennisicon"]);
//   imgicon_card3.setAttribute("alt", "icons");
//   div_symbol.append(imgicon_card3);

//   //  <div class="ratings"> </div>
//   div_ratings = document.createElement("div");
//   div_ratings.setAttribute("class", "ratings");
//   div_child.append(div_ratings);

//   //  <i class="fa-solid fa-star"> </i>
//   i_star = document.createElement("i");
//   i_star.setAttribute("class", "fa-solid fa-star");
//   // h3_card_title.innerText = names[i];
//   div_ratings.append(i_star);

//   //  <span class="ratingno"> </span>
//   ratings_no = document.createElement("span");
//   ratings_no.setAttribute("class", "ratingno");
//   ratings_no.innerText = ground_list[i]["ratingsnumber"];
//   div_ratings.append(ratings_no);

//   //anchor
//   anchor = document.createElement("a");
//   // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
//   anchor.setAttribute("href", "../../pages/bookinground/ground1.html?name=" + ground_list[i]["groundname"])
//   div_child.append(anchor)

//   // <button class="book"></button>
//   button_book = document.createElement("button");
//   button_book.setAttribute("class", "book");
//   // button_booknow =document.createTextNode("Book Now")
//   // button_book.append(button_booknow)
//   button_book.innerText = "Book Now"
//   anchor.append(button_book);

//   // console.log(div_child);
//   document.querySelector("div.parent").append(div_child)
// }

// crud ground

const groundOwnerProduct = JSON.parse(localStorage.getItem("ground_info"));

console.log(groundOwnerProduct);
// ground_list.push(groundOwnerProduct);

let filtered;
filtered = groundOwnerProduct.filter((item) => {
  if (item.status == true) {
    return true;
  }

  return false;
});

groundData(filtered);

function groundData(array = []) {
  const parentHtmlDiv = document.querySelector(".parent");
  parentHtmlDiv.innerHTML = "";

  array.forEach((item) => {
    const div_child = document.createElement("div");
    div_child.setAttribute("class", "child");

    br_tag = document.createElement("br");
    div_child.append(br_tag);

    const h3_card_title = document.createElement("h3");
    h3_card_title.setAttribute("class", "groundn");
    h3_card_title.innerText = item.ground_name;
    div_child.append(h3_card_title);

    //  <img src="" class="groimg" alt=""/>
    img_card = document.createElement("img");
    img_card.setAttribute("src", item.groundimg1);
    img_card.setAttribute("alt", "groundimage");
    img_card.setAttribute("class", "groimg");
    div_child.append(img_card);

    //  <p class="location_name"> </p>
    p_location_name = document.createElement("p");
    p_location_name.setAttribute("class", "locationn");
    p_location_name.innerText = item.ground_Place;
    div_child.append(p_location_name);

    //  <div class="symbol"> </div>
    div_symbol = document.createElement("div");
    div_symbol.setAttribute("class", "symbol");
    div_child.append(div_symbol);

    if (item.sport_avail_1 == true) {
      //  <img src="" class="sportsicon" alt=""/>
      imgicon_card1 = document.createElement("img");
      imgicon_card1.setAttribute("class", "sportsicon");
      imgicon_card1.setAttribute(
        "src",
        ground_list[0].sportsicon["cricketicon"]
      );
      imgicon_card1.setAttribute("alt", "icons");
      div_symbol.append(imgicon_card1);
    }

    if (item.sport_avail_2 == true) {
      //  <img src="" class="sportsicon" alt=""/>
      imgicon_card2 = document.createElement("img");
      imgicon_card2.setAttribute("class", "sportsicon");
      imgicon_card2.setAttribute(
        "src",
        ground_list[0].sportsicon["footballicon"]
      );
      imgicon_card2.setAttribute("alt", "icons");
      div_symbol.append(imgicon_card2);
    }

    if (item.sport_avail_3 == true) {
      //  <img src="" class="sportsicon" alt=""/>
      imgicon_card3 = document.createElement("img");
      imgicon_card3.setAttribute("class", "sportsicon");
      imgicon_card3.setAttribute(
        "src",
        ground_list[0].sportsicon["tennisicon"]
      );
      // imgicon_card.setAttribute("alt", "icons");
      div_symbol.append(imgicon_card3);
    }
    //  <div class="ratings"> </div>
    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_child.append(div_ratings);

    //  <i class="fa-solid fa-star"> </i>
    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    // h3_card_title.innerText = names[i];
    div_ratings.append(i_star);

    //  <span class="ratingno"> </span>
    ratings_no = document.createElement("span");
    ratings_no.setAttribute("class", "ratingno");
    ratings_no.innerText = ground_list[0].ratingsnumber;
    div_ratings.append(ratings_no);

    // anchor
    anchor = document.createElement("a");
    // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
    anchor.setAttribute(
      "href",
      `../../pages/bookinground/ground1.html?ground_Id=${  item.ground_id}`
    );
    div_child.append(anchor);

    // <button class="book"></button>
    button_book = document.createElement("button");
    button_book.setAttribute("class", "book");
    // button_booknow =document.createTextNode("Book Now")
    // button_book.append(button_booknow)
    button_book.innerText = "Book Now";
    anchor.append(button_book);

    // ... continue creating the UI elements as before ...

    parentHtmlDiv.append(div_child);
  });
}

// for (let i = 0; i < filtered.length; i++) {
//   //  <div class="child"> </div>
//   div_child = document.createElement("div");
//   div_child.setAttribute("class", "child");
//   div_child.setAttribute("value", filtered[i]["ground_city"])
//   // console.log(div_child);
//   //<br>
//   br_tag = document.createElement("br");
//   div_child.append(br_tag);
//   //  <h3 class="card-title"> </h5>
//   h3_card_title = document.createElement("h3");
//   h3_card_title.setAttribute("class", "groundn");
//   h3_card_title.innerText = filtered[i]["ground_name"];
//   div_child.append(h3_card_title);

//   //  <img src="" class="groimg" alt=""/>
//   img_card = document.createElement("img");
//   img_card.setAttribute("src", filtered[i]["groundimg1"]);
//   img_card.setAttribute("alt", "groundimage");
//   img_card.setAttribute("class", "groimg");
//   div_child.append(img_card);

//   //  <p class="location_name"> </p>
//   p_location_name = document.createElement("p");
//   p_location_name.setAttribute("class", "locationn");
//   p_location_name.innerText = filtered[i]["ground_Place"];
//   div_child.append(p_location_name);

//   //  <div class="symbol"> </div>
//   div_symbol = document.createElement("div");
//   div_symbol.setAttribute("class", "symbol");
//   div_child.append(div_symbol);

//   if (groundOwnerProduct[i]["sport_avail_1"] == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card1 = document.createElement("img");
//     imgicon_card1.setAttribute("class", "sportsicon");
//     imgicon_card1.setAttribute("src", ground_list[i]["sportsicon"]["cricketicon"]);
//     imgicon_card1.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card1);

//   }

//   if (groundOwnerProduct[i]["sport_avail_2"] == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card2 = document.createElement("img");
//     imgicon_card2.setAttribute("class", "sportsicon");
//     imgicon_card2.setAttribute("src", ground_list[i]["sportsicon"]["footballicon"]);
//     imgicon_card2.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card2);

//   }

//   if (groundOwnerProduct[i]["sport_avail_3"] == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card3 = document.createElement("img");
//     imgicon_card3.setAttribute("class", "sportsicon");
//     imgicon_card3.setAttribute("src", ground_list[i]["sportsicon"]["tennisicon"]);
//     // imgicon_card.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card3);

//   }

//   //  <div class="ratings"> </div>
//   div_ratings = document.createElement("div");
//   div_ratings.setAttribute("class", "ratings");
//   div_child.append(div_ratings);

//   //  <i class="fa-solid fa-star"> </i>
//   i_star = document.createElement("i");
//   i_star.setAttribute("class", "fa-solid fa-star");
//   // h3_card_title.innerText = names[i];
//   div_ratings.append(i_star);

//   //  <span class="ratingno"> </span>
//   ratings_no = document.createElement("span");
//   ratings_no.setAttribute("class", "ratingno");
//   ratings_no.innerText = ground_list[i]["ratingsnumber"];
//   div_ratings.append(ratings_no);

//   //anchor
//   anchor = document.createElement("a");
//   // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
//   anchor.setAttribute("href", "../../pages/bookinground/ground1.html?ground_Id=" + groundOwnerProduct[i]["ground_id"])
//   div_child.append(anchor)

//   // <button class="book"></button>
//   button_book = document.createElement("button");
//   button_book.setAttribute("class", "book");
//   // button_booknow =document.createTextNode("Book Now")
//   // button_book.append(button_booknow)
//   button_book.innerText = "Book Now"
//   anchor.append(button_book);

//   // console.log(div_child);
//   document.querySelector("div.parent").append(div_child)

// }

// search feature

// const search=document.getElementById("search2")
// search.addEventListener('keyup',searchFeature);

// function searchFeature(){
//  const searchContainer=document.getElementById("search2").value.toUpperCase().trim();
//  console.log(searchContainer);
// //  const groundShowCase=document.getElementsByClassName("parent");
// const groundStored=ground_list;
// // console.log(groundStored);
// for(let i=0;i<groundStored.length; i++){
//   let matchstoreNames= groundStored[i]["groundname"]
// console.log(matchstoreNames);
// if(matchstoreNames.innerHTML.toUpperCase().indexOf(searchContainer)>-1){
//   groundStored[i].style.display ="block";

// }
// else{
//   groundStored[i].style.display ="none";
// }

// }

// }

// const searchInput=document.getElementById("search2");
// const searchButton=document.getElementsByClassName("searchbtn");
// const groundShowCase=document.getElementsByClassName("parent");

// searchButton.addEventListener('click',()=>{
//   const searchValue=searchInput.value.toLowerCase();
//   const filterData=ground_list.filter(obj=>

//     )

// };

// searchButton.addEventListener('click', () => {
//   const searchTerm = searchInput.value.toLowerCase();
//   const filteredData = ground_list.filter(obj =>
//     Object.values(obj).some(val =>
//       typeof val === 'string' && val.toLowerCase().includes(searchTerm)
//     )
//   );

//   renderResults(filteredData);
// });

// function renderResults(ground_list) {
//   resul.innerHTML = '';

//   if (ground_list.length > 0) {
//     data.forEach(obj => {
//       const result = document.createElement('div');
//       result.textContent = obj.name;
//       resultsContainer.appendChild(result);
//     });
//   } else {
//     const noResults = document.createElement('div');
//     noResults.textContent = 'No results found.';
//     resultsContainer.appendChild(noResults);
//   }
// }
// const searchBox = document.getElementById("search2");
// searchBox.addEventListener('keydown',(e)=>{

//   if (e.key === "Enter") {
//     e.preventDefault();

//   }
// const searchContainer = e.target.value.toLowerCase().trim();
// const ground=document.querySelectorAll("div.child");
//  ground.forEach(element=>{
//   const content=element.children[1].textContent.toLowerCase();
//   const content2=element.children[3].textContent.toLowerCase();
//   if(content.includes(searchContainer) ||content2.includes(searchContainer)){
//     element.style.display="block";

//   }
//   else{
//     element.style.display="none"
//   }
//  })

// });
// // filter

// const selectOption = document.querySelector(".locationselect")
// selectOption.addEventListener('input',(e)=>{

//   if (e.key === "Enter") {
//     e.preventDefault();

//   }
// const searchContainer = e.target.value.toLowerCase().trim();
// const product=document.querySelectorAll("div.child");
//  product.forEach(element=>{
//   const content=element.getAttribute("value").toLowerCase();

//   if(content.includes(searchContainer)){
//     element.style.display="block";

//   }
//   else if(searchContainer=="all"){
//     element.style.display="block";

//   }
//   else{
//     element.style.display="none"
//   }
//  })

// });

// const searchBoxfilter = document.getElementById("search2");
// const selectOptionfilter = document.querySelector(".locationselect")
// const ground_as_product=document.querySelectorAll("div.child");
// searchBoxfilter.addEventListener("input",filterGroundData);

// selectOptionfilter.addEventListener("input",filterGroundData)
// function filterGroundData(){
//   const searchGrounds=searchBoxfilter.value;
//   const searchFilter=selectOptionfilter.value;
// ground_as_product.forEach((items)=>{
//   const contentfilter=items.getAttribute("value").toLowerCase();
//   const contentground_name=items.children[1].textContent.toLowerCase();
//   const contentground_location=items.children[3].textContent.toLowerCase();
//   console.log(contentfilter);
//   if ((searchFilter == "all" || searchFilter.includescontentfilter) && (contentground_name.includes(searchGrounds) || contentground_location.includes(searchGrounds))){
//     items.style.display="block";

//   }
//   else{
//     items.style.display="none";
//   }

// })

// }

// function searchFeature() {
//   const searchContainer = search.value.toUpperCase().trim();
//   console.log(searchContainer);

//   const groundStored = ground_list;
//   // console.log(groundStored);

//   for (let i = 0; i < groundStored.length; i++) {
//     let matchstoreNames = groundStored[i]["groundname"];
//     console.log(matchstoreNames);

//     const groundElement = document.getElementById("ground-" + i);
//     if (matchstoreNames.toUpperCase().indexOf(searchContainer) > -1) {
//       groundElement.style.display = "block";
//     } else {
//       groundElement.style.display = "none";
//     }
//   }
// }

// const search=document.getElementById("search2")
// search.addEventListener('keyup',searchFeature);

// function searchFeature(){
//  const searchContainer=document.getElementById("search2").value.toUpperCase();
//  const product=document.querySelectorAll("div.child");
//  const pname= document.querySelectorAll(".groundn");

//  elements.forEach((element, index) => {
//   //check if text includes the search value
//   if (element.innerText.includes(searchInput.toUpperCase())) {
//     //display matching card
//     cards[index].classList.remove("hide");
//   } else {
//     //hide others
//     cards[index].classList.add("hide");
//   }
// });
// });

// }

// window.onload = () => {
//   filterProduct("all");
// }



// filter ground

const selectOption = document.querySelector(".locationselect");

let filteredData = [];
selectOption.addEventListener("change", (e) => {
  const seletedQuery = selectOption.value.trim();
  console.log(seletedQuery);

  // const searchbox = document.getElementById("search2");

  if (e.key === "Enter") {
    e.preventDefault();
    // e.stopPropagation();
    // return false
  }
  if (seletedQuery !== "all") {
    filteredData = filtered.filter((item) =>
      item.ground_city.includes(seletedQuery)
    );
  }
  // else if (e.target===searchbox){
  //   filteredData=ground_list.filter((item) => {
  //     return item.groundname.toLowerCase().includes(searchQuery) || item.locationname.toLowerCase().includes(searchQuery)
  //   })

  // }
  else {
    filteredData = filtered;
  }

  console.log(filteredData);
  if (filteredData.length === 0) {
    const parentHtmlDiv2 = document.querySelector(".parent");
    const p = document.createElement("p");
    p.setAttribute("class", "noresult");
    p.innerText = "No result found";
    parentHtmlDiv2.innerHTML = "";
    parentHtmlDiv2.append(p);
    console.log("pkdd");
  } else {
    groundData(filteredData);
  }

  // const parentHtmlDiv = document.querySelector(".parent");
  // parentHtmlDiv.innerHTML = "";

  // filteredData.forEach((item) => {

  //   const div_child = document.createElement("div");
  //   div_child.setAttribute("class", "child");

  //   br_tag = document.createElement("br");
  //   div_child.append(br_tag);

  //   const h3_card_title = document.createElement("h3");
  //   h3_card_title.setAttribute("class", "groundn");
  //   h3_card_title.innerText = item.ground_name;
  //   div_child.append(h3_card_title);

  //   //  <img src="" class="groimg" alt=""/>
  //   img_card = document.createElement("img");
  //   img_card.setAttribute("src", item.groundimg1);
  //   img_card.setAttribute("alt", "groundimage");
  //   img_card.setAttribute("class", "groimg");
  //   div_child.append(img_card);

  //   //  <p class="location_name"> </p>
  //   p_location_name = document.createElement("p");
  //   p_location_name.setAttribute("class", "locationn");
  //   p_location_name.innerText = item.ground_Place;
  //   div_child.append(p_location_name);

  //   //  <div class="symbol"> </div>
  //   div_symbol = document.createElement("div");
  //   div_symbol.setAttribute("class", "symbol");
  //   div_child.append(div_symbol);

  //   if (item.sport_avail_1 == true) {
  //     //  <img src="" class="sportsicon" alt=""/>
  //     imgicon_card1 = document.createElement("img");
  //     imgicon_card1.setAttribute("class", "sportsicon");
  //     imgicon_card1.setAttribute("src", ground_list[0]["sportsicon"]["cricketicon"]);
  //     imgicon_card1.setAttribute("alt", "icons");
  //     div_symbol.append(imgicon_card1);

  //   }

  //   if (item.sport_avail_2 == true) {
  //     //  <img src="" class="sportsicon" alt=""/>
  //     imgicon_card2 = document.createElement("img");
  //     imgicon_card2.setAttribute("class", "sportsicon");
  //     imgicon_card2.setAttribute("src", ground_list[0]["sportsicon"]["footballicon"]);
  //     imgicon_card2.setAttribute("alt", "icons");
  //     div_symbol.append(imgicon_card2);

  //   }

  //   if (item.sport_avail_3 == true) {
  //     //  <img src="" class="sportsicon" alt=""/>
  //     imgicon_card3 = document.createElement("img");
  //     imgicon_card3.setAttribute("class", "sportsicon");
  //     imgicon_card3.setAttribute("src", ground_list[0]["sportsicon"]["tennisicon"]);
  //     // imgicon_card.setAttribute("alt", "icons");
  //     div_symbol.append(imgicon_card3);

  //   }
  //   //  <div class="ratings"> </div>
  //   div_ratings = document.createElement("div");
  //   div_ratings.setAttribute("class", "ratings");
  //   div_child.append(div_ratings);

  //   //  <i class="fa-solid fa-star"> </i>
  //   i_star = document.createElement("i");
  //   i_star.setAttribute("class", "fa-solid fa-star");
  //   // h3_card_title.innerText = names[i];
  //   div_ratings.append(i_star);

  //   //  <span class="ratingno"> </span>
  //   ratings_no = document.createElement("span");
  //   ratings_no.setAttribute("class", "ratingno");
  //   ratings_no.innerText = ground_list[0]["ratingsnumber"];
  //   div_ratings.append(ratings_no);

  //   //anchor
  //   anchor = document.createElement("a");
  //   // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
  //   anchor.setAttribute("href", "../../pages/bookinground/ground1.html?name=" + item.groundname)
  //   div_child.append(anchor)

  //   // <button class="book"></button>
  //   button_book = document.createElement("button");
  //   button_book.setAttribute("class", "book");
  //   // button_booknow =document.createTextNode("Book Now")
  //   // button_book.append(button_booknow)
  //   button_book.innerText = "Book Now"
  //   anchor.append(button_book);

  //   // ... continue creating the UI elements as before ...

  //   parentHtmlDiv.append(div_child);
  // });
});

// searchbox.addEventListener("keydown",(e)=>{
//   if (e.key === "Enter") {
//     e.preventDefault();

//     // return false

//   }

// })

// const searchbox = document.getElementById("search2");
// searchbox.addEventListener("keydown", (e) => {
//   const searchQuery = searchbox.value.trim().toLowerCase();
//   // console.log(searchQuery);

//   if (e.key === "Enter") {
//     e.preventDefault();
//     // e.stopPropagation();
//     // // return false
//   }

//   const filteredList = filteredData.filter((item) =>
//    item.ground_name.toLowerCase().includes(searchQuery) || item.ground_Place.toLowerCase().includes(searchQuery))
//   groundData(filteredList);

//   // if(selectOption.value==""){
//   //     filteredList2 = filtered.filter((item) => item.ground_name.toLowerCase().includes(searchQuery) || item.ground_Place.toLowerCase().includes(searchQuery))
//   //     };

//   //     groundData(filteredList2);
//   //   });
//   let filteredList2;
//   if (selectOption.value == "") {
//     filteredList2 = filtered.filter((item) => item.ground_name.toLowerCase().includes(searchQuery) || item.ground_Place.toLowerCase().includes(searchQuery))
 

//     groundData(filteredList2);
//   }
// });

// search ground

const searchbox = document.getElementById("search2");
searchbox.addEventListener("keydown", (e) => {
  const searchQuery = searchbox.value.trim().toLowerCase();
  // console.log(searchQuery);
  if (e.key === "Enter") {
    e.preventDefault();
    // e.stopPropagation();
    // // return false
  }
  const filteredList = filteredData.filter((item) => {
    return item.ground_name.toLowerCase().includes(searchQuery) || item.ground_Place.toLowerCase().includes(searchQuery)
  })
groundData(filteredList);
if(selectOption.value==""){
  const filteredList2 = filtered.filter((item) => {
    return item.ground_name.toLowerCase().includes(searchQuery) || item.ground_Place.toLowerCase().includes(searchQuery)
  })
  
  groundData(filteredList2)
}
})
// const parentHtmlDiv = document.querySelector(".parent");
// parentHtmlDiv.innerHTML = "";

// filteredList.forEach((item) => {

//   const div_child = document.createElement("div");
//   div_child.setAttribute("class", "child");

//   br_tag = document.createElement("br");
//   div_child.append(br_tag);

//   const h3_card_title = document.createElement("h3");
//   h3_card_title.setAttribute("class", "groundn");
//   h3_card_title.innerText = item.ground_name;
//   div_child.append(h3_card_title);

//   //  <img src="" class="groimg" alt=""/>
//   img_card = document.createElement("img");
//   img_card.setAttribute("src", item.groundimg1);
//   img_card.setAttribute("alt", "groundimage");
//   img_card.setAttribute("class", "groimg");
//   div_child.append(img_card);

//   //  <p class="location_name"> </p>
//   p_location_name = document.createElement("p");
//   p_location_name.setAttribute("class", "locationn");
//   p_location_name.innerText = item.ground_Place;
//   div_child.append(p_location_name);

//   //  <div class="symbol"> </div>
//   div_symbol = document.createElement("div");
//   div_symbol.setAttribute("class", "symbol");
//   div_child.append(div_symbol);

//   if (item.sport_avail_1 == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card1 = document.createElement("img");
//     imgicon_card1.setAttribute("class", "sportsicon");
//     imgicon_card1.setAttribute("src", ground_list[0]["sportsicon"]["cricketicon"]);
//     imgicon_card1.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card1);

//   }

//   if (item.sport_avail_2 == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card2 = document.createElement("img");
//     imgicon_card2.setAttribute("class", "sportsicon");
//     imgicon_card2.setAttribute("src", ground_list[0]["sportsicon"]["footballicon"]);
//     imgicon_card2.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card2);

//   }

//   if (item.sport_avail_3 == true) {
//     //  <img src="" class="sportsicon" alt=""/>
//     imgicon_card3 = document.createElement("img");
//     imgicon_card3.setAttribute("class", "sportsicon");
//     imgicon_card3.setAttribute("src", ground_list[0]["sportsicon"]["tennisicon"]);
//     // imgicon_card.setAttribute("alt", "icons");
//     div_symbol.append(imgicon_card3);

//   }
//   //  <div class="ratings"> </div>
//   div_ratings = document.createElement("div");
//   div_ratings.setAttribute("class", "ratings");
//   div_child.append(div_ratings);

//   //  <i class="fa-solid fa-star"> </i>
//   i_star = document.createElement("i");
//   i_star.setAttribute("class", "fa-solid fa-star");
//   // h3_card_title.innerText = names[i];
//   div_ratings.append(i_star);

//   //  <span class="ratingno"> </span>
//   ratings_no = document.createElement("span");
//   ratings_no.setAttribute("class", "ratingno");
//   ratings_no.innerText = ground_list[0]["ratingsnumber"];
//   div_ratings.append(ratings_no);

//   //anchor
//   anchor = document.createElement("a");
//   // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
//   anchor.setAttribute("href", "../../pages/bookinground/ground1.html?name=" + item.groundname)
//   div_child.append(anchor)

//   // <button class="book"></button>
//   button_book = document.createElement("button");
//   button_book.setAttribute("class", "book");
//   // button_booknow =document.createTextNode("Book Now")
//   // button_book.append(button_booknow)
//   button_book.innerText = "Book Now"
//   anchor.append(button_book);

//   parentHtmlDiv.append(div_child);
// });

// booking
