'use strict';

import React              from 'react';

import CurrentUserActions from './actions/CurrentUserActions';
import CurrentUserStore   from './stores/CurrentUserStore';
import Header             from './components/Header';
import Footer             from './components/Footer';

const propTypes = {
  params: React.PropTypes.object,
  query: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object
  ])
};

class App extends React.Component {
  currentLevel;
  maxLevels;

  constructor(props) {
    super(props);

    this.onUserChange = this.onUserChange.bind(this);
    this.pushLevel = this.pushLevel.bind(this);


    this.maxLevels = 7;
    this.state = {
      currentUser: {},
      currentLevel :  0
    };

  }

  onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  }

  componentWillMount() {
    console.log('About to mount App');
  }

  componentDidMount() {
    this.unsubscribe = CurrentUserStore.listen(this.onUserChange);
    CurrentUserActions.checkLoginStatus();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderChildren() {
    return React.cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query,
      currentUser: this.state.currentUser,
      currentLevel: this.state.currentLevel,
      pushLevel: this.pushLevel
    });
  }

  render() {
    return (
      <div>

        <Header pushLevel={this.pushLevel} currentLevel={this.state.currentLevel} />
        {this.renderChildren()}

        <Footer />

      </div>
    );
  }

  pushLevel() {
    console.log("pushing the level from app");

    var tmp = this.state.currentLevel;
    tmp++;
    if(tmp==this.maxLevels)
    {
      tmp=0;
    }
    this.setState({
      currentLevel  : tmp
    }, function() {
      console.log("After pushing, the level is: " + this.state.currentLevel);
    });

  }
}

App.propTypes = propTypes;

export default App;
