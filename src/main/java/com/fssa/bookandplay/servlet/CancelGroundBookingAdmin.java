package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.service.GroundBookingService;

/**
 * Servlet implementation class CancelGroundBookingAdmin
 */
@WebServlet("/CancelGroundBookingAdmin")
public class CancelGroundBookingAdmin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CancelGroundBookingAdmin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());

		   String bookingId = request.getParameter("bookingId");
		   
			GroundBookingService gbs=new GroundBookingService();
			try {
				gbs.cancelBookingByAdmin(Integer.parseInt(bookingId));
				
				System.out.println("Booking cancelled by admin");
			} catch (NumberFormatException | DAOException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
