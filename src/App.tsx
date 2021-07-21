import styled from '@emotion/styled/macro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './page/Index';
import NotFound from './page/NotFound';
import Summary from './page/Summary';

const AppDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

function App() {
  return (
    <AppDiv>
      <BrowserRouter>
        <Switch>
          <Route path="/summary" render={() => <Summary />} />
          <Route path="/" render={() => <Index />} exact />
          <Route path="/" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
