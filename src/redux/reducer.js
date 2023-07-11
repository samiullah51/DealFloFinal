import {
  HIDE__SEARCH,
  HIDE__SIDEBAR,
  SHOW__SEARCH,
  SHOW__SIDEBAR,
} from "./type";

const initialState = {
  sidebar: false,
  search: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW__SIDEBAR:
      return {
        ...state,
        sidebar: true,
      };
    case HIDE__SIDEBAR:
      return {
        ...state,
        sidebar: false,
      };
    case SHOW__SEARCH:
      return {
        ...state,
        search: true,
      };
    case HIDE__SEARCH:
      return {
        ...state,
        search: false,
      };
    default:
      return state;
  }
};
