import React from 'react';
import { connect } from 'react-redux';
import { receiveUserLocation } from '../../actions/session_actions';

class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user;

        this.state = {
            city: user.city || '',
            state: user.state || '',
            cityError: false,
            stateError: false
        };
    };

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value })
    };

    handleErrors() {
        const { city, state } = this.state; 
        let errorSwitch = false;

        console.log(state, 'state');
        console.log(city, 'city');

        if (city === '' || !city.length) {
            this.setState({ cityError: true });
            errorSwitch = true;
        }

        if (state === '' || !state.length) {
            this.setState({ stateError: true });
            errorSwitch = true;
        };

        return errorSwitch;
    };

    handleSubmit(e) {
        e.preventDefault();

        if (!this.handleErrors()) {
            const { city, state } = this.state;
            const location = city + ',' + state;
            this.props.receiveUserLocation(Object.assign({}, this.state, { location }));
            this.props.history.push('/signup/job');
        }
    };

    render() {
        const { cityError, stateError } = this.state;

        return (
            <div className='signup-form'>
                <label>Where are you located?</label>
                <h2>We’ll recommend posts and people near you to help you excel.</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>City *
                        <br/>
                        <input type='text' value={this.state.city} className={cityError ? 'input-error' : ''} onChange={this.handleInput('city')} />
                        <br/>
                        {cityError ? <p className='error-msg'>Please enter a city</p> : null}
                    </label>
                    <br/>
                    <label>State *
                        <br/>
                        <input type='text' value={this.state.state} className={stateError ? 'input-error' : ''} onChange={this.handleInput('state')} />
                        <br/>
                        {stateError ? <p className='error-msg'>Please enter a state</p> : null}
                    </label>
                    <br/>
                    <button type='submit' className='form-button' >Continue</button>
                </form>
            </div>
        )
    }
    

};

const mSTP = ({ session: { signUp }}) => ({
    firstName: signUp.firstName,
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserLocation: location => dispatch(receiveUserLocation(location))
});

const LocationFormContainer = connect(mSTP, mDTP)(LocationForm);

export default LocationFormContainer