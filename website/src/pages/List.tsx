import DefaultButton from 'components/button/DefaultButton';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, Typo, Button } from 'components/ui/Element';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors } from 'utils/Constants';

const List = () => {
  const navigate = useNavigate();
  const [tabs, setTabs] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [page, setPage] = useState(0);

  const _onRead = () => {
    return;
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
          onClick={() => setTabs(0)}
          sx={{ height: 40, backgroundColor: tabs === 0 ? Colors.mainColor : Colors.disableBg }}
          labelStyle={{ color: Colors.fontColor, fontSize: 13, fontWeight: 700 }}>
          전체 복주머니
        </DefaultButton>
        <DefaultButton
          onClick={() => setTabs(1)}
          sx={{ height: 40, backgroundColor: tabs === 1 ? Colors.mainColor : Colors.disableBg }}
          labelStyle={{ color: Colors.fontColor, fontSize: 13, fontWeight: 700 }}>
          읽은 복주머니
        </DefaultButton>
        <DefaultButton
          onClick={() => setTabs(2)}
          sx={{ height: 40, backgroundColor: tabs === 2 ? Colors.mainColor : Colors.disableBg }}
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
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            flexWrap: 'wrap',
            gap: '45px',
          }}>
          {[...Array(10)].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pack, index) => {
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
                <Box sx={{ backgroundColor: '#000000', width: 80, height: 72 }}>aa</Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Typo>홍길동</Typo>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length > 9 && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: '20px',
            paddingTop: '40px',
          }}>
          <Button
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
          <Button
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
            }}></Button>
          <Button
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
            }}></Button>
          <Button
            sx={{
              width: 50,
              height: 50,
              backgroundColor: Colors.bgColor,
              border: 'none',
              borderRadius: '9999px',
            }}></Button>
          <Button
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
