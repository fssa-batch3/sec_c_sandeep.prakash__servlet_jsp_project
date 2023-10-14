package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.ChatByPlayer;
import com.fssa.bookandplay.model.Message;
import com.fssa.bookandplay.service.ChatService;

/**
 * Servlet implementation class AddChat
 */
@WebServlet("/AddChat")
public class AddChat extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddChat() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String senderId = request.getParameter("senderId");
		String receiverId = request.getParameter("receiverId");
		String text = request.getParameter("message");
		String sent_at = request.getParameter("timeStamp");

		ChatService chatService = new ChatService();
		ChatByPlayer chat = new ChatByPlayer();
		chat.setSenderId(Integer.parseInt(senderId)); // Replace with the sender's ID
		chat.setReceiverId(Integer.parseInt(receiverId)); // Replace with the receiver's ID

		List<Message> messages = new ArrayList<>();
		Message message1 = new Message();
		message1.setText(text);
		message1.setSender("Sender");
		message1.setTimestamp(System.currentTimeMillis());

		messages.add(message1);

		chat.setSentMessages(messages);
		
		try {
			chatService.addChat(chat);
			 response.getWriter().write("success");
			System.out.println("message sent success");
		} catch (DAOException | SQLException e) {
			
			e.printStackTrace();
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
