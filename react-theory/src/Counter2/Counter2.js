import React from 'react'
import {ClickedConext} from '../App'

export default props => {
    return(
        <div>
            <h3>Click</h3>
                 
            <ClickedConext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedConext.Consumer>  
        </div>
    )
}