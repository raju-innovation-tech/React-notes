import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Raju Kumar Maurya"  Age = {18} img="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="ved prakash" Age = {180} img="https://plus.unsplash.com/premium_vector-1769210863035-83572f7c6c29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="rudra" Age={14}  img="https://plus.unsplash.com/premium_vector-1711987786379-aeea5e7e935e?q=80&w=991&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   
    </div>
    
  )
}

export default App


//1:35