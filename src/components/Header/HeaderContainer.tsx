import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { getAuthUserDataTC } from "./../../redux/auth-reducer";

type MyProps = {};
type MyState = { value: string };

class HeaderContainer extends React.Component<any> {

  componentDidMount() {
    this.props.getAuthUserDataTC();
  }

  render() {
    return <Header {...this.props} />;
  }

}


const mapStateToProps = (state: any) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps, { getAuthUserDataTC })(HeaderContainer);
