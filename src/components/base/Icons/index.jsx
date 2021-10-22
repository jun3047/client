import Like from './Like';
import Favorite from './Favorite';
import ArrowBack from './ArrowBack';
import Edit from './Edit';
import Delete from './Delete';
import Person from './Person';
import Add from './Add';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-flex;
  cursor: pointer;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `rgba(0, 0, 0, 0.1)`};

  &:hover {
    background-color: none;
  }
`;

const Icons = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Icons.ArrowBack = ArrowBack;
Icons.Edit = Edit;
Icons.Delete = Delete;
Icons.Favorite = Favorite;
Icons.Like = Like;
Icons.Person = Person;
Icons.Add = Add;

export default Icons;
