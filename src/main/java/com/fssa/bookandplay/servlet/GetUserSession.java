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
 * Servlet implementation class GetUserSession
 */
@WebServlet("/GetUserSession")
public class GetUserSession extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserSession() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		HttpSession session = request.getSession(false); 
		User login = (User)session.getAttribute("userLogin");
		int userid=login.getUserId();
		UserService userService=new UserService();
		
		  try {
			User userdata = userService.getUserId(userid);
			
		    JSONObject userJson = new JSONObject (userdata);
		    if (userJson != null) {
		    	PrintWriter out = response.getWriter();
	    		out.println(userJson.toString());
		        System.out.println("logged in sandeep"+userJson.toString());
		     //   request.getRequestDispatcher("/index.jsp").forward(request, response);
		       // response.sendRedirect("/bookandplay-web/index.jsp");
		        out.flush();
		    }
	
			
		} catch (DAOException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		//System.out.println("son user"+login);


	//	response.sendError(HttpServletResponse.SC_NOT_FOUND);
	//	response.sendRedirect("/index.jsp");
	
		System.out.println("called get user session");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
