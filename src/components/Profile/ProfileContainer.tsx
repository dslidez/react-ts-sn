
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfileTC } from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

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
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC} ) (WithUrlDataContainerComponent);
