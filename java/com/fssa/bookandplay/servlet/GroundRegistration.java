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
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.bookandplay.builder.GroundBuilder;
import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.Ground;
import com.fssa.bookandplay.model.GroundOwner;
import com.fssa.bookandplay.service.GroundService;

/**
 * Servlet implementation class GroundRegistration
 */
@WebServlet("/groundregistration1")
public class GroundRegistration extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GroundRegistration() {
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
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		HttpSession session = request.getSession();
		GroundOwner loggedInowner =  (GroundOwner) session.getAttribute("adminuser");
		String groundName = request.getParameter("groname1");
		String groundMainArea = request.getParameter("grolname1");
		String groundAddress = request.getParameter("groaddress1");
		String groundLocationLink = request.getParameter("grolink1");

		String grimg1 = request.getParameter("groimg1");
		String grimg2 = request.getParameter("groimg2");
		String grimg3 = request.getParameter("groimg3");
		String selecteddistrictValue = request.getParameter("selecteddistrict");
		String price = request.getParameter("price");

		String increaseprice = request.getParameter("increaseprice");
		String groundRulesValue = request.getParameter("groundRules");
		String startTimeStr = request.getParameter("startTime1");
		String endTimeStr = request.getParameter("endTime1");
		String selectedCourtsValue = request.getParameter("selectedCourts");
		String[] selectedSports = request.getParameterValues("sportsAvailable");
		LocalTime localTime = null;
		LocalTime localTime2 = null;
		try {
			SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
			Date date = inputFormat.parse(startTimeStr);

			// Convert to LocalTime
			localTime = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

		} catch (ParseException e) {
			e.printStackTrace();
		}

		try {
			SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
			Date date = inputFormat.parse(endTimeStr);

			// Convert to LocalTime
			localTime2 = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

		} catch (ParseException e) {
			e.printStackTrace();
		}

		// Convert to LocalTime

		GroundService gs = new GroundService();

		List<String> validImages = Arrays.asList(grimg1, grimg2, grimg3);

		Ground ground1 = new GroundBuilder().groundNameBuild(groundName).groundMainAreaBuild(groundMainArea)
				.groundAddressBuild(groundAddress).groundLocationLinkBuild(groundLocationLink)
				.districtBuild(selecteddistrictValue).groundImagesBuild(validImages)
				.sportsAvailableBuild(Arrays.asList(selectedSports)).startTimeBuild(localTime).endTimeBuild(localTime2)
				.groundRulesBuild(groundRulesValue).priceBuild(Double.parseDouble(price))
				.increasingPriceForExtraHoursBuild(Double.parseDouble(increaseprice))
				.groundOwnerIdBuild(loggedInowner.getGroundOwnerId())
				.courtsAvailableBuild(Integer.parseInt(selectedCourtsValue)).build();

		System.out.println("doPost method called");
		System.out.println(loggedInowner.getGroundOwnerId());

		try {
			if (gs.addGround(ground1)) {
				out.append("<h1>success</h1>");
			}

		} catch (DAOException | SQLException e) {
			
			e.printStackTrace();
		}
		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/groundupdateview.jsp");
		dispatcher.forward(request, response);

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
