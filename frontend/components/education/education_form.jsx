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
        // debugger
        this.state = {
            ...props.education,
            startMonth: '',
            endMonth: '',
            startYear: '',
            endYear: '',
            yearErr: false, 
            schoolErr: false,
            gpaErr: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.yearErrMsg = '';
    }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ yearErr: false });

        if (!this.handleErrors()) {

            const { startYear, startMonth, endYear, endMonth, userId } = this.state;

            const start_date = `${startYear}-${months.indexOf(startMonth) + 1}-01`;
            const end_date = `${endYear}-${months.indexOf(endMonth) + 1}-01`;

            this.props.processForm({
                ...this.state,
                user_id: userId,
                start_date: start_date,
                end_date: end_date,
            });

            this.props.closeModal();
        }
        
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleErrors() {
        console.log(this.state);
        const { startYear, endYear, startMonth, endMonth, school, gpa } = this.state;
        let errorSwitch = false;

        if ((!startYear.length && !startMonth.length)) {
            this.setState({ yearErr: true });
            this.yearErrMsg = 'Please enter a start date';
            errorSwitch = true;
        } else if (!endYear.length && !endMonth.length) {
            this.setState({ yearErr: true });
            errorSwitch = true;
            this.yearErrMsg = 'Please enter an end date'
        } else {
            // parseInt turns a string to an integer
            const start = parseInt(startYear);
            const end = parseInt(endYear);

            if (start > end || (start == end && months.indexOf(startMonth) > months.indexOf(endMonth))) {
                this.setState({ yearErr: true });
                errorSwitch = true;
                this.yearErrMsg = "Your start date can't be after your end date"
            }
        };

        if (!school.length) {
            this.setState({ schoolErr: true });
            errorSwitch = true;
        };

        if (!gpa.length) {
            this.setState({ gpaErr: true });
            errorSwitch = true;
        }

        const parsed = parseInt(gpa);
        console.log(gpa);

        if (parsed < 0 || parsed > 4.0) {
            this.setState({ gpaErr: true });
            errorSwitch = true;
        };

        return errorSwitch;
    }


    render() {
        // console.log(this.state);
        // debugger
        const { id, school, degree, field, gpa, startDate, endDate, activities, description, schoolErr, yearErr, gpaErr } = this.state;

        const startDateEdu = new Date(`${startDate}`);
        const endDateEdu = new Date(`${endDate}`);


        const years = [];
        for(let i = 1945; i <= 2042; i++ ) {
            years.unshift(i)
        };

        const monthOptions = months.map(month => (
            <option key={month} value={month}>{month}</option> 
        ));

        const endDateSelectors = (
            <>
                <select className='edu-selector-form' onChange={this.handleInput('endMonth')}>
                    <option value='Month'>{months[endDateEdu.getMonth() - 1] || 'Month'}</option>
                    {monthOptions}
                </select>
                <select> 
                    <option value='Year'>{endDateEdu.getFullYear() || 'Year'}</option>
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
                    <span className='close-modal-button' onClick={() => this.props.closeModal()}>✕</span> 
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
                            <select className='start-month' onChange={this.handleInput('startMonth')} >
                                <option value='Month'>{months[startDateEdu.getMonth() - 1] || 'Month'}</option>
                                {monthOptions}
                            </select>
                            <select className='start-year' onChange={this.handleInput('startYear')} >
                                <option value='Year'>{startDateEdu.getFullYear() || 'Year'}</option>
                                {years.map(year => {
                                    if (year < 2022) return (<option key={year}>{year}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="edu-end-year">
                        <label>End Date</label>
                        {endDateSelectors}
                    </div>
                    {yearErr ? <p className='error-msg'>Your end year can't be earlier than your start year</p> : null}
                    <label>GPA</label>
                    <input type='text' value={gpa || ''} onChange={this.handleInput('gpa')} />
                    {gpaErr ? <p>Please enter GPA between 0 and 4</p> : null}
                    <label>Activities</label>
                    <input type='text' value={activities || ''} onChange={this.handleInput('activities')} />
                    <label>Description</label>
                    <input type='text' value={description || ''} onChange={this.handleInput('description')} />
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