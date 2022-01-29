
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component<any> {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 19826
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
    .then((response: any) => {
      this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps, {setUserProfile} ) (WithUrlDataContainerComponent);
