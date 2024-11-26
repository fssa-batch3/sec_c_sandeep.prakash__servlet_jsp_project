# bookandplay-website
 This repository is webapp

# Book and Play 
Hi This project was developed using HTML, CSS,JavaScript,Java ,MYSql,Servlet,JDBC and JSP
### Good Practices
- Writing TestCases
- Maintained Folder Structure
- Used Prepared Statement
- Both Frontend and backend validation
- Sending data using post method 
- Hashed the password in the database

### Utilized Essential Tools and Libraries
- Axios Library for Ajax Calls
- Elasticemail for sending emails
- Flatpickr for Time Picker Functionality
- SweetAlert for Enhanced User Alerts
-  Used Stored Procedure in Mysql


Welcome to the **Book and Play** platform!

## Overview

**Book and Play** is a platform designed to assist individuals in reserving sports facilities and connecting with fellow players. The website offers the following key functionalities:

### Website Functionality

Users can easily reserve sports grounds through an intuitive and user-friendly interface. The booking process is designed to be straightforward and efficient.

### Community Building

**Book and Play** aims to foster a sense of community among sports enthusiasts. Users can find fellow players who share similar interests and connect with them for sports activities.

### Communication Tool

To enhance user interaction, the platform provides a chat feature. Users can communicate with each other.

# User Stories

## General User

### Create an Account
- If you want to only book a ground, you don't need to tick the checkbox "Join as a player." 
- If you want to join as a player, click the checkbox "Joining as a player," and you will get access to connecting with other players and chat with them.
  - **Scenario**: Successfully create an account
  - **Steps**: 
    1. Click the login button.
    2. If you are a new user, sign up on the registration page.
    3. Enter the required information such as name, email, phone number, and password.
    4. If you want to join as a player, click the checkbox and fill the required information.
    5. Click the "Register" button.
  - **Expected Result**: The user is redirected to the login page.

### Login
- **Scenario**: Successfully log in to the account
- **Steps**: 
  1. Navigate to the login page.
  2. Enter the required information such as email and password.
  3. Click the "login" button.
- **Expected Result**: The user is redirected to the home page.

### Your Profile
- Click "My Account."
- There you can update your information except email.

### View Grounds
- **Scenario**: Successfully view grounds
- **Steps**: 
  1. Log in as a buyer.
  2. Navigate to the grounds listing page.
  3. View the list of available grounds.
- **Expected Result**: The user can view the list of available grounds.
  - You can also search the grounds and filter by city.

### View Ground Details
- **Scenario**: Successfully view ground details
- **Steps**: 
  1. Log in as a buyer.
  2. Navigate to the ground listing page.
  3. Select a ground to view its details.
- **Expected Result**: The user can view the details of the selected ground.

## Booking Ground Scenario

1. **Fill Booking Information:**
   - Navigate to the booking page.
   - Fill in the required booking information, including date, time, and any additional details.
   - Click the "Book Now" button.

2. **Email Confirmation:**
   - Upon successful booking, you will receive an email confirmation.
   - The email will contain details about your booking and instructions for payment.

3. **Receive 7-Digit Code:**
   - After successful payment, you will receive a 7-digit confirmation code via email.
   - Wait for approximately 5 minutes to receive the code.

4. **Show Confirmation Code:**
   - When you visit the turf for your booked slot, show the 7-digit confirmation code to the facility staff.

5. **Cancellation (within 20 minutes):**
   - If you need to cancel the booking, do so within 20 minutes of making the reservation.
   - Follow the cancellation process on the platform.

Congratulations! Your ground is booked, and you are ready to enjoy your sports activity. If you encounter any issues or have questions, feel free to contact our customer support for assistance.

### View Players
- **Scenario**: Successfully view players
- **Steps**: 
  1. Log in as a user/player.
  2. Navigate to the player listing page.
  3. View the list of available players.
- **Expected Result**: The user can view the list of available players.
  - You can also search players by name and filter by city.

### View Player Details
- **Scenario**: Successfully view player details
- **Steps**: 
  1. Log in as a user/player.
  2. Navigate to the player listing page.
  3. Select a player to view its details.
- **Expected Result**: The user can view the details of the selected player.
  - If you want to connect with the player, click the "Connect" button. The request will be sent, and you can chat only if both are mutually friends.
  - You can see your friend requests and friend list in "My Account."

### Chat Feature
- Type the message, click the send button, and the page will refresh. You have to refresh to receive messages from your friend.

## Seller User

### Create an Account
- **Scenario**: Successfully create an account
- **Steps**: 
  1. Click the login button.
  2. If you are a new user, sign up on the registration page.
  3. Enter the required information such as name, email, phone number, and password.
  4. Click the "Register" button.
- **Expected Result**: The seller user is redirected to the login page.

### Login
- **Scenario**: Successfully log in to the account
- **Steps**: 
  1. Navigate to the login page.
  2. Enter the required information such as email and password.
  3. Click the "login" button.
- **Expected Result**: The user is redirected to the seller user profile page.

### Seller Profile
- There you can update your information except email.
- Create your ground by filling the form (allowed to create one ground).
- Update your ground information by clicking "My Ground."


### ER Diagram Data Base of Book and play

<img width="988" alt="booandplayer" src="https://github.com/user-attachments/assets/2b8b59d4-f59a-437b-93c7-d85734e4a2db">




