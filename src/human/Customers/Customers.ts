import { Gender, Person } from "../Person";
export class Customer extends Person {
  constructor(name: string, age: number, gender: Gender) {
    super(name, age, gender);

  }
}