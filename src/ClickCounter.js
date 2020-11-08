import React, { Component } from 'react';
import withCounter from './withCounter';
class ClickCounter extends Component {
    render(){
        const {count, increment} = this.props;
        return(
            <div>
                <div>{count}</div>
                <button onClick={increment}>Click increment</button>
            </div>
        )
    }
}
export default withCounter(ClickCounter);