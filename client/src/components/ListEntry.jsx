import React, { Component } from 'react';
import axios from 'axios';

class ListEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            editField: '',
            liked: false

        }
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleEditField = this.handleEditField.bind(this);
        this.handleSaveEditButton = this.handleSaveEditButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        // PROPS: post.
        // username,
        // thought,
        // liked,
        // createdAt,
        // updatedAt,
    }

    handleEditButton(e) {
        e.preventDefault();    
        this.setState({ editMode: true })
    }

    handleEditField (e) {
        this.setState({
            editField: e.target.value
        })
    }

    handleSaveEditButton(e) {
        e.preventDefault();
        let thought = this.state.editField;
        axios
        .delete(`/api/${this.props.post.id}`, { thought })
        .then(this.props.fetchPostedThoughts)
    }

    handleDeleteButton(e) {
        e.preventDefault();
        axios
        .delete(`/api/${this.props.post.id}`)
        .then(this.props.fetchPostedThoughts)
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend className="username">{this.props.post.username}</legend>
                    
                    {!this.state.editMode &&
                    <div>
                        <p className="postedThought">{this.props.post.thought.trim()}</p><br />
                        <button>Edit</button>
                        <button onClick={this.handleDeleteButton}>Delete</button>
                    </div>
                    }
                    
                    {this.state.editMode &&
                    <div>
                        <textarea rows="4" cols="50" maxLength="240" value={`${this.props.thought}`} onChange={this.handleEditField} /><br />
                        <button onClick={this.handleSaveEditButton}>Save</button>
                    </div>
                    }

                    <p className="postDate">posted {this.props.post.createdAt}</p>
                </fieldset>
            </div>
        )
    }

}

export default ListEntry;