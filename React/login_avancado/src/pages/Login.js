import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from "./style";
import EntryCard from "../files/EntryCard";
import InputGroup from "../files/InputGroup";
import Input from "../files/Input";
import Button from "../files/Button";
import EmailValidator from "../files/EmailValidator";

const emailValidator = new EmailValidator();

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
        };
    }

    /* email: {
          hasError: false,
          msg: "email inválido",
      },
      [this.error.email.hasError, this.error.email.msg] = useState("");
      */

    validateFieldEmail(event) {
        const errorNow = {};
        if (!emailValidator.isValid(event.target.value)) {
            errorNow["email"] = "Email inválido";
            this.setState({ errors: errorNow });
        } else {
            errorNow["email"] = "";
            this.setState({ errors: errorNow });
        }
    }

    render() {
        return (
            <EntryPage>
                <PageHeader to="/"> Logo</PageHeader>
                <EntryCard>
                    <h2>Log in</h2>
                    <form onSubmit={(e) => e.preventDefault}>
                        <InputGroup>
                            <label htmlFor="login-email">Email Adress</label>
                            <Input
                                type="text"
                                placeholder="name@mail.com"
                                id="login-email"
                                onChange={this.validateFieldEmail}
                            />
                        </InputGroup>
                        {this.state.errors["email"] && (
                            <label>{this.state.errors["email"]}</label>
                        )}
                        <InputGroup>
                            <label htmlFor="login-password">Password</label>
                            <Input
                                type="password"
                                placeholder="Your password"
                                id="login-password"
                            />
                        </InputGroup>
                        <Button type="submit" full>
                            Log in
                        </Button>
                    </form>
                    <span>
                        Don't have an account?
                        <Link to="/signup">Sign up</Link>
                    </span>
                </EntryCard>
            </EntryPage>
        );
    }
}
export default Login;
