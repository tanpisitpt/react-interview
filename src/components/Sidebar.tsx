import styled from '@emotion/styled/macro';
import { IconButton, Typography } from '@material-ui/core';
import { Add, AddBox, AllInbox, Dashboard, DeveloperBoard, Home, Note } from '@material-ui/icons';
import { ReactElement, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  display: none;
  flex-flow: column nowrap;
  background: #eee;
  width: 200px;
  border-right: 1px solid #bbb;
  position: fixed;
  margin-top: 81px;
  height: calc(100vh - 81px);

  @media (min-width: 768px) {
    display: block;
  }

  .mobile & {
    display: flex;
    margin-top: 0;
    position: static;
  }
`

const AddSandBoxWrapper = styled.div`
  padding: 0.5rem 1rem;

  .mobile & {
    background: #fff;
  }
`

const AddSandbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;
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
  
  const location = useLocation();
  useEffect(() => {
    const matchLink = dropdown?.filter((item) => {
      return item.href === location.pathname
    })
    if (matchLink?.length) {
      setShowDropdown(true)
    }
    return () => {
      setShowDropdown(false);
    }
  }, [dropdown, location])

  return dropdown ? (
    <MenuItemStyled className={`${showDropdown ? 'active' : ''}`}>
      <MenuLink to={href} onClick={handleMenuLinkClick}>
        {icon}
        <Typography style={{marginLeft: '0.5rem' }}>{name}</Typography>
      </MenuLink>
      <Dropdown show={showDropdown}>
        {dropdown && dropdown.map((dropdownItem, i) => (
          <DropdownItem
            key={`dropdown-item-${href}-${i}`}
            className={`${dropdownItem.href === location.pathname ? 'active' : ''}`}
          >
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

const Sidebar: React.FC = (props) => {
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
          href: '/',
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
      href: '#',
      dropdown: [
        {
          icon: <Home />,
          name: 'Boards 1',
          href: '/boards-1',
        },
        {
          icon: <Home />,
          name: 'Boards 2',
          href: '/boards-2',
        },
        {
          icon: <Home />,
          name: 'Boards 3',
          href: '/boards-3',
        },
      ]
    },
    {
      icon: <DeveloperBoard />,
      name: 'Repos',
      href: '#',
      dropdown: [
        {
          icon: <Home />,
          name: 'Repos 1',
          href: '/repos-1',
        },
        {
          icon: <Home />,
          name: 'Repos 2',
          href: '/repos-2',
        },
        {
          icon: <Home />,
          name: 'Repos 3',
          href: '/repos-3',
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
          href: '/pipelines-1',
        },
        {
          icon: <Home />,
          name: 'Pipelines 2',
          href: '/pipelines-2',
        },
        {
          icon: <Home />,
          name: 'Pipelines 3',
          href: '/pipelines-3',
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
      <AddSandBoxWrapper>
        <AddSandbox>
          <AddBox />
          <Typography style={{marginLeft: '0.5rem', fontWeight: 'bold'}}>sandbox</Typography>
          <IconButton style={{ padding: '0', marginLeft: 'auto' }}><Add /></IconButton>
        </AddSandbox>
      </AddSandBoxWrapper>
      <SidebarMenu>
        {menuItems.map((menuItem, i) => <MenuItem {...menuItem} key={`menu-item-${i}`} />)}
      </SidebarMenu>
    </SidebarDiv>
  )
}

export default Sidebar
