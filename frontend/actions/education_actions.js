import * as EducationAPI from '../util/education_api';

export const RECEIVE_EDUCATIONS = 'RECEIVE_EDUCATIONS';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

const receiveEducation = education => ({
    type: RECEIVE_EDUCATION,
    education
});

const removeEducation = educationId => ({
    type: REMOVE_EDUCATION,
    educationId
});

export const createEducation = education => dispatch => (
    EducationAPI.createEducation(education).then(
        education => dispatch(receiveEducation(education))
    )
);

export const updateEducation = education => dispatch => (
    EducationAPI.updateEducation(education).then( 
        education => dispatch(receiveEducation(education))
    )
);

export const deleteEducation = educationId => dispatch => (
    EducationAPI.deleteEducation(educationId).then(
        () => dispatch(removeEducation(educationId))
    )
);