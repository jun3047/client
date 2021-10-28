import React from 'react';
import styled from '@emotion/styled';
import {
  WaffleCard,
  Button,
  ColorPalette,
  Text,
  Modal,
  EmojiPicker,
} from '@components';
import Common from '@styles';

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  box-sizing: border-box;
`;

const CardEditContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 16px 0;
  @media ${Common.media.sm} {
    flex-direction: column;
  }
`;

const StyledWaffleCard = styled(WaffleCard)`
  margin: 16px;
`;

const EditFormContainer = styled.form`
  margin: 16px;
`;

const InputContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  @media ${Common.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 16px 0;
  justify-content: space-around;
  align-items: center;
  @media ${Common.media.sm} {
    flex-direction: column-reverse;
  }
`;

const StyledButton = styled(Button)`
  margin: 8px;
  @media ${Common.media.sm} {
    width: 290px;
  }
  @media ${Common.media.md} {
    width: 272px;
  }
  @media ${Common.media.lg} {
    width: 340px;
  }
`;

const Input = styled.input`
  display: block;
  padding: 6px, 8px;
  width: 114px;
  height: 40px;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  border: 2px solid white;
  background-color: transparent;
  box-sizing: border-box;
`;

const CardEditForm = ({ ...props }) => {
  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <StyledModal visible backgroundColor="rgba(43, 51, 63, 1)" {...props}>
      <CardEditContainer onSubmit={handleSubmit}>
        <StyledWaffleCard />
        <EditFormContainer>
          <Text>이모지</Text>
          <EmojiPicker type="button" />
          <Text>배경색</Text>
          <ColorPalette />
          <Text>해시태그</Text>
          <InputContainer>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </InputContainer>
        </EditFormContainer>
      </CardEditContainer>
      <ButtonContainer>
        <StyledButton
          backgroundColor={Common.colors.primary}
          fontColor={Common.colors.point}>
          취소하기
        </StyledButton>
        <StyledButton type="submit">생성하기</StyledButton>
      </ButtonContainer>
    </StyledModal>
  );
};

export default CardEditForm;
