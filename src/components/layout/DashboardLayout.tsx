import styled from '@emotion/styled';
import React from 'react';
import { Colors } from 'utils/Constants';

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

const Header = styled.header`
  width: 100%;
  height: 54px;
  background-image: url('/assets/common-top_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MainLayout = styled.main`
  width: 100%;
  height: calc(100% - 54px);
`;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />

      <MainLayout>{children}</MainLayout>
    </Wrapper>
  );
};

export default DashboardLayout;
