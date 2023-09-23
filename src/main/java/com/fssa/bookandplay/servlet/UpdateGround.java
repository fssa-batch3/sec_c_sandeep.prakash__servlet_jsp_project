package com.fssa.bookandplay.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.Ground;
import com.fssa.bookandplay.model.GroundOwner;
import com.fssa.bookandplay.service.GroundService;

/**
 * Servlet implementation class UpdateGround
 */
@WebServlet("/UpdateGround")
public class UpdateGround extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateGround() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		HttpSession session = request.getSession();
		
		GroundService gs=new GroundService();
		try {


		 // Store selected ground details as session attributes
			GroundOwner loggedInowner =  (GroundOwner) session.getAttribute("adminuser");
	        System.out.println("owner detail: " + loggedInowner); 
			int selectedGroundId =loggedInowner.getGroundOwnerId();
			
        if (selectedGroundId != 0) {
        	
            Ground selectedGround = gs.getGroundByOwnerId(selectedGroundId); 
            request.setAttribute("adminGround", selectedGround);
            System.out.println("Selected Ground: " + selectedGround); 
    
  
			}
		
		
		} catch (DAOException e) {
		
			e.printStackTrace();
		} 
		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/groundupdate.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
