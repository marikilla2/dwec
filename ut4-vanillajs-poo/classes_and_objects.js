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

  //Importante poner this para referirse a la propia instancia de la clase

  getInfo() {
    return `Title: ${this.title} Category: ${this.category} Duration: ${this.duration} Price: ${this.price}`;
  }

  //El find solo entiende el verdadero o falso, si encuentra el estudiante con ese id lo devuelve
  //Devuelve un solo valor

  getStudentId(id) {
    let valorEncontrado = this.students.find((student) => student.id === id);
    return valorEncontrado;
  }

  //El filter devuelve un array con la condición dada

  getPassedStudents() {
    let arrayAprobados = this.students.filter((student) => student.grade > 5);
    return arrayAprobados;
  }

  getCompletedStudents() {
    let arrayCompletados = this.students.filter(
      (student) => student.completed == true,
    );
    return arrayCompletados;
  }

  getStudentNames() {
    let arrayConMap = this.students.map((student) => student.name);
    return arrayConMap;
  }

  //El summary devuelve un array con el nombre, la nota y si está completado.

  getStudentSummary() {
    return this.students.map((student) => ({
      name: student.name,
      grade: student.grade,
      completed: student.completed,
    }));
  }

  getStudentsAboveGrade(minGrade) {
    return this.students.filter((student) => student.grade > minGrade);
  }

  getAverageGrade() {
    if (this.students.length === 0) return 0;

    //El 0 solo se usa una vez y el acumulador adquiere la nota del estudiante en la segunda vuelta,
    //y así sucesivamente con todos los estudiantes
    const sumGrade = this.students.reduce(
      (acumulador, student) => acumulador + student.grade,
      0,
    );
    return sumGrade / this.students.length;
  }

  removeStudent(id) {
    this.students = this.students.filter((student) => student.id !== id);
    return this.students;
  }
}

let course1 = new Course(courseData);
course1.getInfo();
console.log(course1.getStudentId(3));
console.log(course1.getPassedStudents());
console.log(course1.getCompletedStudents());
console.log(course1.getStudentNames());
console.log(course1.getStudentSummary());
console.log(course1.getStudentsAboveGrade(6));
console.log(course1.getAverageGrade());
console.log(course1.removeStudent(1));

//Javascript solo puede tener 1 constructor y se añaden parámetros con los setters
