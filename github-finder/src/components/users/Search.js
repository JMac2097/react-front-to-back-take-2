import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    // pulls in the targets name value, in this case text, but could apply to email for example if that input existed
    onChange = e => this.setState({ [e.target.name] : e.target.value });

    render() {
        const { showClear, clearUsers } = this.props;

        return (
			<div>
				<form onSubmit={this.onSubmit} className="form">
					<input
						type="text"
						name="text"
						placeholder="Search Users"
						onChange={this.onChange}
					/>
					<input
						type="submit"
						value="Search"
						className="btn btn-dark btn-block"
					/>
                </form>
                {showClear && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={clearUsers}
				    >
					    Clear
				    </button>
                )}

			</div>
		);
    }
}

export default Search
