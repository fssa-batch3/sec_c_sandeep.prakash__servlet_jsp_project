<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="com.fssa.bookandplay.model.User"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact us</title>
<link rel="icon" type="image/icon"
	href="/bookandplay-web/assets/images/faviicon...png">
<link rel="stylesheet" href="/bookandplay-web/assets/css/contact.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
	crossorigin="anonymous" referrerpolicy="no-referrer">

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css"
	integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q=="
	crossorigin="anonymous" referrerpolicy="no-referrer">
<script>
        window.addEventListener('mouseover', initLandbot, { once: true });
        window.addEventListener('touchstart', initLandbot, { once: true });
        let myLandbot;
        function initLandbot() {
          if (!myLandbot) {
            const s = document.createElement('script');s.type = 'text/javascript';s.async = true;
            s.addEventListener('load', () => {
              myLandbot = new Landbot.Popup({
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1579296-W72XI4LGF1278XHK/index.json',
              });
            });
            s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
        }
                </script>

</head>
<body>

<!-- header -->
	<jsp:include page="header.jsp"></jsp:include>
  <!-- header -->

	 <section>
    <h3 class="content1">Contact Us</h3>
  </section>
	
	<!-- header -->
	<!-- main -->
	<div class="main">
		<div class="bar">
			<!-- sidebar bar 1 faq -->
			<div class="sidebar1">
				<div class="contact">
					<i class="fa-solid fa-phone"></i> <span class="contact-info">Contact
						us on 000-800-040-1842</span> <br> <br> <i
						class="fa-solid fa-envelope"></i> <span class="contact-info">Email
						us on bookandplay@gmail.com</span>

				</div>
				<br>
				<div class="faq">
					<h2 class="faqhead">Frequently asked Question</h2>
					<br>
					<div class="faqquestionitem">
						<div class="faq-ques1" id="ques1">
							<a href="#ques1" class="question"> <span>What is book
									and play?</span> <i class="plusicon"></i>
							</a>
							<p class="ans">Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis</p>
						</div>
						<div class="faq-ques1" id="ques2">
							<a href="#ques2" class="question"> <span>Is ground is
									good enough to play?</span> <i class="plusicon"></i>
							</a>
							<p class="ans">Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis</p>
						</div>
						<div class="faq-ques1" id="ques3">
							<a href="#ques3" class="question"> <span>How can join
									as a member?</span> <i class="plusicon"></i>
							</a>
							<p class="ans">Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis</p>
						</div>
						<div class="faq-ques1" id="ques4">
							<a href="#ques4" class="question"> <span>Is web chat
									is safe?</span> <i class="plusicon"></i>
							</a>
							<p class="ans">Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis</p>
						</div>
						<div class="faq-ques1" id="ques5">
							<a href="#ques5" class="question"> <span>Is star
									provide anything to my profile?</span> <i class="plusicon"></i>
							</a>
							<p class="ans">Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis</p>
						</div>
					</div>
				</div>

			</div>
			<!-- sidebar bar 1 faq -->
			<!-- sidebar bar 2 message -->
			<div class="sidebar2">
				<div class="container">
					<div class="top">
						<h2 class="h2head">Get Help From Web</h2>
					</div>
					<div class="messagebox">
						<img class="assistant" src="/bookandplay-web/assets/images/assistant.png"
							alt="assitant">
						<p class="messageto">Ask booking and joining related queries</p>

						<p class="noti">* Your conversation is not started please
							click the popop circle to connect with us and get started</p>

					</div>
					<div class="bottom">
						<form id="sendbtn">
							<input type="text"
								placeholder="Send message Using right side popup circle"
								id="message">
							<button id="send button">
								<i class="bx bx-send"></i>
							</button>
						</form>
					</div>
				</div>

			</div>
			<!-- sidebar bar 2 message -->
		</div>
		<img class="rightarrow" src="/bookandplay-web/assets/images/rightarrow.gif"
			alt="rightarrow">
	</div>
	<!-- footer -->
<!-- footer  -->
	<jsp:include page="footer.jsp"></jsp:include>
  <!-- footer -->
  
  	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>

  
	   

     const url = "http://localhost:8080/bookandplay-web/GetUserSession";

    
     axios.get(url)
         .then(function (response) {
             // handle success
             
             const responseUserData = response.data.substring(response.data.indexOf('{'));
             const userLogin = JSON.parse(responseUserData);
          
                 // You can now access the "userLogin" session attribute in userLogin variable
                 console.log(userLogin);
                 
                 
                 const loginbtn = document.querySelector(".login")

                 if (userLogin == null) {
             // nothing
                 }
                 else if (userLogin !== null) {
                 loginbtn.style.display = "none"
                 const myprofile = document.createElement("button");
                 myprofile.setAttribute("class", "login");
                 myprofile.innerText = "My Account"
                 myprofile.style.width = "150px";
                 myprofile.style.left = "50px"
                 myprofile.addEventListener("click", () => {
                   window.location.href = "/bookandplay-web/userprofile.jsp"
                 });
                 document.querySelector(".contact").append(myprofile)
               }
               else {
                 loginbtn.style.display = "block"

               }
             // checking the user is player
                 const findplayersbtn = document.querySelector(".findplayers")
                 findplayersbtn.addEventListener("click", (e) => {
           

                if( userLogin.playerStatus === false){
                 alert("Please join as a player to find players. To join as a player please tick the box on your profile page ");
                 e.preventDefault();
               }

                   else {
                     window.location.href = "/bookandplay-web/findplayers.jsp";
                   }
                   // if(loginUser==false){
                   //   console.log("ofmofkf");
                   //   alert("Please join as a player to find players ")
                   //   e.preventDefault();
                   // }

                 })
                 
                 
            
         })
         .catch(function (error) {
             // handle error
             console.log(error);
             const findplayersbtn = document.querySelector(".findplayers")
             findplayersbtn.addEventListener("click", (e) => {
           
             alert("Please login to find players ")
             e.preventDefault();
           })
         });
  </script> 
	<!-- footer -->
	<script src="../../assets/js/contact.js"></script>
</body>
</html>