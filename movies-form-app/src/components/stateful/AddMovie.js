import React, { Component } from 'react';

class AddMovie extends Component {

    constructor(props) {

        super(props)

        this.state = {
            title: '',
            director: '',
            hasOscars: false,
            IMDbRating: ''
        }
    }


    /*
    handleTitleInput = e => this.setState({ title: e.target.value })
    handleDirectorInput = e => this.setState({ director: e.target.value })
    handleOscarInput = e => this.setState({ hasOscars: e.target.checked })
    handleRatingInput = e => this.setState({ IMDbRating: e.target.value })
    */

    handleChange = e => {

        let { name, value, checked } = e.target
        value = checked ? checked : value
        this.setState({ [name]: value })
    }



    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addTheMovie(this.state)
        this.setState({ title: '', director: '', hasOscars: false, IMDbRating: '' })
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Título:
                <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Director:
                <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Obtuvo Oscar:
                <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <label>Puntuación IMDb:
                <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)} />
                </label>
                <br></br>

                <input type="submit" value="enviar" />
            </form>
        )
    }
}

export default AddMovie