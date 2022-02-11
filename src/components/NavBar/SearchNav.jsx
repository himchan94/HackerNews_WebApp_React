import React, { memo } from "react";
import styled from "styled-components";
import { Grid } from "../../elements";

const ProfileNav = memo(({ category, changeCategory }) => {
  return (
    <Grid width='20em' height='2.375em' bg='#18191e'>
      <NavUl>
        <NavLi
          onClick={() => {
            changeCategory("news");
          }}
          selected={category === "news" ? true : false}>
          News
        </NavLi>
        <NavLi
          onClick={() => {
            changeCategory("ask");
          }}
          selected={category === "ask" ? true : false}>
          Ask
        </NavLi>
        <NavLi
          onClick={() => {
            changeCategory("show");
          }}
          selected={category === "show" ? true : false}>
          Show
        </NavLi>
      </NavUl>
    </Grid>
  );
});

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
