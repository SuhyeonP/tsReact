import { Dispatch } from 'redux';
import { addPost, AddPostAction } from './post';
import {idpw,userinfo} from '../types';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT';

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST,
  data: idpw,
}
export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS,
  data: userinfo,
}
export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE,
  error: Error,
}
export interface LogOutAction {
  type: typeof LOG_OUT,
}

export interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <A>(action: A): A;
  // This overload is the union of the two above (see TS issue #14107).
  <TAction>(
    action:
      | TAction
      | ThunkAction,
  ): TAction;
}



type ThunkAction = (dispatch: ThunkDispatch) => void;

type userCode=LogInRequestAction | LogInSuccessAction | LogInFailureAction | AddPostAction

export const logIn = (data: idpw): ThunkAction => { // async action creator
  return (dispatch: Dispatch<userCode>) => { // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'test'
        }));
        dispatch(addPost('hi test'));
      }, 2000);
      // axios.post().then().catch()으로 나중에 대체
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export const logInRequest = (data: idpw): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

export const logInSuccess = (data: userinfo): LogInSuccessAction => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  }
};

export const logInFailure = (error: Error): LogInFailureAction => {
  return {
    type: LOG_IN_FAILURE,
    error,
  }
};

export const logOut = (): LogOutAction => {
  return { // action
    type: LOG_OUT,
  };
};
