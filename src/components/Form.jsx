import React from 'react';
import styled from 'styled-components';

import TextInput from './TextInput';
import DaButton from './Button';

const DaForm = styled.div`
  background-color: ${(props) => props.theme.transparent};
  font-size: 16px;
  height: 95vh;
  padding-top: 5vh;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
`
const DaBox = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  border-radius: 32px;
  padding: 20px 24px;
  height: 500px;
  box-shadow: 0px 0px 10px 4px ${(props) => props.theme.boxShadow};
  transition: all 0.2s ease;
  max-width: 500px;
`
const DaH3 = styled.h3`
  color: ${(props) => props.theme.title};

`
const DaP = styled.p`
  color: ${(props) => props.theme.text};

  &:nth-child(1) {
    color: ${(props) => props.theme.primary};
    margin-bottom : 40px;
    cursor: pointer;
    font-weight: 500;
  }
`
const DaSpan = styled.span`
  color: ${(props) => props.theme.primary};
  cursor: pointer;

`
function Login() {
  return (
    <div>
      <DaForm>
        <DaBox>

          <div>
            <div>
              <DaH3>Login</DaH3>
              <TextInput />
            </div>

            <div>
              <DaP>Forgot password?</DaP>
              <DaP>By continuing, you  agree to our<DaSpan> Terms of Services</DaSpan> and<DaSpan> Privacy Policy.</ DaSpan></DaP>
              <br />
              <br />
              <DaButton>Login</DaButton>
              <br />
              <br />
              <DaButton variant='outline'>Sign Up</DaButton>
            </div>
          </div>

        </DaBox>
      </DaForm>
    </div>
  );
};

export default Login;