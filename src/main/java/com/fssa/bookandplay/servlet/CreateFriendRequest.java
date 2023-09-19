package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.FriendRequest;
import com.fssa.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class CreateFriendRequest
 */
@WebServlet("/CreateFriendRequest")
public class CreateFriendRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateFriendRequest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
		String senderId = request.getParameter("senderId");
		String receiverId = request.getParameter("receiverId");
		String status = request.getParameter("status");
		System.out.println(senderId);
		System.out.println(receiverId);
		System.out.println(status);
		FriendRequestService frs=new FriendRequestService();
		FriendRequest frsdata=new FriendRequest(Integer.parseInt(senderId),Integer.parseInt(receiverId),status);
		try {
			frs.createFriendRequest(frsdata);
			System.out.println("friendaccep");
		} catch (DAOException | SQLException e) {
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
