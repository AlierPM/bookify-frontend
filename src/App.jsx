import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import BookList from './components/homepage/BookList';
import BookDetail from './components/homepage/BookDetail';
import { Provider } from 'react-redux';


const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/booklist" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;