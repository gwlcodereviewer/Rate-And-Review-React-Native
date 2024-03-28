import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {colors} from '../../styles';
import { rpx } from '../../styles/utils';
import { getHeaderPadding } from '../../utils';

const screenWidth = Dimensions.get('screen').width;

export const Container = styled.View`
  width: ${screenWidth}px;
  background-color: ${colors.white};
  padding-top: ${getHeaderPadding()}px;
`;
export const HeaderBody = styled.View`
  flex-direction: row;
  width: 100%;
  padding-vertical: ${rpx(20)}px;
  padding-horizontal: ${rpx(20)}px;

`;
export const HeaderLeft = styled.View`
  align-items: center;
  justify-content: center;
`;
export const HeaderCenter = styled.View`
  align-items: center;
  justify-content: center;
`;
export const HeaderRight = styled.View`
  align-items: center;
  justify-content: center;
`;
export const BackButton = styled.TouchableOpacity`
  min-height: ${rpx(30)}px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${rpx(24)}px;
  margin-left: ${rpx(24)}px;
`;

export const MenuIcon = styled.Image`
  width: ${rpx(25)}px;
  height: ${rpx(25)}px;
  margin-left: ${rpx(5)}px;
`;

export const BackIcon = styled.Image`
  width: ${rpx(30)}px;
  height: ${rpx(30)}px;
`;
export const View = styled.View`
  flex-direction: row;
`;
export const ToggleTouchable = styled.TouchableOpacity``;
