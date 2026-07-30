import MyNewComponent from './MyNewComponent.jsx'
import MyComponent from './MyComponent.jsx'
import List from './List.jsx'
import UserGreeting from './UserGreeting.jsx'
import Student from './Student.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import { version } from 'react'

function App() {

  const items =[{id: 1, name: "java", version: 10},
                {id: 2, name: "cpp", version: 15},
                {id: 3, name: "c#", version: 17},
                {id: 4, name: "php", version: 8},
                {id: 5, name: "python", version: 3}
  ];

  return(
    <>
    <Header/>
    <Card/>
    <Button/>
    <Student name="soloDev" age={19} isDev={true}/>
    <UserGreeting  username="UserHacker" isLoggedIn={false}/>
    <List obj={items} objName="Language"/>
    <MyComponent/>
    <MyNewComponent/>
    <Food/>
    <Footer/>
    </>
  );
}

export default App
