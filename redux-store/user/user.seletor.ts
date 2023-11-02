import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IUserTypes } from "./user.types";

const selectAuth = (state: any) => state.authReducer;
