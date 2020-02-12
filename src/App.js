import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './store/reducer/combineReducer';
import Expensive from './Expensive';

const store = createStore(combineReducers);
window.store = store;

class App extends Component {
	render () {
  return (
    <Provider store={store}>
    <div className="App">
      <Expensive />
    </div>
    </Provider>
  );
  }
}

export default App;
