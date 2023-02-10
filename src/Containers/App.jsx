import React from "react";
import CardList from "../Components/CardList";
import Scroll from '../Components/Scroll';
import SearchBox from "../Components/SearchBox";
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchBox: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                this.setState({ robots: users }));
    }

    onSearchChange = (e) => {
        this.setState({ searchBox: e.target.value });
    }

    render() {
        const { robots, searchBox } = this.state;
        const filteredRobots = robots.filter((robot, i) => {
            return robot.name.toLowerCase().includes(searchBox.toLowerCase())
        });
        return !robots.length ? <h1>Loading...</h1> :
            <div className="tc">
                <h1 className="h1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div >

    }
}



export default App;