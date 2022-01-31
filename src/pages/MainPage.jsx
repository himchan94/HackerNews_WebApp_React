import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Grid } from "../elements";
import { InputArea, MainNav } from "../components";
import { DailyNewsContainer } from "../container";

const MainPage = () => {
  const [showDaily, setShowDaily] = useState(true);
  const dailyRef = useRef();

  useEffect(() => {
    const root = document.getElementById("root");
    const scroll = root.addEventListener("scroll", (e) => {
      if (dailyRef.current) {
        if (e.target.scrollTop > dailyRef.current.clientHeight) {
          setShowDaily(false);
        }
      }

      if (e.target.scrollTop === 0 && !dailyRef.current) {
        setShowDaily(true);
      }
    });

    return () => {
      root.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <InputArea />
      <Grid padding='5.5em 0 0 0 '>
        {showDaily && <DailyNewsContainer ref={dailyRef} />}
        <ScrollContainer>
          <MainNav showDaily={showDaily} />
          <Outlet />
        </ScrollContainer>
      </Grid>
    </>
  );
};

export default MainPage;

const ScrollContainer = styled.div``;
