package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class AcceptFriendRequest
 */
@WebServlet("/AcceptFriendRequest")
public class AcceptFriendRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AcceptFriendRequest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
		
		   String requestId = request.getParameter("requestId");
		   System.out.println(requestId+"ssnsvada");
		   FriendRequestService frs=new FriendRequestService();
		   try {
			frs.acceptFriendRequest(Integer.parseInt(requestId));
			System.out.println("accept da mama");
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
