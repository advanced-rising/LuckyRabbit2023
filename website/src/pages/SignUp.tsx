import DefaultButton from 'components/button/DefaultButton';
import DefaultFormField from 'components/input/DefaultFormField';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, Button, Header } from 'components/ui/Element';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from 'types/FormDto';
import { Colors, JWT_TOKEN_NAME } from 'utils/Constants';
import { emailRegEx, passwordRegEx } from 'utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import authApi from 'apis/authApi';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  userName: yup
    .string()
    .required('이름을 입력해 주세요.')
    .min(2, '이름은 2~3자로 입력해 주세요.')
    .max(3, '이름은 2~3자로 입력해 주세요.'),
  userEmail: yup.string().email('이메일 형식이 올바르지 않습니다.').required('이메일을 입력해 주세요.'),
  userPassword: yup.string().required('비밀번호를 입력해 주세요.'),
  // .matches(passwordRegEx, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'),
  userPasswordConfirm: yup
    .string()
    .required('비밀번호를 확인해 주세요.')
    .oneOf([yup.ref('userPassword'), ''], '비밀번호가 일치하지 않습니다.'),
});

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(schema), mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInput> = async (formData) => {
    console.log(formData);
    try {
      await authApi.signup({
        username: formData.userName,
        email: formData.userEmail,
        password: formData.userPassword,
      });

      navigate('/signin');
    } catch (error) {
      console.log(error);
      throw error;
    }

    // mutate(formData);
  };
  return (
    <DashboardLayout>
      <Box
        component={'div'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px',
        }}>
        <Header
          component={'h2'}
          sx={{
            fontSize: 50,
            fontFamily: 'RixInooAriDuriR',
            color: Colors.mainTitleColor,
          }}>
          복받으라묘
        </Header>
      </Box>

      <Box component={'article'} sx={{ padding: '0 30px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <DefaultFormField
              type={'text'}
              label={'이름'}
              required={true}
              placeholder={'홍길동'}
              register={register('userName')}
              error={errors.userName && errors.userName}
              errorMessage={errors.userName && errors.userName.message}
            />

            <DefaultFormField
              type={'email'}
              label={'이메일'}
              required={true}
              placeholder={'example@example.com'}
              register={register('userEmail')}
              error={errors.userEmail && errors.userEmail}
              errorMessage={errors.userEmail && errors.userEmail.message}
            />
            <DefaultFormField
              type={'password'}
              label={'비밀번호'}
              required={true}
              placeholder={'********'}
              register={register('userPassword')}
              error={errors.userPassword && errors.userPassword}
              errorMessage={errors.userPassword && errors.userPassword.message}
            />
            <DefaultFormField
              type={'password'}
              label={'비밀번호 확인'}
              required={true}
              placeholder={'********'}
              register={register('userPasswordConfirm')}
              error={errors.userPasswordConfirm && errors.userPasswordConfirm}
              errorMessage={errors.userPasswordConfirm && errors.userPasswordConfirm.message}
            />
            <Box sx={{ paddingTop: '60px' }}>
              <DefaultButton
                type='submit'
                sx={{
                  width: '330px',
                  height: '50px',
                  fontSize: '16px',
                  color: Colors.bgColor,
                  backgroundColor: Colors.mainColor,
                  border: '0px',
                  cursor: 'pointer',
                }}>
                회원가입
              </DefaultButton>
            </Box>
          </Box>
        </form>
      </Box>
    </DashboardLayout>
  );
};
export default SignUp;
