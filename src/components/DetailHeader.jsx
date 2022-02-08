import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, ImageBox } from "../elements";
import { GoBack, Info } from "../assets";

const DetailHeader = memo(({ type }) => {
  const navigate = useNavigate();
  return (
    <Grid height='4.000em' position='relative'>
      <ImageBox
        cursor='pointer'
        image={GoBack}
        alt='go back icon'
        width='1.5em'
        height='1.5em'
        padding='0.131em 0.406em 0.365em 0.131em'
        position='absolute'
        top='1.250em'
        left='1.250em'
        _click={() => {
          navigate(-1);
        }}
      />
      {type === "about" && (
        <ImageBox
          image={Info}
          alt='info icon'
          width='1.5em'
          height='1.5em'
          padding='0.188em'
          position='absolute'
          top='1.250em'
          left='10.500em
'
        />
      )}
    </Grid>
  );
});

export default DetailHeader;
