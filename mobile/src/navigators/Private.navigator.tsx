import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostRegisterPage from "../pages/private/posts/Register";
import ProfilePage from "../pages/private/DevProfile";
import ProjectRegisterPage from "../pages/private/ProjectRegister";
import FeedPage from "../pages/private/Feed";
import ProjectDetails from "../pages/private/ProjectDetails";
import ProjectDetailsPage from "../pages/private/ProjectDetails";
const PrivateNavigator : React.FC = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator initialRouteName="feed" screenOptions={{ headerShown : false, animation : 'fade_from_bottom'}}>
            
            <Stack.Screen name="feed" component={FeedPage} />
            <Stack.Screen name="profile" component={ProfilePage}/>
            <Stack.Screen name="post-register" component={PostRegisterPage} />
            <Stack.Screen name="project-register" component={ProjectRegisterPage} />
            <Stack.Screen name="project-details" component={ProjectDetailsPage} />
        </Stack.Navigator>
    )
}


export default PrivateNavigator
