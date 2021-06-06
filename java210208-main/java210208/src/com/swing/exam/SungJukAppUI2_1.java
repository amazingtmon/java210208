package com.swing.exam;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.DefaultCellEditor;
import javax.swing.DefaultListSelectionModel;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableCellRenderer;
import javax.swing.table.DefaultTableColumnModel;
import javax.swing.table.DefaultTableModel;
import javax.swing.table.TableColumn;

public class SungJukAppUI2_1 extends JFrame implements ActionListener {
	//선언부
	JLabel jlb_inwon = 
			new JLabel
					("성적처리인원수:",JLabel.RIGHT);
	JLabel jlb_num = new JLabel("명",JLabel.LEFT);
	JTextField jtf_inwon = new JTextField();
	JButton jbtn_create = new JButton("만들기");
	JButton jbtn_account = new JButton("연산");
	JButton jbtn_exit = new JButton("나가기");
	JPanel jp1 = new JPanel();
	JPanel jp2 = new JPanel();
	JPanel jp3 = new JPanel();
	DefaultTableModel dtm = null;
	DefaultTableColumnModel dtcm = null;
	DefaultListSelectionModel dlsm = null;
	JTable jt = null;
	JScrollPane jsp = null;
	TableColumn tc = null;
	TableColumn tc1 = null;
	TableColumn tc2 = null;
	TableColumn tc3 = null;
	TableColumn tc4 = null;
	TableColumn tc5 = null;
	TableColumn tc6 = null;
	DefaultTableCellRenderer dtcr = null;
	DefaultTableCellRenderer dtcr1 = null;
	DefaultTableCellRenderer dtcr2 = null;
	DefaultTableCellRenderer dtcr3 = null;
	DefaultTableCellRenderer dtcr4 = null;
	DefaultTableCellRenderer dtcr5 = null;
	DefaultTableCellRenderer dtcr6 = null;
	JTextField jtf = null;
	JTextField jtf1 = null;
	JTextField jtf2 = null;
	JTextField jtf3 = null;
	JTextField jtf4 = null;
	JTextField jtf5 = null;
	JTextField jtf6 = null;
	
	//학생 수를 입력 받을 변수 선언
	int num = 0;
	
	//화면처리부
	public void initDisplay(){
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		jtf_inwon.addActionListener(this);
		jbtn_account.addActionListener(this);
		jbtn_create.addActionListener(this);
		jbtn_exit.addActionListener(this);
		
		jp1.setLayout(new BorderLayout());
		jp2.setLayout(new BorderLayout());
		jp3.setLayout(new FlowLayout(FlowLayout.RIGHT));
		
		jp1.add("West",jlb_inwon);
		jp1.add("Center",jtf_inwon);
		jp2.add("West",jlb_num);
		jp2.add("Center",jbtn_create);
		jp1.add("East",jp2);
		
		jp3.add(jbtn_account);
		jp3.add(jbtn_exit);
		
		this.add("North",jp1);
		this.add("South",jp3);
		setTitle("성적처리");
		setSize(400,250);
		setVisible(true);
	}
	
	//메인메소드
	public static void main(String[] args) {
		JFrame.setDefaultLookAndFeelDecorated(true);
		SungJukAppUI2_1 sja = new SungJukAppUI2_1();
		sja.initDisplay();
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		if(e.getSource()==jtf_inwon 
		|| e.getSource()==jbtn_create){
			num = Integer.parseInt
					(jtf_inwon.getText().trim());
			System.out.println("num : "+num);
			dtm = new DefaultTableModel(num,8);
			dtcm = new DefaultTableColumnModel();
			dlsm = new DefaultListSelectionModel();
			jt = new JTable(dtm,dtcm,dlsm);
			jsp = new JScrollPane(jt);
			//이름
			dtcr = new DefaultTableCellRenderer();
			jtf = new JTextField();
			DefaultCellEditor dce = new DefaultCellEditor(jtf);
			tc = new TableColumn(1,120,dtcr,dce);
			tc.setHeaderValue("이름");
			dtcm.addColumn(tc);
			//국어
			dtcr1 = new DefaultTableCellRenderer();
			jtf1 = new JTextField();
			DefaultCellEditor dce1 = new DefaultCellEditor(jtf);
			tc1 = new TableColumn(2,75,dtcr1,dce1);
			tc1.setHeaderValue("국어");
			dtcm.addColumn(tc1);
			//영어
			dtcr2 = new DefaultTableCellRenderer();
			jtf2 = new JTextField();
			DefaultCellEditor dce2 = new DefaultCellEditor(jtf);
			tc2 = new TableColumn(3,75,dtcr2,dce2);
			tc2.setHeaderValue("영어");
			dtcm.addColumn(tc2);
			//수학
			dtcr3 = new DefaultTableCellRenderer();
			jtf3 = new JTextField();
			DefaultCellEditor dce3 = new DefaultCellEditor(jtf);
			tc3 = new TableColumn(4,75,dtcr3,dce3);
			tc3.setHeaderValue("수학");
			dtcm.addColumn(tc3);
			//총점
			dtcr4 = new DefaultTableCellRenderer();
			jtf4 = new JTextField();
			DefaultCellEditor dce4 = new DefaultCellEditor(jtf);
			tc4 = new TableColumn(5,75,dtcr4,dce4);
			tc4.setHeaderValue("총점");
			dtcm.addColumn(tc4);
			//평균
			dtcr5 = new DefaultTableCellRenderer();
			jtf5 = new JTextField();
			DefaultCellEditor dce5 = new DefaultCellEditor(jtf);
			tc5 = new TableColumn(6,100,dtcr5,dce5);
			tc5.setHeaderValue("평균");
			dtcm.addColumn(tc5);
			//석차
			dtcr6 = new DefaultTableCellRenderer();
			jtf6 = new JTextField();
			DefaultCellEditor dce6 = new DefaultCellEditor(jtf);
			tc6 = new TableColumn(7,50,dtcr6,dce6);
			tc6.setHeaderValue("석차");
			dtcm.addColumn(tc6);
			
			String[][] data = {
					 {"이순신","90","50","70"}
					,{"강감찬","80","70","85"}
					,{"이성계","85","85","95"}
			};
			int a = 0;
			int b = 0;
			for(int i=0;i<data.length;i++){
				for(int j=0;j<data[i].length;j++){
					a = i;
					b = j+1;
					dtm.setValueAt(data[i][j], a, b);
				}
			}
			
			this.add("Center",jsp);
			this.validate();
			this.pack();
		}////////////// end of if ////////////
		else if(e.getSource()==jbtn_account){
			//총점과 석차
			int[][] extra = new int[num][2];//총점과 석차가 들어갈 공간
			for(int i=0;i<num;i++){
				int tot = Integer.parseInt((String)dtm.getValueAt(i, 2)) 
				         + Integer.parseInt((String)dtm.getValueAt(i, 3))
				         + Integer.parseInt((String)dtm.getValueAt(i, 4));
				float avg = tot / 3.0f;
				char ch = 0 ;//학점
				dtm.setValueAt(String.valueOf(tot), i, 5);//총점
				dtm.setValueAt(String.valueOf(avg), i, 6);//평균
				dtm.setValueAt(ch + "", i, 7);//석차
				extra[i][0] = tot;
				extra[i][1] = 1;//석차를 1로 설정
			}
			//석차를 매겨줌
			for(int i=0;i<num; i++){
				for(int j=0;j<num;j++){
					if(extra[i][0] < extra[j][0]){
						extra[i][1]++;
					}
				}
			}
			for(int i=0;i<num;i++){
				dtm.setValueAt(String.valueOf(extra[i][1]), i, 7);
			}
			
		}////////////// end of 처리 버튼 구현
		else if (e.getSource()==jbtn_exit) {
			System.out.println("jbtn_exit");
			System.exit(0);
		}
	}////////////////// end of actionPerformed

}