import React from 'react';
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import './app.css';
import styled from 'styled-components';
import { TabState, TabRouter } from './components';
import { H1, H2 } from './components/titles';
import { ShowWrapper, ColorWrapper } from './components/animations';

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: right;
  text-decoration: none;
  font-family: 'Comfortaa', sans-serif;
  color: grey;
  transition: color 0.33s ease-out;
  &:hover {
    color: black;
  }
`;

const Default = ({ match }) => (
  <H2>{match.url.toUpperCase().replace('/', '')}</H2>
);

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const List = styled.ul`
  list-style: none;
  margin-left: auto;
`;

// not work
const Header = styled.header`
  margin-bottom: calc(1em*1.45);
  line-height: 1;
  ${'' /* flex: 1; */}
`;

const Subtitle = H2.extend`
  white-space: pre;
  @media(max-width: 750px) {
    white-space: normal;
  }
`;


const Home = () => (
  <ShowWrapper>
    <Header>
      {/* <H1>Home</H1> */}
      <Subtitle>React Tab Element</Subtitle>
    </Header>
    <List>
      <li><StyledLink to="/">Home</StyledLink></li>
      <li><StyledLink to="/state">State Based</StyledLink></li>
      <li><StyledLink to="/router">Router Based</StyledLink></li>
    </List>
  </ShowWrapper>
);


const App = () => (
  <Router>
    <ColorWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/state" component={TabState} />
        <Route path="/router" component={TabRouter} />
        <Route exact path="/mathematicians/:id" component={Default} />
        <Route component={NoMatch}/>
      </Switch>
    </ColorWrapper>
  </Router>
);

export default App;
