package di.step1;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
/*

//웹에서 찍어보기
public class MapController extends AbstractController {
   
   private Map<String, String> mapBean = null;
   //MyBatis의 경우, java가 아닌 자바 코드는 jar의 형태로 주입되므로
   //constructor주입법으로 처리한다.
   //DB connection pool도 자바 표준에서 제공하는 것은 아니기 때문에
   //생성자 객체 주입법(xml에서 처리하는 것)으로 처리해야 할 것이다.
   //setter 객체 주입법 -> java에 따라 
   
   public void setmapBean(Map<String, String> mapBean) {
      this.mapBean = mapBean;
   }
      
   public ModelAndView hanleRequestInternal(HttpServletRequest req
                                 , HttpServletResponse res) 
   {
      System.out.println(mapBean.get("prop1"));
      ModelAndView mav = new ModelAndView();
      return mav;
   }
}
*/