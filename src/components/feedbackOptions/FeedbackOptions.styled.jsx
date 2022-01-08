import styled from 'styled-components';

export const Feedback = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
`;

export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

const getBgColor = ({ name, theme }) => {
  console.log(theme);
  switch (name) {
    case 'good':
      return theme.colors.green;
    case 'neutral':
      return theme.colors.yellow;
    case 'bad':
      return theme.colors.red;
    default:
      return theme.colors.white;
  }
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 85px;
  border-radius: 5px;
  border: 1px solid gray;
  text-transform: capitalize;
  background-color: ${getBgColor};
`;
