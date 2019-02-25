import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'

import Wrapper from './wrapper'
import Input from './input'
import Label from './label'
import {DoneIcon, LockIcon} from './icon'

import themes from './themes';

const TextInput = ({id, label, disabled, onValidate, size, theme}) => {
  const [filled, setFilled] = useState(false);
  const [valid, setValid] = useState(true);
  const [viewRightIcon, setViewRightIcon] = useState(false);

  const rightIcon = valid ? <DoneIcon/> : <LockIcon/>;

  const isFilled = event => event.target.value !== '';

  const handleInput = event => {
    setFilled(isFilled(event));

    if (onValidate instanceof Function) {
      setValid(isFilled(event) && onValidate(event.target));
    }
  };

  const handleInputChange = event => {
    handleInput(event);

    setViewRightIcon(false);
  };

  const handleInputBlur = event => {
    handleInput(event);

    setViewRightIcon(true);
  };

  return (
    <ThemeProvider theme={{...themes[theme], size}}>
      <Wrapper >
        <Input id={id}
               onChange={handleInputChange}
               onBlur={handleInputBlur}
               filled={filled}
               valid={valid}
               disabled={disabled}/>
        <Label htmlFor={id}
               labelUp={filled}
               valid={valid}>
          {label}
        </Label>
        {viewRightIcon && rightIcon}
      </Wrapper>
    </ThemeProvider>
  )
};

TextInput.defaultProps = {
  size: "normal",
  theme: 'dark'
};

export default TextInput
