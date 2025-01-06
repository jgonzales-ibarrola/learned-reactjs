import './App.css'
import pokemon from '../pokemon.json'

function App() {

  return (
    <main>
      <h1 className='title'>Pokemon Search</h1>

     <div 
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem'
      }}
     >
      <table width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.slice(0, 20).map((pokemon) => {
              const {id, base, name, type} = pokemon
              const {chinese, english, french, japanese} = pokemon.name

              return (
                <tr key={[id, english].join(':')}>
                  <td>{name.english}</td>
                  <td>{type.join(", ")}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
     </div>
    </main>
  )
}

export default App
