import React from 'react';
import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import R from 'ramda';
import { H1, H2 } from './titles';
import { ShowWrapper } from './animations';
import mathematicians from '../data/mathematicians';

const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
`;

const Item = styled.li`
  margin: 0.5em;
  font-family: 'Comfortaa', cursive;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: right;
  text-decoration: none;
  font-family: 'Comfortaa', cursive;
  color: black;
  transition: color 0.33s ease-out;
  &:hover {
    color: grey;
  }`;

const item = ({name, id}) => (
  <Item key={id}>
    <StyledLink to={`/mathematicians/${id}`}>{name}</StyledLink>
  </Item>);

// const Names = R.compose(
//   R.values,
//   R.map(para),
//   R.map(R.prop('name')),
// );

const Names = R.compose(
  R.map(item),
  R.project(['name', 'id']),
);

// const Article = ({name, wiki, image, texts}) => (
//   <p>{name}</p>
// );
//
// // const id = R.propEq('id', 'alan-turing');
//
// const PrepareArticle = (id) => {
//   const findId = R.propEq('id', id);
//
//   return R.compose(
//   Article,
//   R.find(findId)
// )};
//
// console.log(PrepareArticle('alan-turing')(mathematicians))

const TabRouter = ({match}) => (
  <ShowWrapper>
    <main>
      <H2>Mathematicians</H2>
      <Menu>
        {Names(mathematicians)}
      </Menu>


    </main>
  </ShowWrapper>
);

export default TabRouter;
