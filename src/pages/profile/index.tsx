import ProfileProvider from './context'
import Profile from './page/profile'
const Index = () => {

    return (
        <ProfileProvider>
            <Profile/>
        </ProfileProvider>
    )
}

export default Index
