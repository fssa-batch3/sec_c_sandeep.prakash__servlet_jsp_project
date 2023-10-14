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
const user_record = JSON.parse(localStorage.getItem("user_details"));
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const loginuserid = loginUser[0].user_id;
const requestrecords = JSON.parse(localStorage.getItem("request_details"));
// player filter
let filterPlayer = [];
if(requestrecords==null){



}
else{

  filterPlayer = requestrecords.filter(
    (item) =>
      item.receiving_user == loginuserid && item.request_status == "accepted"
  );
}


if(filterPlayer.length==0){
  let maincon=document.querySelector(".main2");
  let ptag=document.createElement("h4")
  ptag.setAttribute("class","h5tag");
  ptag.innerHTML=`Hi You dont have any friend list`
  maincon.append(ptag)

  document.body.style.overflow="hidden"
  
  let btn=document.createElement("button")
  btn.setAttribute("class","btnok");
  btn.innerText="OK"
  ptag.append(btn)
  btn.addEventListener("click",()=>{
    window.location.href="../../pages/player/newprofile.html"
  })
}


else{
// || item.requested_user== loginuserid

for (const userrequested of filterPlayer) {
  const { requested_user } = userrequested;
  const userDetails = user_record.find(
    (usersdata) => requested_user == usersdata.user_id
  );
  userrequested.requested_userDetails = userDetails;
}

console.log(filterPlayer);
*/



 const url = "http://localhost:8080/bookandplay-web/GetUserSession";

 axios.get(url)
     .then(function (response) {
         // handle success
         console.log(response.data);
        //  const responseUserData = response.data.substring(response.data.indexOf('{'));
         const userLogin = response.data;

   let userId  = userLogin.userId; 
   
   
   
   
   
   axios.get(`http://localhost:8080/bookandplay-web/GetFriendList?receiverId=${userId}`)
  .then(function (response) {
	  //console.log(response.data)  
let filterData = [];
   			

      
        filterData = response.data;
        
if(filterData.length==0|| filterData==null){
  let maincon=document.querySelector(".main2");
  let ptag=document.createElement("h4")
  ptag.setAttribute("class","h5tag");
  ptag.innerHTML=`Hi You dont have any friend list`
  maincon.append(ptag)

  document.body.style.overflow="hidden"
  
  let btn=document.createElement("button")
  btn.setAttribute("class","btnok");
  btn.innerText="OK"
  ptag.append(btn)
  btn.addEventListener("click",()=>{
    window.location.href="userprofile.jsp"
  })
}
       
          playerData(filterData);
     
          
    
  })
  .catch(function (error) {
   
    console.error(error);
  });

let div_child;
let div_group;
let br_tag;
let img_card;
let p_player;
let anchor;
let button_visit;
let div_ratings;
let button_decline;
let i_star;
let span_ratingsno;



function playerData(array = []) {
  const parentHtmlDiv = document.querySelector(".parent");
  parentHtmlDiv.innerHTML = "";

  array.forEach((item) => {
    div_child = document.createElement("div");
    div_child.setAttribute("class", "child");
    div_child.setAttribute("value", item.sender.userId);
    console.log(div_child);

    div_group = document.createElement("div");
    div_group.setAttribute("class", "group");
    div_child.append(div_group);

    br_tag = document.createElement("br");
    div_group.append(br_tag);

    //  <img src="" class="groimg" alt=""/>
    img_card = document.createElement("img");
    if (item.sender.image == "") {
      img_card.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
    } else {
      img_card.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
    }
    img_card.setAttribute("alt", "playerProfile");
    img_card.setAttribute("class", "userlogo");
    div_group.append(img_card);

    p_player = document.createElement("p");
    p_player.setAttribute("class", "nameplayer");
    p_player.innerText = item.sender.firstName;
    div_group.append(p_player);

    anchor = document.createElement("a");
    anchor.setAttribute(
      "href",
      `playerprofile.jsp?playerId=${item.sender.userId}`
    );
    // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
    div_group.append(anchor);

    // <button class="book"></button>
    button_visit = document.createElement("button");
    button_visit.setAttribute("class", "visit");
    button_visit.setAttribute("value", item.sender.userId);
    button_visit.innerText = "Visit";
    anchor.append(button_visit);

    // button_accept = document.createElement("button");
    // button_accept.setAttribute("class", "accept");
    // button_accept.setAttribute("value", item.requested_userDetails.user_id)
    // button_accept.innerText = "Accept";
    // div_group.append(button_accept);

    button_decline = document.createElement("button");
    button_decline.setAttribute("class", "decline");
    button_decline.setAttribute("value", item.sender.userId);
    button_decline.innerText = "Remove";
    div_group.append(button_decline);

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


 })
 
 
     .catch(function (error) {
         // handle error
         console.log(error);
       })


// // accept request
// let acceptbtn = document.querySelectorAll(".accept");
// acceptbtn.forEach((button) => {
//     button.addEventListener("click", () => {
//         let req_userId = button.value

//         let reqIndex = requestrecords.findIndex((request) => {
//             return request.requested_user == req_userId
//         })

//         if (reqIndex > -1) {
//             if (confirm("Are you sure want to accept the request")) {

//                 requestrecords[reqIndex].request_status= "accepted";

//                 localStorage.setItem("request_details", JSON.stringify(requestrecords));
//             }
//             else {

//             }
//         }

//     })
// })

// declined


// Replace "parentElement" with the closest common parent of the "accept" buttons
const parentElement2 = document.querySelector(".parent");

parentElement2.addEventListener("click", function(event) {
  if (event.target.classList.contains("decline")) {
    const req_userId = event.target.value;
    console.log(req_userId);
    
    
     const requestData =
 "&requestId="+ req_userId;
  // console.log(reqIndex);


    if (confirm("Are you sure want remove your friend from your list")) {

       
const url = "http://localhost:8080/bookandplay-web/RejectFriendRequest?"; 

axios.post(url, requestData)
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    const serverMsg = response.data;
			    
			    if(serverMsg.trim() === 'success') {
			    	console.log("success");
			    }  
			    else {
			    	console.log("not success");
			    }
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
    } else {
    }
  
  }
});

