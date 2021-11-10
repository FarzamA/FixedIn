import React from 'react';
import { withRouter } from 'react-router-dom';
import { searchUsers } from '../../util/session_api_util';

//allows for a delay before search bar pops up
let delay;
const debounce = (callback, wait = 250) => {
  return (...args) => {
    clearTimeout(delay);
    delay = setTimeout(() => { callback.apply(null, args); }, wait);
  };
};

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
            debounce(() => {
                searchUsers(e.target.value).then(results => {
                    this.setState({ results });
                });
            }, 300)();
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

                                <div className='avatar-smaller'>
                                    <img src={user.avatarUrl || window.defaultUser} alt="Avatar"/>
                                </div>

                                <p>{`${user.firstName} ${user.lastName}`}</p>
                            </li>
                        ))}
                    </ul>
                    <input type='text' placeholder='Search' id='search-field' onChange={this.handleInput} onFocus={this.handleInput} onBlur={() => this.setState({ results: [] })} />
                </div>
            </div>
        )
    }

};

export default withRouter(SearchBar);