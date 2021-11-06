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
            endMon: '',
            startYear: '',
            endYear: '',
            yearErr: false, 
            schoolErr: false 
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ yearErr: false });

        const { startYear, startMon, endYear, endMon, userId } = this.state;

        const start_date = `${startYear}-${months.indexOf(startMon) + 1}-01`;
        const end_date = `${endYear}-${months.indexOf(endMon) + 1}-01`;

        this.props.processForm({
            ...this.state,
            user_id: userId,
            start_date: start_date,
            end_date: end_date,
        });

        this.props.closeModal();
        
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };


    render() {
        const { id, school, degree, field, gpa, start_date, end_date, activities, description, schoolErr, yearErr } = this.state;

        const years = [];
        for(let i = 1945; i <= 2042; i++ ) {
            years.unshift(i)
        };

        const monthOptions = months.map(month => (
            <option key={month} value={month}>{month}</option> 
        ));

        const endDateSelectors = (
            <>
                <select className='edu-selector-form' onChange={this.handleInput('endMon')}>
                    <option value='Month'>Month</option>
                    {monthOptions}
                </select>
                <select> 
                    <option value='Year'>Year</option>
                    {years.map(year => (
                        <option key={year}>{year}</option>
                    ))}
                </select>
            </>
        );

        const deleteBtn = this.props.deleteEducation ? (
            <button onClick={() => {this.props.deleteEducation(id)}} className='delete btn'>Delete</button>
        ) : null;

        return (
            <div className='modal'>
                <header>
                    <h2>{this.props.formType}</h2>
                    <span className='close-modal-button' onClick={() => this.props.closeModal()}>X</span> 
                </header>
                <form className='edu-form'>
                    <label>School*</label> 
                        <input type='text' className={schoolErr ? 'input-error' : ''} value={school} onChange={this.handleInput('school')}  />
                        {schoolErr ? <p>Please enter a school name</p> : null}
                    <label>Degree</label> 
                        <input type='text' value={degree} onChange={this.handleInput('degree')}  />
                    <label>Field</label> 
                        <input type='text' value={field} onChange={this.handleInput('field')}  />

                    <div className='year-form'>
                        <label>Start Date</label>
                        <div className='edu-date'>
                            <select className='start-month' onChange={this.handleInput('startMon')} >
                                <option value='Month'>Month</option>
                                {monthOptions}
                            </select>
                            <select className='start-year' onChange={this.handleInput('startYear')} >
                                <option value='Year'>Year</option>
                                {years.map(year => {
                                    if (year < 2022) return (<option key={year}>{year}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="edu-end-year">
                        <label>End Date*</label>
                        {endDateSelectors}
                    </div>
                    {yearErr ? <p className='error-msg'>Error</p> : null}
                    <label>GPA</label>
                    <input type='text' value={gpa} onChange={this.handleInput('gpa')} />
                    <label>Activities</label>
                    <input type='text' value={activities} onChange={this.handleInput('activities')} />
                    <label>Description</label>
                    <input type='text' value={description} onChange={this.handleInput('description')} />
                </form>
                <footer className='exp-edu-footer'>
                    <button onClick={this.handleSubmit}>Save</button>
                    {deleteBtn}
                </footer>
            </div>
            
        );
    }
}

export default EducationForm;