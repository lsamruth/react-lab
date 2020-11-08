import React, { Component } from 'react';


const withCounter = WrapperComponent => {
    class NewComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                count: 0
            }
        }
        increment = () => {
            // this.setState(prevState=>({
            //     count:prevState.count+1
            // }));
            this.setState(prevState=>{
                return {
                    count : prevState.count+1
                }
            })
        }
        render(){
            const {count} = this.state;
            return <WrapperComponent count={count} increment={this.increment}/>
        }
    }
    return NewComponent;
}
export default withCounter;