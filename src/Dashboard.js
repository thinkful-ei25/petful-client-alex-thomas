import React, { Component } from 'react';
import './Dashboard.css';
import Pet from './components/Pet';

export default class Dashboard extends Component {

  render() {
    return (
      <div className='dashboard'>

        <h1>Here are the pets for adoption</h1>
        <h2>Cat</h2>
        <Pet petToAdopt={this.props.catToAdopt}/>
        <h2>Dog</h2>
        <Pet petToAdopt={this.props.dogToAdopt}/>

        <section className='cat-section'>
          <header>
            <h1>Cat</h1>
            <h3>{this.props.catToAdopt.name}</h3>
            <img src={this.props.catToAdopt.imageURL} alt={this.props.catToAdopt.imageDescription}></img>
          </header>
          <main>
            <dl>
              <dt><b>Name: </b>{this.props.catToAdopt.name}</dt>
              <dt><b>Gender: </b>{this.props.catToAdopt.sex}</dt>
              <dt><b>Age: </b>{this.props.catToAdopt.age}</dt>
              <dt><b>Breed: </b>{this.props.catToAdopt.breed}</dt>
              <dt><b>Story: </b>{this.props.catToAdopt.story}</dt>
            </dl>
          </main>
          <button nameClass='adopt-cat-btn'>Adopt {this.props.catToAdopt.name}!</button>
        </section>

        <section className='dog-section'>
          <header>
            <h1>Dog</h1>
            <h3>{this.props.dogToAdopt.name}</h3>
            <img src={this.props.dogToAdopt.imageURL} alt={this.props.dogToAdopt.imageDescription}></img>
          </header>
          <main>
            <dl>
              <dt><b>Name: </b>{this.props.dogToAdopt.name}</dt>
              <dt><b>Gender: </b>{this.props.dogToAdopt.sex}</dt>
              <dt><b>Age: </b>{this.props.dogToAdopt.age}</dt>
              <dt><b>Breed: </b>{this.props.dogToAdopt.breed}</dt>
              <dt><b>Story: </b>{this.props.dogToAdopt.story}</dt>
            </dl>
            <button nameClass='adopt-dog-btn'>Adopt {this.props.dogToAdopt.name}!</button>
          </main>
        </section>

      </div>
    );
  }
}