import React from "react";
import CardList from "../Components/CardList";
import Scroll from '../Components/Scroll';
import SearchBox from "../Components/SearchBox";
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [], // set-amo robote kao prazan array da bi ga kasnije punili JSONima
            searchBox: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // fetcha JSONe preko interneta
            .then(response => response.json()) // pretvara ih u JS
            .then(users =>
                this.setState({ robots: users })); // puni robots array sa tim JSONima
    }

    onSearchChange = (e) => { // ova metoda searchBox property iz statea puni vrijednosti elementa koji aktivira event (input)
        this.setState({ searchBox: e.target.value });
    }

    render() {
        const { robots, searchBox } = this.state;
        const filteredRobots = robots.filter((robot, i) => {
            return robot.name.toLowerCase().includes(searchBox.toLowerCase()) // ovo svaki input pretvara u lowercase i returna ako se popudaraju unos korisnika i ime robota
        });
        return !robots.length ? <h1>Loading...</h1> : // ako je length robota false, onda daj h1 kao ucitavanje fazon
            <div className="tc">
                <h1 className="h1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} /> {/* search box component ima props searchChange koji se aktivira na onChange i poyiva onSearchChange metodu  */}
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div >

    }
}



export default App;     