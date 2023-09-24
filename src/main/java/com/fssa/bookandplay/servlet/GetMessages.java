package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.ChatByPlayer;
import com.fssa.bookandplay.service.ChatService;

/**
 * Servlet implementation class GetMessages
 */
@WebServlet("/GetMessages")
public class GetMessages extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetMessages() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String senderId = request.getParameter("userId");
		String receiverId = request.getParameter("playerId");
		int user1=Integer.parseInt(senderId);
		int user2=Integer.parseInt(receiverId);
		
		ChatService chatService = new ChatService();
		ChatByPlayer chat=null;
		try {
	chat=chatService.getChatHistory(user1, user2);
			 JSONObject messageDetailJson = new JSONObject(chat);
	            response.getWriter().write(messageDetailJson.toString());
	    		System.out.println("sandeep"+messageDetailJson.toString());
		} catch (DAOException | SQLException e) {
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
