# Rate and review on Feature   
In this component , We will work through a rating flow and implement it within our project,
We need more positive user reviews, so let's implement a call-to-action. Specifically, it will be a dialog where
the user will prompted to rate the feature, User will have the option to rating the feature and send review to the admin.
The user can give a rating by selecting stars, which will be displayed on the rating popup, and have the option to submit comments.
There is a screen for review comments where user can see reviews given by other users.
## Usage
In order to have a good separation of code we have created separate component RateAndReview.
User can import the component and call it as a modal. 
Need to create a state ratingModalVisible  and call setRatingModalVisible(true) where want to integrate  the feature 
`
  const [ratingModalVisible, setRatingModalVisible] = useState<boolean>(false);

<RateAndReview
        visible={ratingModalVisible}
        onClose={() => {
          setRatingModalVisible(false);
        }}
      />`
We have on more feature reviews where we can see review added by user.
We will call it by using navigation ReviewComments, in which component rating, user name and comment fields listed.

 





