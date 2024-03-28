# Rate on app   
In this component , We will work through a rating flow case-study and implement it with our project from start to finish, We will use Redux and Typescript but this approach applies to any JS stack.

We need more positive user reviews, so let's implement a call-to-action, Specifically, it will be a dialog where the user will be prompted to rate the app.

The user can select either "Yes," or "No," or "Remind Me Later." If "Yes" is selected then the user will have the option to rate the app from the dialog on iOS or be redirected to the Play Store on Android.
To decide when to show the dialog, the following criteria need to be met:
The user must have installed the app at least seven days ago
If the user selects "Remind Me Later," the CTA will reappear every four weeks.

## Usage
In order to have a good separation of logic we are going to create a redux slice where we w will store all the information needed to make a decision about when to show to app rating dialog to user.
To check with full description please see the file rateApp/AppRating.ts

We will then proceed to use selector that will hold logic above.
we will have a function in rateApp like selectShouldShowRatingDialog it hold logic
`
export const selectShouldShowRatingDialog = (state: RootState) => {
  const { adsRead, installDate, appRated, remindMeDate } = state.appRating;
    
  if (appRated) {
    return false;
  }

  const sevenDaysAfterInstall =
    new Date(installDate).getTime() < Date.now() - 7 * 24 * 60 * 60 * 1000;

  return (
    (!remindMeDate && adsRead.length >= 3 && sevenDaysAfterInstall) ||
    (remindMeDate && new Date(remindMeDate).getTime() < Date.now())
  );
};
`
We can create another useEffect where we will trigger an Alert based on the value that returns the selector.
We will use react-native-rate to rating the app .
Through this process we make sure to update our state variables like appRated or the remindMeLater date.  

We have created seprate component for all the feature included in rate to app.





