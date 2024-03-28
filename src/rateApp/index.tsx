import InAppReview from "react-native-in-app-review";
import Rate, { AndroidMarket } from "react-native-rate";
import { RootState, store } from "../redux/store";
import { showToastMessage } from "../utils";
import { strings } from "../localization";
export const STORE_RATE_OPTION = {
  AppleAppID: "2193813192",
  GooglePackageName: "com.baseproject.app",
  AmazonPackageName: "com.baseproject.app",
  OtherAndroidURL: "http://www.randomappstore.com/app/47172391",
  preferredAndroidMarket: AndroidMarket.Google,
  preferInApp: false,
  openAppStoreIfInAppFails: true,
  fallbackPlatformURL: "",
};
export const INSTALLATION_TIME = 7 * 24 * 60 * 60 * 1000;
export const REMIND_ME_TIME = 28 * 24 * 60 * 60 * 1000;

export const selectShouldShowRatingDialog = () => {
  const {installDate, appRated, remindMeDate } =
    store.getState().appRating;

  if (appRated) {
    return false;
  }
  const sevenDaysAfterInstall =
  new Date(installDate).getTime() < Date.now() - INSTALLATION_TIME;
  return (
    (!remindMeDate && sevenDaysAfterInstall) ||
    (remindMeDate && new Date(remindMeDate).getTime() < Date.now())
  );
};
/**
 * Name: isAvailable
 * Desc: to check the rate feature is available
 * @returns
 */
const isAvailable = () => {
  return InAppReview.isAvailable();
};
/**
 * Name: requestInAppReview
 * Desc: to call request in app review
 */
export const requestInAppReview = () => {
  if (isAvailable()) {
    // trigger UI InApp review
    InAppReview.RequestInAppReview()
      .then((hasFlowFinishedSuccessfully) => {
        if (hasFlowFinishedSuccessfully) {
          // do something for ios
          // do something for android
        }
      })
      .catch((error) => {
        //we continue our app flow.
        // we have some error could happen while lanuching InAppReview,
        // Check table for errors and code number that can return in catch.
       });
  }
};

/**
 * Name: requestInAppReviewWithOtherMethod
 * Desc: to call request in app review
 */
export const requestInAppReviewWithOtherMethod = () => {
  Rate.rate(STORE_RATE_OPTION, (success, errorMessage) => {
    if (success) {
      // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
      showToastMessage(strings.appName);
    }
    if (errorMessage) {
      // errorMessage comes from the native code. Useful for debugging, but probably not for users to view
      console.error(errorMessage);
    }
  });
};
