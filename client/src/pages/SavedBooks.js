import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {

    state = {
        savedBooks: [],
    }

    // When the page loads, the saved books that the user has 
    // chosen will be displayed to them
    componentDidMount() {
        // API.savedBooks()
        //     .then(savedBooks => this.setState({ savedBooks: savedBooks }))
        //     .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2 className= "text-center">Your Saved Books</h2>
                <Results books= {this.state.savedBooks} />
            </div>
        )
    }
    
}

export default Saved;