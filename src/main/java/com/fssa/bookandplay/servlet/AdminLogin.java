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
import javax.servlet.http.HttpSession;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.exceptions.InvalidGroundOwnerDetailException;
import com.fssa.bookandplay.model.GroundOwner;
import com.fssa.bookandplay.service.GroundOwnerService;

/**
 * Servlet implementation class AdminLogin
 */
@WebServlet("/adminlogin1")
public class AdminLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AdminLogin() {
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

		String email = request.getParameter("email_id");
		String pass = request.getParameter("adminpass");

		GroundOwnerService gws = new GroundOwnerService();
		try {
			GroundOwner user = gws.getgroundOwneremailpass(email, pass);

			if (user != null) {
				HttpSession session = request.getSession();
				session.setAttribute("adminuser", user);

				System.out.println(session.getId());
				response.sendRedirect("/bookandplay-web/admindashboard.jsp");
				System.out.println("sucess");
			} else {
				request.setAttribute("message", "Invalid email or password.");
				request.getRequestDispatcher("groundadminlogin.jsp").forward(request, response);

			}
		} catch (DAOException | SQLException| InvalidGroundOwnerDetailException e) {
			e.printStackTrace();
			request.setAttribute("LoginErrorMessage", e.getMessage());
			RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/groundadminlogin.jsp");
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
