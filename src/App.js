import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <NavLink to="/" end activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/history" activeClassName="active">
            History
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/word/:word" element={<WordDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
