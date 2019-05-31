import { connect } from "react-redux";

import { Header as Comp } from "../components";

const Header = connect(
  ({ app: { initIsLoading, isExit }, user: { users, user } }) => {
    if (initIsLoading || isExit)
      return {
        initIsLoading,
        isExit,
      };

    const { name, color } = users.find((us) => us.id === user);

    return {
      initIsLoading,
      isExit,
      name,
      color,
    };
  }
)(Comp);

export default Header;
