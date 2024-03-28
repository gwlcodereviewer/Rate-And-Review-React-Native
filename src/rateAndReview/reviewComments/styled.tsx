import styled from "styled-components/native";
import { FontFamily, rpx } from "../../styles/utils";
import { colors } from "../../styles";

export const CardContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${rpx(10)}px;
`;
/**
 * Name: StartContainer
 * Desc: star image is like a start filed and unfilled
 */
export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
/**
 * Name: StartImage
 * Desc: star image is like a start filed and unfilled
 */
export const StarImage = styled.Image`
  width: ${rpx(25)}px;
  height: ${rpx(25)}px;
`;
/**
 * Name: UserImage
 * Desc: style image of profile
 */
export const UserImage = styled.Image`
  width: ${rpx(70)}px;
  height: ${rpx(70)}px;
  border-radius: ${rpx(35)}px;
`;
/**
 * Name: ProfileImage
 * Desc: view for profile image
 */
export const ProfileImage = styled.Image`
  border-radius: ${rpx(10)}px;
  height: ${rpx(50)}px;
  width: ${rpx(50)}px;
`;
/**
 * Name: SecondContainer
 * Desc: The container having stars, description and name
 */
export const SecondContainer = styled.View`
  flex-direction: column;
  padding-left: ${rpx(15)}px;

`;
/**
 * Name: ProfileName
 * Desc: Profile is the reviewer name on reviews list
 */
export const ProfileName = styled.Text`
  font-size: ${rpx(16)}px;
  font-family: ${FontFamily.SemiBold};
  color: ${colors.black};
  padding-bottom: ${rpx(7)}px
`;
/**
 * Name: ReviewText
 * Desc: text comment from reviewer
 */
export const ReviewText = styled.Text`
  font-size: ${rpx(14)}px;
  font-family: ${FontFamily.Regular}px;
  color: ${colors.black};
  padding-right: ${rpx(50)}px;
  padding-top: ${rpx(7)}px
`;
/**
 * Name: ReviewCommentMainContainer
 * Desc: it has flat list for rendering list of comments
 */
export const ReviewCommentMainContainer = styled.View`
  padding-horizontal: ${rpx(15)}px;
  padding-vertical: ${rpx(15)}px;
`;
