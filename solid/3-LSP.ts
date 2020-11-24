/**
 * @LISKOV_SUBSTITUTION_PRINCIPLE Objects should be replaceable with instance of their subclass without altering the behavior
 *
 */

class Bird {
}

class FlyingBird {
    fly() {
        console.log("Flying...")
    }
}

class Eagle extends FlyingBird {
    dive() {
        console.log('Diving...');
    }
}

// Eagle can be substitute with super class FlyingBird without changing behavior
const eagle = new Eagle();
eagle.fly();

// Penguin can be substitute with super class Bird without changing behavior
class Penguin extends Bird {
}

const penguin = new Bird();
