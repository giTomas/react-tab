import React from 'react';
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import R from 'ramda';
// import './app.css';
import styled, { injectGlobal, keyframes } from 'styled-components';
import { TabState, TabRouter } from './components';
import { H2, H3 } from './components/titles';
import { ShowWrapper, ColorWrapper } from './components/animations';
import mathematicians from './data/mathematicians';

injectGlobal`
   :root {
      --sans-serif: 'Comfortaa', sans-serif;
      --basic-font-size: calc(0.9rem + (1.1 - 0.9) * ((100vw - 18.75em) / (75 - 18.75)));
      --line-height: 1.55;
      --vertical-rhytm: calc(var(--basic-font-size)*var(--line-height));
    }
   html {
      font-size: var(--basic-font-size);
      font-family: var(--sans-serif);
      line-height: var(--line-height);
      font-kerning: normal;
      text-rendering: optimizeLegibility;
      font-variant-ligatures: common-ligatures;
    }
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }`;


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
  }`;

const ArticleTitle = H3.extend`
  line-height: 1;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  font-family: 'Comfortaa', sans-serif;
  color: white;
  padding: 0.35em 0.25em 0.25em;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 3px;
  background-color: black;
  line-height: 0.9;
  transition: all 0.22s ease-out;
  &:hover {
    background-color: transparent;
    color: black;
  };
`;

const Image = styled.img`
  float: left;
  width: 250px;
  height: 300px;
  object-fit: containe;
  margin-bottom: calc(var(--vertical-rhytm)/2);
  margin-right: calc(var(--vertical-rhytm)/2);
  @media(max-width: 550px) {
    float: none;
  }
`;

const WikiLink = styled.a`
  display: block;
  text-decoration: none;
  font-family: 'Comfortaa', sans-serif;
  color: grey;
  margin-bottom: var(--vertical-rhytm);
  transition: color 0.33s ease-out;
  &:hover {
    color: black;
  }
`;

const Paragraph =  styled.p`
  font-size: 1em;
  margin-bottom: calc(var(--vertical-rhytm)/2);
  font-family: 'Libre Baskerville', serif;
`;

const ArticleWrapper = styled.div`
  padding-top: calc(var(--vertical-rhytm)*2);
  padding-bottom: calc(var(--vertical-rhytm)*4);
  position: relative;
  max-width: 43.75em;
  margin: 0 auto;
`;

const ArticleShow = keyframes`
  0% {
    opacity: 0;
    ${'' /* transform: translateY(50px); */}
  }
  30% {
    opacity: 0;
    ${'' /* transform: translateY(50px); */}
  }
  ${'' /* 35% {
    opacity: 1;
    ${'' /* transform: translateY(25px); */}
  } */}
  100% {
    opacity: 1;
    ${'' /* transform: translateY(0px); */}
  }
`;

const ArticleBody =  styled.article`
  max-width: 100%;
  padding: var(--vertical-rhytm);
  background-color: white;
  box-shadow: 2px 2px 4px rgba(43, 190, 244, 0.75);
  animation: ${ArticleShow} 1s linear;
`

const Article = ({name, wiki, image, text}) => (
  <ArticleBody>
    <ArticleTitle>{name}</ArticleTitle>
    <WikiLink href={wiki}>by Wikipedia</WikiLink>
    <Image src={image} alt={name} />
    {R.addIndex(R.map)((p, i) =>
      <Paragraph key={ i.toString() }>{ p }</Paragraph>
    , text)}
    {/* {text.map((p, i) =>
      <Paragraph key={ i }>{ p }</Paragraph>
  )} */}
  </ArticleBody>
);

const prepareArticle = (id) => {
  const findId = R.propEq('id', id);

  return R.compose(
            Article,
            R.find(findId)
          )
  };

const RouteWithData = ({ data, ...rest }) => (
  <Route {...rest} render={({match, history}) => (
    <ArticleWrapper>
      <Button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          history.goBack()}}>
        Back To Menu
      </Button>
      {prepareArticle(match.params.id)(data)}
    </ArticleWrapper>
  )}/>
);

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
        <RouteWithData exact path="/mathematicians/:id" data={mathematicians} />
        <Route component={NoMatch} />
      </Switch>
    </ColorWrapper>
  </Router>
);

export default App;
