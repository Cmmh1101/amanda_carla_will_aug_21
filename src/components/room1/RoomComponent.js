import React, { useState, useEffect } from "react";
import StudentForm from "./FormComponent";
import DisplayStudent from "./DisplayStudent";

function Rooms() {
  const [inputText, setInputText] = useState("");

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem("students"));
    if (students) {
      setStudents(students);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <div className="room_box m-2">
        <h4 className="room_title">
          <i className="fa fa-female room-icon" />
          Girls 1
        </h4>

        <div>
          <StudentForm
            inputText={inputText}
            students={students}
            setStudents={setStudents}
            setInputText={setInputText}
          />
          <DisplayStudent setStudents={setStudents} students={students} />
        </div>
      </div>
    </>
  );
}

export default Rooms;
