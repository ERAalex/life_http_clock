import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import FormWatch from './components/formWatch/formWatch';

function App() {
  const initialState = [
    {
        id: 1,
        name: 'Moscow',
        offsetUTC: 3,
    },
    {
        id: 2,
        name: 'London',
        offsetUTC: 2,
    }
  ]
  return (
    <FormWatch initialState={initialState}/>
  );
}

export default App;
