package constructor.step4;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class JComboBoxTest1 extends JFrame implements ItemListener{
	//선언부
	JPanel jp_north = new JPanel();
	
	String		totals[]		= {"전체"};
	String		top				= null;
	String		mid				= null;
	String		bottom			= null;
	
	String    	top_item[] 		= {"전체","가전","컴퓨터","모바일"};
	String 		mid_item0[] 	= {"전체","주방가전","생활가전","계절가전"};
	String 		mid_item1[] 	= {"전체","노트북","브랜드PC","모니터"};
	String 		mid_item2[] 	= {"전체","태블릿","휴대폰","스마트워치"};
	String 		bottom_item0[] 	= {"전체","냉장고","전기밥솥","에어프라이어"};
	String 		bottom_item1[] 	= {"전체","세탁기","옷건조기","청소기"};
	String 		bottom_item2[] 	= {"전체","온수매트","선풍기","에어컨"};
	
	JComboBox<String> jcb_top = new JComboBox<String>(top_item);
	JComboBox<String> jcb_mid = new JComboBox<String>(totals);
	JComboBox<String> jcb_bottom = new JComboBox<String>(totals);
	
	//생성자
	public JComboBoxTest1() {
		initDisplay();
	}
	
	//화면 처리
	public void initDisplay() {
		
		jcb_top.addItemListener(this);
		jcb_mid.addItemListener(this);
		jcb_bottom.addItemListener(this);
		
		jp_north.setBackground(Color.YELLOW);
		jp_north.add(jcb_top);
		jp_north.add(jcb_mid);
		jp_north.add(jcb_bottom);
		
		this.add("North", jp_north);
		this.setTitle("대중소분류 실습 2021");
		this.setSize(400, 400);
		this.setVisible(true);
	}
	
	public static void main(String[] args) {
		new JComboBoxTest1();
	}
	
	@Override
	public void itemStateChanged(ItemEvent ie) {//콜백 메소드 - 시스템레벨에서 이벤트가 감지됐을때 호출됨.
		Object obj = ie.getSource();
		if(obj == jcb_top) {
			if(ie.getStateChange() == ItemEvent.SELECTED) {
				top = top_item[jcb_top.getSelectedIndex()];//[0]: 가전, [1]: 컴퓨터, [2]: 모바일.
				jcb_mid.removeAllItems();//기존 totals에 있던 아이템을 삭제 후 새로운 아이템으로 변경.
				if("가전".equals(top)) {
					for(int i=0; i<mid_item0.length; i++) {
						jcb_mid.addItem(mid_item0[i]);
					}
				} else if("컴퓨터".equals(top)) {
					for(int i=0; i<mid_item0.length; i++) {
						jcb_mid.addItem(mid_item1[i]);
					}
				} else if("모바일".equals(top)) {
					for(int i=0; i<mid_item0.length; i++) {
						jcb_mid.addItem(mid_item2[i]);
					}
				}
			}
		}
		
		else if(obj == jcb_mid) {
			if(ie.getStateChange() == ItemEvent.SELECTED) {
				mid = mid_item0[jcb_mid.getSelectedIndex()];
				jcb_bottom.removeAllItems();
				if("주방가전".equals(mid)) {
					for(int i=0;i<bottom_item0.length;i++) {
						jcb_bottom.addItem(bottom_item0[i]);
					}
				}
			}
		}
		
	}

}
