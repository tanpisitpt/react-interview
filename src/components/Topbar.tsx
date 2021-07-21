import styled from '@emotion/styled'
import { Breadcrumbs, IconButton, Typography, Menu, MenuItem, Drawer } from '@material-ui/core'
import { AccountCircle, Help, List, LocalMall, Settings, Menu as MenuIcon, MoreVert } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const TopbarDiv = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  border-bottom: 1px solid #bbb;
  width: 100%;
  background: #fff;
  z-index: 10;

  @media (min-width: 768px) {
    position: fixed;
    padding: 1rem 0;
  }
`

const MobileMenu = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`

const LogoLink = styled(Link)`
  @media (min-width: 768px) {
    width: 200px;
  }
`

const Logo = styled.div`
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  .mobile & {
    padding: 1rem;
    background: #ddd;
  }
`

const TopbarBreadcrumbs = styled(Breadcrumbs)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`

const TopbarMenu = styled.div`
  display: none;
  margin-left: auto;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`

const SearchInput = styled.input`
  border-radius: 0;
  border: 1px solid #444;
  padding: 0.25rem 0.5rem;
  height: 1.25rem;
`

const MenuList = styled.div`
  display: flex;
`

const MoreVertButton = styled(IconButton)`
  &.mobile-only {
    margin-left: auto;
  }

  @media (min-width: 768px) {
    &.mobile-only {
      display: none;
    }
  }
`

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null)
  const [openDrawer, setOpenDrawer] = useState<any>(null)
  const [searchvalue, setSearchvalue] = useState('')

  function handleClose() {
    setAnchorEl(null);
  }

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <TopbarDiv>
      <MobileMenu>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </MobileMenu>
      <Drawer className="mobile" open={!!openDrawer} onClose={toggleDrawer(false)}>
        <LogoLink to="/">
          <Logo>Azure DevOps</Logo>
        </LogoLink>
        <Sidebar />
      </Drawer>
      <LogoLink to="/">
        <Logo>Azure DevOps</Logo>
      </LogoLink>
      <TopbarBreadcrumbs aria-label="breadcrumb">
        <Link to="/">
          awtech-dev
        </Link>
        <Link to="/sandbox">
          sandbox
        </Link>
        <Typography color="inherit">
          Overview
        </Typography>
        <Typography color="textPrimary">
          Summary
        </Typography>
      </TopbarBreadcrumbs>
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
        </MenuList>
      </TopbarMenu>
      <MoreVertButton className="mobile-only">
        <MoreVert />
      </MoreVertButton>
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
    </TopbarDiv>
  );
}

export default Topbar;
