import * as React from 'react';
import * as styles from './App.scss';
import { Switch, Route } from 'react-router-dom';
import Test from './components/Test';
import NewPostPage from './pages/NewPostPage';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/new-post" component={NewPostPage} />
        <Route path="/" component={Test} />
      </Switch>
    );
  }
}

export default App;
