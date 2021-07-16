import styled from '@emotion/styled/macro';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
`
const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-flow: row nowrap;
`

function App() {
  return (
    <AppDiv>
      <Topbar />
      <Main>
        <Sidebar />
        <div className="content"></div>
      </Main>
    </AppDiv>
  );
}

export default App;
