import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Character from './types/types';

type StateType = {
    character: Character[];
};

class App extends React.Component {
    state: StateType = {
        character: [],
    };

    render() {
        return <SearchBar />;
    }
}

export default App;
