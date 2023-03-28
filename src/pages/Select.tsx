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
import React, { useState } from 'react';
import { Colors } from 'utils/Constants';

const enum SELECT_PACK {
  RED_PACK = 'RED_PACK',
  BLUE_PACK = 'BLUE_PACK',
  GREEN_PACK = 'GREEN_PACK',
  YELLOW_PACK = 'YELLOW_PACK',
  ORANGE_PACK = 'ORANGE_PACK',
}

const enum SELECT_MONEY {
  BLUE_MONEY = 'BLUE_MONEY',
  RED_MONEY = 'RED_MONEY',
  GREEN_MONEY = 'GREEN_MONEY',
  YELLOW_MONEY = 'YELLOW_MONEY',
  NOT_SELECT = 'NOT_SELECT',
}

const Select = () => {
  const [selectPack, setSelectPack] = useState<SELECT_PACK>();
  const [selectMoney, setSelectMoney] = useState<SELECT_MONEY>();

  return (
    <DashboardLayout
      back
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
                    setSelectPack(SELECT_PACK['RED_PACK']);
                  }}>
                  {selectPack === SELECT_PACK['RED_PACK'] && <Check />}
                  <RedFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(SELECT_PACK['BLUE_PACK']);
                  }}>
                  {selectPack === SELECT_PACK['BLUE_PACK'] && <Check />}
                  <BlueFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(SELECT_PACK['GREEN_PACK']);
                  }}>
                  {selectPack === SELECT_PACK['GREEN_PACK'] && <Check />}
                  <GreenFannyPack />
                </PackIconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px' }}>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(SELECT_PACK['YELLOW_PACK']);
                  }}>
                  {selectPack === SELECT_PACK['YELLOW_PACK'] && <Check />}
                  <YellowFannyPack />
                </PackIconButton>
                <PackIconButton
                  onClick={() => {
                    setSelectPack(SELECT_PACK['ORANGE_PACK']);
                  }}>
                  {selectPack === SELECT_PACK['ORANGE_PACK'] && <Check />}
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
                  setSelectMoney(SELECT_MONEY['BLUE_MONEY']);
                }}>
                {selectMoney === SELECT_MONEY['BLUE_MONEY'] && <Check />}
                <Money1000 />
              </MoneyIconButton>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(SELECT_MONEY['RED_MONEY']);
                }}>
                {selectMoney === SELECT_MONEY['RED_MONEY'] && <Check />}
                <Money5000 />
              </MoneyIconButton>
              <MoneyIconButton
                sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}
                onClick={() => {
                  setSelectMoney(SELECT_MONEY['GREEN_MONEY']);
                }}>
                {selectMoney === SELECT_MONEY['GREEN_MONEY'] && <Check />}
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
                  setSelectMoney(SELECT_MONEY['YELLOW_MONEY']);
                }}>
                {selectMoney === SELECT_MONEY['YELLOW_MONEY'] && <Check />}
                <Money50000 />
              </MoneyIconButton>
              <MoneyIconButton
                onClick={() => {
                  setSelectMoney(SELECT_MONEY['NOT_SELECT']);
                }}>
                {selectMoney === SELECT_MONEY['NOT_SELECT'] && <Check />}
                <MoneyNot />
              </MoneyIconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingTop: '45px' }} component={'article'}>
          <DefaultButton>다음</DefaultButton>
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
