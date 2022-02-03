import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
  })

export const withAuthRedirect = (Component: any) => {
    function RedirectComponent(props: any) {
            if (!props.isAuth) return  <Redirect to='/login'/>
            return <Component {...props}/>
    }

    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}