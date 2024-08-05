class Student {
    constructor(marks) {
        this.marks = marks;
      }
    }
    
    const students = [
        new Student(85),
        new Student(50),
        new Student(75),
        new Student(90),
        new Student(45)
    ];


    for(let i=0;i<students.length;i++){
       console.log(students[i])

    }