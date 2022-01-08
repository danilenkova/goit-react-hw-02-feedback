import styled from "styled-components";

export const StyledStatistics = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  text-transform: capitalize;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  svg {
    margin-right: 5px;
  }
`;
