import React from 'react';
import ReactDOM from 'react-dom';
import { Chat } from './chat/chat.jsx';
import { conversation } from './chat/convo.js';
import './style.css';
import './index.html';


export class App extends React.Component{
  render() {
    return (
      <div class = "messages">
        {
          conversation.map(msg => {
            return (
              <Chat
              side = {msg.side}
              name = {msg.name}
              text = {msg.text}
              />
            )
          })
        }
    </div>

  )
  }
}


ReactDOM.render(<App />, document.querySelector('#app'));
