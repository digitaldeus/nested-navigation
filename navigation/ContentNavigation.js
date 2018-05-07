import { StackNavigator } from "react-navigation"
import ContentScreen from "../screens/ContentScreen"
import HomeScreen from "../screens/HomeScreen"
import QuizNavigation from "../navigation/QuizNavigation"

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Content: {
      screen: ContentScreen,
    },
    Quiz: {
      screen: QuizNavigation,
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }),
    headerMode: "none",
  }
)
