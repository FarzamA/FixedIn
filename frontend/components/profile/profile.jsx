import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';
import EducationIndexContainer from '../education/education_index';
import ExperienceIndexContainer from '../experiences/experience_index';
import UserDetailContainer from './user_detail';

class Profile extends React.Component {
    componentDidMount() {
        const { fetchUser, match } = this.props;
        //wip
        fetchUser(match.params.id);
    }

    render() {
        const { experiences, educations, user } = this.props

        if (!user) return null;
        // debugger

        return(
            <div className='profile-page-cont'>
                <div className='user-section'>
                    <UserDetailContainer lastEducation={educations[0]} lastExperience={experiences[0]} />
                </div>
                <div className='edu-section'>
                    <EducationIndexContainer educations={educations} />
                </div>
                <div> </div>
                    <ExperienceIndexContainer experiences={experiences} />
            </div>
        )
    }
}




const mSTP = ({ entities: { users, educations, experiences } }, ownProps) => {
   const sortedExperiences = Object.values(experiences).filter(
       experience => experience.userId == ownProps.match.params.id
   ).sort(
       (a, b) => {
           if ((a.endDate == null || a.endDate == '') && (b.endDate != null && b.endDate != '')) {
               return -1
           } else if ((a.endDate == null || a.endDate == '') && (b.endDate == null || b.endDate == '')) {
               //checking for time elapsed since jan 1
               if (Date.parse(a.startDate) > Date.parse(b.startDate)) {
                return -1
               } else {
                return 1    
               }
           }
       }
   );

       const sortedEducations = Object.values(educations).filter(
           edu => edu.userId == ownProps.match.params.id
       ).sort((a, b) => {
            if ((a.endDate == null || a.endDate == '') && (b.endDate != null && b.endDate != '')) {
                return -1
            } else if ((a.endDate == null || a.endDate == '') && (b.endDate == null || b.endDate == '')) {
                //checking for time elapsed since jan 1
                if (Date.parse(a.startDate) > Date.parse(b.startDate)) {
                    return -1
                } else {
                    return 1   
                } 
            }
        })

    return {
        educations: sortedEducations,
        experiences: sortedExperiences,
        user: users[ownProps.match.params.id]
    }
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

const ProfileContainer = withRouter(connect(mSTP, mDTP)(Profile));

export default ProfileContainer;