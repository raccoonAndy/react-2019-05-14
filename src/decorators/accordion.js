import React, { Component } from "react";

const accordion = OriginalComponent =>
  class DecoratorComponent extends Component {
    state = {
      openItemID: null
    };
    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
    toggleOpenItem = id => {
      this.setState({
        openItemID: id
      });
    };
  };

export { accordion };
