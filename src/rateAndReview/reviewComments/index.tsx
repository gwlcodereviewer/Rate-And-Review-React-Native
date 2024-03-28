import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, SafeAreaView } from "react-native";
import { ReviewCommentMainContainer } from "./styled";
import Card from "./card";
import { ReviewItem } from "../../types/utils";
import Header from "../../components/header";
import { strings } from "../../localization";
import { NAV_REVIEW_COMMENT } from "../../navigation/constants";
import { INavigation } from "../../types";
import { AppStatusBar } from "../../components/common";
import { Container } from "../../styles/style";

interface Props {
  navigation: INavigation;
}
/**
 * Name: ReviewComments
 * Desc: it has listed reviews
 * @param props
 * @returns
 */
const ReviewComments: React.FC<Props> = (props: Props) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { navigation } = props;
  /**
   * Name: useEffect
   * Desc: to detect first call
   */
  useEffect(() => {
    const list: ReviewItem[] = [];
    list.push(
      {
        name: "Nilesh Patel",
        rating: 4,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        name: "Ravi Patel",
        rating: 2,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        name: "Sachin Patel",
        rating: 2,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      }
    );
    setReviewsList(list);
  }, []);
  /**
   * Name: onRefresh
   * Desc: to call from pull to refresh
   */
  const onRefresh = () => {
    //TODO: Need to call api
  };
  /**
   * Name: fetchMoreData
   * Desc: to call api  while loading more data
   */
  const fetchMoreData = () => {
    //TODO: Need to call api
  };
  return (
    <Container>
      <AppStatusBar />
      <Header
        title={strings.startDownload}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />

      <ReviewCommentMainContainer>
        <FlatList
          renderItem={({ item }) => <Card item={item} />}
          data={reviewsList}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                onRefresh();
              }}
            />
          }
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={fetchMoreData}
        />
      </ReviewCommentMainContainer>
    </Container>
  );
};
export default ReviewComments;
