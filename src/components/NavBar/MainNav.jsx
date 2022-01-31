import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../../elements";

const style = {
  fontFamily: "Noto Sans",
  fontWeight: "700",
  fontSize: "1em",
  lineHeight: "1.213em",
  textDecoration: "none",
};

const MainNav = ({ showDaily }) => {
  const scrollRef = useRef();

  return (
    <Grid
      width='20em'
      height='2.313em'
      margin='0 auto 0.813em;'
      position={showDaily ? "static" : "fixed"}
      top={showDaily ? "0" : "5.5em"}
      left={showDaily ? "0" : "1.250em"}
      bg='#18191e'>
      <NavUl>
        <NavLi>
          <NavLink
            to='/'
            style={({ isActive }) => ({
              color: isActive ? "#FF3E00" : "#6B6C70",
              ...style,
            })}>
            Top
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to='/new'
            style={({ isActive }) => ({
              color: isActive ? "#FF3E00" : "#6B6C70",
              ...style,
            })}>
            New
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to='/ask'
            style={({ isActive }) => ({
              color: isActive ? "#FF3E00" : "#6B6C70",
              ...style,
            })}>
            Ask
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink
            to='/show'
            style={({ isActive }) => ({
              color: isActive ? "#FF3E00" : "#6B6C70",
              ...style,
            })}>
            Show
          </NavLink>
        </NavLi>
      </NavUl>
      <ScrollContainer>
        <Scroll ref={scrollRef} />
      </ScrollContainer>
    </Grid>
  );
};

export default MainNav;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`;

const NavLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 4.813em;
  height: 2.313em;
  padding: 0.5em 1.5em 0.625em 1.625em;

  & + & {
    margin-left: 0.25em;
  }
`;

const ScrollContainer = styled.div`
  position: relative;
  width: 20em;
  height: 0.063em;
`;

const Scroll = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.813em;
  height: 100%;
  background-color: #ff3e00;
`;
