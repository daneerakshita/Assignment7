// Creating object using literal syntax
const student1 = { 
    name: "Rakshita Danee", 
    className: "D15", 
    rollNo: 11,
    marks: 77,
};


// Creating object using constructor function
class Student {
    constructor(uname, className, rollNo, marks) 
    { 
        this.uname = uname;
        this.className = className; 
        this.rollNo = rollNo;
        this.marks = marks;
    }

}

    const student2 = new Student("Alex", "D15A", 11, 88); 
    console.log("Student 2: ", student2);


// Use of Prototype 
    Student.prototype.college = "VESIT"; 
    console.log("Student 2: ", student2);

    namey=student2.uname
    classnamey=student2.className
    roll=student2.rollNo
    marky=student2.marks

    document.getElementById("printName").innerHTML = namey;
    document.getElementById("printClass").innerHTML =classnamey; 
    document.getElementById("printRoll").innerHTML = roll;
    document.getElementById("printMarks").innerHTML = marky;



// Generating an Exception
function checkError() {
    const value = document.getElementById("checkError").value; 
    console.log(value);

    if (isNaN(value) || value == 0) { 
        throw new Error("Invalid Input");
    }
    else {
        console.log("Valid Input");
    }
}
