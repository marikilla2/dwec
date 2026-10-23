const courseData = {
  id: 101,
  title: "Desarrollo Web con JavaScript",
  category: "Programación",
  duration: 60,
  price: 129.99,
  active: true,
  instructor: {
    id: 10,
    name: "Laura García",
    specialty: "Desarrollo Frontend",
  },
  students: [
    {
      id: 1,
      name: "Carlos Ruiz",
      age: 22,
      grade: 8.5,
      completed: true,
    },
    {
      id: 2,
      name: "Ana López",
      age: 19,
      grade: 9.2,
      completed: true,
    },
    {
      id: 3,
      name: "Pedro Martín",
      age: 25,
      grade: 4.3,
      completed: false,
    },
    {
      id: 4,
      name: "Lucía Fernández",
      age: 21,
      grade: 7.8,
      completed: true,
    },
    {
      id: 5,
      name: "David Sánchez",
      age: 23,
      grade: 3.5,
      completed: false,
    },
    {
      id: 6,
      name: "María Torres",
      age: 20,
      grade: 6.7,
      completed: true,
    },
  ],
};

class Course {
  id;
  title;
  category;
  duration;
  price;
  active;
  instructor;
  students;
  constructor(course) {
    this.id = course.id;
    this.title = course.title;
    this.category = course.category;
    this.duration = course.duration;
    this.price = course.price;
    this.active = course.active;
    this.instructor = course.instructor;
    this.students = course.students;
  }

  getInfo() {
    return `Title: ${title} Category: ${category} Duration: ${duration} Price: ${price}`;
  }

  getStudentId(id) {
    let valorEncontrado = course.find((student) => student.id === id);
    console.log(valorEncontrado);
    return valorEncontrado;
  }

  getPassedStudents() {
    let arrayAprobados = course.filter((student) => student.grade > 5);
    return arrayAprobados;
  }

  getCompletedStudents() {
    let arrayCompletados = course.filter(
      (student) => student.completed == true,
    );
    return arrayCompletados;
  }
  getStudentNames() {
    let arrayConMap = course.map((student) => student.name);
    return arrayConMap;
  }
}

let course1 = new Course();
course1.getInfo();
console.log(course1.getStudentId(3));
console.log(course1.getPassedStudents());
console.log(course1.getCompletedStudents());
console.log(course1.getStudentNames());
