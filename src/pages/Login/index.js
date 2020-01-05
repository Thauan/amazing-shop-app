import React, {useState} from 'react';
import * as styled from './styles';
import {StatusBar} from 'react-native';

const logo = require('../../assets/shopping-bag-two.png');

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

      <styled.Buttons>
        <styled.TextButtons>Entrar</styled.TextButtons>
      </styled.Buttons>
    </>
  );
}

export default Login;
