import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import quotes from './assets/quotes.json';
import {FaQuoteLeft, FaQuoteRight, FaTwitter} from 'react-icons/fa'
import { connect } from 'react-redux';

// const one_quote = {
//   quote: "",
//   author: ""
// } 

const setColor = (color) => {
  return {
    type: 'SET_COLOR',
    color
  }
}

const randomQuote = (quotes) => {
  const randomIndex = Math.floor(Math.random()*quotes.length);
  return quotes[randomIndex];
}

const transition = "all 2s"

const randomColor = () => {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
      color: ''
    };
  }
  componentDidMount() {
    const color = randomColor();
    this.setState({
      quote: randomQuote(quotes),
      color
    });
    this.props.setColor(color);
  }

  changeQuote = () => {
    const color = randomColor();
    this.setState({
      quote: randomQuote(quotes),
      color
    });
    this.props.setColor(color);
  }

  render() {
    console.log(this.props);
  return (
    <div className='background-quote' style={{backgroundColor: this.props.color, transition}}>
      <div id='quote-box'  >
        <div className='quote-content'>
          <FaQuoteLeft id='quote-left' size="30" style={{color: this.props.color, transition}}/>
          <h2 id="text" style={{color: this.props.color, transition}}>{this.state.quote.quote}</h2>
          <FaQuoteRight id='quote-right' size="30" style={{color: this.props.color, transition}}/>
          <h4 id="author" style={{color: this.props.color, transition}}>- {this.state.quote.author}</h4>
        </div>
        <div className='buttons'>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote.quote}" ${this.state.quote.author}`} style={{backgroundColor: this.props.color, transition}}>
            <FaTwitter />
          </a>
          <button id="new-quote" onClick={this.changeQuote.bind(this)} style={{backgroundColor: this.props.color, transition}}>New quote</button>
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (color) => dispatch(setColor(color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
