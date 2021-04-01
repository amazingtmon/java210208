package web_basic;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns="/hello")
public class HelloWeb extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse res)
				throws ServletException, IOException
	{
		PrintWriter out = res.getWriter();
		out.println("<b>Hello Web Service!!!</b>");
	}
}
