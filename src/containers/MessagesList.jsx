import { connect } from 'react-redux';

import { MessagesList as Comp } from '../components';

export default connect(
    state => ({
        messages: state.chat.messages
    })
)( Comp );