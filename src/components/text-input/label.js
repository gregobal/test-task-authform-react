import styled from 'styled-components'

import Input from './input'

import themes from './themes';

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: ${({labelUp, size}) => labelUp ? "-16px" : 
    size === 'normal' ? "8px" : 
      "12px"}};
  left: ${({labelUp}) => labelUp ? "0" : "12px"};
  line-height: ${({labelUp}) => labelUp ? "16px" : "24px"};
  font-size: ${({labelUp}) => labelUp ? "11px" : "15px"}; 
  transition: 0.3s ease all;
  color: ${({theme}) => themes[theme].labelColor};

  ${Input}:focus ~ & {
    color: ${({labelUp, valid, theme}) =>
      !labelUp ? themes[theme].focus.label.empty :
        valid ? themes[theme].focus.label.valid :
          themes[theme].focus.label.invalid};
  }
  
  ${Input}:disabled ~ & {
    transition: none;
    color: ${({theme}) => themes[theme].disabled.labelColor};
  } 
`;

export default Label
