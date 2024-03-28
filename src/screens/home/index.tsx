import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { PrimaryButton, AppStatusBar } from "../../components/common";
import { strings } from "../../localization";
import { theme } from "../../styles";
import { Container } from "../../styles/style";
import { INavigation } from "../../types";
import { checkVersion } from "react-native-check-version";
import DeviceInfo from "react-native-device-info";
import { NAV_FORCE_UPDATE, NAV_REVIEW_COMMENT } from "../../navigation/constants";
import { requestInAppReview, requestInAppReviewWithOtherMethod } from "../../rateApp";
import RateAndReview from "../../rateAndReview";

/**
 * props type declaration
 */
interface HomeProps {
  navigation: INavigation;
}

/**
 * desc: Home screen UI
 */
const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { home, rateOnProduct, reviewComments, inAppReview} = strings;
  const { navigation } = props;
  const [ratingModalVisible, setRatingModalVisible] = useState<boolean>(false);
  useEffect(() => {
    // requestInAppReview();
  }, []);
  return (
    <Container>
      <AppStatusBar />
      <Text>{home}</Text>
      <Text
        onPress={() => {
          setRatingModalVisible(true);
        }}
      >
        {rateOnProduct}
      </Text>
      <Text
        onPress={() => {
          navigation?.navigate(NAV_REVIEW_COMMENT);
        }}
      >
        {reviewComments}
      </Text>
      <Text
        onPress={() => {
          requestInAppReviewWithOtherMethod();
        }}
      >
        {inAppReview}
      </Text>
      <RateAndReview
        visible={ratingModalVisible}
        onClose={() => {
          setRatingModalVisible(false);
        }}
      />
    </Container>
  );
};

export default Home;
