import React from "react";
import Student from "../StudentComponent";

const DisplayStudent2 = ({ students, setStudents }) => {
  return (
    <div className="student-display">
      {students.map((student) => (
        <Student
          setStudents={setStudents}
          students={students}
          student={student}
          key={student.id}
          text={student.text}
        />
      ))}
    </div>
  );
};

export default DisplayStudent2;
