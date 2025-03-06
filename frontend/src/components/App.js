import React from 'react'
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
const App = () => {
  return (
    <div className='ui container'>
   <Header/>
   <AddContact/>
   <ContactList/>
   </div>
  )
}

export default App