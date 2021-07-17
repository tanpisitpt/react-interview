import styled from '@emotion/styled/macro';
import { IconButton, Typography } from '@material-ui/core';
import { Add, AddBox, AllInbox, Dashboard, DeveloperBoard, Home, Note } from '@material-ui/icons';
import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from './Dropdown';

interface MenuItemInterface {
  icon: ReactElement<any, any>;
  href: string;
  name: string;
  dropdown?: Array<{
    icon: ReactElement<any, any>;
    name: string;
    href: string;
  }>
}

const SidebarDiv = styled.aside`
  height: 100%;
  width: 200px;
  display: flex;
  flex-flow: column nowrap;
  background: #eee;
  width: 200px;
  border-right: 1px solid #bbb;
`

const AddSandbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
  margin: 0.5rem 1rem;
`

const SidebarMenu = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
`

const MenuItemStyled = styled.li`
  &.active {
    background: #ddd;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #777;
    }
  }
`

const MenuLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  padding: 0.5rem 1rem;
`

interface MenuItemProps {
  href: string;
  icon: ReactElement<any, any>
  name: string;
  dropdown?: Array<{
    icon: ReactElement<any, any>;
    name: string;
    href: string;
  }>
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { href, icon, dropdown, name } = props;

  function handleMenuLinkClick(e: any) {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  }

  return dropdown ? (
    <MenuItemStyled className={`${showDropdown ? 'active' : ''}`}>
      <MenuLink to={href} onClick={handleMenuLinkClick}>
        {icon}
        <Typography style={{marginLeft: '0.5rem' }}>{name}</Typography>
      </MenuLink>
      <Dropdown show={showDropdown}>
        {dropdown && dropdown.map((dropdownItem, i) => (
          <DropdownItem key={`dropdown-item-${href}-${i}`}>
            <MenuLink to={dropdownItem.href}>
              {dropdownItem.icon}
              <Typography style={{marginLeft: '0.5rem' }}>{dropdownItem.name}</Typography>
            </MenuLink>
          </DropdownItem>
        ))}
      </Dropdown>
    </MenuItemStyled>
  ) : (
    <MenuItemStyled>
      <MenuLink to={href}>
        {icon}
        <Typography style={{marginLeft: '0.5rem' }}>{name}</Typography>
      </MenuLink>
    </MenuItemStyled>
  )
}

const Sidebar = () => {
  const menuItems: MenuItemInterface[] = [
    {
      icon: <Home />,
      name: 'Overview',
      href: '#',
      dropdown: [
        {
          icon: <AllInbox />,
          name: 'Summary',
          href: '/summary',
        },
        {
          icon: <Dashboard />,
          name: 'Dashboard',
          href: '/dashboard',
        },
        {
          icon: <Note />,
          name: 'Wiki',
          href: '/dashboard',
        },
      ]
    },
    {
      icon: <DeveloperBoard />,
      name: 'Boards',
      href: '#boards',
      dropdown: [
        {
          icon: <Home />,
          name: 'Boards 1',
          href: '#boards-1',
        },
        {
          icon: <Home />,
          name: 'Boards 2',
          href: '#boards-2',
        },
        {
          icon: <Home />,
          name: 'Boards 3',
          href: '#boards-3',
        },
      ]
    },
    {
      icon: <DeveloperBoard />,
      name: 'Repos',
      href: '#repos',
      dropdown: [
        {
          icon: <Home />,
          name: 'Repos 1',
          href: '#repos-1',
        },
        {
          icon: <Home />,
          name: 'Repos 2',
          href: '#repos-2',
        },
        {
          icon: <Home />,
          name: 'Repos 3',
          href: '#repos-3',
        },
      ]
    },
    {
      icon: <DeveloperBoard />,
      name: 'Pipelines',
      href: '#pipelines',
      dropdown: [
        {
          icon: <Home />,
          name: 'Pipelines 1',
          href: '#pipelines-1',
        },
        {
          icon: <Home />,
          name: 'Pipelines 2',
          href: '#pipelines-2',
        },
        {
          icon: <Home />,
          name: 'Pipelines 3',
          href: '#pipelines-3',
        },
      ]
    },
    
    {
      icon: <DeveloperBoard />,
      name: 'Artifacts',
      href: '/artifacts',
    },
  ]

  return (
    <SidebarDiv>
      <AddSandbox>
        <AddBox />
        <Typography style={{marginLeft: '0.5rem', fontWeight: 'bold'}}>sandbox</Typography>
        <IconButton style={{ padding: '0', marginLeft: 'auto' }}><Add /></IconButton>
      </AddSandbox>
      <SidebarMenu>
        {menuItems.map((menuItem, i) => <MenuItem {...menuItem} key={`menu-item-${i}`} />)}
      </SidebarMenu>
    </SidebarDiv>
  )
}

export default Sidebar
