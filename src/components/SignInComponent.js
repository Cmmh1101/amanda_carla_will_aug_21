import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(e) {
    console.log();
    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="main_bg">
          <div className="container">
            <div className="row ml-0">
              <div className="col-12 col-md-6 mx-auto">
                <h1 className="text-center">Sign In</h1>
                <Form>
                  <FormGroup>
                    <Label for="userName">User Name</Label>
                    <Input
                      type="text"
                      name="userName"
                      id="userName"
                      placeholder="User Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    value="submit"
                    className="btn-block buttons"
                    onSubmit={() => this.handleLogin()}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
