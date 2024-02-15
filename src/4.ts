class Key {
  private signature = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key,) {}
  
  getKey() {
    return key;
  }
}

abstract class House {
  public door: boolean = false;
  public key: Key;
  public tenants: Array<Person> = [];

  public abstract openDoor(key: Key): void;

  comeIn(elem: Person) {
    if (this.door) {
      this.tenants.push(elem);
    }
  }
}

class MyHouse extends House {

  constructor(key: Key) {
    super();
  }

  openDoor(keyInput: Key) {
    if (keyInput === key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};