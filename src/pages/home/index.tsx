import HomeProvider from './context'
import Home from './page/home'

const Index = () => {

    return (
        <HomeProvider>
            <Home/>
        </HomeProvider>
    )
}

export default Index
