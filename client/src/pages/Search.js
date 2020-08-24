import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    handleInputChange = (e) => {
        const name = (e).target.name;
        const value = (e).target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (e) => {
        (e).preventDefault();
        this.searchBook(this.state.search);
    };

    // When the user first loads the page Ant books will 
    // be populated to the page
    componentDidMount() {
        this.searchBook('Ant');
    }

    // Create book cards that hold the following info
    createBookCard = bookData => {
        console.log(bookData)
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.smallThumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    // Search the google api with the user generated query
    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(bookData => this.createBookCard(bookData)) }))
            .catch(err => console.error(err));
    };

    render() {
        return (
            <div>
                {/* Search input field for users */}
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                {/* Results that are shown to the users */}
                <div className="container">
                    <h2 className='text-center'>Results:</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;
