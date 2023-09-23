package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.builder.UserBuilder;
import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.exceptions.InvalidUserDetailException;
import com.fssa.bookandplay.model.User;
import com.fssa.bookandplay.service.UserService;

/**
 * Servlet implementation class UserSignUp
 */
@WebServlet("/UserSignUp")
public class UserSignUp extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UserSignUp() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	
		PrintWriter out = response.getWriter();
		System.out.println("call1");
		
		
		String fName = request.getParameter("fname");
		String lName = request.getParameter("lname");
		String userEmail = request.getParameter("email-id");
		System.out.println(request.getParameter("mobile-number"));
	long phoneNumber =Long.parseLong( request.getParameter("mobile-number"));
	System.out.println(phoneNumber);
		String userPass = request.getParameter("upassword");
		String userPlayerStatus = request.getParameter("checkjoinplayer");
		
		System.out.println(userPlayerStatus);
		String userAge = request.getParameter("uage");
			
		System.out.println(userAge);
		String userGender = request.getParameter("ugender");
		System.out.println(userGender);
		String userLocation = request.getParameter("ulocation");
		String startTimeStr = request.getParameter("ustartTime");
		String endTimeStr = request.getParameter("uendTime");
		String[] selectedSports = request.getParameterValues("sportsKnown");
		System.out.println(Arrays.toString(selectedSports)+"poda");

		LocalTime localTime = null;
		LocalTime localTime2 = null;
		if(startTimeStr!=null) {
			try {
				SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
				Date date = inputFormat.parse(startTimeStr);

				// Convert to LocalTime
				localTime = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

			} catch (ParseException e) {
				e.printStackTrace();
			}

			
		}
		if(endTimeStr!=null) 
		{
			
			try {
				SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
				Date date = inputFormat.parse(endTimeStr);

				// Convert to LocalTime
				localTime2 = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

			} catch (ParseException e) {
				e.printStackTrace();
			}
		}
		boolean status=true;
		if(userPlayerStatus==null) {
			status=false;
		}
		
		else {
			status=true;
		}
		
		System.out.println("call2");

		UserService us = new UserService();

		
		if(status) {
			System.out.println("msision 1");
			User user1 = new UserBuilder().firstNameBuild(fName).lastNameBuild(lName).emailBuild(userEmail)
					.phoneNumberBuild(phoneNumber).
					passwordBuild(userPass)
					.playerStatusBuild(status)
					.ageBuild(Integer.parseInt(userAge))
					.genderBuild(userGender)
					.knownSportsBuild(Arrays.asList(selectedSports)).
					locationBuild(userLocation)
					.timingAvailFromBuild(localTime).timingAvailToBuild(localTime2).aboutBuilder(" ")
					.imageBuilder("https://example.com/image1.jpg").build();

			try {
				us.addUserPlayer(user1);
					out.append("<h1>success registereds</h1>");
					out.println("success");
					request.setAttribute("Successmessage","Successfully registered" );
					RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/userlogin.jsp");
					dispatcher.forward(request, response);
				

			} catch (DAOException | SQLException | InvalidUserDetailException e) {
				
				e.printStackTrace();
				request.setAttribute("ErrorMessage", e.getMessage());
				RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/usersignup.jsp");
				dispatcher.forward(request, response);
			}
			
		}
		
		else {
			

			User user2 = new UserBuilder().firstNameBuild(fName).lastNameBuild(lName).emailBuild(userEmail)
					.phoneNumberBuild(phoneNumber).
					passwordBuild(userPass)
					.playerStatusBuild(status).imageBuilder("https://example.com/image1.jpg")
					.build();
			try {
			us.addUserOnly(user2);
					out.append("<h1>success registereds</h1>");
					out.println("success");
					request.setAttribute("Successmessage","Successfully registered" );
					RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/userlogin.jsp");
					dispatcher.forward(request, response);
				
			
			} catch (DAOException | SQLException  | InvalidUserDetailException e) {
				
				e.printStackTrace();
				request.setAttribute("ErrorMessage", e.getMessage());	
				RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/usersignup.jsp");
				dispatcher.forward(request, response);
			}
		}
		
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
