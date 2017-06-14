import React from 'react';
import {
  NavLink,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import R from 'ramda';
import { H1, H2 } from './titles';
import { ShowWrapper } from './animations';

const mathematicians = {
  "alonso-church": {
    "name": "Alonso Church",
    "text": [],
  },
  "haskell-curry": {
    "name": "Haskell Curry",
    "text": [],
  },
  "alan-turing": {
    "name": "Alan Turing",
  }
}

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const Item = styled.li`
  margin: 0.5em;
  font-family: 'Comfortaa', cursive;
  font-weight: 300;
`;

const para = t => (<Item key={t}>{t}</Item>)

const Names = R.compose(
  R.values,
  R.map(para),
  R.map(R.prop('name')),
)
console.log(R.keys(mathematicians))
const TabRouter = ({match}) => (
  <ShowWrapper>
    <H1>{(match.url).toUpperCase().replace('/', ' ')}</H1>
    <main>
      <H2>Mathematicians</H2>
      <Menu>
        {Names(mathematicians)}
      </Menu>


    </main>
  </ShowWrapper>
);

export default TabRouter;
