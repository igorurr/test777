import { connect } from 'react-redux';

import { Header as Comp } from '../components';

const Header = connect(
    ({ chat: { initIsLoading, users, user } }) => {
        if( initIsLoading )
            return {
                initIsLoading: true
            };

        const { name, color } = users.find( us => us.id === user );

        return {
            initIsLoading: false,
            name,
            color,
        }
    }
)( Comp );

export default Header;