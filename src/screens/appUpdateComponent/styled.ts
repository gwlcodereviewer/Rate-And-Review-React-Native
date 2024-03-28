import styled from 'styled-components/native';
import { FontFamily, rpx } from '../../styles/utils';
import { colors } from '../../styles';
interface IStyleInterface{
  marginTop: number;
  color?: string;
  fontSize?: number;
}
export const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;
export const WalkthroughImage = styled.Image`
  height: 60%;
  width: 100%;
  margin-top: ${rpx(40)}px;
`;
/**
 * Name: LargeBoldText
 * Desc: The bold text
 */
export const LargeBoldText = styled.Text`
  color: ${colors.black};
  font-size: ${rpx(24)}px;
  line-height: ${rpx(32)}px;
  font-family: ${FontFamily.Bold};
  text-align: center;
`;
/**
 * Name: MediumText
 * Desc: The medium text
 */
export const MediumText = styled.Text<IStyleInterface>`
  color: ${colors.black};
  font-size: ${rpx(18)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Medium};
  text-align: center;
  margin-top: ${props=>props.marginTop || 0}px;
`;
/**
 * Name: RegularText
 * Desc: The regular text
 */
export const RegularText = styled.Text<IStyleInterface>`
  color: ${props=>props.color || colors.black};
  font-size: ${props=>rpx(props.fontSize || 18)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Regular};
  text-align: center;
  margin-top: ${props=>props.marginTop || 0}px;
`;
export const ButtonWrapper = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;