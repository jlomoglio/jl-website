import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  state = {
    page: 'Home'
  };
  
  setPage = (page) => {
    this.setState({ page: page });
    localStorage.setItem('page', page);
  };

  componentDidMount() {
    let curPage = localStorage.getItem('page');
    this.setState({page: curPage});
  };

  loadPage = () => {
    switch (this.state.page) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Process':
        return <Process />;
      case 'Work':
        return <Work />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    };
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar setPage={this.setPage} page={this.state.page} />
        <Layout>
          { this.loadPage() }
        </Layout>
      </React.Fragment>
    );
  };
};

export default App;
