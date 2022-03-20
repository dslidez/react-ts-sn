import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/store";
import { Dialogs } from "./Dialogs";





let mapStateTo Props = (state: any) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyAC(body))
      
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }, 
  }
}

// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
const DialogsContainer = compose<React.FC>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)

export { DialogsContainer };


