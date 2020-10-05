import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { useAuth } from '../../providers/Auth';

const FormSection = styled.section`
  width: 600px;
  padding: 50px 100px;

  -webkit-box-shadow: 20px 20px 20px 20px rgba(128, 216, 247, 0.3);
  -moz-box-shadow: 20px 20px 20px 20px rgba(128, 216, 247, 0.3);
  box-shadow: 0px 0px 50px 5px rgba(128, 216, 247, 0.3);

  text-align: center;
`;

const FormInput = styled(Input)`
  background-color: #ffffff00;
  color: #ffffff;
`;

function LoginPage() {
  const { authenticated, login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Welcome back!');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (authenticated) {
      history.push('/favorites');
    }
  }, [history, authenticated]);

  function authenticate(event) {
    event.preventDefault();
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      login();
      history.push('/');
    } else {
      setMessage('Wrong credentials, try again');
      setShowErrorMessage(true);
    }
  }

  return (
    <FormSection>
      <Heading color={showErrorMessage ? 'tomato' : 'white'}>{message}</Heading>
      <form onSubmit={authenticate} className="login-form">
        <InputGroup margin="20px">
          <FormInput
            required
            type="text"
            id="username"
            placeholder="Username"
            color="white"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <InputRightElement>
            <Icon name="moon" color="gray.300" />
          </InputRightElement>
        </InputGroup>
        <InputGroup margin="20px">
          <FormInput
            required
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            color="white"
            onChange={(event) => setPassword(event.target.value)}
          />
          <InputRightElement>
            <Icon name="lock" color="gray.300" />
          </InputRightElement>
        </InputGroup>
        <Button type="submit" variantColor="teal">
          login
        </Button>
      </form>
    </FormSection>
  );
}

export default LoginPage;
