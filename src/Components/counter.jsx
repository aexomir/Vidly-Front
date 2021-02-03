import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/300",
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  showTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <li>
        {this.state.tags.map((tag) => (
          <ul key={tag}>tag</ul>
        ))}
      </li>
    );
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary" onClick={this.handleIncrement}>
          Increment
        </button>
        <>
          {this.state.tags.length === 0 && "Please Select at least one tag!"}
          {this.showTags()}
        </>
      </>
    );
  }
}

export default Counter;
