import './App.css';
import GlobalRouter from './routes/GlobalRouter';
import { useBook } from './hooks/useBook';
import BookContext from './contexts/BookContext';

function App() {

  const books = useBook();

  return (
    <BookContext.Provider value={{ books }}>
      <GlobalRouter/>
    </BookContext.Provider>
  );
}

export default App;
