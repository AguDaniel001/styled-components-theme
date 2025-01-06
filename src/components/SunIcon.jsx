import React from 'react';
import {BsSun} from 'react-icons/bs';
import styled from 'styled-components';
// import { useTheme } from 'styled-components'

const DaIcons = styled.i`
  color: ${(props) => props.theme.text};
`

function SunIcon() {
  //const theme = useTheme()
  return (
    <DaIcons><BsSun /></DaIcons>
  );
}

export {SunIcon}