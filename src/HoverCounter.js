import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {

    render(){
        const {count, increment} = this.props;
        return(
            <div>
                <div>{count}</div>
                <button onMouseEnter={increment}>Hover increment</button>
            </div>
        )
    }
}
export default withCounter(HoverCounter);