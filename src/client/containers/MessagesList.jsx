import { connect } from 'react-redux';

import { MessagesList as Comp } from '../components';

const MessagesList = connect(
    state => ({
        messages: state.chat.messages
    })
)( Comp );

export default MessagesList;