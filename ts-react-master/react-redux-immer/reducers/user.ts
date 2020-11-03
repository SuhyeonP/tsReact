import { produce } from 'immer';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT,
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  LogOutAction,
} from '../actions/user';

export interface UserState {
  isLoggingIn: boolean,
  data: {
    nickname: string;
  } | null,//로그인 안하면 데이터가 없으니까
}

const initialState: UserState = {
  isLoggingIn: false,
  data: null,
};
type userCode=LogInRequestAction | LogInSuccessAction | LogInFailureAction | LogOutAction
const userReducer = (prevState = initialState, action:userCode ) => { // 새로운 state 만들어주기
  return produce(prevState, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.data = null;
        draft.isLoggingIn = true;
        break;
      case LOG_IN_SUCCESS:
        draft.data = action.data;
        draft.isLoggingIn = false;
        break;
      case LOG_IN_FAILURE:
        draft.data = null;
        draft.isLoggingIn = false;
        break;
      case LOG_OUT:
        draft.data = null;
        break;
      default:
        break;
    }
  });
};

export default userReducer;
