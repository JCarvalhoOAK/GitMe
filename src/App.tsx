import './assets/styles/custom.scss';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from 'components/Navbar';

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/JCarvalhoOAK/repos')
      .then(response => response.json())
      // .then( data => console.log(data) )
      .then(data => setRepositories(data))
  }, [])


  return (
    <div>
      <Navbar></Navbar>
      {/* <h1 className='bg-primary text-white'>My Repositories - Github</h1> */}
      <ul>
        {repositories.map(repository => {
          return (
            <li>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.html_url} target="blank">Learn more</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
