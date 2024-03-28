import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager, Linking, Platform } from "react-native";
import { ASYNC_CONST, DATE_FORMAT } from "../constants/utils";
import Toast, { ToastPosition } from "react-native-toast-message";
import NetInfo from "@react-native-community/netinfo";
import { strings } from "../localization";
import { API_RESPONSE_STATUS, SERVER_ERROR } from "../helpers/constants";
import { HEADER_KEYS } from "../constants/server";
import { Alert } from "react-native";
import moment from "moment";
import { INavigation } from "../types";
import { rpx } from "../styles/utils";
import { hasNotch } from "react-native-device-info";
let isToastVisible = false;

/**
 * desc: Method check for iOS platform
 * @returns boolean
 */
export const isIOS = () => {
  return Platform.OS === "ios";
};

/**
 * set storage method of Async storage
 */
export const setStorageItem = async (key: any, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

/**
 * get storage method of Async storage
 */
export const getStorageItem = async (key: any) => {
  const res = await AsyncStorage.getItem(key);
  return res;
};

/**
 * desc: Method to check user login
 * @returns
 */
export const checkLogin = async () => {
  const loggedIn = await getStorageItem(ASYNC_CONST.LoggedInUserInfo);
  return loggedIn;
};

/**
 * desc: Method to get customer Id
 * @returns customer_id
 */
export const getCustomerID = async () => {
  const userData = await AsyncStorage.getItem(ASYNC_CONST.LoggedInUserInfo);
  if (userData) {
    const data = JSON.parse(userData || "");
    return data?.customerId;
  }
  return null;
};

/**
 * desc: Method to get error message as per error code
 * @param errorResponse
 * @returns
 */
export const getErrorMessage = (
  errorResponse: { status: any; data: any },
  defaultErr: string
) => {
  const defaultMessage = { error: { error_message: defaultErr } };
  switch (errorResponse?.status) {
    case 405:
    case 500:
    case 502:
    case 503:
    case 504:
      return defaultMessage;
    default:
      return errorResponse?.data;
  }
};
/**
 * Name: isArabic
 * Desc: Method to check is language arabic
 * @returns
 */
export const isArabic = () => {
  return I18nManager.isRTL;
};

/* Name: isValidEmail
 * Desc: To validating the email address
 * @param {String} email
 * @returns {Boolean}
 */
export function isValidEmail(email: string): boolean {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
/**
 * Name: TOAST_MESSAGE_TYPE
 * Desc: Toast message types
 */
export const TOAST_MESSAGE_TYPE = {
  success: "success",
  error: "error",
  info: "info",
};
/**
 * Name: showToastMessage
 * Desc: Function to show messages in toast
 * @param {String} title - title of message
 * @param {String} description - description of message
 * @param {String} toastType - type of toast
 * @param {ToastPosition} toastPosition - position of toast
 */
export const showToastMessage = (
  title = "",
  description = "",
  toastType = TOAST_MESSAGE_TYPE.error,
  toastPosition: ToastPosition = "bottom"
) => {
  const { noInternet, pleaseCheckInternetSettings } = strings;
  if (!isToastVisible) {
    isToastVisible = true;
    Toast.show({
      type: toastType,
      position: toastPosition,
      visibilityTime: 5000,
      text1: title || noInternet,
      text2: description || pleaseCheckInternetSettings,
      autoHide: true,
      onHide: () => {
        isToastVisible = false;
      },
    });
  }
};
/**
 * Name: showServerError
 * Desc: Handle error response according to error code.
 * @param error - The error object.
 * @param navigation - The navigation object.
 */
export const showServerError = async (error:any
  , navigation: INavigation | undefined) => {
  if (!error) {
    return;
  }
  if (error?.status && error?.status === SERVER_ERROR.fetchError) {
    // No internet error
    const state = await NetInfo.fetch();
    if (!state.isConnected) {
      showToastMessage(
        strings.appName,
        strings.noInternet,
        TOAST_MESSAGE_TYPE.error
      );
    }
  } else {
    if (error?.data?.code !== API_RESPONSE_STATUS.DATA_NOT_FOUND) {
      showToastMessage(
        strings.appName,
        error?.data?.message,
        TOAST_MESSAGE_TYPE.error
      );
    }
  }

  return true;
};
export const openInStoreConfig={
  appStoreConfig:{
    appName: strings.appName,
    appId: 'com.baseproject.app',
    storeLocale:'in'
  },
  playStoreConfig:{
    appId: 'com.baseproject.app',
  }
}
/**
 * Name: openInStore
 * Desc: Redirect to apple/play store for force update
 * @param config
 */
export const openInStore = async (config: {
  appStoreConfig: {
    appName: string;
    appId: string;
    storeLocale: string;
  };
  playStoreConfig: {
    appId: string;
  };
}) => {
  if (isIOS()) {
    await Linking.openURL(
      `https://apps.apple.com/${config.appStoreConfig.storeLocale}/app/${config.appStoreConfig.appName}/id${config.appStoreConfig.appId}`
    );
  } else {
    await Linking.openURL(
      `https://play.google.com/store/apps/details?id=${config.playStoreConfig.appId}`
    );
  }
};
/**
 * Name: getAccessToken
 * Desc: Function to get access token from local storage.
 * @returns - The access token.
 */
export const getAccessToken = async () => {
  const accessToken = await getStorageItem(ASYNC_CONST.accessToken);
  if (accessToken) {
    return JSON.parse(accessToken || "");
  }
  return null;
};
/**
 * Name: getApiHeader
 * Desc: Function to get common header params.
 * @param headers - The header params.
 * @returns - The updated header params.
 */
export const getApiHeader = async (headers: Headers) => {
  const token = await getAccessToken();
  headers.set(HEADER_KEYS.Authorization, `${HEADER_KEYS.Bearer} ${token}`);
  headers.set(HEADER_KEYS.ContentType, HEADER_KEYS.ApplicationJson);
  headers.set(HEADER_KEYS.Accept, HEADER_KEYS.ApplicationJson);
  return headers;
};
/**
 * Name: showAlert
 * @param {string} title - The alert title.
 * @param {string} message - The alert message.
 * @param {string} btnText - The alert button text.
 */
export const showAlert = (title: string, message: any, btnText: string) => {
  Alert.alert(title, message, [{text: btnText}]);
};
/**
 * Name: formattedStringDate
 * Desc: Function to get formatted string date.
 */
export const formattedStringDate = (date: moment.MomentInput, format?: string) => {
  if (!date) {
    return '';
  }
  return moment(date).format(format ? format : DATE_FORMAT.YYYY_MM_DD);
};
/**
 * Name: getHeaderPadding
 * Desc: Function to get header padding.
 */
export const getHeaderPadding = () => {
  return rpx(hasNotch() ? 56 : 10);
};