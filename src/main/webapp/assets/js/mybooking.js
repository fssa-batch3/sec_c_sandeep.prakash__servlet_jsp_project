
let acceptedBooking;
/*
if(requestBooking==null){

}
else{

 acceptedBooking = requestBooking.filter(
  (data) =>
    data.booking_status == "accepted" && data.request_user_id == loginuserid
);
console.log(acceptedBooking);
}

if(acceptedBooking==null || acceptedBooking.length==0){
  let maincon=document.querySelector(".main2");
  
  let ptag=document.createElement("h4")
  ptag.setAttribute("class","h5tag");
  ptag.innerHTML=`Hi You dont have any  currrent booking`
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

for (const booking of acceptedBooking) {
  const { ground_id } = booking;
  const groundDetail = groundOwnerProduct.find(
    (ground) => ground_id === ground.ground_id
  );
  booking.groundDetail = groundDetail;

  const { request_user_id } = booking;
  const userDetails = user_record.find(
    (users) => request_user_id === users.user_id
  );
  booking.userDetail = userDetails;

}

console.log(JSON.stringify(acceptedBooking, null, 2));
}
*/

// sports image
const showimage = [
  {
       sportsiconcric: "/bookandplay-web/assets/images/cricketicon.png",
    sportsiconfoot: "/bookandplay-web/assets/images/footballicon.png",
    sportsiconten: "/bookandplay-web/assets/images/tennisicon.png",
    ratingsnumber: "4.0",
  },
];

 const url = "http://localhost:8080/bookandplay-web/GetUserSession";

 axios.get(url)
     .then(function (response) {
         // handle success
         console.log(response.data);
         const responseUserData = response.data.substring(response.data.indexOf('{'));
         const userLogin = JSON.parse(responseUserData);

   let userId  = userLogin.userId; 
   
 
   
   axios.get(`http://localhost:8080/bookandplay-web/GetGroundBookingDetailsUser?userId=${userId}`)
  .then(function (response) {
	  //console.log(response.data)  
let filterData = [];
   			
const startIndex = response.data.indexOf("[");
    if (startIndex !== -1) {
      const jsonString = response.data.slice(startIndex);
      
      
      try {
        // Parse the extracted JSON string into a JavaScript array
        
      
        filterData = JSON.parse(jsonString);
        
        console.log(JSON.parse(jsonString));
          //playerData(filterData);
     
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("JSON data not found in the response.");
    }	    
    
 




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
let childdiv;
let columndiv1;
let h4name;
let h4date;
let h4timing;
let h4sports;
let h4duration;
let h4players;
let h4courts;
let h4price;
let columndiv2;
let divbox1;
let divbox2;
let div_box4;
let div_box5;
let div_box6;
let div_box7;
let div_box8;
let btndecline;

let divBox;
for (let i = 0; i < filterData.length; i++) {
  // console.log(divBox);

  divBox = document.createElement("div");
  divBox.setAttribute("class", "box");
  //  <div class="child"> </div>
  div_child = document.createElement("div");
  div_child.setAttribute("class", "child");
  divBox.append(div_child);
  div_child.setAttribute("value", filterData[i].groundOwner.email);
  // console.log(div_child);
  // <br>
  br_tag = document.createElement("br");
  div_child.append(br_tag);
  //  <h3 class="card-title"> </h5>
  h3_card_title = document.createElement("h3");
  h3_card_title.setAttribute("class", "groundn");
  h3_card_title.innerText = filterData[i].ground.groundName;
  div_child.append(h3_card_title);

  //  <img src="" class="groimg" alt=""/>
  img_card = document.createElement("img");
  img_card.setAttribute("src", filterData[i].ground.groundImages[0]);
  img_card.setAttribute("alt", "groundimage");
  img_card.setAttribute("class", "groimg");
  div_child.append(img_card);

  //  <p class="location_name"> </p>
  p_location_name = document.createElement("p");
  p_location_name.setAttribute("class", "locationn");
  p_location_name.innerText = filterData[i].ground.groundMainArea;
  div_child.append(p_location_name);

  //  <div class="symbol"> </div>
  div_symbol = document.createElement("div");
  div_symbol.setAttribute("class", "symbol");
  div_child.append(div_symbol);

 

const sportsIcons = {
  cricket: showimage[0].sportsiconcric,
  football: showimage[0].sportsiconfoot,
  tennis: showimage[0].sportsiconten,
};

const sportsAvailable1 =filterData[i].ground.sportsAvailable;

// for loopla podu

for(let i=0;i<sportsAvailable1.length;i++){
	if (sportsAvailable1[i]== "Cricket") {
 imgicon_card1 = document.createElement("img");
    imgicon_card1.setAttribute("class", "sportsicon");
    imgicon_card1.setAttribute("src", showimage[0].sportsiconcric);
    // imgicon_card1.setAttribute("alt", "icons");
    div_symbol.append(imgicon_card1);
  // you alrady have an current index "show" show["sportsAvailImg"]["sportsicon"+i]
}
if (sportsAvailable1[i] == "Football") {
 imgicon_card2 = document.createElement("img");
    imgicon_card2.setAttribute("class", "sportsicon");
    imgicon_card2.setAttribute("src", showimage[0].sportsiconfoot);
    // imgicon_card2.setAttribute("alt", "icons");
    div_symbol.append(imgicon_card2);
}
if (sportsAvailable1[i] == "Tennis") {
 imgicon_card3 = document.createElement("img");
    imgicon_card3.setAttribute("class", "sportsicon");
    imgicon_card3.setAttribute("src", showimage[0].sportsiconten);
    // imgicon_card.setAttribute("alt", "icons");
    div_symbol.append(imgicon_card3);
}

	
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
  ratings_no.innerText = showimage[0].ratingsnumber;
  div_ratings.append(ratings_no);

  // anchor
  // anchor = document.createElement("a");
  // // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
  // // anchor.setAttribute("href", "../../pages/bookinground/ground1.html?userId=" + filtered[i]["ground_id"])
  // div_child.append(anchor)

  // <button class="book"></button>

  // if()
  button_book = document.createElement("button");
  button_book.setAttribute("class", "cancelbtn");
  button_book.setAttribute("value", filterData[i].bookingId);
  // button_booknow =document.createTextNode("Book Now")
  // button_book.append(button_booknow)
  button_book.innerText = "Cancel";
  div_child.append(button_book);

  // for displyingnone cancel nbtn after 20 minutes

  const bookingTime = filterData[i].bookedAt;
  const currentdate = new Date().getTime();
  const diffinmills = Math.abs(bookingTime - currentdate);
  console.log(diffinmills);
  const diffmins = Math.floor(diffinmills / 60000);
  console.log(diffmins);
  // let cancelbook=document.querySelectorAll(".cancelbt")

  if (diffmins > 20) {
    button_book.style.display = "none";
  } else {
    button_book.style.display = "block";
  }

  // INFO OF BOOKING

  childdiv = document.createElement("div");
  childdiv.setAttribute("class", "child1");
  divBox.append(childdiv);


  columndiv2 = document.createElement("div");
  columndiv2.setAttribute("class", "column2");
  childdiv.append(columndiv2);

  divbox1 = document.createElement("div");
  divbox1.setAttribute("class", "box1");
  divbox1.innerHTML = `<h4>Username</h4>${userLogin.email}`;
  columndiv2.append(divbox1);

  divbox2 = document.createElement("div");
  divbox2.setAttribute("class", "box2");
  divbox2.innerHTML = `<h4>Date</h4>${filterData[i].bookingDate}`;
  columndiv2.append(divbox2);

  divbox3 = document.createElement("div");
  divbox3.setAttribute("class", "box3");
  divbox3.innerHTML =` <h4>Timing</h4>${filterData[i].bookingTime}`;
  columndiv2.append(divbox3);

  divbox4 = document.createElement("div");
  divbox4.setAttribute("class", "box4");
  divbox4.innerHTML = `<h4>Sports</h4>${filterData[i].bookingSports}`;
  columndiv2.append(divbox4);

  if(filterData[i].bookingDuration=="Select an Option"){
    
  divbox5 = document.createElement("div");
  divbox5.setAttribute("class", "box5");
  divbox5.innerHTML= `<h4>Duration</h4>None`;
  columndiv2.append(divbox5);
  }
else{
  divbox5 = document.createElement("div");
  divbox5.setAttribute("class", "box5");
  divbox5.innerHTML =` <h4>Duration</h4>${filterData[i].bookingDuration+" Hour"}`;
  columndiv2.append(divbox5);
}

  divbox6 = document.createElement("div");
  divbox6.setAttribute("class", "box6");
  divbox6.innerHTML = `<h4>Players</h4>${filterData[i].selectedPlayers}`;
  columndiv2.append(divbox6);

  divbox7 = document.createElement("div");
  divbox7.setAttribute("class", "box7");
  divbox7.innerHTML = `<h4>Courts</h4>${filterData[i].selectedCourts}`;
  columndiv2.append(divbox7);

  divbox8 = document.createElement("div");
  divbox8.setAttribute("class", "box8");
  divbox8.innerHTML = `<h4>Price</h4>${filterData[i].groundPrice}`;
  columndiv2.append(divbox8);

  // btnaccept = document.createElement("button");
  // btnaccept.setAttribute("id", "acceptbtn");
  // // btnaccept.innerText="Accept"
  // childdiv.append(btnaccept)

  // btndecline = document.createElement("button");
  // btndecline.setAttribute("id", "declinebtn");
  // // btndecline.innerText="Decline"
  // childdiv.append(btndecline)

  // document.querySelector(".parent").append(childdiv)

  // console.log(div_child);
  document.querySelector("div.parent").append(divBox);


// cancel




// Replace "parentElement" with the closest common parent of the "accept" buttons
const parentElement2 = document.querySelector(".parent");

parentElement2.addEventListener("click", function(event) {
  if (event.target.classList.contains("cancelbtn")) {
const bookingId = event.target.value;
    const groundMainArea = event.target.parentElement.getAttribute("value"); // Retrieve the value attribute
    
    
     console.log("Booking ID:", bookingId);
    console.log("Ground Main Area:", groundMainArea);
     const requestData =
 "&bookingId="+ bookingId;
  // console.log(reqIndex);


    if (confirm("Are you sure you want to cancel the booking?")) {

       
const url = "http://localhost:8080/bookandplay-web/CancelGroundBookingUser?"; 

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






}








 })
  .catch(function (error) {
   
    console.error(error);
  });




   
    })
 
 
     .catch(function (error) {
         // handle error
         console.log(error);
       })



