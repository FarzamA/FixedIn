import React from 'react';

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

class EducationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.education,
            startMon: '',
            startYear: '',
            endYear: '',
            yearErr: false, 
            schoolErr: false 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
    };


    render() {
        const { id, school, degree, field, gpa, start_date, end_date, activities, description, schoolErr, yearErr } = this.state;

        const years = [];
        for(let i = 1945; i <= 2042; i++ ) {
            years.unshift(i)
        };

        const monthOptions = months.map(month => (
            <option key={month} value={month}>{month}</option> 
        ))

        const deleteBtn = this.props.deleteEducation ? (
            <button onClick={() => {this.props.deleteEducation(id)}} className='delete btn'>Delete</button>
        ) : null;

        return (
            <div className='delete btn'>
                <header>
                    <h2>{this.props.formType}</h2>
                    <span className='close-modal-button' >X</span> 
                </header>
                <form className='edu-form'>
                    <label>School*</label> 
                        <input type='text' className={schoolErr ? 'input-error' : ''} value={school} onChange={this.handleInput('school')}  />
                        {schoolErr ? <p>Please enter a school name</p> : null}
                    <label>Degree</label> 
                        <input type='text' value={degree} onChange={this.handleInput('degree')}  />
                    <label>Field</label> 
                        <input type='text' value={field} onChange={this.handleInput('field')}  />
                </form>
            </div>
        );
    }
}