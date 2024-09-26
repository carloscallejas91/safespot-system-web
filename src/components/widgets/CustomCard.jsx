import React from "react";
import { SFCard } from "../../styles/card/style.jsx";
import { SFParagraph } from "../../styles/typography/style.jsx";
import { Image, Grid } from "antd";

const CustomCard = (props) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFCard 
      textAlign="center"
      borderBottom="4px solid #ec4200"
      style={{ backgroundColor: props.color }}
    >
      <Image
        width={"100px"}
        height={"100px"}
        src={props.image}
        alt={props.alt}
        preview={false}
      />

      <SFParagraph
      color="black"
        textAlign="center"
        marginBottom="0"
        breakpoint={breakpoint}
      >
        {props.description}
      </SFParagraph>
    </SFCard>
  );
};

export default CustomCard;
