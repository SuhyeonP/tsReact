import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  logIn,
  logOut,
  ThunkDispatch,
} from './actions/user';
import { RootState } from './reducers';
import { UserState } from './reducers/user';
import {idpw} from './types'

interface Props {
  dispatchLogIn: ({ id, password } : idpw) => void;
  dispatchLogOut: () => void;
  user: UserState;
}

class App extends Component<Props> {
  onClick = () => {
    this.props.dispatchLogIn({
      id: 'test',
      password: 'test',
    });
  };

  onLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    console.log('여기는 class임다')
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn
          ? <div>로그인 중</div>
          : user.data
            ? <div>{user.data.nickname}</div>
            : '로그인 해주세요.'}
        {!user.data
          ? <button onClick={this.onClick}>로그인</button>
          : <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
}); // reselect

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  dispatchLogIn: (data: idpw) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
