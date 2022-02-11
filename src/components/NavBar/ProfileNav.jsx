import React from "react";
import styled from "styled-components";
import { Grid } from "../../elements";

const ProfileNav = ({ category, changeCategory }) => {
  return (
    <Grid
      width='20em'
      height='1.625em'
      margin='1.750em auto 0.813em;'
      bg='#18191e'>
      <NavUl>
        <NavLi
          onClick={() => {
            changeCategory("submission");
          }}
          selected={category === "submission" ? true : false}>
          Submission
        </NavLi>
        <NavLi
          onClick={() => {
            changeCategory("comments");
          }}
          selected={category === "comments" ? true : false}>
          Comments
        </NavLi>
        <NavLi
          onClick={() => {
            changeCategory("favorites");
          }}
          selected={category === "favorites" ? true : false}>
          Favorites
        </NavLi>
      </NavUl>
    </Grid>
  );
};

export default ProfileNav;

const NavUl = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
`;

const NavLi = styled.li`
  fontfamily: Noto Sans;
  fontweight: 700;
  fontsize: 0.75em;
  lineheight: 0.91em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 6.5em;
  height: 1.625em;
  padding: 0.5em 1.5em 0.625em 1.625em;
  color: ${(props) => (props.selected ? "#FF3E00" : "#6B6C70")};

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
  width: 6.5em;
  height: 100%;
  background-color: #ff3e00;
`;
