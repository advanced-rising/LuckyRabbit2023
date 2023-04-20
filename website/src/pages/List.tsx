import DefaultButton from 'components/button/DefaultButton';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, Typo, Button } from 'components/ui/Element';
import usePacksQuery from 'hooks/queries/usePacks';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PacksDto, { PackColors } from 'types/Packs';
import { Colors } from 'utils/Constants';
import {
  BlueFannyPack,
  GreenFannyPack,
  OrangeFannyPack,
  RedFannyPack,
  YellowFannyPack,
} from 'components/Icons/FannyPacks';
const List = () => {
  const navigate = useNavigate();

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [page, setPage] = useState(0);

  const _onRead = () => {
    return;
  };
  const [filter, setFilter] = useState<'all' | 'read' | 'unRead'>('all');
  const { data: packs } = usePacksQuery(filter, {
    select: (data: PacksDto[]) => {
      if (filter === 'read') {
        return data.filter((v) => v.isRead === 1);
      }
      if (filter === 'unRead') {
        return data.filter((v) => v.isRead === 0);
      }
      if (filter === 'all') {
        return data;
      }
      return data;
    },
  });

  const totalPage = packs && Math.ceil(packs?.length / rowsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPage)
      for (let i = 1; i <= totalPage; i++) {
        pageNumbers.push(
          <Button
            key={i}
            onClick={() => {
              setPage(i - 1);
            }}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: page === i - 1 ? Colors.mainColor : Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
              fontSize: 20,
            }}>
            {i}
          </Button>,
        );
      }
    return pageNumbers;
  };

  return (
    <DashboardLayout
      back={() => navigate('/')}
      title={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.subTextB }}>
            받은 복주머니
          </Typo>
        </Box>
      }>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '15px',
          padding: '40px 30px 0',
        }}>
        <DefaultButton
          onClick={() => setFilter('all')}
          sx={{ height: 40, backgroundColor: filter === 'all' ? Colors.mainColor : Colors.disableBg }}
          labelStyle={{ color: Colors.fontColor, fontSize: 13, fontWeight: 700 }}>
          전체 복주머니
        </DefaultButton>
        <DefaultButton
          onClick={() => setFilter('read')}
          sx={{ height: 40, backgroundColor: filter === 'read' ? Colors.mainColor : Colors.disableBg }}
          labelStyle={{ color: Colors.fontColor, fontSize: 13, fontWeight: 700 }}>
          읽은 복주머니
        </DefaultButton>
        <DefaultButton
          onClick={() => setFilter('unRead')}
          sx={{ height: 40, backgroundColor: filter === 'unRead' ? Colors.mainColor : Colors.disableBg }}
          labelStyle={{ color: Colors.fontColor, fontSize: 13, fontWeight: 700 }}>
          안읽은 복주머니
        </DefaultButton>
      </Box>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 30px 0' }}>
        <Box
          component='ul'
          sx={{
            width: '100%',
            height: 390,
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '45px',
          }}>
          {packs?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pack, index) => {
            return (
              <Box
                key={index}
                component='li'
                onClick={() => _onRead()}
                sx={{
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  flexDirection: 'column',
                }}>
                <ColorPack color={pack.color} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Typo>{pack.someone}</Typo>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      {packs && packs.length > 9 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '330px',
            gap: '20px',
            paddingTop: '40px',
          }}>
          <Button
            onClick={() => {
              if (page === 0) {
                return;
              } else {
                setPage(page - 1);
              }
            }}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box
              sx={{
                width: '10px',
                height: '20px',
                backgroundImage: `url(/assets/icon-prev-page-arrow.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}></Box>
            <Typo className='sr-only' component={'span'}>
              prev
            </Typo>
          </Button>
          <Box
            sx={{
              width: '190px',
              flex: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}>
            {renderPageNumbers()}
          </Box>
          <Button
            onClick={() => {
              if (page === Math.ceil(packs.length / rowsPerPage) - 1) {
                return;
              } else {
                setPage(page + 1);
              }
            }}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box
              sx={{
                width: '10px',
                height: '20px',
                backgroundImage: `url(/assets/icon-next-page-arrow.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}></Box>
            <Typo className='sr-only' component={'span'}>
              next
            </Typo>
          </Button>
        </Box>
      )}
    </DashboardLayout>
  );
};

export default List;

const ColorPack = ({ color }: { color: PackColors }) => {
  if (color === PackColors.BLUE) {
    return <BlueFannyPack />;
  }
  if (color === PackColors.GREEN) {
    return <GreenFannyPack />;
  }
  if (color === PackColors.RED) {
    return <RedFannyPack />;
  }
  if (color === PackColors.ORANGE) {
    return <OrangeFannyPack />;
  }
  if (color === PackColors.YELLOW) {
    return <YellowFannyPack />;
  }
  return null;
};
