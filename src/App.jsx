// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/auth/Login';
import UserLogin from './components/auth/UserLogin';
import SignUp from './components/auth/SignUp';
import BookList from './components/homepage/BookList';
import BookDetail from './components/homepage/BookDetail';
import Navigation from './components/NavPanel/Navigation';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navigation />
        <div>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/login" element={<UserLogin />} />
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