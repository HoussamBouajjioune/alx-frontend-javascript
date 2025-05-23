// task_1/js/main.ts

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// Extend Teacher to create Directors
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example object based on the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);



// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// Interface for the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor of the class
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementation of the class
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());      // Output: Alice
console.log(student.workOnHomework());   // Output: Currently working
