// @flow
import React, { Component, useEffect, useState } from "react";
import pngImages from "../../assets/images/pngImages";
import { StarContainer, StarImage } from "./styled";

interface Props {
  ratings: number;
  numberOfStar: number;
}

const StarRatingView: React.FC<Props> = (props: Props) => {
  const { ratings = 5, numberOfStar=5 } = props;
  const [stars, setStarts]= useState<any[]>();
 /**
  * Name: StarRating
  * Desc: to get update first time dependencies
  * */ 
  useEffect(()=>{
	createStarView();
  },[numberOfStar, ratings]);
  const createStarView = () => {
    let stars = [];
    for (var i = 1; i <= numberOfStar; i++) {
      let path = pngImages.starFilled;
      if (i > ratings) {
        path = pngImages.starUnfilled;
      }

      stars.push(<StarImage key={i} source={path} />);
	  setStarts(stars);
    }
  };

  return <StarContainer>{stars}</StarContainer>;
};

 
export default StarRatingView;
