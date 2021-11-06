import { connect } from "react-redux";
import { createEducation } from "../../actions/education_actions";
import EducationForm from './education_form';


const mSTP = ({session: { currentUser }}) => ({
    education: {
        userId: currentUser,
        school: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
        activities: '',
        description: ''
    },

    formType: 'Add education'
});


const mDTP = dispatch => ({
    processForm: education => dispatch(createEducation(education))
});

const CreateEducationForm = connect(mSTP, mDTP)(EducationForm);

export default CreateEducationForm;