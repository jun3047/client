import styled from '@emotion/styled';
import Common from '@styles';
import { useState } from 'react';

import {
  Text,
  Button,
  BackButton,
  NameChangeModal,
  PasswordChangeModal,
} from '@components';

const MyPageContainer = styled.div`
  padding: 40px 0;
  @media ${Common.media.sm} {
    padding: 20px 0;
  }
`;

const StyledBackButton = styled(BackButton)`
  margin: 0 0 32px 50px;
  @media ${Common.media.sm} {
    margin-left: 16px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  @media ${Common.media.sm} {
    padding: 0 16px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 96px 0 22px 0;
`;

const InfoBox = styled.div`
  margin-bottom: 52px;
  p:first-of-type {
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-weight: ${Common.fontWeight.bold};
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const MyPage = ({ ...prop }) => {
  const [nameModalVisible, setNameModalVisible] = useState(false);
  const [passWordModalVisible, setPassWordModalVisible] = useState(false);

  const handleClickChangeNameButton = () => {
    setNameModalVisible(true);
  };

  const handleClickChangePasswordButton = () => {
    setPassWordModalVisible(true);
  };

  const handleClickLogoutButton = () => {
    console.log('Logout!');
  };

  return (
    <MyPageContainer>
      <StyledBackButton />
      <ContentContainer>
        <Text size={Common.fontSize.large}>마이페이지</Text>
        <TextContainer>
          <InfoBox>
            <Text>이메일</Text>
            <Text size={Common.fontSize.large}>waffleCard@naver.com</Text>
          </InfoBox>
          <InfoBox>
            <Text>이름(닉네임)</Text>
            <Text size={Common.fontSize.large}>내이름은운영자</Text>
          </InfoBox>
        </TextContainer>
        <ButtonContainer>
          <StyledButton type="button" onClick={handleClickChangeNameButton}>
            닉네임 변경
          </StyledButton>
          <StyledButton type="button" onClick={handleClickChangePasswordButton}>
            비밀번호 변경
          </StyledButton>
          <StyledButton
            type="button"
            onClick={handleClickLogoutButton}
            fontColor={Common.colors.button_font_dark}
            backgroundColor={Common.colors.primary}>
            로그아웃
          </StyledButton>
        </ButtonContainer>
      </ContentContainer>
      <NameChangeModal
        visible={nameModalVisible}
        onClose={() => {
          setNameModalVisible(false);
        }}
      />
      <PasswordChangeModal
        visible={passWordModalVisible}
        onClose={() => {
          setPassWordModalVisible(false);
        }}
      />
    </MyPageContainer>
  );
};

export default MyPage;