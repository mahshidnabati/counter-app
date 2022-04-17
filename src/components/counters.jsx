import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
    render() { 
        const {onDelete}=this.props;
        return (
            <div>
                <button 
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m2">Reset</button>
                {this.props.counters.map(counter=>
                <Counter 
                    key={counter.id}
                    onDelete={onDelete}
                    counter={counter}
                    onIncrement={this.props.onIncrement}
                    // value={counter.value}
                    //id={counter.id}
                >
                    {/* <h1>Title</h1> */}
                </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters;