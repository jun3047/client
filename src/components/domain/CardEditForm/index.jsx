import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import {
  WaffleCard,
  Button,
  ColorPalette,
  Text,
  Modal,
  EmojiPickerActiveButton,
  MultipleInput,
} from '@components';
import Common from '@styles';

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  box-sizing: border-box;
`;

const FormContainer = styled.form``;

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

const EditContainer = styled.div`
  margin: 16px;
`;

const Wrapper = styled.div`
  margin: 16px 0;
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

const CardEditForm = ({ initialCardData = { id: '' }, ...props }) => {
  const [card, setCard] = useState(initialCardData);

  const handleEmojiClick = useCallback(emoji => {
    setCard(card => {
      return { ...card, emoji };
    });
  }, []);

  const handleChangeCardColor = e => {
    const { name, value } = e.target;
    setCard(card => {
      return { ...card, [name]: value };
    });
  };

  const handleChangeMultipleInput = values => {
    setCard(card => {
      return { ...card, hashTags: values };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('제출!');
  };

  return (
    <StyledModal visible backgroundColor="rgba(43, 51, 63, 1)" {...props}>
      <FormContainer onSubmit={handleSubmit} id="cardForm">
        <CardEditContainer>
          <StyledWaffleCard card={card} />
          <EditContainer>
            <Wrapper>
              <Text>이모지</Text>
              <EmojiPickerActiveButton
                name="emoji"
                type="button"
                onEmojiClick={handleEmojiClick}
              />
            </Wrapper>
            <Wrapper>
              <Text>배경색</Text>
              <ColorPalette name="cardColor" onChange={handleChangeCardColor} />
            </Wrapper>
            <Wrapper>
              <Text>해시태그</Text>
              <MultipleInput
                color="white"
                onChange={handleChangeMultipleInput}
              />
            </Wrapper>
          </EditContainer>
        </CardEditContainer>
        <ButtonContainer>
          <StyledButton
            type="button"
            backgroundColor={Common.colors.primary}
            fontColor={Common.colors.point}>
            취소하기
          </StyledButton>
          <StyledButton type="submit" form="cardForm">
            생성하기
          </StyledButton>
        </ButtonContainer>
      </FormContainer>
    </StyledModal>
  );
};

export default CardEditForm;

// const card = {
//   id: 'tmp',
//   emoji: '👽',
//   cardColor: 'rgba(92, 107, 192, 1)',
//   hashTags: [
//     '지우개방',
//     '쏟아내고가',
//     'ㄴr는 ㄱr끔',
//     '눈물을 흘린ㄷr',
//     '이 해시태그는매우긴해시태그입니다.',
//   ],
// };
