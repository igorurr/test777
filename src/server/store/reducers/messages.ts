import { INCREMENT_MESSAGE_ID } from "../constants/messages";

const initialState = {
  newMessageId: 0,
};

export default (state = initialState, { type, ...action }) => {
  switch (type) {
    case INCREMENT_MESSAGE_ID: {
      return {
        ...state,
        newMessageId: state.newMessageId + 1,
      };
    }

    default:
      return state;
  }
};
