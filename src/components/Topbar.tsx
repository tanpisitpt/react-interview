import styled from '@emotion/styled'
import { IconButton } from '@material-ui/core'
import { AccountCircle, Help, List, LocalMall, Settings } from '@material-ui/icons'
import { useState } from 'react'

const TopbarDiv = styled.div`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
`

const Logo = styled.div`
  width: 200px;
`

const Breadcumb = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 1rem;
  list-style: none;
`
const BreadcumbItem = styled.li`
  color: #aaa;

  &:last-of-type {
    &:after {
      content: '';
    }
  }

  &:after {
    content: '/';
    margin: 0 .5rem;
  }
`

const BreadcumbLink = styled.a`
  padding: 0 1rem;
`

const TopbarMenu = styled.div`
  display: flex;
  margin-left: auto;
`

const SearchInput = styled.input`
  border-radius: 0;
  border: 1px solid #444;
  padding: 0.25rem 1rem;
`

const MenuList = styled.div`
  display: flex;
`

const Topbar = () => {
  const [searchvalue, setSearchvalue] = useState('')

  return (
    <TopbarDiv>
      <Logo>Azure DevOps</Logo>
      <Breadcumb>
        <BreadcumbItem>
          <BreadcumbLink href="#awtech-dev">awtech-dev</BreadcumbLink>
        </BreadcumbItem>
        <BreadcumbItem>
          <BreadcumbLink href="#sandbox">sandbox</BreadcumbLink>
        </BreadcumbItem>
      </Breadcumb>
      <TopbarMenu>
        <SearchInput type="text" placeholder="Search" value={searchvalue} onChange={(e) => { setSearchvalue(e.target.value) }} />
        <MenuList>
          <IconButton>
            <List />
          </IconButton>
          <IconButton>
            <LocalMall />
          </IconButton>
          <IconButton>
            <Help />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </MenuList>
      </TopbarMenu>
    </TopbarDiv>
  );
}

export default Topbar;
