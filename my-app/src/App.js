import React, {Fragment} from 'react';
import './App.css';
import ProductFormConnected from './components/product';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Navbar className="nav-bar">
        <Navbar.Brand href="#home">Find your product</Navbar.Brand>
      </Navbar>
      <ProductFormConnected />
    </Fragment>
  );
}

export default App;
