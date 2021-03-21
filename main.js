class Vehicle {
    constructor(wheels, engine, color) {
      this.wheels = wheels;
      this.engine = engine;
      this.color = color;
    }
    
    returnProperties() {
      return `wheels: ${wheels}, engine: ${engine}, color: ${color}`;
    }
  
    static returnMaxEngine(object1, object2, object3) {
      if (object1.engine > object2.engine && object1.engine > object3.engine) {
        return object1;
      } else if (object2.engine > object1.engine && object2.engine > object3.engine) {
        return object2;
      }
      return object3;
    }
  }
  
  class Car extends Vehicle {
    constructor(engine ,wheels , color, name) {
      super( engine , wheels, color);
      this.name = name;
    }
  
    get properties() {
      return this.returnPropertiesWithName().toUpperCase();
    }
  
    returnPropertiesWithName() {
      return `name: ${this.name}, ${super.returnProperties}`;
    }
  }
  let car1 = new Car(4, 1600, 'yellow', 'lamborgini');
  let car2 = new Car(8, 1800, 'blue', 'BMW');
  let car3 = new Car(6, 2000, 'black', 'mazarti');
  
  console.log(Vehicle.returnMaxEngine(car1, car2, car3));
  console.log(car1.properties);
  
  
  
  class bikes extends Vehicle {
    constructor(engine , wheels , color, name) {
      super(engine , wheels , color);
      this.name = name;
    }
    returnPropertiesWithName() {
      return `name: ${this.name}, ${super.returnProperties}`;
    }
  }
  
  class ATV extends Vehicle {
    constructor(engine, wheels, color, name) {
      super(engine ,wheels , color);
      this.name = name;
    }
    returnPropertiesWithName() {
      return `name: ${this.name}, ${super.returnProperties}`;
    }
  }
  
  function infoFromUser(){


    VehicleTable.style.border = "solid 2px black"

      
  
    VehicleTable.innerHTML +=  
      `

    <tr>

      <th>${carName.value}</th>
      <th>${engine.value}</th>
      <th>${wheels.value}</th>
      <th>${color.value}</th>
      
    </tr>
   
     `
  }