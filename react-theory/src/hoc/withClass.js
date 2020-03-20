import React from 'react'


const withClass = (Conponent) => {
    return props => {
        return (
            <div>
                <Conponent {...props}/>
            </div>
        )
    }
}

export default withClass