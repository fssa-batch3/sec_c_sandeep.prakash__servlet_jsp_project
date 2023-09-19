// side bar2

// filter

const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const loginuserid = loginUser[0].user_id;

const messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
let allmessagedUser;
if(messageofUser==null){
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

  console.log("ok");
 allmessagedUser = messageofUser.filter(
  (data) => data.sender_id == loginuserid 
  //  || data.receiver_id===loginuserid
);
console.log(allmessagedUser);

// let allmessagedUser;
let receivedmess;


//  allmessagedUser = messageofUser.filter(
//   (data) => data.receiver_id===loginuserid
 
// );

// console.log(allmessagedUser);

if(allmessagedUser.length==0){
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
//  allmessagedUser = messageofUser.filter(
//   (data) => data.sender_id == loginuserid 
//   //  || data.receiver_id===loginuserid
// );
console.log(allmessagedUser);
const user_record = JSON.parse(localStorage.getItem("user_details"));

let filterPlayer = [];
filterPlayer = user_record.filter((item) => item.player == true);

// console.log(filterPlayer);

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
console.log(allmessagedUser);
for (let i = 0; i < allmessagedUser.length; i++) {
  anchor = document.createElement("a");
  anchor.setAttribute("href", `?user_id=${allmessagedUser[i].data.user_id}`);
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
  if (allmessagedUser[i].data.url == "") {
    player_img.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
  } else {
    player_img.setAttribute("src", allmessagedUser[i].data.url);
  }
  // player_img.setAttribute("alt", "playerProfile");
  player_img.setAttribute("class", "peopleimage");
  div_img.append(player_img);

  div_name = document.createElement("div");
  div_name.setAttribute("class", "name");
  div_chatseparate.append(div_name);

  p_name = document.createElement("p");
  p_name.innerText = allmessagedUser[i].data.user_name;
  p_name.setAttribute("class", "playername");
  div_name.append(p_name);



}


// url search

const url = window.location.search; // ?userid=97;
// console.log(url);
const urlParameter = new URLSearchParams(url);

const searchuser_id = urlParameter.get("user_id");
// console.log(searchuser_id);

const chat_cont = document.querySelector(".container");



let messagesshown;
// allmessagedUser.find((e)=>{
//     if(e.receiver_id==searchuser_id && e.sender_id==loginuserid ){
//         return messagesshown=e;
//     }
//     else{
//         return messagesshown=0
//     }

// })

// console.log(messagesshown);

allmessagedUser.find((e) => {
  if (e.data.user_id == searchuser_id) {
    return (messagesshown = e);
  }

  return (messagesshown = 0);
});

receivedmess = messageofUser.find(
  (mess) => mess.receiver_id == loginuserid && mess.sender_id == searchuser_id
);
messagesshown.user_receivedmess = receivedmess;

console.log(messagesshown);

//  for(const mess of allmessagedUser){
//     const {receiver_id}=mess
//     let messagesshown2= messageofUser.find((e)=>{
//         receiver_id==loginuserid && e.sender_id==searchuser_id

//    })
//    allmessagedUser["received_mess"]=messagesshown2

//    console.log(allmessagedUser);

//  }

// let messagesshown2;
// messageofUser.find((e)=>{
//     if( e.receiver_id==loginuserid && e.sender_id==searchuser_id

//         ){
//         return messagesshown2=e
//     }
//     else{
//         return messagesshown2=0
//     }

// })

// console.log(messagesshown2);

// let ok={...messagesshown, ...messagesshown2};
// console.log(ok);

// const messseparate=messagesshown["messages"].find((data)=>{
//     data.receiver_id==searchuser_id && data.sender_id==loginuserid
// })

// messagesshown["received_messages"]=messseparate;

// console.log(messseparate);

// let messagesshown2=messagesshown.find((e)=>
// e["receiver_id"]==searchuser_id && e["sender_id"]==loginuserid

// )

// const anchordiv = document.querySelectorAll(".anchor_div");
// anchordiv.forEach((data) => {
//   data.addEventListener("click", (e) => {
//     // e.preventDefault()
  

//       //  alert("ok")
//     // chat_cont.style.display="none"
//   });
// });

// chatting

if(messagesshown.data==null){

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
h2_web.innerText = messagesshown.data.user_name;
div_top.append(h2_web);

profile_dp = document.createElement("img");

if (messagesshown.data.url == "") {
  profile_dp.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
} else {
  profile_dp.setAttribute("src", messagesshown.data.url);
}
// player_img.setAttribute("alt", "playerProfile");
profile_dp.setAttribute("class", "player_dp");
div_top.append(profile_dp);

div_chat_main = document.createElement("div");
div_chat_main.setAttribute("class", "main");
div_container_sidebar2.append(div_chat_main);

//     let p_mess_from = document.createElement("p");
//     p_mess_from.setAttribute("class", "messageto");
//     p_mess_from.innerText = "osmolsmkmmkdm kdmkdmdms";
//     div_chat_main.append(p_mess_from);

//     let p_mess_to = document.createElement("p");
//     p_mess_to.setAttribute("class", "messagefrom");
//     p_mess_to.innerText = "helkoldmsndddd";
//     div_chat_main.append(p_mess_to);

//     // p_mess_noti = document.createElement("p");
//     // p_mess_noti.setAttribute("class", "noti");
//     // p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//     // div_chat_main.append(p_mess_noti);

// div_chat_bottom = document.createElement("div");
// div_chat_bottom.setAttribute("class", "bottom");
// div_container_sidebar2.append(div_chat_bottom);

// form_box = document.createElement("form");
// form_box.setAttribute("id", "sendbtn");
// div_chat_bottom.append(form_box);

// input_mess_box = document.createElement("input");
// input_mess_box.setAttribute("type", "text");
// input_mess_box.setAttribute("placeholder", "Send message");
// input_mess_box.setAttribute("id", "message");
// input_mess_box.setAttribute("required", "");
// form_box.append(input_mess_box);

// send_btn = document.createElement("button");
// send_btn.setAttribute("id", "send_button");
// send_btn.setAttribute("type", "submit");
// form_box.append(send_btn);

// i_send_symbol = document.createElement("i");
// i_send_symbol.setAttribute("class", "bx bx-send");
// send_btn.append(i_send_symbol);

// if (messagesshown.received_messages == undefined && messagesshown.user_messages==undefined) {
//     // Display a notification that the conversation hasn't started yet
//     p_mess_noti = document.createElement("p");
//     p_mess_noti.setAttribute("class", "noti");
//     p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//     div_chat_main.append(p_mess_noti);
//   }
//   else {

const allmess = [];

// all received mesages
if (messagesshown.user_receivedmess != undefined) {
  for (let i = 0; i < messagesshown.user_receivedmess.messages.length; i++) {
    const receivedMess = messagesshown.user_receivedmess.messages[i];
    receivedMess.type = "received";
    allmess.push(receivedMess);
  }
}

if (messagesshown.messages !== undefined && messagesshown.messages != null) {
  // all usrr message
  for (let i = 0; i < messagesshown.messages.length; i++) {
    const userMess = messagesshown.messages[i];
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
  delbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  if (particularmessage.type == "received") {
    delbtn.style.display = "none";
  }

  delbtn.addEventListener("click", () => {
    deletemess(particularmessage);
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

  const receiver = Number(searchuser_id);
  let usersMessage = new Array();
  usersMessage = JSON.parse(localStorage.getItem("user_Messages"))
    ? JSON.parse(localStorage.getItem("user_Messages"))
    : [];

  const existingmessagedUser = usersMessage.findIndex(
    (mess) => mess.sender_id === loginuserid && mess.receiver_id === receiver
  );

  const existingmessage = {
    text: messagebox,
    sender: "user",
    timestamp: new Date().getTime(),
  };

  if (existingmessagedUser !== -1) {
    usersMessage[existingmessagedUser].messages.push(existingmessage);
  } else {
    usersMessage.push({
      sender_id: loginuserid,
      receiver_id: receiver,
      messages: [
        {
          text: messagebox,
          sender: "user",
          timestamp: new Date().getTime(),
        },
      ],
    });
  }

  localStorage.setItem("user_Messages", JSON.stringify(usersMessage));
  // location.reload();

  // let div_chat_main = document.querySelector(".main");
  //   let p_mess_from = document.createElement("p");
  //   p_mess_from.setAttribute("class", "messageto");
  //   p_mess_from.innerText = messagebox;
  //   div_chat_main.append(p_mess_from);

  //   document.getElementById("message").value = "";

  const mainChat = document.querySelector(".main");
  const messageto = document.createElement("p");
  messageto.setAttribute("class", "messageto");

  messageto.innerHTML = `${messagebox} <span class="timeside"> ${timestampconvert(
    existingmessage.timestamp
  )}</span>`;
  mainChat.append(messageto);

  
  const del_btn = document.createElement("button");
  del_btn.setAttribute("class", "delbtn");
  del_btn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  del_btn.addEventListener("click", () => {

    // let delmess={
    //   text:messagebox,
    //   sender: "user",
    //   timestamp:existingmessage.timestamp,
    // };
   
    deletemess(existingmessage);

    // console.log(delmess);

    // console.log("okok");
    messageto.remove(existingmessage);
  });
  messageto.append(del_btn);

  document.getElementById("message").value = "";
  // mess_from=document.createElement("p");
  // mess_from.setAttribute("class","messagefrom");
  // mess_from.innerText=messagebox;
  // div_chat_main.append(mess_from);
  mainChat.scrollTop = mainChat.scrollHeight;
}

// function formatTime(timestamp) {
//   let date = new Date(timestamp);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
// }


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
  const messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
  const existingmessageuser = messageofUser.findIndex(
    (mess) =>
      mess.sender_id === loginuserid && mess.receiver_id === Number(searchuser_id)
  );

  if (existingmessageuser !== -1) {
    const exitingmesss = messageofUser[existingmessageuser].messages.findIndex(
      (messs) =>
        messs.text === message.text && messs.timestamp === message.timestamp
    );
    if (exitingmesss !== -1) {
      messageofUser[existingmessageuser].messages.splice(exitingmesss, 1);
      localStorage.setItem("user_Messages", JSON.stringify(messageofUser));
    }
  }
}

}


}


