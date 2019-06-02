import { connect } from "react-redux";

import { NewMessage as Comp } from "../components";

import { actions } from "../store";
const { sendMessage, writingMessage } = actions.chat;

const NewMessage = connect(
  ({
    app: { initIsLoading, isExit },
    chat: { message, sendMessageIsLoading },
  }) => ({
    initIsLoading,
    isExit,
    sendMessageIsLoading,
    isReady: !initIsLoading && !isExit && !sendMessageIsLoading,
    message,
  }),
  dispatch => ({
    sendMessage: () => dispatch(sendMessage()),
    changeMessage: e => dispatch(writingMessage(e.target.value)),
  }),
)(Comp);

export default NewMessage;
