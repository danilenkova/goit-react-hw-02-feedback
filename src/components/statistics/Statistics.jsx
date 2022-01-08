import React from "react";
import PropTypes from "prop-types";
import { StyledStatistics, StatisticsItem } from "./Statistics.styled";
import { FaRegGrinAlt, FaRegMeh, FaRegFrown } from "react-icons/fa";

const feedBackTypes = {
  good: <FaRegGrinAlt />,
  neutral: <FaRegMeh />,
  bad: <FaRegFrown />,
};

const Statistics = ({ data, total, positivePercentage }) => {
  return (
    <StyledStatistics>
      {Object.keys(data).map((item) => (
        <StatisticsItem key={item}>
          {feedBackTypes[item]}
          {item}: {data[item]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}</StatisticsItem>
    </StyledStatistics>
  );
};

Statistics.protoTypes = {
  data: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
