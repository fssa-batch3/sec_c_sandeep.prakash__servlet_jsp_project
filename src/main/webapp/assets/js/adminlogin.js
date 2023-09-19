const loginForm = document.getElementById("loginform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
});
function getData() {
  const email = document.getElementById("email").value;
  const user_password = document.getElementById("password").value;
  const arrayConvert = JSON.parse(localStorage.getItem("groundadmin_details"));

  let userCollect;
  let seller_id;
  arrayConvert.find((element) => {
    if (
      element.seller_email == email &&
      element.seller_password == user_password
    ) {
      seller_id = element.seller_id;

      userCollect = 1;
      return true;
    }
    userCollect = 0;

    return false;
  });

  if (userCollect == 1) {
    // localStorage.setItem("user_name",name1)
    const sellerdata = [
      {
        seller_email: email,
        seller_Id: seller_id,
      },
    ];

    window.location.href = "../../pages/admin/adminproduct.html";
    alert("login success");

    localStorage.setItem("seller_logged_in", JSON.stringify(sellerdata));
  } else {
    alert("login failure");
  }
}
