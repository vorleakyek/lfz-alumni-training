public class Main {
    private class Car {
        private int numDoors;
        private String color;
        private int speed;

        public void accelerate(int amount) {
            speed = speed + amount;
        }

        public void applyBreak(int amount) {
            speed = speed - amount;
        }

        public void setSpeed(int speed) {
            this.speed = speed;
        }

        public int getSpeed() {
            return speed;
        }

        protected Car(int numDoors, String color) {
            this.numDoors = numDoors;
            this.color = color;
        }

        public String describe() {
            return "number of doors: " + numDoors + "; color: " + color ;
        }
    }

    public class Truck extends Car {
        private int horsepower;

        public Truck(int horsepower) {
            super(4,"gray");
            this.horsepower = horsepower;
        }

        @Override
        public String describe() {
            return "Truck with horsepower: " + horsepower + "; " + super.describe();
        }
    }

    public class Sport extends Car {

        public Sport() {
            super(2,"red");
            super.setSpeed(15);
        }

        @Override
        public String describe() {
            return "Sport car with" + super.describe() + "; current speed: " + super.getSpeed();
        }
    }

    public static void main(String[] args) {
        Main main = new Main();

        Car truck = main.new Truck(8);
        Car sport = main.new Sport();
        System.out.println(truck.describe());
        System.out.println(sport.describe());
    }
}
