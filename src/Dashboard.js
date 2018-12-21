import React, { Component } from 'react';
import './Dashboard.css';
import Pet from './components/Pet';

export default class Dashboard extends Component {

  onAdoptPet() {
    console.log('Adopt button testing...');
  }

  render() {
    return (
      <div className='dashboard'>
        <h1>Here are the pets for adoption</h1>
        <h2>Cat</h2>
        <Pet petToAdopt={this.props.catToAdopt} onClick={(e) => this.onAdoptPet()} petType={'cat'}/>
        <h2>Dog</h2>
        <Pet petToAdopt={this.props.dogToAdopt} onClick={(e) => this.onAdoptPet()} petType={'dog'}/>
      </div>
    );
  }
}