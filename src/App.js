import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState, Fragment } from "react";
import { Wrapper, ChangeThemeBar } from "./components";
import GlobalStyle from "./GlobalStyle";
// Pages
import PassengersPage from "./components/Passengers";
import LandingPage from "./Pages/Landing";
import PostsPage from "./Pages/Posts";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={{ dark: darkMode }}>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Router>
            <ChangeThemeBar onClick={changeMode}>Change Theme</ChangeThemeBar>
            <Switch>
              <Route exact path="/">
                <LandingPage darkMode={darkMode} />
              </Route>
              <Route path="/posts">
                <PostsPage />
              </Route>
              <Route path="/passengers">
                <PassengersPage />
              </Route>
            </Switch>
          </Router>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
