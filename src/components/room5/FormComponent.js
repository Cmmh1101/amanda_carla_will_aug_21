import React from "react";
import { Button, Input, Form } from "reactstrap";

const StudentForm = ({ inputText, setInputText, students, setStudents }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    //
  };
  const submitStudentHandler = (e) => {
    // condition to limit 2 max
    if (students.length === 2) {
      alert(
        "there are two students in this room please wait and try in a few minutes"
      );
      e.preventDefault();
      setInputText("");
      console.log("there are two students");
    } else {
      e.preventDefault();
      setStudents([...students, { text: inputText, id: Math.random() * 1000 }]);
      setInputText("");
    }
  };

  return (
    <>
      <Form className="col  d-flex justify-content-center">
        <Input
          value={inputText}
          onChange={inputTextHandler}
          placeholder="Student Name"
        />
        <Button
          className="add_btn"
          onClick={submitStudentHandler}
          type="submit"
        >
          +
        </Button>
      </Form>
    </>
  );
};

export default StudentForm;
