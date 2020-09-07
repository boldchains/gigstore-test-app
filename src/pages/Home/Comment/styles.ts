import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
  width: 100%;
`;

export const Avatar = styled.Image`
  width: 36px;
  height: 42px;
`;

export const UserState = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
`;

export const Username = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-right: 10px;
  color: white;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: white;
`;

export const Stats = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

export const StatsColumn = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
`;

export const StatsNumber = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  padding-right: 10px;
`;

export const StatsText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const Bookmark = styled(Feather)`
  border-width: 1.5px;
  padding: 5px;
  margin-left: 5px;
  border-color: #fff;
  border-radius: 2px;
`;
  