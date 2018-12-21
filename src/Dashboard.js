import React, { Component } from 'react';
import './Dashboard.css';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import { fetchCats, adoptCat } from './actions/cats';
import { fetchDogs, adoptDog } from './actions/dogs';

export class Dashboard extends Component {
  
  componentDidMount(){
    this.props.dispatch(fetchCats());
    this.props.dispatch(fetchDogs());
  }

  onAdoptDog() {
    this.props.dispatch(adoptDog());
    this.props.dispatch(fetchDogs());
  }

  onAdoptCat() {
    this.props.dispatch(adoptCat());
    this.props.dispatch(fetchCats());
  }

  render() {
    let cats;
    
    if(this.props.catsToAdopt === null){
      cats = <div>No more cats available :(</div>
    } else {
      cats = (
      <div>
        <h2>Cat</h2>
        <Pet petToAdopt={this.props.catsToAdopt} onClick={(e) => this.onAdoptCat()} petType={'cat'}/>  
      </div>
      );
    }

    let dogs;
    if(this.props.dogsToAdopt === null){
      dogs = <div>No more dogs available :(</div>
    } else {
      dogs = (
      <div>
        <h2>Dog</h2>
        <Pet petToAdopt={this.props.dogsToAdopt} onClick={(e) => this.onAdoptDog()} petType={'dog'}/>
      </div>
      );
    }
    
    return (
      <div>
      <h1>Here are the pets for adoption</h1>
      {cats}
      {dogs}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    catsToAdopt: state.cats.data,
    dogsToAdopt: state.dogs.data
  }
}
export default connect(mapStateToProps)(Dashboard);