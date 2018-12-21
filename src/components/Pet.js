import React, { Component } from 'react';

export default class Pet extends Component {

  render() {
    return (
      <section>
        <header>
          <h3>{this.props.petToAdopt.name}</h3>
          <img src={this.props.petToAdopt.imageURL} alt={this.props.petToAdopt.imageDescription}></img>
        </header>
        <main>
          <dl>
            <dt><b>Name: </b>{this.props.petToAdopt.name}</dt>
            <dt><b>Gender: </b>{this.props.petToAdopt.sex}</dt>
            <dt><b>Age: </b>{this.props.petToAdopt.age}</dt>
            <dt><b>Breed: </b>{this.props.petToAdopt.breed}</dt>
            <dt><b>Story: </b>{this.props.petToAdopt.story}</dt>
          </dl>
        </main>
        <button nameClass='adopt-btn'>Adopt {this.props.petToAdopt.name}!</button>
      </section>
    );
  }
}