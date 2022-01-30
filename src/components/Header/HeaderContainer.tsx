import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import {setAuthUserData} from './../../redux/auth-reducer'
import { authAPI } from "../../api/api";

type MyProps = { };
type MyState = { value: string };

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
      authAPI.me().then((response: any) => {
          if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login);
          }
        });
  }
  
  render() {
  return (
   <Header {...this.props}/>
   );
 }
}

const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)