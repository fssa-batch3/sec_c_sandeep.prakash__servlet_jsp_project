// side bar2




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
     console.log(response.data)  
let filterData = [];
              

          filterData = response.data;
  
  
const messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
//let allmessagedUser;
if(filterData==null){
let maincon=document.querySelector(".maincontainer");
 let ptag=document.createElement("h4")
 ptag.setAttribute("class","h5tag");
 ptag.innerHTML=`Hi You dont have any  current please chat and connect mutually and send a  message to your friedn to chat in your profile`
 maincon.append(ptag)
 
 document.body.style.overflow="hidden"
 let bookplay=document.querySelector(".logoletter")
 bookplay.style.display="none"
 let btn=document.createElement("button")
 btn.setAttribute("class","btnok");
 btn.innerText="OK"
 ptag.append(btn)
 btn.addEventListener("click",()=>{
   window.location.href="../../pages/player/newprofile.html"
 })

}
else{


//  allmessagedUser = messageofUser.filter(
//   (data) => data.receiver_id===loginuserid

// );

// console.log(allmessagedUser);

if(filterData.length==0){
 console.log("okda");
 let maincon=document.querySelector(".maincontainer");
 let ptag=document.createElement("h4")
 ptag.setAttribute("class","h5tag");
 ptag.innerHTML=`Hi You dont have any  current please chat and connect mutually and send a  message to your friend to chat in your profile`
 maincon.append(ptag)
 document.body.style.overflow="hidden"
 let btn=document.createElement("button")
 btn.setAttribute("class","btnok");
 btn.innerText="OK"
 ptag.append(btn);
 let bookplay=document.querySelector(".logoletter")
 bookplay.style.display="none"
 btn.addEventListener("click",()=>{
   window.location.href="../../pages/player/newprofile.html"
 })

}
else{
//
console.log("Pl");


let anchor;
let div_chatseparate;
let div_img;
let div_name;
let p_name;
let div_container_sidebar2;
let div_top;
let h2_web;
let div_chat_main;
let p_mess_noti;
let div_chat_bottom;
let form_box;
let input_mess_box;
let send_btn;
let i_send_symbol;
let text;


/*

for (const messages of allmessagedUser) {
 const { receiver_id } = messages;
 const { sender_id } = messages;
 const message = filterPlayer.find((data) => data.user_id == receiver_id
 );



 messages.data = message;
 // const message2 = filterPlayer.find((data) => data.user_id == sender_id
 // );

 // messages.data2 = message2;
 
}
*/ 
//console.log(allmessagedUser);
for (let i = 0; i < filterData.length; i++) {
 anchor = document.createElement("a");
 anchor.setAttribute("href", `?user_id=${filterData[i].sender.userId}`);
 anchor.setAttribute("class", "anchor_div");
 // console.log(anchor);
 document.querySelector(".side2").append(anchor);

 div_chatseparate = document.createElement("div");
 div_chatseparate.setAttribute("class", "chatdiv");
 anchor.append(div_chatseparate);
 // anchor.append(div_img);

 div_img = document.createElement("div");
 div_img.setAttribute("class", "img");
 div_chatseparate.append(div_img);

 player_img = document.createElement("img");
 if (filterData[i].sender.image == "") {
   player_img.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
 } else {
   player_img.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
 }
 // player_img.setAttribute("alt", "playerProfile");
 player_img.setAttribute("class", "peopleimage");
 div_img.append(player_img);

 div_name = document.createElement("div");
 div_name.setAttribute("class", "name");
 div_chatseparate.append(div_name);

 p_name = document.createElement("p");
 p_name.innerText = filterData[i].sender.firstName;
 p_name.setAttribute("class", "playername");
 div_name.append(p_name);



}


// url search

const url = window.location.search; // ?userid=97;
// console.log(url);
const urlParameter = new URLSearchParams(url);

const searchuser_id = urlParameter.get("user_id");
 console.log(searchuser_id+"hi");

const chat_cont = document.querySelector(".container");

let messageResponse;

messageResponse = filterData.find((data) => data.sender.userId == searchuser_id);



if(messageResponse){
	console.log("podasvennsa");
	console.log(messageResponse);
}
else{
	console.log("dum");
}
  axios.get(`http://localhost:8080/bookandplay-web/GetMessages?userId=${userId}&playerId=${searchuser_id}`)
 .then(function (response) {
    // console.log(response.data);
    // console.log("data");
       messageResponse.message = response.data;

 console.log(messageResponse);

 


// chatting

if(messageResponse==null){

}
else{
 console.log("ok");
 // console.log(messagesshown);

div_container_sidebar2 = document.createElement("div");
div_container_sidebar2.setAttribute("class", "container");
document.querySelector(".side3chatmain").append(div_container_sidebar2);
// console.log(div_container_sidebar2);
div_top = document.createElement("div");
div_top.setAttribute("class", "top");
div_container_sidebar2.append(div_top);

h2_web = document.createElement("h2");
h2_web.setAttribute("class", "h2head");
h2_web.innerText = messageResponse.sender.firstName;
div_top.append(h2_web);

profile_dp = document.createElement("img");
/*
if (messageResponse.sender.image == "") {
 profile_dp.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
} else {
 profile_dp.setAttribute("src", messagesshown.data.url);
}
*/
profile_dp.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
// player_img.setAttribute("alt", "playerProfile");
profile_dp.setAttribute("class", "player_dp");
div_top.append(profile_dp);

div_chat_main = document.createElement("div");
div_chat_main.setAttribute("class", "main");
div_container_sidebar2.append(div_chat_main);


const allmess = [];

// all received mesages
if (messageResponse != []) {
   for (let i = 0; i < messageResponse.message.receivedMessages.length; i++) {
     const receivedMess = messageResponse.message.receivedMessages[i];
     receivedMess.type = "received";
     allmess.push(receivedMess);
   }
}

if ( messageResponse.message.sentMessages.length !== 0 ) {
 // all usrr message
   for (let i = 0; i < messageResponse.message.sentMessages.length; i++) {
     const userMess = messageResponse.message.sentMessages[i];
     userMess.type = "sent";
     allmess.push(userMess);
   }
}
// sorting message based on time
allmess.sort((a, b) => a.timestamp - b.timestamp);

for (let i = 0; i < allmess.length; i++) {
 const particularmessage = allmess[i];
 const messageofchat = document.createElement("p");
 if (particularmessage.type == "received") {
   messageofchat.setAttribute("class", "messagefrom");
 } else {
   messageofchat.setAttribute("class", "messageto");
 }
 messageofchat.innerHTML = `${
   particularmessage.text
 }<span class="timeside">${timestampconvert(
   particularmessage.timestamp
 )} </span>`;
 div_chat_main.append(messageofchat);
 // delete btn
 const delbtn = document.createElement("button");
 delbtn.setAttribute("class", "delbtn");
  delbtn.setAttribute("value",particularmessage.id);
 delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
 if (particularmessage.type == "received") {
   delbtn.style.display = "none";
 }

 delbtn.addEventListener("click", () => {
   deletemess(particularmessage.id);
   messageofchat.remove();
 });
 messageofchat.append(delbtn);
}

//   }

div_chat_bottom = document.createElement("div");
div_chat_bottom.setAttribute("class", "bottom");
div_container_sidebar2.append(div_chat_bottom);

form_box = document.createElement("form");
form_box.setAttribute("id", "sendbtn");
div_chat_bottom.append(form_box);

input_mess_box = document.createElement("input");
input_mess_box.setAttribute("type", "text");
input_mess_box.setAttribute("placeholder", "Send message");
input_mess_box.setAttribute("id", "message");
input_mess_box.setAttribute("required", "");
form_box.append(input_mess_box);

send_btn = document.createElement("button");
send_btn.setAttribute("id", "send_button");
send_btn.setAttribute("type", "submit");
form_box.append(send_btn);

i_send_symbol = document.createElement("i");
i_send_symbol.setAttribute("class", "bx bx-send");
send_btn.append(i_send_symbol);


// chat feature
// const sendBtn = document.getElementById("send_button");
const formbtn = document.getElementById("sendbtn");
formbtn.addEventListener("submit", (e) => {
 e.preventDefault();
 sendMessage();

});
}

let messagebox;

function sendMessage() {
 messagebox = document.getElementById("message").value;

 


 const requestData =
 "&senderId=" + userId +
 "&receiverId=" + searchuser_id +
 "&message=" + messagebox +
 "&timeStamp=" +  new Date().getTime();



 let timestamp= new Date().getTime();
 
const url = "http://localhost:8080/bookandplay-web/AddChat?"; 

axios.post(url, requestData)
           .then(function (response) {
             // handle success
             console.log(response.data);
             const serverMsg = response.data.trim();
             
             if(serverMsg === 'success') {
     setTimeout(function() {
    window.location.reload();
}, 1000); 
    
             }  
             else {
                 alert(serverMsg);
             }
           })
           .catch(function (error) {
             // handle error
             console.log(error);
           })


 const mainChat = document.querySelector(".main");
 const messageto = document.createElement("p");
 messageto.setAttribute("class", "messageto");

 messageto.innerHTML = `${messagebox} <span class="timeside"> ${timestampconvert(timestamp
 )}</span>`;
 mainChat.append(messageto);

 /*
 const del_btn = document.createElement("button");
 del_btn.setAttribute("class", "delbtn");
 del_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

 del_btn.addEventListener("click", () => {


   deletemess(existingmessage);

   messageto.remove(existingmessage);
 });
 messageto.append(del_btn);
*/
 document.getElementById("message").value = "";

 mainChat.scrollTop = mainChat.scrollHeight;
}




function timestampconvert(timestamp) {
 const date = new Date(timestamp);
 let day=date.getDate();
 let month =date.getMonth()+1;
 let year=date.getFullYear();
 let hours = date.getHours();
 const minutes = date.getMinutes();
 const ampmformat = hours >= 12 ? `PM` : `AM`;
 hours %= 12;
 hours = hours || 12;
 const format_date=`${day.toString().padStart(2, "0")}/${month
   .toString()
   .padStart(2, "0")}/${year.toString()
     .padStart(4, "0")}`;

const formattime= `${hours.toString().padStart(2, "0")}:${minutes
   .toString()
   .padStart(2, "0")}`;

   return `${format_date} ${formattime}${ampmformat}`
}


// delete messages

function deletemess(message) {
	
	
	 
     const requestData =
 "&messageId="+ message;
 
        
const url = "http://localhost:8080/bookandplay-web/DeleteMessage?"; 

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
 
}




})
.catch(function (error) {
 
  console.error(error);
});
}


}





 

})





    .catch(function (error) {
        // handle error
        console.log(error);
      })


})
 .catch(function (error) {
  
   console.error(error);
 });
  


