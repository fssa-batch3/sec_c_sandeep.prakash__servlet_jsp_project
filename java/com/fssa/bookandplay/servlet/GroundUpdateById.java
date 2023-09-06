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

import com.fssa.bookandplay.builder.GroundBuilder;
import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.Ground;
import com.fssa.bookandplay.service.GroundService;

/**
 * Servlet implementation class GroundUpdateById
 */
@WebServlet("/groundupdatation")
public class GroundUpdateById extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GroundUpdateById() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		PrintWriter out = response.getWriter();
		int data=Integer.parseInt(request.getParameter("groundId"));
		System.out.println(data+"sandeep");
		
		
		String groundName = request.getParameter("groundname1");
		String groundMainArea = request.getParameter("groundlname1");
		String groundAddress = request.getParameter("groundaddress1");
		String groundLocationLink = request.getParameter("grolink1");

		String grimg1 = request.getParameter("groundimg1");
		String grimg2 = request.getParameter("groundimg2");
		String grimg3 = request.getParameter("groundimg3");
		String selecteddistrictValue = request.getParameter("groundselecteddistrict");
		String price = request.getParameter("groundprice");

		String increaseprice = request.getParameter("groundincreaseprice");
		String groundRulesValue = request.getParameter("groundupdateRules");
		String startTimeStr = request.getParameter("groundstartTime1");
		String endTimeStr = request.getParameter("groundendTime1");
		String selectedCourtsValue = request.getParameter("groundselectedCourts");
		String[] selectedSports = request.getParameterValues("sportsAvailable1");
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
		
		if(endTimeStr!=null) {
		try {
			SimpleDateFormat inputFormat = new SimpleDateFormat("hh:mm a");
			Date date = inputFormat.parse(endTimeStr);

			// Convert to LocalTime
			localTime2 = date.toInstant().atZone(ZoneId.systemDefault()).toLocalTime();

		} catch (ParseException e) {
			e.printStackTrace();
		}
		}
		// Convert to LocalTime
		 boolean changesMade = false;

		    if (startTimeStr != null || endTimeStr != null || 
		        !(groundName!= null) || !(groundMainArea!= null)  || 
		        !(groundAddress!= null)  || !(groundLocationLink!= null)  || 
		        !(grimg1!= null)  || !(grimg2!= null)  || !(grimg3!= null) ||
		        !(selecteddistrictValue!= null)  || !(price!= null)  || 
		        !(increaseprice!= null)  || !(groundRulesValue!= null) ||
		        !(selectedCourtsValue!= null)  || selectedSports != null) {
		        changesMade = true;
		    }
		GroundService gs = new GroundService();

		

		System.out.println("doPost method called");

		if (changesMade) {
		try {
			
			List<String> validImages = Arrays.asList(grimg1, grimg2, grimg3);

			Ground ground1 = new GroundBuilder().groundIdBuild(data).groundNameBuild(groundName).groundMainAreaBuild(groundMainArea)
					.groundAddressBuild(groundAddress).groundLocationLinkBuild(groundLocationLink)
					.districtBuild(selecteddistrictValue).groundImagesBuild(validImages)
					.sportsAvailableBuild(Arrays.asList(selectedSports)).startTimeBuild(localTime).endTimeBuild(localTime2)
					.groundRulesBuild(groundRulesValue).priceBuild(Double.parseDouble(price))
					.increasingPriceForExtraHoursBuild(Double.parseDouble(increaseprice))
					.courtsAvailableBuild(Integer.parseInt(selectedCourtsValue)).build();
			if (gs.updateGround(ground1)) {
				out.append("<h1>success update</h1>");
				RequestDispatcher dispatcher = request.getRequestDispatcher("/UpdateGround");
				dispatcher.forward(request, response);
			}

		} catch (DAOException | SQLException e) {
			
			e.printStackTrace();
		}
		}
		else {
	        out.append("<h1>No changes made</h1>");
	    }
		//RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/groundupdate.jsp");
		//dispatcher.forward(request, response);

		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
