import { getTheme, defaultThemeVariables } from "@shoutem/ui";
import { INCLUDE, createVariations, changeColorAlpha } from "@shoutem/theme";
import { Platform, StatusBar, Dimensions } from "react-native";

/**
 * UI colors
 */
const colors = {
  lightGrey: "#E8E8E8",
  grey: "#666666",
  textGrey: "#2E2E2E",
  slateGrey: "#232323",
  darkGrey: "#131313",
  white: "#ffffff",
  link: "#D72727",
  primaryRed: "#BB0000",
  // secondaryRed: "#770000",
  secondaryRed: "#882525"
};

/**
 * Miscellaneous useful constants
 */
const constants = {
  statusBarHeight: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
  inputIconSize: 15,
  iconSize: 22,
  tabIconSize: 30,
  invisibleHeaderStyle: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  }
};


// Precalculate Device Dimensions for better performance
const deviceX = Dimensions.get('window').width;
const deviceY = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = deviceX < 375 ? (deviceX < 320 ? 0.75 : 0.875) : 1 ;
const ratioY = deviceY < 568 ? (deviceY < 480 ? 0.75 : 0.875) : 1 ;

const defaultFontStyles = {
  fontStyle: "normal",
  fontWeight: "normal",
  color: colors.darkGrey
};

/**
 * Theme inherited from @shoutem/ui and extended with default variables
 */
const defaultTheme = getTheme({
  ...defaultThemeVariables,
  heading: {
    ...defaultFontStyles,
    color: colors.white,
    fontSize: 30 * ratioX
  },
  title: {
    ...defaultFontStyles,
    color: colors.white,
    fontSize: 26 * ratioX
  },
  subtitle: {
    ...defaultFontStyles,
    color: colors.white,
    fontSize: 15 * ratioX
  },
  caption: {
    ...defaultFontStyles,
    color: colors.white,
    fontSize: 12 * ratioX
  },
  text: {
    ...defaultFontStyles,
    color: colors.white,
    fontSize: 15 * ratioX
  },
  smallGutter: 10,
  mediumGutter: 20,
  largeGutter: 30,
  extraLargeGutter: 45,
  galleryDotSize: 8,
  backgroundColor: colors.white,
  secondaryButtonBackgroundColor: "transparent",
  secondaryButtonBorderColor: colors.secondaryRed,
  secondaryButtonTextColor: colors.white,
  commonVariants: {
    ...defaultThemeVariables.commonVariants,
    ".dark": {
      backgroundColor: colors.darkGrey
    }
  }
});

/**
 * Theme definining the style for app components. All custom styling should be in here.
 */
const Theme = {
  ...defaultTheme,
  text: {
    ...defaultTheme["text"],
    ".link": {
      color: colors.link
    },
    ".large": { fontSize: 17, lineHeight: 17 * 1.2 },
    ".inverse": {
      color: colors.darkGrey
    },
    ".secondary": {
      color: colors.grey
    }
  },
  "d.component.ImageScreen": {
    image: { width: "100%", height: "100%", paddingTop: 0 },
    wrapper: {
      minHeight: "100%",
      minWidth: "100%",
      marginTop: - constants.statusBarHeight,
      paddingTop: 80,
      justifyContent: "space-between"
    }
  },
  "d.component.InputAccessory": {
    InputAccessory: {
      alignItems: "flex-end",
      backgroundColor: colors.lightGrey,
      height: 40,
      position: "absolute",
      left: 0,
      right: 0
    },
    InputAccessoryButtonText: {
      fontSize: 17,
      letterSpacing: 0.5,
      color: colors.link,
      paddingHorizontal: 9,
      paddingVertical: 9
    }
  },
  "d.component.TextInput": {
    [INCLUDE]: ["guttersMargin"],
    input: {
      backgroundColor: changeColorAlpha(colors.white, 0.25),
      color: colors.white,
      selectionColor: colors.white,
      borderRadius: 5,
      margin: 0,
      padding: 10,
      height: 45,
      borderWidth: 1,
      fontSize: 17
    },
    validationMessage: {
      color: colors.primaryRed
    }
  },
  "d.component.ImageField": {
    touch: {
      flex: 0
    },
    wrapper: {
      marginBottom: 20,
      height: 100,
      width: 100,
      borderRadius: 100,
      borderStyle: "dashed",
      borderColor: "grey",
      borderWidth: 1,
      overflow: "hidden"
    },
    image: {
      position: "absolute",
      top: -1,
      left: -1,
      right: -1,
      bottom: -1,
      backgroundColor: "transparent"
    },
    icon: {
      // backgroundColor: colors.white,
      // alignItems: "center",
      // justifyContent: "space-around"
    }
  },
  "d.component.ButtonGroup": {
    view: {
      flex: 1
      // minHeight: 40,
      // minWidth: 40
    },
    container: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 5,
      marginTop: 5,
      flexDirection: "row",
      backgroundColor: "transparent",
      height: 50,
      flex: 1,
      borderColor: colors.secondaryRed,
      borderWidth: 2.5,
      borderRadius: 3
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 15,
      paddingVertical: 10
    },
    textStyle: {
      fontSize: 13
    },
    innerBorder: {
      color: colors.secondaryRed,
      // width: 2.5
      width: 0
    },
    selectedBackgroundColor: colors.secondaryRed,
    selectedTextStyle: {
      color: colors.white
    },
    // activeOpacity: 0,
    underlayColor: colors.white
  },
  "d.component.NavBar": {
    bar: {
      position: "absolute",
      backgroundColor: colors.slateGrey,
      height: defaultThemeVariables.navBarHeight + constants.statusBarHeight,
      paddingTop: constants.statusBarHeight,
      paddingHorizontal: 7,
      width: "100%",
      zIndex: 1
    },
    title: {
      color: colors.white,
      textAlign: "center",
      fontSize: 17,
      fontFamily: "Rubik-Medium"
    },
    left: {
      position: "absolute",
      left: 7,
      top: 28
    },
    right: {
      position: "absolute",
      right: 7,
      top: 28
    }
  },
  "d.component.Spinner": {
    ...defaultTheme["shoutem.ui.Spinner"],
    wrapper: {
      justifyContent: "center"
    },
    ".overlay": {
      ...defaultTheme["shoutem.ui.Spinner"],
      size: "large",
      color: colors.darkGrey,
      wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: changeColorAlpha(colors.white, 0.8),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
      }
    }
  },
  "d.view.SelectFood": {
    foodButtonWrapper: {
      borderWidth: 2,
      borderColor: colors.grey,
      borderRadius: 7,
      backgroundColor: "transparent"
    },
    foodButtonWrapperSelected: {
      borderColor: colors.secondaryRed,
      backgroundColor: colors.secondaryRed
    },
    foodButtonText: {
      color: changeColorAlpha(colors.white, 0.8)
    },
    foodButtonTextSelected: {
      color: colors.white
    },
    buttonCheck: {
      color: colors.white,
      position: "absolute",
      top: 7,
      right: 7,
      fontSize: 20
    }
  },
  "shoutem.ui.Divider": {
    ...defaultTheme["shoutem.ui.Divider"],
    [INCLUDE]: ["guttersMargin"],
    ".block": {
      alignSelf: "center",
      flex: 1,
      borderWidth: 1,
      borderColor: colors.darkGrey
    }
  },
  "shoutem.ui.Screen": {
    ...defaultTheme["shoutem.ui.Screen"],
    [INCLUDE]: ["guttersPadding", "commonVariants"],
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 20,
    overflow: "visible"
  },
  "shoutem.ui.Button": {
    ...defaultTheme["shoutem.ui.Button"],
    backgroundColor: colors.secondaryRed,
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 5,
    borderWidth: 2.5,
    borderColor: "transparent",
    "shoutem.ui.Text": {
      ...defaultTheme["shoutem.ui.Button"]["shoutem.ui.Text"],
      color: colors.white,
      fontSize: 15,
      marginHorizontal: 10
    },
    ".secondary": {
      ...defaultTheme["shoutem.ui.Button"][".secondary"],
      ".inverse": {
        "shoutem.ui.Text": {
          ...defaultTheme["shoutem.ui.Button"]["shoutem.ui.Text"],
          fontSize: 15,
          marginHorizontal: 10,
          color: colors.secondaryRed
        }
      }
    }
  },
  "shoutem.ui.Image": {
    ...defaultTheme["shoutem.ui.Image"],
    [INCLUDE]: ["guttersMargin"]
  },
  "shoutem.ui.HorizontalPager": {
    ...defaultTheme["shoutem.ui.HorizontalPager"],
    page: {
      ...defaultTheme["shoutem.ui.HorizontalPager"]["page"]
      // overflow: "hidden"
    }
  },
  "shoutem.ui.PageIndicators": {
    ...defaultTheme["shoutem.ui.PageIndicators"],
    indicatorContainer: {
      ...defaultTheme["shoutem.ui.PageIndicators"]["indicatorContainer"],
      "shoutem.ui.View": {
        ...defaultTheme["shoutem.ui.PageIndicators"]["indicatorContainer"][
          "shoutem.ui.View"
        ],
        backgroundColor: changeColorAlpha(colors.white, 0.4),
        marginHorizontal: 7.5,
        ".selected": {
          backgroundColor: colors.white,
          width: 10,
          height: 10,
          borderRadius: 10
        }
      }
    }
  }
};

export default Theme;
export { colors, constants };
