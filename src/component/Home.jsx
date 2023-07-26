import Navbar from './partials/Navbar'
import Header from './partials/Header'
import Marquee from './partials/Marquee'
import Body from './Body'

const Home = () => {
  return (
    <>
    <div style={{backgroundColor:'red',height:'600px'}}>
    <Header/>
    <Navbar/>
    <Marquee/>
    <Body/>
    </div>
    </>
  )
}

export default Home
