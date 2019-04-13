import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  state = {
    page: 'Home'
  };

  setPage = (page) => {
    this.setState({ page: page });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar setPage={this.setPage} />
        <Jumbotron page={this.state.page} />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/work" component={Work} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
