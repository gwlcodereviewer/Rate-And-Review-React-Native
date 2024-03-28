import React, {useState} from 'react';
import {PlanContainer, PlanText, SubscribedContainer} from './styled';
import { IUserInfoResponse } from '../types/utils';
import { strings } from '../localization';
import { PrimaryButton } from '../components/common';
import { rpx } from '../styles/utils';
import { colors } from '../styles';
import ModalBox from '../components/modalBox';
import { formattedStringDate } from '../utils';

/**
 * Name: Props
 * Desc: Interface declaration for Props
 */
interface Props {
  item?: IUserInfoResponse;
  callCancelProcess: () => void;
  showLoader: boolean;
  isCancelled: boolean;
  isFamilyAdmin: boolean;
  familyPlanStatus: string;
}

/**
 * Name: SubscribedView
 * Desc: Screen to render in subscribed UI
 * @param {IUserInfoResponse} item - subscribed plan data
 * @returns JSX element
 */
const SubscribedView: React.FC<Props> = ({
  item,
  showLoader,
  callCancelProcess,
  isCancelled,
  isFamilyAdmin,
  familyPlanStatus,
}: Props) => {
  const {nextRenewalDate, expireDate, cancelSubscription} = strings;
  const [showCancelSubscription, setShowCancelSubscription] = useState(false);

  const isShowCancelButton = () => {
    if (familyPlanStatus === '1') {
      return isFamilyAdmin;
    } else {
      return true;
    }
  };
  return (
    <SubscribedContainer>
      <PlanContainer>
        <PlanText>
          {isCancelled ? expireDate : nextRenewalDate}:{' '}
          {formattedStringDate(item?.nextRenewalDate)}
        </PlanText>
        <PlanText>{item?.plan_name}</PlanText>
        <PlanText>${item?.price}</PlanText>
      </PlanContainer>
      {!isCancelled && isShowCancelButton() && (
        <PrimaryButton
          buttonStyle={{
            height: rpx(37),
            width: rpx(250),
            paddingHorizontal: rpx(10),
            marginTop: rpx(50),
            backgroundColor: colors.greenColor,
          }}
          title={cancelSubscription}
          onPress={() => setShowCancelSubscription(true)}
          showLoader={showLoader}
        />
      )}
      <ModalBox
        visible={showCancelSubscription}
        message={strings.cancelSubscriptionMessage}
        onPressPositiveBtn={() => {
          setShowCancelSubscription(false);
          callCancelProcess();
        }}
        onPressNegativeBtn={() => setShowCancelSubscription(false)}
      />
    </SubscribedContainer>
  );
};

export default SubscribedView;
