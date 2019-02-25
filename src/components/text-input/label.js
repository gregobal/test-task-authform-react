import styled from 'styled-components'

import Input from './input'

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: ${({labelUp, theme}) => labelUp ? "-16px" :
    theme.size === 'normal' ? "8px" : 
      "12px"}};
  left: ${({labelUp}) => labelUp ? "0" : "12px"};
  line-height: ${({labelUp}) => labelUp ? "16px" : "24px"};
  font-size: ${({labelUp}) => labelUp ? "11px" : "15px"}; 
  transition: 0.3s ease all;
  color: ${({theme}) => theme.labelColor};

  ${Input}:focus ~ & {
    color: ${({labelUp, valid, theme}) =>
      !labelUp ? theme.focus.label.empty :
        valid ? theme.focus.label.valid :
          theme.focus.label.invalid};
  }
  
  ${Input}:disabled ~ & {
    transition: none;
    color: ${({theme}) => theme.disabled.labelColor};
  } 
`;

export default Label
