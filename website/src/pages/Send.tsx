import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import packApi from 'apis/packApi';
import DefaultButton from 'components/button/DefaultButton';
import DefaultFormField from 'components/input/DefaultFormField';
import DashboardLayout from 'components/layout/DashboardLayout';
import SuccessSendModal from 'components/modal/SuccessSendModal';
import { Box, Typo } from 'components/ui/Element';
import useUserQuery from 'hooks/queries/useUserQuery';
import useModals from 'hooks/shared/useModals';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'redux/storeHooks';
import { Colors } from 'utils/Constants';

import * as yup from 'yup';

const schema = yup.object().shape({
  someone: yup.string().required('받는 사람을 적어주세요.'),
  comment: yup.string().required('내용을 작성해주세요.'),
  // .matches(passwordRegEx, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'),
});

const Send = () => {
  const navigate = useNavigate();
  const { openModal } = useModals();

  const select = useAppSelector((state) => state.select);

  const sendFanny = async (formData: any) => {
    console.log('formData', formData);
    console.log('select', select);
    if (select.money && select.pack) {
      await packApi.createPack({
        cost: select.money,
        color: select.pack,
        someone: formData.someone,
        comment: formData.comment,
      });

      openModal(SuccessSendModal, {
        props: {
          onClick: () => navigate('/'),
        },
      });
    }
  };

  const { data: me } = useUserQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    someone: string;
    comment: string;
  }>({ resolver: yupResolver(schema), mode: 'onChange' });

  return (
    <DashboardLayout
      back={() => navigate('/select')}
      title={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.subTextB }}>
            <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.mainColor }}>
              복주머니
            </Typo>
            와&nbsp;
            <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.mainColor }}>
              세뱃돈
            </Typo>
            을
          </Typo>
          <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.subTextB }}>
            선택해주세요!
          </Typo>
        </Box>
      }>
      <form onSubmit={handleSubmit(sendFanny)}>
        <Box component={'section'} sx={{ padding: '0 30px' }}>
          <Box component={'article'} sx={{ paddingTop: '30px' }}>
            <Box
              sx={{
                width: 330,
                height: 500,
                backgroundImage: `url('/assets/letter-yellow_bg.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '30px',
              }}>
              <Box sx={{ width: 'auto', minWidth: '200px', position: 'relative' }}>
                <DefaultFormField
                  containerStyle={{ width: 'auto', paddingTop: '100px' }}
                  sx={{
                    width: 'auto',

                    paddingLeft: '30px',
                    fontSize: 18,
                    fontWeight: 700,
                    color: Colors.subTextB,
                  }}
                  register={register('someone')}
                  error={errors.someone && errors.someone}
                  errorMessage={errors.someone && errors.someone.message}
                />
                <Typo
                  sx={{
                    position: 'absolute',
                    bottom: '20px',
                    left: 0,
                    fontSize: 18,
                    fontWeight: 700,
                    color: Colors.subTextB,
                  }}>
                  To.
                </Typo>
              </Box>
              <Box sx={{ paddingTop: '20px' }}>
                <TextAreaComponent
                  {...register('comment')}
                  error={errors.comment && errors.comment}
                  errorMessage={errors.comment && errors.comment.message}
                />
                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', gap: '8px', paddingTop: '10px' }}>
                  <Typo
                    sx={{
                      textAlign: 'end',
                      fontSize: 18,
                      fontWeight: 700,
                      color: Colors.subTextB,
                      paddingBottom: '8px',
                    }}>
                    From. {me?.username}
                  </Typo>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      backgroundImage: `url('/assets/yellow_cat.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ paddingTop: '40px' }}>
              <DefaultButton type='submit'>보내기</DefaultButton>
            </Box>
          </Box>
        </Box>
      </form>
    </DashboardLayout>
  );
};

export default Send;

const TextAreaComponent = React.forwardRef((props: any, ref: any) => {
  const { error, errorMessage, ...rest } = props;

  return (
    <>
      <TextArea ref={ref} {...rest} />
      {error && <span>{errorMessage}</span>}
    </>
  );
});

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  resize: none;
  background-color: transparent;
  /* background-color: #fff; */
  overflow-y: hidden;
`;
