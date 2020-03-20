import React from 'react'
import withClass from '../hoc/withClass'
import Radium from 'radium'
import './Car.scss'
import PropTypes from 'prop-types'

class Car extends React.Component {
    
    render() {

        const inputClasses = ['input']

        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
            }
        }

        return (
            <React.Fragment className="Car" style={style}>
                <h1>name: {this.props.name}</h1>
                <h1>year: {this.props.year}</h1>
                <input
                    type="text"
                    className={inputClasses.join(' ')}
                    onChange={this.props.onChangeName}
                    value={this.props.name} />
                <input type="button" onClick={this.props.onDelete} value="Удалить" />
            </React.Fragment>
        )
    }
}

/*
const Car = props => {

    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
        }

    }

    return (
        <div className="Car" style={style}>
            <h1>name: {props.name}</h1>
            <h1>year: {props.year}</h1>
            <input
                type="text"
                className={inputClasses.join(' ')}
                onChange={props.onChangeName}
                value={props.name} />
            <input type="button" onClick={props.onDelete} value="Удалить" />
        </div>
    )
}*/

/*Car.prototype = {
    name: PropTypes.string,
    year: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}*/

export default withClass(Car)