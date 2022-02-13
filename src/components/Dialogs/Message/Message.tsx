
import s from "./../../Dialogs/Dialogs.module.css";

type MessagePropsType = {
  id: number
  message: string
}


export const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>;
  };
  