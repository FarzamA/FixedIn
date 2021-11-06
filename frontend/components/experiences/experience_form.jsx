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

        this.state = {
            ...props.experience,
            startMonth: '',
            endMonth: '',
            startYear: '',
            endYear: '',
            titleErr: false,
            yearErr: false,
            present: true
        };

        this.yearErrMsg = '';

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return ();
    }
}