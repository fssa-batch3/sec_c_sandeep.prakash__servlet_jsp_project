package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class MutualFriend
 */
@WebServlet("/MutualFriend")
public class MutualFriend extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MutualFriend() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

	        
	        int senderId = Integer.parseInt(request.getParameter("senderId"));
	        int receiverId = Integer.parseInt(request.getParameter("receiverId"));
	        FriendRequestService frs=new FriendRequestService();

	        boolean friendRequestExists = false;
			try {
				friendRequestExists = frs.hasFriendAlready(senderId, receiverId);
			} catch (DAOException | SQLException e) {
				
				e.printStackTrace();
			}
	        
	        JSONObject jsonResponse = new JSONObject();
	        jsonResponse.put("exists", friendRequestExists);

	        response.getWriter().write(jsonResponse.toString());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
