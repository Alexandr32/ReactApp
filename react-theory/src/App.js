import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoudary from './ErrorBoudary/ErrorBoudary'
import Counter from './Counter/Counter'

export const ClickedConext = React.createContext(false)

class App extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false,
      cars: [
        { name: 'ford', year: 2018 },
        { name: 'mazda', year: 2014 },
        { name: 'infinity', year: 2018 }
      ],
      pageTitle: 'react component',
      showCars: false
    }
  }

  onChangeName = (name, index) => {
    const cars = [...this.state.cars]
    cars[index].name = name
    this.setState({
      cars
    })
  }

  changeTitleHandler = (newTitle) => {
    // указывам что было изменение
    this.setState({
      pageTitle: newTitle
    })
  }

  handlerInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler(index) {

    const cars = [...this.state.cars]
    cars.splice(index, 1)
    this.setState({ cars })
  }

  componentWillMount() {
    console.log("App componentWillMount")
  }

  componentDidMount() {
    console.log("App componentDidMount")
  }

  render() {
    console.log("App render")

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoudary key={index}>
            <Car
              name={car.name}
              year={car.year}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
              onDelete={this.deleteHandler.bind(this, index)}
            //onChangeTitle={this.changeTitleHandler.bind(this, car.name)}
            />
          </ErrorBoudary>
        )
      })
    }

    return (
      <div className="App">
        <h2>{this.props.title}</h2>
        <h1 style={divStyle}>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handlerInput} />
        <input type="button" value="tougleCars" onClick={this.toggleCarsHandler} />
        <button onClick={this.toggleCarsHandler}>TougleCars</button>

        <br />

        <input type="button" value="клик" onClick={() => { this.setState({ clicked: true }) }}></input>

        <ClickedConext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedConext.Provider>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>

      </div>
    );
  }
}

export default App;
