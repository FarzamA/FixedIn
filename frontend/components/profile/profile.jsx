import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/session_actions';

class Profile extends React.Component {
    componentDidMount() {

    }
}




const mSTP = ({ entities: { users, educations, experiences }, session: { currentUser }}, ownProps) => {
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
               } else 
               return 1    
           }
       }
   );

       const sortedEducation = Object.values(educations).filter(
           edu => edu.userId == ownProps.match.params.id
       ).sort((a, b) => {
            if ((a.endDate == null || a.endDate == '') && (b.endDate != null && b.endDate != '')) {
                return -1
            } else if ((a.endDate == null || a.endDate == '') && (b.endDate == null || b.endDate == '')) {
                //checking for time elapsed since jan 1
                if (Date.parse(a.startDate) > Date.parse(b.startDate)) {
                return -1
                } else 
                return 1    
            }
        })

    return {
        educations: sortedEducations,
        experiences: sortedExperiences,
        user: user[ownProps.match.params.id]
    }
};

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
});

const ProfileContainer = withRouter(connect(mSTP, mDTP)(Profile));

export default ProfileContainer;