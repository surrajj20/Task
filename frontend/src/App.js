import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;


  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Gordian Technologies</Link>
          </div>
          <div className="header-links">
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to='/signin'>SignIn</Link>
            }

          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>
        </main>
        <footer className="footer">
          All right reserved.
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
