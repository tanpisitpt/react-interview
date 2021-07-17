import styled from "@emotion/styled"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-flow: row nowrap;
`

const Index = () => {
  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <div className="content">
          Index
        </div>
      </Main>
    </>
  )
}

export default Index