import React, { Component } from 'react';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

	render() {
		return (
			<input
				type="text" 
				placeholder="search"
                className="form-control search-input"
                value={ this.state.term } 
                onChange={ this.onSearchChange } />
		);
	}
};
