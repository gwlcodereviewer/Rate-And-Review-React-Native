import { View } from "react-native";
import styles from "../../styles/styleSheet";
import React from "react";
import { CardContainer, ProfileImage, ProfileName, ReviewText, SecondContainer } from "./styled";
import pngImages from "../../assets/images/pngImages";
import StarRatingView from "./starRatingView";

/**
 * Name: Card
 * Desc: to render review card
 */
const Card = ({ item }) => {
  return <View style={styles.cardView}>
    <CardContainer>
        <ProfileImage source={pngImages.infoIcon}/>
        <SecondContainer>
            <ProfileName>{item.name}</ProfileName>
            <StarRatingView ratings={item.rating} numberOfStar={5} />
            <ReviewText>{item.description}</ReviewText>
        </SecondContainer>
    </CardContainer>
  </View>;
};
export default Card;
