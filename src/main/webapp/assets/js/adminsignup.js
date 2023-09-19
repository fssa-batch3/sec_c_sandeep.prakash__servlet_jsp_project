const form = document.getElementById("signupform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getSellerData();
});

function getSellerData() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const email = document.getElementById("email").value.trim();
  const user_phoneno = document.getElementById("user_phoneno").value.trim();
  const user_password = document.getElementById("password").value.trim();
  const sellerPoc = document.getElementById("poc");
  const id_generator = Math.floor(Math.random() * 300);

  let admin_records = new Array();

  admin_records = JSON.parse(localStorage.getItem("groundadmin_details"))
    ? JSON.parse(localStorage.getItem("groundadmin_details"))
    : [];

  if (admin_records.some((v) => v.user_email == email)) {
    alert("email id already taken");
  } else {
    admin_records.push({
      seller_id: id_generator,
      seller_name: name1,
      seller_ground_name: name2,
      seller_email: email,
      seller_phoneno: user_phoneno,
      seller_password: user_password,
      imagename: "",
      url: "",
    });

    window.location.href = "./adminlogin.html";
  }

  localStorage.setItem("groundadmin_details", JSON.stringify(admin_records));
}



//password
let eye=document.querySelector(".eyesym i")
eye.addEventListener("click",()=>{

 let  user_password2 = document.getElementById("password")
    // eye.setAttribute("class","fa-solid fa-eye")

    if(user_password2.type=="password"){
       
        user_password2.type="text"
     eye.classList.remove("fa-eye-slash");
     eye.classList.add("fa-eye")
    }
    else{
  
        user_password2.type="password"
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash")
        
    }
    
})