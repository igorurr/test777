import { connect } from "react-redux";

import { MessagesList as Comp } from "../components";

const MessagesList = connect(({ chat: { messages } }) => ({
  messages,
}))(Comp);

export default MessagesList;
