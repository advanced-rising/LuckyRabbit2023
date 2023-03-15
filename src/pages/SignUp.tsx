import { Box, Button, Header } from 'components/ui/Element';
import { Colors } from 'utils/Constants';

const SignUp = () => {
  return (
    <>
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
            color: Colors.mainTitleColor,
          }}>
          복받으라묘
        </Header>
      </Box>

      {/* <DefaultButton props={'aaA'}></DefaultButton> */}
      <Button
        component={'button'}
        wrapperStyle={{
          width: '330px',
          height: '50px',
          borderRadius: '12px',
          fontSize: '16px',
          color: Colors.bgColor,
          backgroundColor: Colors.mainColor,
          border: '0px',
          margin: '0px 30px',
          cursor: 'pointer',
        }}>
        회원가입
      </Button>
    </>
  );
};
export default SignUp;
