import React from "react";
import { Button } from "reactstrap";
import Timer from "./TimerComponent";
import { FadeTransform } from "react-animation-components";

const Student = ({ text, student, students, setStudents }) => {
  // event listeners
  const removeHandler = () => {
    setStudents(students.filter((el) => el.id !== student.id));
  };

  return (
    <FadeTransform
      in
      transformProps={{
        enterTransform: "translateX(0px)",
        exitTransform: "translateX(-100px)",
      }}
      duration={500}
    >
      <div className="student_in_room">
        <p> {text} </p>
        <Timer />
        <Button className="remove-btn" onClick={removeHandler}>
          X
        </Button>
      </div>
    </FadeTransform>
  );
};

export default Student;
