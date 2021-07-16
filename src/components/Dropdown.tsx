import styled from '@emotion/styled';

interface DropdownProps {
  show: boolean;
}

const DropdownDiv = styled.ul`
  display: none;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
  background: #ccc;

  &.show {
    display: flex;
  }
`

export const DropdownItem = styled.li`
  display: flex;
  flex-flow: column nowrap;

  &.active {
    background: #bbb;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #00a;
      z-index: 1;
    }
  }
`

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { show, children } = props;
  return (
    <DropdownDiv className={`${show ? 'show': ''}`}>
      {children}
    </DropdownDiv>
  )
}

