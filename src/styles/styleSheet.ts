import { StyleSheet } from "react-native";
import colors from "./colors";
import { defaultTheme } from "./theme";
import { FontFamily, rpx, rh } from "./utils";

const { primaryTextColor } = defaultTheme;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomColor: colors.hawkesBlue,
    borderBottomWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 0.6,
  },
  headerTitleStyle: {
    fontFamily: FontFamily.Black,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: rpx(18),
    lineHeight: rh(23),
    color: primaryTextColor,
  },
  loginButton: {
    marginTop: rpx(18),
  },
  textArea: {
    marginTop: rh(30),
    height: rh(100),
    width: "100%",
    textAlignVertical: "top",
    fontSize: rpx(16),
    paddingHorizontal: rpx(14),
    paddingVertical: rpx(14),
    fontFamily: FontFamily.Regular,
    paddingLeft: rpx(14),
    paddingRight: rpx(14),
  },
  inputField: {
    flex: 1,
    width: "100%",
  },
  whiteButtonShadow: {
    borderColor: colors.rgbSwitchBoxShadow,
    shadowColor: `${colors.whiteGrayColor}`,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  safeAreaView: {
    flex: 1,
  },
  textInputContainer: {
    marginVertical: 20,
  },
  roundedTextInput: {
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 2,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "60%",
    gap: 20,
  },
  textInput: {
    height: 40,
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    letterSpacing: 5,
    marginBottom: 10,
    textAlign: "center",
  },
  primaryButtonStyle: {
    height: rpx(28),
    width: rpx(100),
    paddingHorizontal: rpx(10),
    marginTop: rpx(10),
  },
  updateButton: {
    marginTop: rpx(18),
    width: 'auto',
    fontSize: rpx(18),
    paddingHorizontal: 25,
  },
  updateTextButton: {
    fontSize: rpx(20),
    fontFamily: FontFamily.Bold,
  },
  modalView: {
    backgroundColor: colors.popupColor,
    padding: rpx(20),
    elevation: 5,
    width: "100%",
    borderRadius: rpx(20),
    alignItems: "center",
    shadowColor: `${colors.black}`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  primaryButton: {
    marginTop: rpx(18),
    width: 'auto',
    paddingHorizontal: 25,
  },
  primaryTextButton: {
    fontSize: rpx(20),
    fontFamily: FontFamily.Bold,
  },
  disableButton: {
    marginTop: rpx(18),
    width: 'auto',
    paddingHorizontal: 25,
    fontSize: rpx(20),
    backgroundColor: colors.lightGrayColor,
    borderColor: colors.lightGrayColor,
  },
  disableTextButton: {
    fontSize: rpx(20),
    fontFamily: FontFamily.Bold,
    color: colors.white
  },

  cardView: {
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: rpx(20),
    alignItems: "center",
    shadowColor: `${colors.black}`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: rpx(10),    
    marginHorizontal: rpx(5)    

  }
});

export default styles;
