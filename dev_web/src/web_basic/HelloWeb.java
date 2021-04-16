package web_basic;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

@WebServlet(urlPatterns="/hello")
//서블릿이 되기 위해서는 HttpServlet을 상속해야 한다.
public class HelloWeb extends HttpServlet {
	Logger logger = Logger.getLogger(HelloWeb.class);
	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse res)
				//예외처리를 미룬다.
				throws ServletException, IOException
	{
		PrintWriter out = res.getWriter();
		String mem_id = req.getParameter("mem_id");
		String mem_pw = req.getParameter("mem_pw");
		System.out.println("사용자가 입력한 id: "+mem_id);
		System.out.println("사용자가 입력한 pw: "+mem_pw);
		out.println("<b>Hello Web Service!!!</b>");
	}
}
