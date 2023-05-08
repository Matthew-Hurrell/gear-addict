import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import Footer from './components/Footer';
import SignInForm from './pages/auth/SignInForm';
import RigCreateForm from './pages/rigs/RigCreateForm';
import RigPage from './pages/rigs/RigPage';
import RigsPage from './pages/rigs/RigsPage';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" render={() => <RigsPage message="No results found! Adjust your search"/>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/rig/create" render={() => <RigCreateForm />} />
          <Route exact path="/rigs/:id" render={() => <RigPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;