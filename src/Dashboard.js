import React, { Component } from 'react';
import './Dashboard.css';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import { fetchCats } from './actions/cats';
import { fetchDogs } from './actions/dogs';

export class Dashboard extends Component {
  
  componentDidMount(){
    this.props.dispatch(fetchCats());
    this.props.dispatch(fetchDogs());
  }

  onAdoptPet() {
    console.log('Adopt button testing...');
  }
  
  showPets(){
    return (
      <div className='dashboard'>
        <h1>Here are the pets for adoption</h1>
        <h2>Cat</h2>
        <Pet petToAdopt={this.props.catsToAdopt} onClick={(e) => this.onAdoptPet()} petType={'cat'}/>
        <h2>Dog</h2>
        <Pet petToAdopt={this.props.dogsToAdopt} onClick={(e) => this.onAdoptPet()} petType={'dog'}/>
      </div>);
  }

  render() {
    if(this.props.catsToAdopt !== null && this.props.dogsToAdopt !== null){
      return this.showPets();
    }
    else{
      return (
        <div>Loading...</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    catsToAdopt: state.cats.data,
    dogsToAdopt: state.dogs.data
  }
}
export default connect(mapStateToProps)(Dashboard);