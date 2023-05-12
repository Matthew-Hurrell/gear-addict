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
import { useCurrentUser } from './contexts/CurrentUserContext';
import HomePage from './pages/HomePage';
import LatestRigs from './pages/rigs/LatestRigs';

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => (
              <HomePage />
            )} 
          />
          <Route 
            exact 
            path="/feed" 
            render={() => (
              <RigsPage 
                message="No results found! Adjust your search or become a fan of another user to see their rigs here" 
                filter={`owner__idolguy__fan__profile=${profile_id}&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/saved" 
            render={() => (
              <RigsPage 
                message="No results found! Adjust your search or save a rig to store them here" 
                filter={`stars__owner__profile=${profile_id}&`}
              />
            )} 
          />
          <Route 
            exact 
            path="/latest"
            render={() => (
              <LatestRigs />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/rig/create" render={() => <RigCreateForm />} />
          <Route exact path="/rigs" render={() => <RigsPage filter={`owner__profile=${profile_id}&`} />} />
          <Route exact path="/rigs/:id" render={() => <RigPage />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;