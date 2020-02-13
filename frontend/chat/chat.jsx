// document.addEventListener('DOMContentLoaded', () => {
//   const chat = document.querySelector('#chat');

//   for(const msg of conversation) {
//     const name = msg.name.toLowerCase();
//     chat.innerHTML += (
//       `<div class="message message--${msg.side}">
//         <img class="message__head" src="img/${name}.png"/>
//         <div class="message__text">${msg.text}</div>
//       </div>`
//     );
//   };
// });



import React from 'react';
import './chat.css';
import unicorn_image from './img/unicorn.png';
import cleverbot_image from './img/cleverbot.png';


export class Chat extends React.Component{
  state = {
    button: "like"
  }

  addLike () {
    if (this.state.button === "like"){
      
    }
  }

render () {
  let name_img = unicorn_image;  
  if (this.props.name === "Cleverbot"){
    name_img = cleverbot_image
  }

  // let button = this.props.querySelector('.button');
  // button.addEventListener('click', () => {
  //   button.textContent = Number(button.textContent) + 1;
  // })

  return (
        <> 
          <div className={`message message--${this.props.side}`}>
            <img className="message__head" src={name_img}/>
            <div className="message__text">{this.props.text}<button className = "button">Like</button>
              </div>
          </div>
        </>
      )
}
}

