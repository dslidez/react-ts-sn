
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileTC, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";

import { compose } from "redux";

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19826
    }
    this.props.getUserProfileTC(userId);
    this.props.getStatus(userId)
  }
  componentDidUpdate() {
      document.title = 'PAGE: ' + this.props.profile.fullName
  }
  componentWillUnmount() {
    document.title = 'SOCIAL NETWORK'
  }

  render() {
    return (
    <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}


let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


// let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfileTC} ) (WithUrlDataContainerComponent);

const ProfileContainerr = compose<React.FC>(
  connect(mapStateToProps, {getUserProfileTC, getStatus, updateStatus}),
  withRouter,
 // withAuthRedirect
)(ProfileContainer)

export default ProfileContainerr