import React from 'react';
// import Sidebar from './Sidebar';

type Props = {};
type State = {
  name: string;
  description: string;
  fluid_velocity: number;
  fluid_pressure: number;
  turbulence: boolean;
  data: Object[];
};

const updateState = <T extends string>(key: keyof State, value: T) => (
  prevState: State
): State => ({
  ...prevState,
  [key]: value
});

class Dashboard extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state ={
      name: '',
      description: '',
      fluid_velocity: 0,
      fluid_pressure: 0,
      turbulence: false,
      data: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }
  writeToTextfile(){

  }
  handleInput(type: keyof State) {
    return (e:any) => {
      const { value } = e.target;
      this.setState(updateState(type, value))
    };
  }
  handleCheckbox(){
    if(this.state.turbulence){
      this.setState({
        turbulence: false
      })
    }else{
        this.setState({
          turbulence: true
        })
    }
  }
  handleSubmit(){
    let currentData = this.state.data;
    currentData.push([
      `name: ${this.state.name}
      description: ${this.state.description}
      fluid_velocity: ${this.state.fluid_velocity}
      fluid_pressure: ${this.state.fluid_pressure}
      turbulence: ${this.state.turbulence}\n`
    ]);
    this.setState({
      data: currentData
    })
  }
  clear(){
    this.setState({
      name: '',
      description: '',
      fluid_velocity: 0,
      fluid_pressure: 0,
      turbulence: false,
      data: []
    })
  }
  render(){
    return(
      <div className="dashboard-container">
        <div className="sidebar-container">
            <div className="input-title">Simulation Name</div>
            <input
              className="input-default"
              type="text"
              onChange={this.handleInput('name')}
              value={this.state.name}
              />
            <div className="input-title">Description</div>
            <input
              className="input-default"
              type="text"
              onChange={this.handleInput('description')}
              value={this.state.description}
              />
            <div className="input-title">Fluid Velocity</div>
            <input
              className="input-default"
              type="number"
              onChange={this.handleInput('fluid_velocity')}
              value={this.state.fluid_velocity}
              />
            <div className="input-title">Fluid Pressure</div>
            <input
              className="input-default"
              type="number"
              onChange={this.handleInput('fluid_pressure')}
              value={this.state.fluid_pressure}
              />
            <div className="input-title"> Turbulence </div>
            <input
              type="checkbox"
              onChange={this.handleCheckbox}
              checked={this.state.turbulence}
              />
              <button className="submit-button" onClick={this.handleSubmit}>
                <div className="button-content">Submit</div>
              </button>
              <button className="submit-button" onClick={this.clear}>
                <div className="button-content">Clear</div>
              </button>
        </div>
        <div className="main-content">
        {this.state.data}
        </div>
      </div>
    )
  }
}

export default Dashboard;
