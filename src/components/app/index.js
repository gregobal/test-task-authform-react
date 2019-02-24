import React, { Component, Fragment } from 'react'

import Form from '../form'
import Button from '../button'
import TextInput from '../text-input'
import Configurator from '../configurator'
import GithubFetcher from '../github-fetcher'

class App extends Component {
  state = {
    formSize: 'normal',
    theme: 'dark',
    name: false,
    email: false,
    logged: false
  };

  render() {
    const {formSize, theme, logged} = this.state;

    return (
      <Fragment>
        {!logged && <Fragment>
          <Form theme={theme} onSubmit={this.handleFormSubmit}>
            <TextInput id="name"
                       label="Имя"
                       onValidate={this.handleTextInputValidate}
                       size={formSize}
                       theme={theme}/>
            <TextInput id="email"
                       label="Email"
                       onValidate={this.handleTextInputValidate}
                       size={formSize}
                       theme={theme}/>
            <TextInput id="password"
                       label="Пароль не требуется"
                       disabled
                       size={formSize}
                       theme={theme}/>
            <Button type="submit"
                    size={formSize}>
              Войти
            </Button>
          </Form>
          <Configurator theme={theme}
                        formSize={formSize}
                        setTheme={this.setTheme}
                        setFormSize={this.setFormSize}/>
        </Fragment>}
        {logged && <GithubFetcher/>}
      </Fragment>
    )
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const {name, email} = this.state;

    if (name && email) {
      this.setState({
        logged: true
      })
    }
  };


  setFormSize = event => {
    this.setState({
      formSize: event.target.value
    })
  };

  setTheme = event => {
    this.setState({
      theme: event.target.value
    })
  };

  handleTextInputValidate = event => {
    const result = this.isValid(event.value);

    if (event.id) {
      this.setState({
        [event.id]: result
      });
    }

    return result;
  };

  isValid(value) {
    const rule = /^[\S]+/gi;

    return rule.test(value);
  }
}

export default App
