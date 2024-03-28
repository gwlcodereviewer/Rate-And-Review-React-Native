import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Animated, Modal, TouchableOpacity } from "react-native";
import {
  AnimatedParentContainer,
  ButtonWrapper,
  FloatingLabelInputWrapper,
  MediumText,
  ProfileImage,
  ProfileView,
  RegularText,
  StartRatingWrapper,
  Wrapper,
} from "./styled";
import { rpx } from "../styles/utils";
import StarRating from "react-native-star-rating-widget";
import pngImages from "../assets/images/pngImages";
import { strings } from "../localization";
import FloatingLabelInput from "../components/common/floatingLabelInput";
import styles from "../styles/styleSheet";
import { PrimaryButton } from "../components/common";
/**
 * Name: Props
 * Desc: Interface type for props
 */
interface Props {
  visible: boolean;
  onClose: () => void;
  userName: string;
}
const RateAndReview = (props: Props) => {
  // const [movementAnim] = useState(new Animated.Value(-400));
  const movementAnim = useRef(new Animated.Value(-400)).current;
  const { visible, onClose, userName } = props;
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const transAnim = useRef(new Animated.Value(30)).current;

  /**
   * Name: handleClose
   * Desc: Function to animate the modal on close
   */
  const handleClose = () => {
    Animated.timing(movementAnim, {
      toValue: 700,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
      setIsReviewOpen(false)
      springAnimation.reset();
    });
  };
  const springAnimation =  Animated.spring(transAnim, {
    toValue: 0,
    friction: 1,
    tension: 20,
    useNativeDriver: true,
  })
  /**
   * Name: useEffect
   * Desc: useEffect to animate the modal
   */
  useEffect(() => {
    if (visible) {
      Animated.timing(movementAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      springAnimation.start();
      
    } else {
      Animated.timing(movementAnim, {
        toValue: 700,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, movementAnim]);
  /**
   * Name: onValueChange
   */
  const onValueChange = (text: string) => {
    setValue(text);
  };
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => handleClose()}
    >
      <Wrapper>
        <AnimatedParentContainer>
          <Animated.View
            style={[
              styles.modalView,
              {
                transform: [{ translateY: movementAnim }],
                minHeight: rpx(isReviewOpen ? 550 : 300),
              },
            ]}
          >
            <ProfileView>
              <ProfileImage source={pngImages.englishFlag} resizeMode="cover" />
              <MediumText marginTop={10}>{userName}</MediumText>
            </ProfileView>
            <RegularText marginTop={20}>{strings.wasThisPageHelpful}</RegularText>
            <StartRatingWrapper>
              <StarRating rating={rating} onChange={setRating} />
            </StartRatingWrapper>
            {!isReviewOpen && (
              <Animated.View style={[{alignItems: 'center',justifyContent: 'center'},{transform:[
                {translateX: transAnim}
              ]}]}>
                <ButtonWrapper>
                  <PrimaryButton
                    title={strings.review}
                    onPress={() => {
                      setIsReviewOpen(true);
                    }}
                    buttonStyle={styles.primaryButton}
                    disabledButtonStyle={styles.disableButton}
                    textStyle={styles.primaryTextButton}
                    disabledTextStyle={styles.disableTextButton}
                  />
                </ButtonWrapper>
              </Animated.View>
            )}
            {isReviewOpen && (
              <React.Fragment>
                <FloatingLabelInputWrapper marginTop={30}>
                  <FloatingLabelInput
                    enableFocus={value !== ""}
                    onChangeText={(text: string) => onValueChange(text)}
                    inputValue={value}
                    errorText={error}
                    maxLength={64}
                    label={strings.whatDoYouThink}
                    autoCapitalize="none"
                    floatingLabel={false}
                    placeHolderText={strings.writeComment}
                    multiline={true}
                  />
                </FloatingLabelInputWrapper>

                <ButtonWrapper>
                  <PrimaryButton
                    title={strings.submitText}
                    onPress={() => {}}
                    buttonStyle={styles.primaryButton}
                    disabledButtonStyle={styles.disableButton}
                    textStyle={styles.primaryTextButton}
                    disabledTextStyle={styles.disableTextButton}
                    isDisable={value === ""}
                  />
                </ButtonWrapper>
                <TouchableOpacity
                  onPress={() => {
                    handleClose();
                  }}
                >
                  <RegularText marginTop={16}>{strings.cancel}</RegularText>
                </TouchableOpacity>
              </React.Fragment>
            )}
          </Animated.View>
        </AnimatedParentContainer>
      </Wrapper>
    </Modal>
  );
};

export default RateAndReview;
