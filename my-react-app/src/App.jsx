import UserGreeting from './UserGreeting.jsx'
import Student from './Student.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function App() {
  return(
    <>
    <Header/>
    <Card/>
    <Button/>
    <Student name="soloDev" age={19} isDev={true}/>
    <UserGreeting  username="UserHacker" isLoggedIn={false}/>
    <Food/>
    <Footer/>
    </>
  );
}

export default App
