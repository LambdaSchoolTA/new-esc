import React, { Component } from 'react';


class Homer extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }
  onNextClick() {
    if (this.state.activeIndex < 4) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 })
    }
  }
  render() {
    return (
      <div>
        <div></div>
      </div>
    )
  }
}

