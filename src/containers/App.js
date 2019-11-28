import React, { Component } from 'react';
// import {robots} from './robots';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, setRequestRobots} from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => {
    console.log('state',state);
    return { 
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }  
}


const mapDispatchToProps = (dispatch) => {  
   return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(setRequestRobots())
   }
}

class App extends Component{
    componentDidMount(){
        this.props.onRequestRobots();
    }
    render(){    
    console.log('this',this.props);    
    const { searchField , onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{ 
        return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
    })

    return isPending ?
    <h1>loading</h1>:
    (
        <div className='tc'>    
            <h1 className='f1'>Robot Contacts</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);