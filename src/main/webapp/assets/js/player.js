const player_list = [
  {
    image: "../../assets/images/userlogo.png",
    playersName: "Ramesh",
    ratingsnumber: "5.0",
    anchorlocataion: "../../pages/player/playerprofile.html",
  },
  {
    image: "../../assets/images/userlogo.png",
    playersName: "Ramesh",
    ratingsnumber: "5.0",
    anchorlocataion: "../../pages/player/playerprofile.html",
  },
];

/*
// own profile
const imageShow = document.querySelector(".userlogo1");
const userRecords = JSON.parse(localStorage.getItem("user_details"));
const user_logged = JSON.parse(localStorage.getItem("user_logged_in"));
for (let i = 0; i < userRecords.length; i++) {
  if (user_logged[0].user_email == userRecords[i].user_email) {
    const savedImage = userRecords[i];
    console.log(savedImage);
    if (savedImage && savedImage.url) {
      imageShow.src = savedImage.url;
    } else {
      imageShow.src = "https://iili.io/HkW7U4S.jpg";
    }
    break;
  }
}

const user_record = JSON.parse(localStorage.getItem("user_details"));
// player filter
*/


let filterPlayer = [];

	const url = "http://localhost:8080/bookandplay-web/GetAllPlayer";
			axios.get(url)
			  .then(function (response) {
				console.log(response.data)  
				
const startIndex = response.data.indexOf("[");
    if (startIndex !== -1) {
      const jsonString = response.data.slice(startIndex);
      
      try {
        // Parse the extracted JSON string into a JavaScript array
        filterPlayer = JSON.parse(jsonString);
        
        playerData(filterPlayer);
     
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("JSON data not found in the response.");
    }	    
    
      // console.log(filterPlayer)
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
// filterPlayer = user_record.filter((item) => item.player == true);

console.log(filterPlayer);

let div_child;
let div_group;
let br_tag;
let img_card;
let p_player;
let anchor;
let button_visit;
let div_ratings;
let i_star;
let span_ratingsno;



function playerData(array = []) {
  const parentHtmlDiv = document.querySelector(".parent");
  parentHtmlDiv.innerHTML = "";

  array.forEach((item) => {
    div_child = document.createElement("div");
    div_child.setAttribute("class", "child");
    div_child.setAttribute("value", item.location);
    console.log(div_child);

    div_group = document.createElement("div");
    div_group.setAttribute("class", "group");
    div_child.append(div_group);

    br_tag = document.createElement("br");
    div_group.append(br_tag);

    //  <img src="" class="groimg" alt=""/>

    img_card = document.createElement("img");
    if (item.url == "") {
      img_card.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
    } else {
      img_card.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
    }

    img_card.setAttribute("alt", "playerProfile");
    img_card.setAttribute("class", "userlogo");
    div_group.append(img_card);

    p_player = document.createElement("p");
    p_player.setAttribute("class", "nameplayer");
    p_player.innerText = item.firstName;
    div_group.append(p_player);

    anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      `/bookandplay-web/playerprofile.jsp?playerId=${item.userId}`
    );
    // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
    div_group.append(anchor);

    // <button class="book"></button>
    button_visit = document.createElement("button");
    button_visit.setAttribute("class", "visit");
    button_visit.setAttribute("value", item.userId);
    button_visit.innerText = "Visit";
    anchor.append(button_visit);

    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_group.append(div_ratings);

    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    // h3_card_title.innerText = names[i];
    div_ratings.append(i_star);

    span_ratingsno = document.createElement("span");
    span_ratingsno.setAttribute("class", "ratingno");
    span_ratingsno.innerText = player_list[0].ratingsnumber;
    div_ratings.append(span_ratingsno);

    document.querySelector("div.parent").append(div_child);
  });
}

// filter player

const selectOption = document.querySelector(".locationselect");

let filteredData = [];
selectOption.addEventListener("input", () => {
  const seletedQueryfil = selectOption.value.trim();
  console.log(seletedQueryfil);

  // const searchbox = document.getElementById("search2");

  if (seletedQueryfil !== "all") {
    filteredData = filterPlayer.filter((item) =>
      item.sportLocationPlay.includes(seletedQueryfil)
    );
    filteredData = filteredData.filter(
      (item) => item.sportLocationPlay !== undefined
    );
  }
  // else if (e.target===searchbox){
  //   filteredData=ground_list.filter((item) => {
  //     return item.groundname.toLowerCase().includes(searchQuery) || item.locationname.toLowerCase().includes(searchQuery)
  //   })

  // }
  else {
    filteredData = filterPlayer;
  }

  if (filteredData.length === 0) {
    const parentHtmlDiv2 = document.querySelector(".parent");
    const p = document.createElement("p");
    p.setAttribute("class", "noresult");
    p.innerText = "No result found";
    parentHtmlDiv2.innerHTML = "";
    parentHtmlDiv2.append(p);
    console.log("pkdd");
  } else {
    playerData(filteredData);
  }
});

// search

const searchbox = document.getElementById("search2");
searchbox.addEventListener("keydown", (e) => {
  const searchQuery = searchbox.value.trim().toUpperCase().toLowerCase();
  // console.log(searchQuery);

  if (e.key === "Enter") {
    e.preventDefault();
  }
  const filteredList = filteredData.filter((item) =>
    item.user_name.toLowerCase().includes(searchQuery)
  );

  playerData(filteredList);

  if (selectOption.value == "") {
    const filteredList2 = filterPlayer.filter((item) =>
      item.user_name.toLowerCase().includes(searchQuery)
    );

    playerData(filteredList2);
  }
});
