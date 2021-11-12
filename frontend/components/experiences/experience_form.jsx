import React from "react";
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
  
  const empTypes = [
    '-', 
    'Full-time', 
    'Part-time', 
    'Self-employed', 
    'Freelance', 
    'Contract', 
    'Internship', 
    'Apprenticeship', 
    'Seasonal'
  ];

class ExperienceForm extends React.Component { 
    constructor(props) {
        super(props);
        // debugger

        const startDateExp = new Date(`${props.experience.startDate}`);

        const endDateExp = new Date(`${props.experience.endDate}`);

        const startMonth = months[startDateExp.getMonth()];
        const startYear = startDateExp.getFullYear();
        const endMonth = months[endDateExp.getMonth()];
        const endYear = endDateExp.getFullYear();
        
        this.state = {
            ...props.experience,
            startMonth: startMonth || '',
            endMonth: endMonth || '',
            startYear: startYear || '',
            endYear: endYear || '',
            titleErr: false,
            companyErr: false,
            yearErr: false,
            present: props.experience.endDate ? false : true
        };

        this.yearErrMsg = '';

        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglePresent = this.togglePresent.bind(this);
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ yearErr: false });
        this.setState({ titleErr: false });
        this.setState({ companyErr: false });

        if (!this.handleErrors()) {
            const { startYear, startMonth, endYear, endMonth, present, userId, employmentType } = this.state;
            
            const start_date = `${startYear}-${months.indexOf(startMonth) + 2}-01`;

            let end_date;   
            if (!present) {
                end_date = `${endYear}-${months.indexOf(endMonth) + 2}-01`
            };

            this.props.processForm({
                ...this.state, 
                user_id: userId, 
                start_date,
                end_date,
                employment_type: employmentType
            });

            this.props.closeModal();
        }
    };

    togglePresent() {
        if (this.state.present) {
            this.setState({ present: false });
        } else {
            this.setState({ present: true });
        }
    };


    handleErrors() {
        // debugger
        const { endMonth, endYear, title, company, present, startMonth, startYear } = this.state;
        let errorSwitch = false;
        // let startYear;
        // let startMonth;

        // let endYear; 
        // let endMonth;

        // if (startDate) {
        //     const start = new Date(`${startDate}`);

        //     startMonth = months[start.getMonth()];
        //     startYear = start.getFullYear();

        //     this.setState({
        //         startMonth: startMonth,
        //         startYear: startYear
        //     });
        // } else if (endDate) {
        //     const end = new Date(`${endDate}`);

        //     endMonth = months[end.getMonth()];
        //     endYear = end.getFullYear();

        //     this.setState({
        //         enMonth: endMonth,
        //         endYear: endYear
        //     })
        // };
        // debugger
        // console.log("start yr", startYear);
        // console.log("start month", startMonth);
        // console.log("end month", endMonth);
        // console.log("end year", endYear);
        if (!startYear.length && !startMonth.length) {
            this.setState({ yearErr: true });
            this.yearErrMsg = 'Please enter a start date';
            errorSwitch = true;
        } else if (!present && !endYear.length && !endMonth.length) {
            this.setState({ yearErr: true });
            errorSwitch = true;
            this.yearErrMsg = 'Please enter an end date'
        } else {
            // parseInt turns a string to an integer
            const start = parseInt(startYear);
            const end = parseInt(endYear);

            if (start > end || (start === end && months.indexOf(startMonth) > months.indexOf(endMonth))) {
                this.setState({ yearErr: true });
                errorSwitch = true;
                this.yearErrMsg = "Your start date can't be after your end date"
            }
        };

        if (!title.length) {
            this.setState({ titleErr: true });
            errorSwitch = true;
        };

        if (!company.length) {
            this.setState({ companyErr: true });
            errorSwitch = true;
        };

        return errorSwitch;
    }

    render() {
        console.log(this.state)
        const { id, title, company, location, description, startDate, endDate, 
            titleErr, companyErr, yearErr, present, industry, field, employmentType } = this.state;

        const startDateExp = new Date(`${startDate}`);
        const endDateExp = new Date(`${endDate}`);
            // debugger
        const years = [];
            for (let i = 1945; i <= 2042; i++) {
            years.unshift(i);
        };

        const monthOptions = months.map(month => (
            <option key={month} value={month}>{month}</option>
        ));


        const endDateSelectors = present ? <p>Present</p> : (
            <>
                <select className='exp-selector-form' onChange={this.handleInput('endMonth')} defaultValue={months[endDateExp.getMonth()] || 'Month'}>
                    {/* <option value='Month'>{months[endDateExp.getMonth()] || 'Month'}</option> */}
                    {monthOptions}
                </select>
                <select onChange={this.handleInput('endYear')} defaultValue={endDateExp.getFullYear() || 'Year'}> 
                    {/* <option value='Year'>{endDateExp.getFullYear() || 'Year'}</option> */}
                    {years.map(year => (
                        <option key={year}>{year}</option>
                    ))}
                </select>
            </>
        );

        const deleteBtn = this.props.deleteExperience ? (
            <button onClick={() => {this.props.deleteExperience(id); this.props.closeModal()}} className='delete btn'>Delete</button>
        ) : null;

        return (
            <div className='modal'>
                <header>
                <h2>{this.props.formType}</h2>
                    <span className='close-modal-button' onClick={() => this.props.closeModal()}>✕</span> 
                </header>
                <form className='edu-form'> 
                    <label>Title*</label>
                    <input type='text' className={titleErr ? 'input-error': ''} value={title || ''} onChange={this.handleInput('title')} />
                    {titleErr ? <p className='error-msg'>Please enter your title</p> : null}
                    <label>Employment type</label>
                    <select onChange={this.handleInput('employmentType')}>
                        <option value='Type'>{empTypes[empTypes.indexOf(employmentType)] || 'Employment Type'}</option>
                        {empTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <label>Company*</label>
                        <input type='text' className={companyErr ? 'input-error': ''} value={company || ''} onChange={this.handleInput('company')} /> 
                        {companyErr ? <p className='error-msg'>Please enter a company name</p> : null}
                    <label>Location</label>
                        <input type="text" value={location || ''} onChange={this.handleInput('location')}/>
                    <label className='checkbox'>
                        <input type="checkbox" checked={present ? true : false} onChange={this.togglePresent}/> I am currently working this role
                    </label>

                    <div className='year-form'>
                        <label>Start Date</label>
                        <div className='exp-date'>
                            <select className='start-month' onChange={this.handleInput('startMonth')} defaultValue={months[startDateExp.getMonth()] || 'Month'} >
                                {/* <option value='Month'>{months[startDateExp.getMonth()] || 'Month'}</option> */}
                                {monthOptions}
                            </select>
                            <select className='start-year' onChange={this.handleInput('startYear')} defaultValue={startDateExp.getFullYear() || 'Year'} >
                                {/* <option value='Year'>{startDateExp.getFullYear() || 'Year'}</option> */}
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
                    {yearErr ? <p className='error-msg'>{this.yearErrMsg}</p> : null}
                    {/* <label>Field</label>
                        <input type='text' value={field || ''} onChange={this.handleInput('field')} /> */}
                    <label>Headline</label>
                        <input type='text' value={industry || ''} onChange={this.handleInput('industry')}/>
                    <label>Description</label>
                        <textarea value={description || ''} onChange={this.handleInput('description')}/>
                </form>
                <footer className='exp-edu-footer'>
                    <button onClick={this.handleSubmit}>Save</button>
                    {deleteBtn}
                </footer>
            </div>
        );
    }
};

export default ExperienceForm;