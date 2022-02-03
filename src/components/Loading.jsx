import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <span className="loading-text">Carregando...</span>
      </div>
    );
  }
}
