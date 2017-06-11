import React from 'react';
import { H1 } from './titles';
import { ShowWrapper } from './animations';

class TabState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'TAB-1',
    };
  }

  render() {
    return (
      <ShowWrapper>
        <H1>{(this.props.match.url).toUpperCase().replace('/', ' ')}</H1>
      </ShowWrapper>
    );
  }
};

export default TabState;
