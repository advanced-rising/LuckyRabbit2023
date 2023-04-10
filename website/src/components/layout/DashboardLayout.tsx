import styled from '@emotion/styled';
import BackArrow from 'components/Icons/BackArrow';
import { Box, IconButton } from 'components/ui/Element';
import React from 'react';
import { Colors } from 'utils/Constants';

const DashboardLayout = ({
  back,
  title,
  children,
}: {
  back?: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <Header>
        <HeaderRibbon />
        {title && (
          <Box
            sx={{
              paddingTop: '50px',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box>{title}</Box>
          </Box>
        )}
        {back && (
          <IconButton
            onClick={() => back()}
            sx={{
              position: 'absolute',
              top: '94px',
              left: '30px',
              width: 48,
              height: 48,
            }}>
            <BackArrow />
          </IconButton>
        )}
      </Header>
      <MainLayout>{children}</MainLayout>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  width: 390px;
  height: 100vh;
  background-color: ${Colors.mainBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0 auto;
`;

const HeaderRibbon = styled.div`
  width: 100%;
  height: 54px;
  background-image: url('/assets/common-top_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Header = styled.header`
  width: 100%;
  position: relative;
  top: 0;
`;

const MainLayout = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 54px;
`;
