import styled from 'styled-components';

const DaButton = styled.button`
  width: 100%;
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) =>
     props.variant === 'outline' ? props.theme.transparent : props.theme.primary}; 
  color:  ${(props) =>
     props.variant === 'outline' ? props.theme.primary : props.theme.constantWhite};
  padding: 15px 32px;
  border-radius: 30px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease-out;

  &:hover {
    background-color: ${(props) =>
    props.variant !== 'outline' ? props.theme.primaryDark : props.theme.primary}; 
     
    color:  ${(props) =>
    props.variant !== 'outline' ? props.theme.constantWhi : props.theme.constantWhite};
     
    border: 2px solid ${(props) =>
    props.variant !== 'outline' ? props.theme.primaryDark : props.theme.transparent};
  };
`

export const FancyButton = styled(DaButton)`
  background-image:linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none ;
  border-radius: 10px;
  &:hover {
    background-image: linear-gradient(to left, #f6d365 0%, #fda085 100%);
    color: #fff;
  }
`
export const SubmitButton = styled(DaButton).attrs({
  type: 'submit',
})`
  box-shadow: 1px 1px 9px #777;
`
export const DarkButton = styled(DaButton)`
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.dark.text};
  &:hover {
  }
`
export const LightButton = styled(DaButton)`
  border: 2px solid ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};

  &:hover {
    background-color: ${(props) =>
     (props.variant !== 'outline' ? '#fff' : '#6B4EFF')}; 
     color:  ${(props) =>
     (props.variant !== 'outline' ? '#6B4EFF' : '#fff')};
  }
`
export default DaButton;

