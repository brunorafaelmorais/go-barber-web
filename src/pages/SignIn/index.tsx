import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { useAuth, SignInCredentials } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Logo from '../../assets/icons/logo.svg';
import * as Typo from '../../components/Typography';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInCredentials): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Falha no login',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <S.Container>
      <S.ColLeft>
        <img src={Logo} alt="GoBarber Logo" />

        <S.ContainerTitle>
          <Typo.Headline5 fullWidth center>
            Faça seu logon
          </Typo.Headline5>
        </S.ContainerTitle>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button fullWidth type="submit">
            Entrar
          </Button>
          <Button transparent fullWidth>
            Esqueci minha senha
          </Button>

          <Link to="/sign-up">
            <Button transparentPrimary fullWidth>
              <FiLogIn size={20} />
              Criar conta
            </Button>
          </Link>
        </Form>
      </S.ColLeft>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
