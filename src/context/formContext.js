import React, { Component } from 'react'

const FormContext = React.createContext();

class FormProvider extends Component {
  state = {
    classes: [], // { id: '', value: '' }
    username: ''
  }

  handleUpdateUsername = (e) => {
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }

  handleAddClass = (value) => {
    const id = Math.random().toString(16)
    const singleClass = { value, id }
    this.setState(state => ({
      classes: [
        ...state.classes,
        singleClass
      ]
    }))
  }

  render() {
    const { children } = this.props
    return (
      <FormContext.Provider value={{
        ...this.state,
        updateUsername: this.handleUpdateUsername,
        addClass: this.handleAddClass
      }}>
        { children }
      </FormContext.Provider>
    )
  }
}

const FormConsumer = FormContext.Consumer;

export { FormContext, FormProvider, FormConsumer }
