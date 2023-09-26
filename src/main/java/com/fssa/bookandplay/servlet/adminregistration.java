package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.exceptions.InvalidGroundOwnerDetailException;
import com.fssa.bookandplay.model.GroundOwner;
import com.fssa.bookandplay.service.GroundOwnerService;

/**
 * Servlet implementation class adminregistration
 */
@WebServlet("/adminregistration1")
public class adminregistration extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public adminregistration() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out = response.getWriter();
		String name = request.getParameter("adminname");
		String organisationName = request.getParameter("orgname");
		String email = request.getParameter("email-id");

		long phoneNumber = Long.parseLong(request.getParameter("mobile-number"));
		String password = request.getParameter("adminpassword");

		GroundOwnerService gws = new GroundOwnerService();

		GroundOwner user1 = new GroundOwner(name, organisationName, email, phoneNumber, password,
				"https://example.com/image1.jpg");
		try {
			if (gws.addgroundOwner(user1)) {
				out.append("<h1>success</h1>");
				request.setAttribute("Successmessage", "Successfully registered");
				RequestDispatcher dispatcher = request.getServletContext()
						.getRequestDispatcher("/groundadminlogin.jsp");
				dispatcher.forward(request, response);

			}

		} catch (DAOException | SQLException | InvalidGroundOwnerDetailException e) {

			e.printStackTrace();
			request.setAttribute("ErrorMessage", e.getMessage());
			RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/groundadminregister.jsp");
			dispatcher.forward(request, response);
		}

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
