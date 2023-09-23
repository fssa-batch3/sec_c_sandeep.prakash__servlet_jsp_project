
//admin proile edit//

const fillBtn = document.querySelector(".fillbutton");
const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2");

const fsidename = document.querySelector(".nameperson");

const namebox = document.getElementById("name1")
const groundnamebox = document.getElementById("name2")
const user_email = document.getElementById("userEmail")
const user_phone = document.getElementById("phoneno1")
const user_password = document.getElementById("password");


  const url = "http://localhost:8080/bookandplay-web/GetGroundOwnerData";


axios.get(url)
         .then(function (response) {
             // handle success
            console.log(response.data);
          //   const responseUserData = response.data.substring(response.data.indexOf('{'));
             const userLogin = response.data;
 
 const userId=userLogin.groundOwnerId;
 console.log(userId);

      
fsidename.innerText=userLogin.organisationName;

namebox.value = userLogin.name;
groundnamebox.value = userLogin.organisationName;
user_email.value = userLogin.email;
user_phone.value =userLogin.phoneNumber;










 axios.get(`http://localhost:8080/bookandplay-web/CheckGroundOwnerExistInGround?Id=${userId}`)
  .then(function (response) {

   // const responseData = response.data.substring(response.data.indexOf('{'));
    const jsonResponse = response.data;
    console.log(jsonResponse);
   const groundOwnerExistsGround = jsonResponse.exists;
    if (groundOwnerExistsGround) {
      console.log("A ground  already exists ");
       fillBtn.style.display = "none"
    } else {
      console.log("No existing ground");
    }
  })
  .catch(function (error) {
   
    console.error(error);
  });
   
   
   


const editbutn = document.getElementById("formbox");
const editbutn1 = document.querySelector(".profile2");
editbutn.addEventListener("submit", (e) => {
    e.preventDefault()




    if (editbutn1.innerHTML == "Edit") {


        editbutn1.innerHTML = "Save"
        namebox.removeAttribute("disabled");
        groundnamebox.removeAttribute("disabled")
        user_phone.removeAttribute("disabled");
        user_password.removeAttribute("disabled")
       

    }

    else if (editbutn1.innerHTML == "Save") {
        editbutn1.innerHTML = "Edit";
        namebox.setAttribute("disabled", "");
        groundnamebox.setAttribute("disabled","")
        // user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled", "");
        user_password.setAttribute("disabled", "")
       

    sellerdata.find(e => {



        if (user_email.value == e["seller_email"]) {

         e["seller_ground_name"]=fsidename.innerText
            e["seller_name"] = namebox.value
            e["user_email"] = user_email.value
            e["seller_phoneno"] = user_phone.value
            e["seller_password"] = user_password.value
e["seller_ground_name"]=groundnamebox.value


            localStorage.setItem("groundadmin_details", JSON.stringify(sellerdata));



        }


    })  }



})






// password
let eye=document.querySelector(".eyesym i")
eye.addEventListener("click",()=>{
    // eye.setAttribute("class","fa-solid fa-eye")

    if(user_password.type=="password"){
       
        user_password.type="text"
     eye.classList.remove("fa-eye-slash");
     eye.classList.add("fa-eye")
    }
    else{
  
        user_password.type="password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        
    }
    
})




// logout




const logOut = document.querySelector(".logout")
logOut.addEventListener("click", (e) => {

    const log_out = delete sellerloggedDta

    localStorage.setItem("seller_logged_in", log_out);
    window.location.href = "../../pages/admin/adminlogin.html"


})







// image ground




//profile image
const imageFileUpload = document.getElementById("input-file");
const imageShow = document.querySelector(".profileimg");
let ok = "../../assets/images/avatorprofile.jpg"
// const imageShow = document.querySelector(".profileimg");



imageFileUpload.addEventListener("change", (e) => {

    const file = e.target.files[0];

    // if (file != file.type.match("image.*")) {
    //     alert("please choose the image ");

    // };

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
        imageShow.src = e.target.result;

        const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
        const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));


        for (let i = 0; i < sellerdata.length; i++) {

            if (sellerloggedDta[0]["user_email"] == sellerdata[i]["user_email"]) {
                // let user_data;
                // user_data = {

                //     imagename: file.name,
                //     url: e.target.result
                // };
                // console.log(userRecords[i])
                // //4
                // console.log(userRecords[i]["imagename"])
                sellerdata[i]["imagename"] = file.name;
                sellerdata[i]["url"] = e.target.result;


                break;
            };


        }
        localStorage.setItem("groundadmin_details", JSON.stringify(sellerdata));
    };
    fileReader.readAsDataURL(file);




})


for (let i = 0; i < sellerdata.length; i++) {
    if (sellerloggedDta[0]["seller_email"] == sellerdata[i]["seller_email"]) {
        const savedImage = sellerdata[i];
        if (savedImage && savedImage.url) {
            imageShow.src = savedImage.url;
        }
        else {
            imageShow.src = "https://iili.io/HkW7U4S.jpg"
        }
        break;
    }
}





         })
         .catch(function (error) {
             // handle error
             console.log(error+"sandyyyyyyy");
         });



