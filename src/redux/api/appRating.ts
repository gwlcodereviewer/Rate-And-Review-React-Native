import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface AppRatingState {
  adsRead: string[];
  installDate: string;
  appRated: boolean;
  remindMeDate: string;
}
const initialState: AppRatingState = {
    adsRead: [],
    installDate: '',
    appRated: false,
    remindMeDate: '',
   };
export const ratingSlice = createSlice({
    name: 'appRating',
    initialState,
    reducers: {
        setInstallDate(state, { payload }: PayloadAction<string>) {
            state.installDate = payload;
          },
          setAppRated(state, { payload }: PayloadAction<boolean>) {
            state.appRated = payload;
          },
          setRemindMeLater(state, { payload }: PayloadAction<string>) {
            state.remindMeDate = payload;
          },
          setAdsReads(state, { payload }: PayloadAction<string>) {
            state.adsRead = [
                ...new Set([...state.adsRead, payload]),
              ];
          },
    },
  });
  
  export const {setInstallDate, setAppRated, setRemindMeLater} = ratingSlice.actions;
  
  export default ratingSlice.reducer;
  