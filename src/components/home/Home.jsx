import Footer from '../footer/Footer'
import Header from '../navbar/Navbar'
import Arena from './Arena'
import Bgattach from './Bgattach'
import Choose from './Choose'
import Events from './Events'
import Favourite from './Favourite'
import Hero from './Hero'
import Honor from './Honor'
import TopPlayer from './TopPlayer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Events />
            <Honor />
            <Favourite />
            <Choose />
            <Arena />
            <Bgattach />
            <TopPlayer />
            <Footer />
        </div>
    )
}

export default Home