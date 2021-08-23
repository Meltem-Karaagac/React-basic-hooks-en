import React from 'react';

class ClassComponent extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         count: 0,
    //     }
    //     // this.increase = this.increase.bind(this);
    // }

    state = {
        count: 0,
    }

    increase = () => {
        this.setState({count: this.state.count + 1})
    }


    render() {
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increase}>Increse</button>
            </div>
        )
    }
}

export default ClassComponent;
