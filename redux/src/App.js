import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';


const { Title } = Typography;

function App() {
  return (
    <div className='App'
      style={{
        
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 25,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center'}}>Todo  List</Title>
      <Filters />
      <TodoList />
      <Divider />
      
    </div>
  );
}

export default App;
