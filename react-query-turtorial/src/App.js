import {BrowserRouter as Router, Routes , Link , Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query'

import './App.css';
import {Home} from './components/Home'
import {RQSuperHeroes} from './components/RQSuperHeroes'
import {SuperHeroes} from './components/SuperHeroes'
import {RQHero} from './components/RQHero'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home</Link>
              </li>
              <li>
                <Link to='/superheroes'> Traditional SuperHeroes</Link>
              </li>
              <li>
                <Link to='/rq-superheroes'> RQ SuperHeroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path ='/rq-superheroes/:heroId' element={<RQHero/>}></Route>
            <Route path ='/superheroes' element={<SuperHeroes/>}> 
            </Route>
            <Route path ='/rq-superheroes' element={<RQSuperHeroes/>}></Route>
            <Route path ='/' element={<Home/>}></Route>
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>    
  );
}

export default App;
