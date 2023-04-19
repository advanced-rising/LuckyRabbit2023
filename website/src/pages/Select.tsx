import styled from '@emotion/styled';
import DefaultButton from 'components/button/DefaultButton';
import {
  BlueFannyPack,
  GreenFannyPack,
  OrangeFannyPack,
  RedFannyPack,
  YellowFannyPack,
} from 'components/Icons/FannyPacks';
import { Money1000, Money10000, Money5000, Money50000, MoneyNot } from 'components/Icons/Money';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, IconButton, Typo } from 'components/ui/Element';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectPackAndMoney } from 'redux/slices/select';

import { useAppDispatch } from 'redux/storeHooks';
import { PackColors } from 'types/Packs';
import { Colors } from 'utils/Constants';

const Select = () => {
  const [selectPack, setSelectPack] = useState<PackColors>();
  const [selectMoney, setSelectMoney] = useState<number>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const save = () => {
    console.log(selectPack);
    console.log(selectMoney);
    dispatch(selectPackAndMoney({ selectPack, selectMoney }));
    navigate('/send');
  };

  useEffect(() => {
    dispatch(selectPackAndMoney({ selectPack, selectMoney }));
  }, [selectPack, selectMoney, dispatch]);

  return (
    <DashboardLayout
      back={() => navigate('/')}
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
      <Box component={'section'} sx={{ padding: '0 30px' }}>
        <Box component={'article'} sx={{ paddingTop: '30px' }}>
          <Box
            sx={{
              width: 330,
              height: 285,
              backgroundImage: `url('/assets/pocket-select-box-bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '48px',
              }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px' }}>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(PackColors['RED']);
                  }}>
                  {selectPack === PackColors['RED'] && <Check />}
                  <RedFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(PackColors['BLUE']);
                  }}>
                  {selectPack === PackColors['BLUE'] && <Check />}
                  <BlueFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(PackColors['GREEN']);
                  }}>
                  {selectPack === PackColors['GREEN'] && <Check />}
                  <GreenFannyPack />
                </PackIconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px' }}>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(PackColors['YELLOW']);
                  }}>
                  {selectPack === PackColors['YELLOW'] && <Check />}
                  <YellowFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(PackColors['ORANGE']);
                  }}>
                  {selectPack === PackColors['ORANGE'] && <Check />}
                  <OrangeFannyPack />
                </PackIconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={'article'} sx={{ paddingTop: '64px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              gap: '14px',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '14px',
              }}>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(1000);
                }}>
                {selectMoney === 1000 && <Check />}
                <Money1000 />
              </MoneyIconButton>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(5000);
                }}>
                {selectMoney === 5000 && <Check />}
                <Money5000 />
              </MoneyIconButton>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(10000);
                }}>
                {selectMoney === 10000 && <Check />}
                <Money10000 />
              </MoneyIconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '14px',
              }}>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(50000);
                }}>
                {selectMoney === 50000 && <Check />}
                <Money50000 />
              </MoneyIconButton>
              <MoneyIconButton
                onClick={() => {
                  setSelectMoney(0);
                }}>
                {selectMoney === 0 && <Check />}
                <MoneyNot />
              </MoneyIconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingTop: '45px' }} component={'article'}>
          <DefaultButton onClick={() => save()}>다음</DefaultButton>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Select;

const Check = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: 40px;
  background-image: url('/assets/check.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const PackIconButton = styled(IconButton)`
  position: relative;
`;

const MoneyIconButton = styled(IconButton)`
  position: relative;
`;
