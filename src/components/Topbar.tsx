import styled from '@emotion/styled'
import { Breadcrumbs, IconButton, Link, Typography } from '@material-ui/core'
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
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#awtech-dev">
          awtech-dev
        </Link>
        <Link color="inherit" href="#sandbox">
          sandbox
        </Link>
        <Typography color="inherit">
          Overview
        </Typography>
        <Typography color="textPrimary">
          Summary
        </Typography>
      </Breadcrumbs>
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
