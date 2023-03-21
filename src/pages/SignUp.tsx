import DefaultButton from 'components/button/DefaultButton';
import DefaultFormField from 'components/input/DefaultFormField';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, Button, Header } from 'components/ui/Element';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from 'types/FormDto';
import { Colors } from 'utils/Constants';
import { emailRegEx, passwordRegEx } from 'utils/regex';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm<FormInput>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInput> = (formData) => {
    console.log(formData);
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
          <DefaultFormField
            label={'이름'}
            placeholder={'홍길동'}
            register={register('userName', {
              required: '이름을 입력해 주세요.',
              minLength: {
                value: 2,
                message: '이름은 2~3자로 입력해 주세요.',
              },
              maxLength: {
                value: 3,
                message: '이름은 2~3자로 입력해 주세요.',
              },
            })}
          />
          <DefaultFormField
            label={'이메일'}
            placeholder={'example@example.com'}
            register={register('userEmail', {
              required: '이메일을 입력해 주세요.',
              pattern: {
                value: emailRegEx,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
          <DefaultFormField
            label={'비밀번호'}
            placeholder={'********'}
            register={register('userPassword', {
              required: '비밀번호를 입력해 주세요.',
              pattern: {
                value: passwordRegEx,
                message: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
              },
            })}
          />
          <DefaultFormField
            label={'비밀번호 확인'}
            placeholder={'********'}
            register={register('userPasswordConfirm', {
              required: true,
              // validate: (value) => value === passwordInput.current,
            })}
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
        </form>
      </Box>
    </DashboardLayout>
  );
};
export default SignUp;
