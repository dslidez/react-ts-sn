import { connect } from "react-redux";
import { sendMessageAC, updateNewMessageBodyAC } from "../../redux/store";
import { DialogItem } from "./DialogItem/DialogItem";
import { Dialogs } from "./Dialogs";
import s from "./Dialogs.module.css";
import { Message } from "./Message/Message";




let mapStateToProps = (state: any) => {
  return {
    dialogsPage: state.dialogsPage
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export { DialogsContainer };

