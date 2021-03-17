package design.duck;

public class DuckSimulation {

	public static void main(String[] args) {
		Duck myDuck = new WoodDuck();
		myDuck.display();
		myDuck.performFly();
		//myDuck.performQuack();
		
		Duck yourDuck = new RubberDuck();
		yourDuck.display();
		yourDuck.performFly();
		//yourDuck.performQuack();
		
		Duck ourDuck = new MalladDuck();
		ourDuck.display();
		ourDuck.performFly();
		//ourDuck.performQuack();
	}

}
