
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileTC } from './../../redux/profile-reducer';
import { Redirect, withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19826
    }
    this.props.getUserProfileTC(userId);
  }

  render() {
    return (
    <Profile {...this.props} profile={this.props.profile} />
    )
  }
}


let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile,
})


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfileTC} ) (WithUrlDataContainerComponent);

const ProfileContainerr = compose<React.FC>(
  connect(mapStateToProps, {getUserProfileTC}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer)

export default ProfileContainerr