import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchUsers } from '../../util/session_api_util';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            results: []
        };

        this.handleInput = this.handleInput.bind(this);
        this.redirectUser = this.redirectUser.bind(this);
    };

    handleInput(e) {
         if (e.target.value.length) {
             searchUsers(e.target.value).then(results => {
                 this.setState({ results });
             });
         } else {
             this.setState({ results: [] });
         }
    };

    redirectUser(userId) {
        this.setState({ results: [] });
        document.getElementById('search-field').value = '';
        this.props.history.push(`/users/${userId}`);
        // this.forceUpdate();
    }

    render() {
        return (
            <div className="search-container">
                <div>
                    <i className="fas fa-search"></i>
                    <ul className='search-results'>
                        {this.state.results.map(user => (
                            <li key={user.id} onClick={() => {this.redirectUser(user.id)}}>
                                <p>{`${user.firstName} ${user.lastName}`}</p>
                            </li>
                        ))}
                    </ul>
                    <input type='text' placeholder='Search' id='search-field' onChange={this.handleInput} />
                </div>
            </div>
        )
    }

};

export default withRouter(SearchBar);