package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.GroundBooking;
import com.fssa.bookandplay.service.GroundBookingService;

/**
 * Servlet implementation class GetGroundBookingDetailsUser
 */
@WebServlet("/GetGroundBookingDetailsUser")
public class GetGroundBookingDetailsUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetGroundBookingDetailsUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	      String userId = request.getParameter("userId");
		GroundBookingService gbs=new GroundBookingService();

		List<GroundBooking> bookings=null;
		try {
			System.out.println("called booking data");
			bookings=gbs.getBookingDetailsByUserId(Integer.parseInt(userId));
			JSONArray bookingsData = new JSONArray(bookings);
			response.getWriter().write(bookingsData.toString());
			
		} catch (NumberFormatException | DAOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
