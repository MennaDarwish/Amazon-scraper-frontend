import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore({});
  const div = document.createElement('div');
  ReactDOM.render(<Provider><App store={store}/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
