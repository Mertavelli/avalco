import { createSelector } from 'reselect';

const selectAuthData = state => state.auth.user;

export const selectUserData = createSelector(
  [selectAuthData],
  user => ({
    _id: user._id,
    email: user.email,
    name: user.name
  })
);
