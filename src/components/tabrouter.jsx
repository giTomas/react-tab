import React from 'react';
import { H1, H2 } from './titles';
import { ShowWrapper } from './animations';

const TabRouter = ({match}) => (
  <ShowWrapper>
    <H1>{(match.url).toUpperCase().replace('/', ' ')}</H1>
  </ShowWrapper>
);

export default TabRouter;
