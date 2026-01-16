type Student = {
    name: string;
    marks: number;
};

function printStudent(student: Student) {
    console.log(student.name.toUpperCase());
    console.log(student.marks.toFixed(2));
}

printStudent({
    name: "Ravi",
    marks: 85
});
