import { ADD_NAME, ADD_SKILLS, ADD_BRAND, GET_NAME } from "../types";

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const addSkill = (skills) => ({
  type: ADD_SKILLS,
  payload: skills,
});

export const addBrand = (brand) => ({
  type: ADD_BRAND,
  payload: brand,
});

export default {
  addName,
  addBrand,
  addSkill,
};
