import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import {
  setAppRated,
  setInstallDate,
  setRemindMeLater,
} from "../redux/api/appRating";
import {
  REMIND_ME_TIME,
  requestInAppReviewWithOtherMethod,
  selectShouldShowRatingDialog,
} from ".";
import { Alert } from "react-native";
import { getStorageItem, setStorageItem } from "../utils";
import { ASYNC_CONST } from "../constants/utils";
import { strings } from "../localization";

interface Props {}
const AppRating: React.FC<Props> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getStorageItem(ASYNC_CONST.installDate).then((installDate) => {
      getStorageItem(ASYNC_CONST.remindMeLaterDate).then(
        (remindMeLaterDate) => {
          if (remindMeLaterDate) {
            dispatch(setRemindMeLater(remindMeLaterDate));
          }
          if (installDate) {
            dispatch(setInstallDate(JSON.parse(installDate)));
          } else {
            setStorageItem(
              ASYNC_CONST.installDate,
              new Date(Date.now()).toISOString()
            );
            dispatch(setInstallDate(new Date().toISOString()));
          }
        }
      );
    });
  }, []);
  const showRatingDialog = useAppSelector(selectShouldShowRatingDialog);
  const showRatingAlert = () =>{
    Alert.alert(strings.areYouHappy, "", [
      {
        text: strings.yes,
        onPress: () => {
          dispatch(setAppRated(true));
          requestInAppReviewWithOtherMethod();
        },
      },
      {
        text: strings.no,
        onPress: () => {
          dispatch(setAppRated(true));
        },
      },
      {
        text: strings.remindMeLater,
        onPress: () => {
          const fourWeeksFromNow = Date.now() + REMIND_ME_TIME;
          setStorageItem(
            ASYNC_CONST.installDate,
            new Date(Date.now()).toISOString()
          );
          dispatch(setRemindMeLater(new Date(fourWeeksFromNow).toISOString()));
        },
      },
    ]);
  }
  useEffect(() => {
    if (!showRatingDialog) {
      return;
    }
    showRatingAlert();
  }, [showRatingDialog]);

  return <React.Fragment />;
};
export default AppRating;
