import { SFContent } from "../../styles/content/style.jsx";
import {
  SFTerciaryTitle,
  SFParagraph,
} from "../../styles/typography/style.jsx";
import { Grid } from "antd";
import { Divider, Image } from "antd";

const CardTemplate = (props) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();
  return (
    <SFContent
      padding="5%"
      justifyContent="space-between"
      backgroundColor="white"
    >
      <div>
        <SFTerciaryTitle level={4} color="#fd7b18" breakpoint={breakpoint}>
          {props.title}
        </SFTerciaryTitle>

        <Divider style={{ borderColor: "#fd7b18" }} />

        <SFParagraph color="black" textAlign="left" breakpoint={breakpoint}>
          {props.text}
        </SFParagraph>
      </div>

      <Image src={props.image} alt={props.alt} preview={false} />
    </SFContent>
  );
};

export default CardTemplate;
