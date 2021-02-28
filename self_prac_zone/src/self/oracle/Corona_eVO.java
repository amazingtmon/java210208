package self.oracle;

public class Corona_eVO {
	private int    SERIAL_NUM 			= 0;
	private String CONFIRMATION_DAY = null;
	private String LOC 				= null;
	private String INFECTED_LOC 	= null;
	
//Corona_eVO 생성자===============================================================
	public Corona_eVO() {}
	public Corona_eVO(int SERIAL_NUM, String CONFIRMATION_DAY, 
						String LOC, String INFECTED_LOC) {
		
		this.SERIAL_NUM 	  = SERIAL_NUM;
		this.CONFIRMATION_DAY = CONFIRMATION_DAY;
		this.LOC 			  = LOC;
		this.INFECTED_LOC	  = INFECTED_LOC;
	}
	
// get, set part=================================================================
	public int getSERIAL_NUM() {
		return SERIAL_NUM;
	}
	public void setSERIAL_NUM(int sERIAL_NUM) {
		SERIAL_NUM = sERIAL_NUM;
	}
	public String getCONFIRMATION_DAY() {
		return CONFIRMATION_DAY;
	}
	public void setCONFIRMATION_DAY(String cONFIRMATION_DAY) {
		CONFIRMATION_DAY = cONFIRMATION_DAY;
	}
	public String getLOC() {
		return LOC;
	}
	public void setLOC(String lOC) {
		LOC = lOC;
	}
	public String getINFECTED_LOC() {
		return INFECTED_LOC;
	}
	public void setINFECTED_LOC(String iNFECTED_LOC) {
		INFECTED_LOC = iNFECTED_LOC;
	}
}
