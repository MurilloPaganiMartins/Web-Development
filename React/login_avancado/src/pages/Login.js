import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../files/EntryCard';
import InputGroup from '../files/InputGroup';
import Input from '../files/Input';
import Button from '../files/Button';


function Login() {
    return (
        <EntryPage>
            <PageHeader to="/"> Logo</PageHeader>
            <EntryCard>
                <h2>Log in</h2>
                <form onSubmit={(e) => e.preventDefault}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Adress</label> 
                        <Input type="text" placeholder="name@mail.com" id="login-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label> 
                        <Input type="password" placeholder="Your password" id="login-password" />
                    </InputGroup>
                    <Button type="submit" full>Log in</Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/signup">Sign up</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}
export default Login;