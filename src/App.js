import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import Footer from './components/Footer';
import SignInForm from './pages/auth/SignInForm';
import RigCreateForm from './pages/rigs/RigCreateForm';
import RigPage from './pages/rigs/RigPage';
import { useCurrentUser } from './contexts/CurrentUserContext';
import HomePage from './pages/HomePage';
import LatestRigs from './pages/rigs/LatestRigs';
import FeedPage from './pages/FeedPage';
import SavedPage from './pages/SavedPage';
import RigsPage from './pages/RigsPage';
import RigEditForm from './pages/rigs/RigEditForm';
import GearCreateForm from './pages/gear/GearCreateForm';
import GearPage from './pages/gear/GearPage';

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
              <FeedPage 
                profile_id={profile_id}
              />
            )} 
          />
          <Route 
            exact 
            path="/saved" 
            render={() => (
              <SavedPage 
                profile_id={profile_id}
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
          <Route exact path="/rigs/:id/edit" render={() => <RigEditForm />} />
          <Route exact path="/gear/create" render={() => <GearCreateForm />} />
          <Route exact path="/gear" render={() => <GearPage filter={`owner__profile=${profile_id}&`} />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;