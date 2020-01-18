import React, {useState} from 'react';
import * as styled from './styles';
import {StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {Creators as authCreators} from '~/store/ducks/auth';

const logo = require('../../assets/shopping-bag-two.png');

function Login(props) {
  const [email, setEmail] = useState('thaubr28@gmail.com');
  const [password, setPassword] = useState('secret');

  function authLogin() {
    props.dispatch(authCreators.login(email, password));
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3f966b" />
      <styled.ContainerBrand>
        <styled.Brand source={logo} resizeMode="contain" />
      </styled.ContainerBrand>
      <styled.Container behavior="margin" enabled>
        <styled.ContainerForm>
          <styled.LineUp>
            <styled.Input
              autoCapitalize="none"
              placeholder="E-mail"
              value={email}
              autoFocus
              onChangeText={e => setEmail(e)}
            />
          </styled.LineUp>
          <styled.LineUp>
            <styled.Input
              autoCapitalize="none"
              placeholder="Senha"
              value={password}
              onChangeText={e => setPassword(e)}
            />
          </styled.LineUp>
        </styled.ContainerForm>
      </styled.Container>
      <styled.ContainerButtonsUser>
        <styled.ButtonsUser>
          <styled.TextButtonsUser>
            Esqueceu sua senha? Clique aqui
          </styled.TextButtonsUser>
        </styled.ButtonsUser>
        <styled.ButtonsUser>
          <styled.TextButtonsUser>Cadastre-se aqui</styled.TextButtonsUser>
        </styled.ButtonsUser>
      </styled.ContainerButtonsUser>

      <styled.Buttons onPress={() => authLogin()}>
        <styled.TextButtons>Entrar</styled.TextButtons>
      </styled.Buttons>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.user,
  // loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(Login);

// export default Login;
