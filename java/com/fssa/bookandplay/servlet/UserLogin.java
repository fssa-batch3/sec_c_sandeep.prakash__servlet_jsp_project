package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.User;
import com.fssa.bookandplay.service.UserService;

/**
 * Servlet implementation class UserLogin
 */
@WebServlet("/userlogin")
public class UserLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserLogin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
		
	PrintWriter out = response.getWriter();
		

		String email = request.getParameter("uemail_id");
		String pass = request.getParameter("userpass");
		
		UserService userService=new UserService();
		 try {
	            User userdata = userService.getUseremailpass(email, pass);

	            if (userdata != null) {
	                HttpSession session = request.getSession();
	             // JSONObject userJson = new JSONObject(userdata); 
	                session.setAttribute("userLogin", userdata);
	    			System.out.println("Existing Session user ID:" + session.getId());
	              //  request.getRequestDispatcher("/GetUserSession").forward(request, response);
	              response.sendRedirect("/bookandplay-web/index.jsp");
	               // System.out.println("login sucess");
	               // System.out.println(userdata);
	            } else {
	                request.setAttribute("message", "Invalid email or password.");
	                request.getRequestDispatcher("userlogin.jsp").forward(request, response);
	           
	            }
	        } catch (DAOException | SQLException e) {
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
