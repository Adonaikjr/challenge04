import { NavLink } from "react-router-dom";
import { ContainerSidebar, Nav } from "./styled";

export function Sidebar() {
  let activeStyle = {
    backgroundColor: "#bfe2fd",
  };


  return (
    <ContainerSidebar>
      <Nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              1
            </NavLink>
            <p>
              Step1<strong>YOUR INFO</strong>
            </p>
          </li>

          <li>
            <NavLink
              to="/select-plan"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              2
            </NavLink>
            <p>
              Step 2<strong>SELECT PLAN</strong>
            </p>
          </li>
          <li>
            <NavLink
              to="/addons"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              3
            </NavLink>
            <p>
              Step 3<strong>ADD-ONS</strong>
            </p>
          </li>
          <li>
            <NavLink
              to="/summary"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              4
            </NavLink>
            <p>
              Step 4<strong>SUMMARY</strong>
            </p>
          </li>
        </ul>
      </Nav>
    </ContainerSidebar>
  );
}
