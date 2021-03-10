import React from 'react';
import { History } from 'history';

type Props = {
  history: History<any>
};

type State = {
  password: string;
  username: string;
  error: string;
};

const updateState = <T extends string>(key: keyof State, value: T) => (
  prevState: State
): State => ({
  ...prevState,
  [key]: value
});

class LoginForm extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(type: keyof State) {
    return (e:any) => {
      const { value } = e.target;
      this.setState(updateState(type, value))
    };
  }
  handleSubmit(e: any){
    e.preventDefault();
    if(this.state.username === "account" && this.state.password === "password"){
      this.props.history.push(`/dashboard`)
    }else{
      this.setState(updateState('error', "Incorrect credentials"));
    }
  }
  public render(){
    return(
      <div className="form-container">
        <h5 className="input-title">Username</h5>
        <input
          className="input-default"
          type="text"
          onChange={this.handleInput('username')}
          value={this.state.username}>
        </input>
        <h5 className="input-title">Password</h5>
        <input
          className="input-default"
          type="password"
          onChange={this.handleInput('password')}
          value={this.state.password}>
        </input>
        {this.state.error}
        <button className="submit-button" onClick={this.handleSubmit}>
          <div className="button-content">Submit</div>
        </button>
      </div>
    )
  }
}

export default LoginForm;
