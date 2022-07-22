import {BrowserRouter as Router, Routes , Link , Route} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query'


import './App.css'
import {Home} from './components/Home'
import {RQListProducts} from './components/RQListProducts'
import {Products} from './components/Products'
import {RQProduct} from './components/RQProduct'
import Footer from './components/Footer';

const queryClient = new QueryClient()
function App() {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Router>
          <nav className='navbar'>
            <div>
              <img src= "https://cdn-icons-png.flaticon.com/512/5414/5414810.png" alt=''></img>
              <h2 >Logo</h2>
            </div>
            <ul>
              <li>
                <Link className='link' to='/'> Home</Link>
              </li>
              <li>
                <Link className='link' to='/products'> Traditional Products</Link>
              </li>
              <li>
                <Link className='link' to='/rq-listproducts'> React-Query Product</Link>
              </li>
            </ul>     
          </nav>    
          <Routes>
            <Route path ='/rq-listproducts/:productId' element={<RQProduct/>}></Route>
            <Route path ='/products' element={<Products/>}> 
            </Route>
            <Route path ='/rq-listproducts' element={<RQListProducts/>}></Route>
            <Route path ='/' element={<Home/>}></Route>
          </Routes>

          
      </Router>
      
    </QueryClientProvider>
    <Footer></Footer>
    </div>    
  );
}

export default App;
