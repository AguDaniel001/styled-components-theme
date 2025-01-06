import React from 'react';
import { BsMoon } from 'react-icons/bs';
import styled from 'styled-components';

const DaIcons = styled.i`
  color: ${(props) => props.theme.text};
`
function MoonIcon() {
  return (
    <DaIcons><BsMoon /></DaIcons>
  );
}

export {MoonIcon}