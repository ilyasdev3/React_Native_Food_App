import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IUserTypes } from "./auth.types";

const selectAuth = (state: any) => state.authReducer;

export const selectAuthEmail = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.email
);
export const selectAuthPassword = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.password
);
export const selectAuthError = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.error
);
export const selectAuthIsActivityInProgress = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.isActivityInProgress
);
export const selectAuthMessage = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.message
);
export const selectAuthToken = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => auth.token
);
export const selectAuthIsLoggedIn = createDraftSafeSelector(
  selectAuth,
  (auth: IUserTypes) => !!auth.token
);
