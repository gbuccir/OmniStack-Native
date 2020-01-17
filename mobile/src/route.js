import { creatAppContainer, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './Pages/Main'
import Profile from './Pages/Profile'


const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                headerTitle: "DevFinder"
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions: {
                headerTitle: "Perfil"
            }
        }
    },{
        defaultNavigationOptions:{
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#7D40E7',
            }
        }
    }
    )
)

export default Routes;