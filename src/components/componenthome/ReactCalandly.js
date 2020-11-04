import React, {Component} from 'react'
import {InlineWidget} from 'react-calendly'

class ReactCalandly extends Component {
  componentDidMount() {
    // whatever stuff you need here
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/nextgendoc" />
      </div>
    );
  }
}

export default ReactCalandly