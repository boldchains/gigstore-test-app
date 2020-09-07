import React from 'react';
import avatar from '../../../assets/avatar.png';

import {
  Avatar,
  Username,
  Time,
  Content,
  Stats,
  UserState,
  StatsText,
  StatsColumn,
  StatsNumber,
} from './styles';

const Me: React.FC = () => {
  return (
    <Content>
      <Avatar source={avatar} />
      <Stats>
        <UserState>
          <Username>@matheuscastroweb</Username>
          <Time>3 hours ago</Time>
        </UserState>
        <StatsText>This video is really funny!</StatsText>
        <StatsColumn>
          <StatsNumber>950</StatsNumber>
          <StatsText>Likes</StatsText>
        </StatsColumn>
      </Stats>
    </Content>
  );
};

export default Me;
