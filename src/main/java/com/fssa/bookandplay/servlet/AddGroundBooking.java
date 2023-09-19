package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.builder.GroundBookingBuilder;
import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.GroundBooking;
import com.fssa.bookandplay.service.GroundBookingService;

/**
 * Servlet implementation class AddGroundBooking
 */
@WebServlet("/AddGroundBooking")
public class AddGroundBooking extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddGroundBooking() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());

		PrintWriter out = response.getWriter();
		String bookDate = request.getParameter("bookDate");
		String selectSports = request.getParameter("selectSports");
		String selectDuration = request.getParameter("selectDuration");
		String selectplayers = request.getParameter("selectplayers");
		String selectedCourts = request.getParameter("selectedCourts");
		String groundPrice = request.getParameter("groundPrice");
		String payment = request.getParameter("payment");
		String created_at = request.getParameter("created_at");
		String groundId = request.getParameter("groundId");
		String groundOwnerId = request.getParameter("groundOwnerId");
		String userId = request.getParameter("userId");
		String paymentDate = request.getParameter("paymentDate");
		String[] selectedTimings = request.getParameterValues("selectedTimings");
		System.out.println(Arrays.toString(selectedTimings) + "datas");
		System.out.println(selectDuration+"durrrrrrrrrrrrrrrrrrrrrrrr mama");
		System.out.println(payment+"payment");
		System.out.println(bookDate);
		System.out.println(paymentDate);
		System.out.println(userId);
		GroundBookingService gbs=new GroundBookingService();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		// Parse the date string to a LocalDate object
		LocalDate bookingLocalDate = LocalDate.parse(bookDate, formatter);
		// Parse the date string to a LocalDate object
		LocalDate paymentLocalDate = LocalDate.parse(paymentDate, formatter);
		List<String> selectedTimingsarr = Arrays.asList(selectedTimings);
		
		GroundBooking groundbooking=new GroundBookingBuilder().bookingDateBuild(bookingLocalDate).bookingSportsBuild(selectSports)
				.bookingDurationBuild(selectDuration).selectedPlayersBuild(Integer.parseInt(selectplayers)).selectedCourtsBuild(selectedCourts)
				.groundPriceBuild(Double.parseDouble(groundPrice)).paymentMethodBuild(payment)
				.bookedAtBuild(Long.parseLong(created_at)).groundIdBuild(Integer.parseInt(groundId))
				.sellerIdBuild(Integer.parseInt(groundOwnerId)).paymentAmountBuild(Double.parseDouble(groundPrice))
				.requestUserIdBuild(Integer.parseInt(userId)).paymentDateBuild(paymentLocalDate)
				.bookingTimeBuild(Arrays.asList(selectedTimings)).build();

		
		int groId=Integer.parseInt(groundId);
		boolean isBookingExists = false;
		 try {
			 isBookingExists = gbs.checkBookingExists(bookingLocalDate, selectedTimingsarr, selectedCourts, groId);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (DAOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		 if(isBookingExists) {
			 System.out.println("no chance");
		 }
		 else {
		try {
			gbs.addGroundBooking(groundbooking);
			System.out.println("success booking daaa uuuuuuuuuu");
		} catch (DAOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
