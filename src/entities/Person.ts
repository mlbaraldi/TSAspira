export enum Gender {
    female= "f",
    male = "m"
}

export class Person {
    name: string;
    birth: Date;
    gender: Gender;

    constructor(name: string, birth: Date, gender: Gender) {
        this.name = name;   
        this.birth = birth;
        this.gender = gender;

    }
}

export default Person