import React, { useState } from "react";
import styled from 'styled-components';

const DaLabel = styled.label`

  display: inline-block;
  width: 50px;
  height: 25px;
  position: relative;

`
const DaInput = styled.input`
  display: none;
  `
const DaSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 25px;
  transition: 0.4s;
  cursor: pointer;
  transform: translate(-50%);

  &:hover {
    background-color:${(props) => props.theme.primaryLight};
  }

  &::before {
    content: "";
    position: absolute;
    height: 18px;
    width: 18px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    transition: 0.4s;
  }

    &.toggled {
    background-color: ${(props) => props.theme.primary};

    &::before {
      left: calc(100% - 22px);
    }
  }
`
function Switch({toggleTheme, isDarkTheme}) {
  const [isToggled, setisToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setisToggled(!isToggled);
    toggleTheme();
  };

  return (
    <DaLabel className="toggle-switch">
      <DaInput type="checkbox" checked={isToggled} onChange={onToggle}/>
      <DaSpan span className={`slider ${isToggled ? "toggled" : ""}`}/>
    </DaLabel>
  );
}

export default Switch;