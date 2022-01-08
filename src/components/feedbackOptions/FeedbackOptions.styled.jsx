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
  padding: 5px;
  width: 85px;
  height: 40px;
  border-radius: 20px;
  border: 0;
  text-transform: capitalize;
  background-color: ${getBgColor};
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    color: #ffffff;
  }
`;
