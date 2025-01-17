import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Common from '@/styles';
import { authApi } from '@/apis';
import { useForm } from '@/hooks';
import styled from '@emotion/styled';
import { formValidator } from '@/utils';
import { Text, Button, Input, BackButton, Spinner } from '@/components';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isLoading, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async ({ email, userName, password }) => {
      try {
        await authApi.signup({
          name: userName,
          email,
          password,
        });

        Swal.fire({
          title: '🎉',
          text: '환영합니다! 이제 로그인을 해주세요!',
          confirmButtonColor: Common.colors.point,
        }).then(() => {
          navigate('/login');
        });
      } catch (error: any) {
        Swal.fire({
          title: '🥲',
          text:
            error.message ??
            '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
          confirmButtonColor: Common.colors.point,
        });
      }
    },
    validate: ({ email, userName, password, passwordConfirm }) => {
      const errors: { [key: string]: string } = {};

      if (!formValidator.validateEmailForm(email)) {
        errors.email = '올바른 이메일을 입력해주세요.';
      }
      if (!formValidator.validateEmailEmpty(email))
        errors.email = '이메일을 입력해주세요.';
      if (!formValidator.validateNameEmpty(userName))
        errors.userName = '이름을 입력해주세요.';
      if (!formValidator.validateNameLength(userName))
        errors.userName = '이름을 10글자 이내로 작성해주세요.';
      if (!formValidator.validatePasswordLength(password)) {
        errors.password = '비밀번호를 8자 이상 작성해주세요.';
      }
      if (!formValidator.validatePasswordEmpty(password)) {
        errors.password = '비밀번호를 입력해주세요.';
      }
      if (!formValidator.validatePasswordConfirm(password, passwordConfirm)) {
        errors.passwordConfirm = '비밀번호가 일치하는지 확인해주세요.';
      }

      return errors;
    },
  });

  return (
    <Container>
      <StyledBackButton />
      <ContentContainer onSubmit={handleSubmit}>
        <Header size={Common.fontSize.large}>
          회원가입하고 와플카드 만들러가요!
        </Header>
        <InputWrapper>
          <StyledText>이메일</StyledText>
          <Input name="email" type="email" onChange={handleChange} />
          <StyledText color="red">{errors.email}&nbsp;</StyledText>
          <StyledText>이름(닉네임)</StyledText>
          <Input name="userName" type="text" onChange={handleChange} />
          <StyledText color="red">{errors.userName}&nbsp;</StyledText>
          <StyledText>비밀번호</StyledText>
          <Input name="password" type="password" onChange={handleChange} />
          <StyledText color="red">{errors.password}&nbsp;</StyledText>
          <StyledText>비밀번호 확인</StyledText>
          <Input
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
          />
          <StyledText color="red">{errors.passwordConfirm}&nbsp;</StyledText>
        </InputWrapper>
        <StyledButton type="submit">가입하기</StyledButton>
      </ContentContainer>
      <Spinner loading={isLoading} />
    </Container>
  );
};

const StyledBackButton = styled(BackButton)`
  position: fixed;
  top: 60px;
  left: 50px;
  @media ${Common.media.sm} {
    left: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh + 110px);
  padding: 100px 0;
`;

const ContentContainer = styled.form`
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

const InputWrapper = styled.div`
  width: 100%;
`;

const Header = styled(Text)`
  text-align: center;
  margin-bottom: 64px;
  @media ${Common.media.sm} {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin: 20px 0;
  font-weight: ${Common.fontWeight.bold};
  @media ${Common.media.sm} {
    height: 40px;
    border-radius: 12px;
    font-size: ${Common.fontSize.small};
    &:first-of-type {
      margin-bottom: 16px;
    }
  }
`;

const StyledText = styled(Text)`
  margin: 16px 0;
  @media ${Common.media.sm} {
    font-size: ${Common.fontSize.small};
    margin-bottom: 20px;
  }
`;

export default SignUpPage;
