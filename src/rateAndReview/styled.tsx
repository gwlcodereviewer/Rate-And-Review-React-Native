import styled from "styled-components/native";
import { FontFamily, rpx } from "../styles/utils";
import { colors } from "../styles";
interface IStyle {
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}
/**
 * Name: Wrapper
 * Desc: The Wrapper container
 */
export const Wrapper = styled.View``;

/**
 * Name: AnimatedParentContainer
 * Desc: The parent container of animated view
 */
export const AnimatedParentContainer = styled.View`
  justify-content: center;
  margin-top: ${rpx(130)}px;
  padding-horizontal: ${rpx(30)}px;
  height: auto;
`;
/**
 * Name: ProfileView
 * Desc: view for profile image
 */
export const ProfileView = styled.View`
  padding-horizontal: ${rpx(1)}px;
  border-radius: ${rpx(50)}px;
  border-width: ${rpx(1)}px;
  border-color: ${colors.white};
  align-self: center;
`;

/**
 * Name: StartRatingWrapper
 * Desc: view for star rating
 */
export const StartRatingWrapper = styled.View`
  margin-top: ${rpx(10)}px;
`;
/**
 * Name: MediumText
 * Desc: Medium text for profile
 */
export const MediumText = styled.Text<IStyle>`
  color: ${colors.black};
  margin-top: ${(props) => props.marginTop}px;
  font-family: ${FontFamily.Medium};
  font-size: ${rpx(18)};
`;
/**
 * Name: RegularText
 * Desc: Regular text
 */
export const RegularText = styled.Text<IStyle>`
  color: ${colors.black};
  margin-top: ${(props) => props.marginTop}px;
  font-family: ${FontFamily.Regular};
  font-size: ${rpx(18)};
`;
/**
 * Name: FloatingLabelInputWrapper
 * Desc: The view for input field
 */
export const FloatingLabelInputWrapper = styled.View<IStyle>`
  flex: 1;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
  margin-vertical: ${rpx(5)}px;
  width: 100%;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  flex-direction: row;
`;
/**
 * Name: ProfileImage
 * Desc: view for profile image
 */
export const ProfileImage = styled.Image`
  border-radius: ${rpx(50)}px;
  height: ${rpx(100)}px;
  width: ${rpx(100)}px;
`;