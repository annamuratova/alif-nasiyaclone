import Header from "../components/header"
import "../assets/styles/style.css"
import MainHead from "../components/main-head"
import Payment from "../components/payment"
import PayCards from "../components/paycards"
import Markets from "../components/markets"
import MobileApp from "../components/mobileapp"
import Questions from "../components/questions"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Message from "../components/message"


const Home = ()=>{
    return(
        <div>
            <Header />
            <main>
            <MainHead />
            <Payment />
            <PayCards />
            <Markets />
            <MobileApp />
            <Questions />
            <Contact />
            </main>
            <Footer />
            <Message />
        </div>
    )
}

export default Home