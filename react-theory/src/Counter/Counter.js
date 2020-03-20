import React, { Component } from 'react'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter= () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {

        return (
            <React.Fragment>
                <h2>
                    Counter {this.state.counter}
                </h2>

                <Counter2 />
                
                <input type="button" value="+" onClick={this.addCounter}></input>
                <input type="button" value="-" onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}></input>
            </React.Fragment>
            /*<Auxiliary>
                <h2>
                    Counter {this.state.counter}
                </h2>
                <input type="button" value="+" onClick={() => {this.setState({counter: this.state.counter + 1})}}></input>
                <input type="button" value="-" onClick={() => {this.setState({counter: this.state.counter - 1})}}></input>
            </Auxiliary>*/
        )
    }
}