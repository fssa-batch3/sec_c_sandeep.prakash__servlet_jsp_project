
const url = "http://localhost:8080/bookandplay-web/GetGroundOwnerData";

 axios.get(url)
     .then(function (response) {
         // handle success
          console.log(response.data);
          //   const responseUserData = response.data.substring(response.data.indexOf('{'));
             const userLogin = response.data;
 

   let adminId  = userLogin.groundOwnerId; 
   
   
   
   
   
   
    
   
   axios.get(`http://localhost:8080/bookandplay-web/GetGroundBookingDetailsAdmin?adminId=${adminId}`)
  .then(function (response) {
	 console.log(response.data)  
let filterData = [];
   			

      
        filterData = response.data;
       
    
 

   
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
        function encodeData(value) {
  const encoded = btoa(value); // Base64 encode the value
  return encoded;
}

function decodeData(encodedValue) {
  const decoded = atob(encodedValue); // Decode the Base64 encoded value
  return decoded;
}



for (let i = 0; i < filterData.length; i++) {
  console.log(childdiv);
  childdiv = document.createElement("div");
  childdiv.setAttribute("class", "child");
  childdiv.setAttribute("data-email", encodeData(filterData[i].user.email));
childdiv.setAttribute("data-booking-date", filterData[i].bookingDate);
childdiv.setAttribute("data-booking-time", filterData[i].bookingTime);
childdiv.setAttribute("data-booking-sports", filterData[i].bookingSports);
childdiv.setAttribute("data-booking-duration", filterData[i].bookingDuration);

  columndiv2 = document.createElement("div");
  columndiv2.setAttribute("class", "column2");

  childdiv.append(columndiv2);
  
  divbox1 = document.createElement("div");
  divbox1.setAttribute("class", "box1");
  divbox1.innerHTML = `<h4>User Name</h4>${filterData[i].user.email}`;
  columndiv2.append(divbox1);

  divbox2 = document.createElement("div");
  divbox2.setAttribute("class", "box2");
  divbox2.innerHTML =`<h4>Date</h4>${ filterData[i].bookingDate}`;
  columndiv2.append(divbox2);

  divbox3 = document.createElement("div");
  divbox3.setAttribute("class", "box3");
  divbox3.innerHTML = ` <h4>Timing</h4>${filterData[i].bookingTime}`;
  columndiv2.append(divbox3);

  divbox4 = document.createElement("div");
  divbox4.setAttribute("class", "box4");
  divbox4.innerHTML = `<h4>Sports</h4>${filterData[i].bookingSports}`;
  columndiv2.append(divbox4);

  if(filterData[i].bookingDuration=="Select an Option"){
    divbox5 = document.createElement("div");
    divbox5.setAttribute("class", "box5");
    divbox5.innerHTML = `<h4>Duration</h4> None`;
    columndiv2.append(divbox5);
  }
  else{
  divbox5 = document.createElement("div");
  divbox5.setAttribute("class", "box5");
  divbox5.innerHTML= `  <h4>Duration</h4> Extra ${filterData[i].bookingDuration} Hours`;
  columndiv2.append(divbox5);
  }

  divbox6 = document.createElement("div");
  divbox6.setAttribute("class", "box6");
  divbox6.innerHTML = ` <h4>Players</h4> ${filterData[i].selectedPlayers}`;
  columndiv2.append(divbox6);

  divbox7 = document.createElement("div");
  divbox7.setAttribute("class", "box7");
  divbox7.innerHTML = `<h4>Courts</h4>${filterData[i].selectedCourts}`;
  columndiv2.append(divbox7);

  divbox8 = document.createElement("div");
  divbox8.setAttribute("class", "box8");
  divbox8.innerHTML =`<h4>Price</h4>${ filterData[i].groundPrice}`;
  columndiv2.append(divbox8);


  divbox9 = document.createElement("div");
  divbox9.setAttribute("class", "box9");
  divbox9.innerHTML =`<h4>Payment</h4>${ filterData[i].paymentMethod}`;
  columndiv2.append(divbox9);

  // btnaccept=document.createElement("button");
  // btnaccept.setAttribute("class","acceptbtn");
  // btnaccept.setAttribute("value",filterGroundrequest[i]["ordered_id"]);
  // btnaccept.innerText="Accept"
  // childdiv.append(btnaccept)

  btndecline = document.createElement("button");
  btndecline.setAttribute("class", "declinebtn");
  btndecline.setAttribute("value", filterData[i].bookingId);
  btndecline.innerText = "Decline";
  childdiv.append(btndecline);

  // for displyingnone cancel nbtn after 20 minutes

  const bookingTime = filterData[i].bookedAt;
  const currentdate = new Date().getTime();
  const diffinmills = Math.abs(bookingTime - currentdate);
  console.log(diffinmills);
  const diffmins = Math.floor(diffinmills / 60000);
  console.log(diffmins);
  // let cancelbook=document.querySelectorAll(".cancelbt")

  if (diffmins > 20) {
    btndecline.style.display = "none";
  } else {
    btndecline.style.display = "block";
  }

  document.querySelector(".parent").append(childdiv);
  
  }

  
  
  

const parentElements = document.querySelectorAll(".parent");

parentElements.forEach(parentElement => {
  parentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("declinebtn")) {
      const bookingId = event.target.value;
const userEmail = decodeData(event.target.parentElement.getAttribute("data-email"));
const bookingDate = event.target.parentElement.getAttribute("data-booking-date");
const bookingTime = event.target.parentElement.getAttribute("data-booking-time");
const bookingSports = event.target.parentElement.getAttribute("data-booking-sports");
const bookingDuration = event.target.parentElement.getAttribute("data-booking-duration");

      console.log("Booking ID:", bookingId);
      console.log("Ground Main Area:",bookingDate);

      const requestData = "&bookingId=" + bookingId;

      if (confirm("Are you sure you want to cancel the booking?")) {
        const url = "http://localhost:8080/bookandplay-web/CancelGroundBookingAdmin?";

        axios
          .post(url, requestData)
          .then(function(response) {
            console.log(response.data);
            const serverMsg = response.data;

            if (serverMsg.trim() === "success") {
              console.log("success");
              

              parentElement.remove();
              
                      
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "bookandplay@gmail.com",
          Password: "6EC1D4698F820B43605EF4F4AAEC706EFA99",
          To: userEmail,
          From: "sandeep909600@gmail.com",
          Subject: "Your Booking Confirmation code is here",
          Body: `Hi  Your ground is booked on this ${ bookingTime
          } on ${bookingDate
          } is cancelled by the   seller  `,
        }).then((success) => {
          alert(
            "Your ground Booking is cancelled"
          );
        });
            } else {
              console.log("not success");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        // User canceled the action
      }
    }
  });
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

 



})
.catch(function (error) {
 
  console.error(error);
});


 
    })
 
 
     .catch(function (error) {
         // handle error
         console.log(error);
       })




