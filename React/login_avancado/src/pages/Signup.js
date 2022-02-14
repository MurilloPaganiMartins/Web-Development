import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../files/EntryCard';
import InputGroup from '../files/InputGroup';
import Input from '../files/Input';
import Button from '../files/Button';


function Signup() {
  return (
    <EntryPage>
      <PageHeader to="/"> Logo</PageHeader>
      <EntryCard>
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault}>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label> 
            <Input type="text" placeholder="Your name" id="signup-name" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-email">Email Adress</label> 
            <Input type="text" placeholder="name@mail.com" id="signup-email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="signup-password">Password</label> 
            <Input type="password" placeholder="Your password" id="signup-password" />
          </InputGroup>
          <Button type="submit" full>Sign up</Button>
        </form>
        <span>
          Already have an account?
          <Link to="/login">Log in</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}
export default Signup;