package pojo.board.step1;

public class ActionForward {
	private String path 		= null; //페이지 이름 담기
	/*
	 * 
	 * */
	private boolean isRedirect  = false; // true:sendRedirect("XXX.jsp"), flase:view.forward(req,res);
	
	public String getPath() {
		return path;
	}
	
	public void setPath(String path) {
		this.path = path;
	}
	
	public boolean isRedirect() {
		return isRedirect;
	}
	
	public void setRedirect(boolean isRedirect) {
		this.isRedirect = isRedirect;
	}
}
