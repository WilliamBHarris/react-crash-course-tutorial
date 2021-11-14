import React, {useState} from 'react'; 
import Tweet from './Tweet'


function App(){

const [users, setUsers] = useState([
{name: 'Will', message: 'Hello there'},
{name: 'Traci', message: 'I am Traci'},
{name: 'John', message: 'JOHHHHNNN'}
])


return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  )
}

export default App;