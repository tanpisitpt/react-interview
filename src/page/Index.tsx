import styled from "@emotion/styled"
import { Box, Card, CardContent, Container, IconButton } from "@material-ui/core"
import { AddBox, Lock, PersonAdd, Star, StarBorder } from "@material-ui/icons"
import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-flow: row nowrap;
`

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  background: #f6f6fa;
  overflow: auto;
`

const ContentHead = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
`

const PrivateTag = styled.div`
  margin-left: auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  background: #eee;
  color: #444;
  border-radius: 4px;
  align-items: center;
`

const InviteButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: flex;
  border-radius: 2px;
  align-items: center;
  background: #276cec;
  color: #fff;
  border-radius: 4px;
  border: none;
`

const Favorite: React.FC = () => {
  const [fill, setFill] = useState(false);

  return (
    <IconButton onClick={() => { setFill(!fill) }} style={{ color: 'gold' }}>
      {fill ? <Star /> : <StarBorder />}
    </IconButton>
  )
}

const ContentContainer = styled(Container)`
  padding: 2rem;
  flex: 1 0 auto;
  height: 100%;
`

const GridBlock = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: calc(100vw - 200px - 30px);
  gap: 1rem;
`

const Index = () => {
  return (
    <>
      <Topbar />
      <Main>
        <Sidebar />
        <Content>
          <ContentHead style={{ flex: '0 1 auto' }}>
            <AddBox />
            <Box fontWeight="Bold" style={{marginLeft: '0.5rem'}}>sandbox</Box>
            <PrivateTag>
              <Lock fontSize="small" style={{fontSize: '0.875rem'}} />
              <Box style={{ marginLeft: '0.5rem' }}>Private</Box>
            </PrivateTag>
            <InviteButton>
              <PersonAdd style={{fontSize: '0.875rem'}} />
              <Box style={{ marginLeft: '0.5rem' }}>Invite</Box>
            </InviteButton>
            <Favorite />
          </ContentHead>
          <ContentContainer>
            <GridBlock>
              <Card>
                <CardContent>
                  <Box textAlign="center">
                    <img src="https://image.freepik.com/free-vector/flat-people-doing-outdoor-activities_23-2149019602.jpg" alt="vector" />
                  </Box>
                </CardContent>
              </Card>
              <div>
                <Card>
                  <CardContent>
                    <Box textAlign="center">
                      <img src="https://image.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37453.jpg" alt="stats" width="300px" />
                    </Box>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: '1rem' }}>
                  <CardContent>
                    <Box textAlign="center">
                      Members
                    </Box>
                  </CardContent>
                </Card>
              </div>
            </GridBlock>
          </ContentContainer>
        </Content>
      </Main>
    </>
  )
}

export default Index