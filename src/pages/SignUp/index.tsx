import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import * as S from './styles';
import * as Typo from '../../components/Typography';
import Logo from '../../assets/icons/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface FormProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string()
            .email('Digite um e-mail válido.')
            .required('E-mail obrigatório.'),
          password: Yup.string()
            .min(6, 'Senha deve ter no mínimo 6 caracteres.')
            .required('Senha obrigatória.'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu logon no GoBarber.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: err.response.data.message,
        });
      }
    },
    [addToast, history],
  );

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <img src={Logo} alt="GoBarber Logo" />

        <S.ContainerTitle>
          <Typo.Headline5 fullWidth center>
            Faça seu cadastro
          </Typo.Headline5>
        </S.ContainerTitle>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />
          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button fullWidth type="submit">
            Cadastrar
          </Button>

          <Link to="/">
            <Button transparent fullWidth>
              <FiArrowLeft size={20} />
              Voltar para logon
            </Button>
          </Link>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
