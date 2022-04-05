import { useEffect, useState } from 'react';

export function App() {
  const [ repositories, setRepositories ] = useState([])

  useEffect( ()=> {
    fetch('https://api.github.com/users/JCarvalhoOAK/repos')
    .then( response => response.json())
    // .then( data => console.log(data) )
    .then( data => setRepositories(data) )
  }, [] )


  return (
    <div>
      {/* <p>World Wanderfull</p> */}
      <ul>
        {repositories.map(repository => {
          return(
            <li>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.html_url} target="_blank">Learn more</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}