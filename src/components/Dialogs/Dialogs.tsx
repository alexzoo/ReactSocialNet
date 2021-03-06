import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/DialogItem";
import {Message, MessageProps} from "./Message/Message";
import {ActionTypes} from "../REDUX/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../REDUX/dialogs-reducer";

type DialogsType = {
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessageProps>
    newMessageBody: string
    dispatch: (action: ActionTypes) => void
}

const Dialogs = (props: DialogsType) => {

    let dialogs = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name} src={d.src}/>)
    let messages = props.messageData.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageBody = props.newMessageBody;

    let onSentMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
                <div className={c.addMessageContainer}>
                    <textarea className={c.textarea}
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                              placeholder={"Enter your message..."}> </textarea>
                    <button className={c.addMessage} onClick={onSentMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;