import React, { useEffect, useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import AppStatusBar from "../../components/common/appStatusBar";
import { strings } from "../../localization";
import {
  ButtonWrapper,
  LargeBoldText,
  RegularText,
  WalkthroughImage,
  Wrapper,
} from "./styled";
import pngImages from "../../assets/images/pngImages";
import { PrimaryButton } from "../../components/common";
import styles from "../../styles/styleSheet";
import { openInStore, openInStoreConfig } from "../../utils";
import DeviceInfo from "react-native-device-info";
import { VersionCheckResponse } from "../../types/utils";

/**
 * desc: AppForceUpdate screen UI
 */
const AppUpdateComponent = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [forceUpdate, setForceUpdate] = useState<boolean>(false);
  /**
   * Name: UpdateUI
   * @returns
   */
  const UpdateUI = () => {
    return (
      <Wrapper>
        <AppStatusBar />
        <WalkthroughImage source={pngImages.walkthrough} />
        <LargeBoldText>{strings.timeToUpdate}</LargeBoldText>
        <RegularText marginTop={10}>{strings.forceUpdateText}</RegularText>
        <ButtonWrapper>
          <PrimaryButton
            title={strings.updateNow}
            onPress={() => {
              openInStore(openInStoreConfig);
            }}
            buttonStyle={styles.updateButton}
            textStyle={styles.updateTextButton}
          />
        </ButtonWrapper>
        {!forceUpdate && (
          <TouchableOpacity
            onPress={() => {
              setShowUpdate(false);
            }}
          >
            <RegularText marginTop={16} fontSize={18}>
              {strings.notNow}
            </RegularText>
          </TouchableOpacity>
        )}
      </Wrapper>
    );
  };
  const ModalContainer = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={showUpdate}>
        <UpdateUI />
      </Modal>
    );
  };
  /**
   * Name: isLatestVersion
   * Desc: to get update app while added new feature
   */
  const isLatestVersion = (latestVersion: string) => {
    const currentVersion = DeviceInfo.getVersion();
    return latestVersion != currentVersion;
  };

  /**
   * Name: callApi
   */
  const callApi = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const value: VersionCheckResponse = {
          latestVersion: "1.1",
          show: false,
          isRequired: false,
        };
        resolve(value);
      }, 3000);
    });
    return promise;
  };
  /**
   * Name: useEffect
   * Desc: to get handle api response
   */
  useEffect(() => {
    callApi()
      .then((response: any) => {
        if (response.show && isLatestVersion(response.latestVersion)) setShowUpdate(true);
        setForceUpdate(response.isRequired);
      })
      .catch(() => {});
  }, []);
  return <ModalContainer />;
};

export default AppUpdateComponent;
