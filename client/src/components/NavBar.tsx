import styled from 'styled-components';
import { NavLink, Outlet, Link } from 'react-router-dom';
const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 32px;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    font: 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1 rem;
  transition: color 0.3s;

  &.active {
    font-weight: bold:
    color: ${({ theme }) => theme.colors.secondary}; 
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const NavBar: React.FC = () => {
  return (
    <>
      <NavBarContainer>
        <Link to='/'>
          <Logo>Logo</Logo>
        </Link>
        <HamburgerMenu>☰</HamburgerMenu>
        <NavLinks>
          <StyledNavLink to='/home'>Home</StyledNavLink>
          <StyledNavLink to='/about'>About</StyledNavLink>
          <StyledNavLink to='/contact'>Contact</StyledNavLink>
          <StyledNavLink to='/schedules'>Schedules</StyledNavLink>
        </NavLinks>
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
