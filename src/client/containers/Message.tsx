import * as React from "react";
import { connect } from "react-redux";

import { Message as Comp } from "../components";

export interface IMessage {}

interface State {
  message;
}

class Message extends React.Component<IMessage, State> {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
    };
  }

  static getDerivedStateFromProps({ getMessage, getUser, isMy, id }, state) {
    const message = getMessage(id);
    const user = getUser(message.user);
    return {
      ...state,
      message: {
        ...message,
        user,
        online: user.online,
        isMy: isMy(message.user),
      },
    };
  }

  render() {
    const { message } = this.state;
    return <Comp {...message} />;
  }
}

export default connect(({ chat: { messages }, user: { users, user } }) => ({
  getMessage: (id) => messages.find((el) => el.id === id),
  getUser: (id) => users.find((el) => el.id === id),
  isMy: (id) => user === id,
}))(Message);
