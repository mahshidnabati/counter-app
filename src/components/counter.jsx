import React from "react";
class Counter extends React.Component {
  // state = {
  //   //count: this.props.value,
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor(){
  //   super();
  //   this.handleIncrement=this.handleIncrement.bind(this);
  // }
  // handleIncrement=() =>{
  //   this.setState({ count: this.state.count+1})
  // }
  render() {
    //React.createElement('div');
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <button className="btn btn-danger btn-sm m-2"
                onClick={()=>this.props.onDelete(this.props.counter.id)}
        >Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
