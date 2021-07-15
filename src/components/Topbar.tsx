import styled from '@emotion/styled'
import { Breadcrumbs, IconButton, Link, Typography, Menu, MenuItem } from '@material-ui/core'
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
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const [searchvalue, setSearchvalue] = useState('')

  function handleClose() {
    setAnchorEl(null);
  }

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
          <IconButton onClick={(e) => { setAnchorEl(e.target) }}>
            <AccountCircle />
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </MenuList>
      </TopbarMenu>
    </TopbarDiv>
  );
}

export default Topbar;
