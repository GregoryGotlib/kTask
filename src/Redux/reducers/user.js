import {
  ADD_NAME,
  ADD_SKILLS,
  ADD_BRAND,
  GET_BRANDS,
  GET_SKILLS,
  GET_NAME,
} from "../types";

const initialState = {
  userName: "",
  skills: [],
  brands: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      const x = action.payload;
      return { ...state, userName: x };
    case ADD_SKILLS:
      if (state.skills.indexOf(action.payload) > 0) {
        state.skills.filter((skill) => skill != action.payload);
        return { ...state };
      }
      return { ...state, skills: [action.payload, ...state.skills] };
    case ADD_BRAND:
      return { ...state, brands: [action.payload, ...state.brands] };
    default:
      return state;
  }
};

export default user;
