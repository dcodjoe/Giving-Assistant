import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import Hello from './Hello';
import './style.css';

class App extends React.Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    
  render() {
    return (
      <main>
       <h1>Giving Assistant</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div id="page">
    <div id="menuleftcontent">
        <ul id="menu">
            <li> <a href="showfirstcontent"></a>first</li>
            <li><a href="showsecondcontent">second</a>
            </li>
        </ul>
    </div>
    <div class = "vertical"></div> 
    <div id="maincontent">
        <div id="firstcontent">first</div>
        <div id="secondcontent">second</div>
         <div id="firstcontent">first</div>
        <div id="secondcontent">second</div>
    </div>
</div>
        </Modal>
        <button type='button' onClick={this.showModal}>Open</button>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
          <button id="button" onClick={handleClose}>
            X
          </button>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
