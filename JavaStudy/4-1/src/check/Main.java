package check;

import constants.Constants;

public class Main {
	
	private String firstName = "島崎";
	private String lastName = "稜太";
	
	private void printName(String firstName,String lastName) {
		System.out.println(this.firstName + this.lastName);
	}
	
	public static void main(String[] args) {
		Main main = new Main();
		main.printName(main.firstName,main.lastName);	
		
		Pet pet = new Pet(Constants.CHECK_CLASS_JAVA,Constants.CHECK_CLASS_HOGE);
		pet.introduce();
		RobotPet roboPet = new RobotPet(Constants.CHECK_CLASS_R2D2,Constants.CHECK_CLASS_LUKE);
		roboPet.introduce();
	}
	
}
