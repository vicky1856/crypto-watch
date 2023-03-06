import { styled } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import ProtectedRoute from './components/ProtectedRoute';
// import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';

function App() {



  //styling starts here

  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }))

  //styling ends here




  return (
    <BrowserRouter>
      <CustomApp>
        <Header />
        <PublicRoute path='/register' component={Register} />
        <PrivateRoute path='/login' component={LoginPage} />
        <PrivateRoute path="/" component={Homepage} exact />
        <PrivateRoute path="/coins/:id" component={CoinPage} exact />
        {/* your private and public routes goes here */}

      </CustomApp>
    </BrowserRouter>
  );
}

export default App;
