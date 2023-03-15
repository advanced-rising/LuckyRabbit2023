import { Box, Header } from 'components/ui/Element';
import React from 'react';

const Home = () => {
  return (
    <Box
      component={'div'}
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
      }}>
      <Header
        component={'h2'}
        wrapperStyle={{
          fontSize: 50,
          fontFamily: 'RixInooAriDuriR',
          color: '#444444',
        }}>
        복받으라묘
      </Header>
    </Box>
  );
};

export default Home;
