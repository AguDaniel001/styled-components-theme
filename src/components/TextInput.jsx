import React from 'react'

import styled from 'styled-components';

const DaInput = styled.input`
  height: 48px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid  ${(props) => props.theme.borderOutline};
  padding: 0px 16px;
  padding: 10px 10px 4px 14px;
  width: 93%;
  transition: border 0.3s;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.title};

  &:hover {
  border: 1px solid ${(props) => props.theme.primary};
}
  &:focus {
  outline: none;
  border: 1px solid ${(props) => props.theme.primary};
}
`

function TextInput() {
  return (
    <div>
      <div>
        <DaInput type="text" className="form-input" placeholder="Email"/>
      </div>
      <br />
      <div>
        <DaInput type="password" className="form-input" placeholder="Password" />
      </div>
    </div>
  )
}

export default TextInput