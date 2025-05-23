// task_0
// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 21,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "Los Angeles"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create and render the table
const table = document.createElement("table");
table.border = "1";

const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
