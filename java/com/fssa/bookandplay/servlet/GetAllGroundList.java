package com.fssa.bookandplay.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.fssa.bookandplay.exceptions.DAOException;
import com.fssa.bookandplay.model.Ground;
import com.fssa.bookandplay.service.GroundService;

/**
 * Servlet implementation class GetAllGroundList
 */
@WebServlet("/GetAllGroundList")
public class GetAllGroundList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetAllGroundList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		GroundService gs=new GroundService();
		List<Ground>  groundList = null;
		try {
	 groundList=	gs.getGroundDetails();
		request.setAttribute("GroundDetails", groundList);

		} catch (DAOException e) {
		
			e.printStackTrace();
		} 

		RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher("/ground.jsp");
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
