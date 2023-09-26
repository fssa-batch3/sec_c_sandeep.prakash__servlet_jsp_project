
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
      
       

    }

    else if (editbutn1.innerHTML == "Save") {
		
		const requestData = 


	"&uId="+userId+
	"&fname="+namebox.value+
	"&groundOrgName="+groundnamebox.value+
	"&uphonenumber1="+user_phone.value;
	
				const url = "http://localhost:8080/bookandplay-web/AdminProfileUpdate?"; 
			axios.post(url, requestData)
			  .then(function (response) {
			    // handle success
			    console.log(response.data);
			    const serverMsg = response.data;
			    
			    if(serverMsg.trim() === 'success') {
			    	alert("Your Profile Updated Successfully ")
			    }  
			    else {
			    	alert(serverMsg);
			    }
			  })
			  .catch(function (error) {
			    // handle error
			    console.log(error);
			  })
		
		
        editbutn1.innerHTML = "Edit";
        namebox.setAttribute("disabled", "");
        groundnamebox.setAttribute("disabled","")
        // user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled", "");
     
       
 }



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








         })
         .catch(function (error) {
             // handle error
             console.log(error+"sandyyyyyyy");
         });



