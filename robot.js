// create the Robot constructor with name and task as properties
function Robot(name, task) {
  this.name = name;
  this.task = task;
}

// A prototype method that tell the user what the robot does
Robot.prototype.duty = function () {
  console.log(`${this.name} is a nice robot. It will do all ${this.task} tasks for you`)
}

// A prototype method that tells when the robot is started
Robot.prototype.start = function () {
  console.log(`${this.name} is started.`)
}

// A prototype method that tells when the robot is running
Robot.prototype.work = function () {
  console.log(`${this.name} is ${this.task}.`)
}

// A prototype method that tells when the robot has stopped running
Robot.prototype.stop = function () {
  console.log(`${this.name} has finshed ${this.task} and is stopped.`)
}


// create UtilityRobot constructor
function UtilityRobot(name, task) {
  // allow UtilityRobot use properties from the Robot constructor
  Robot.call(this, name, task)
}

// set UtilityRobot to inherits Robot prototype methods
UtilityRobot.prototype = Object.create(Robot.prototype);
UtilityRobot.prototype.constructor = UtilityRobot

// add a prototype method to UtilityRobot
UtilityRobot.prototype.getDocs = function () {
  console.log(`${this.name} is collecting documents from desks`)
}

// overide the work method earlier defined in the Robot constructor. 
UtilityRobot.prototype.work = function () {
  console.log(`${this.name} is typing`)
}

// instantiate a robot object from Robot
robot = new Robot('Robo', 'cleaning');
// instantiate a typingbot object from UtilityRobot
typingbot = new UtilityRobot('TypingBOT', 'typing')

// call own prototype methods
robot.duty();
robot.start();
robot.work();
robot.stop();

// call own and inherited methods
typingbot.duty();
typingbot.start();
typingbot.getDocs();
typingbot.work();
typingbot.stop();
