import styled from 'styled-components';

const StatisticsWrap = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
`;

const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StatisticsText = styled.span`
  display: block;
`;

const StatisticsValue = styled.span`
  display: block;
  margin-left: 10px;
`;

export {
  StatisticsWrap,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsValue,
};
