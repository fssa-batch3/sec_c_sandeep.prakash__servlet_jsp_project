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
import com.fssa.bookandplay.model.FriendRequest;
import com.fssa.bookandplay.service.FriendRequestService;

/**
 * Servlet implementation class GetFriendList
 */
@WebServlet("/GetFriendList")
public class GetFriendList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetFriendList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		List<FriendRequest> friendrList=null;
		
	      String receiverId = request.getParameter("receiverId");
	      FriendRequestService frs=new FriendRequestService();
	      try {
	    	  friendrList=frs.getAllFriendList(Integer.parseInt(receiverId));
			JSONArray reListJSonArray = new JSONArray(friendrList);
			response.getWriter().write(reListJSonArray.toString());

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
