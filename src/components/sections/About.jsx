import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import { SFMainTitle, SFParagraph } from "../../styles/typography/style.jsx";
import { Button, Divider, Grid, Image } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import colors from "../../constants/colors.jsx";
import CustomWavyDividerBottom from "../widgets/CustomWavyDividerBottom.jsx";
import image from "../../assets/img-about-alt-2.png";
import handleClick from "../../utils/HandleClick.jsx";

const About = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  const facebookLink = "https://www.facebook.com/safespotsystem";
  const instagramLink = "https://www.instagram.com/safespotsystem";
  const linkedinLink = "https://www.linkedin.com/company/safespotsystem";

  return (
    <SFSection id={id} backgroundColor="black" as="section">
      <SFRow
        backgroundColor={colors.primary}
        justify="center"
        gutter={breakpoint.lg ? [16, 16] : [0, 16]}
      >
        <SFCol xs={20} sm={20} md={20} lg={5} xl={3}>
          <Button
            shape="rounded"
            icon={<FacebookOutlined />}
            style={{ width: "100%" }}
            onClick={() => handleClick(facebookLink)}
          >
            /safespotsystem
          </Button>
        </SFCol>

        <SFCol height="auto" xs={20} sm={20} md={20} lg={5} xl={3}>
          <Button
            shape="rounded"
            icon={<InstagramOutlined />}
            style={{ width: "100%" }}
            onClick={() => handleClick(instagramLink)}
          >
            @safespotsystem
          </Button>
        </SFCol>

        <SFCol xs={20} sm={20} md={20} lg={5} xl={3}>
          <Button
            shape="rounded"
            icon={<LinkedinOutlined />}
            style={{ width: "100%" }}
            onClick={() => handleClick(linkedinLink)}
          >
            /safespotsystem
          </Button>
        </SFCol>
      </SFRow>

      <SFRow justify="center" gutter={[16, 16]} style={{ flex: 1 }}>
        <SFCol
          align="center"
          alignContent="center"
          margin={breakpoint.lg ? "0" : "5% 0"}
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <Image width={"80%"} src={image} preview={false} />
        </SFCol>

        <SFCol
          align="center"
          margin={breakpoint.lg ? "0" : "5% 0"}
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <SFMainTitle leval={2} breakpoint={breakpoint}>
            Sobre
          </SFMainTitle>
          <Divider style={{ borderColor: "white" }} />
          <SFParagraph textAlign="left" breakpoint={breakpoint}>
            A empresa <span>SafeSpot</span> utiliza inteligência artificial para
            trazer soluções inovadoras na área da saúde. Foram criadas soluções
            inteligentes para atuar no combate ao COVID-19, com sistema de
            detecção de aglomeração e uso de máscara em tempo real, além de
            medição da temperatura corporal. A empresa também utiliza práticas
            de <span>active learning</span> para detecção de doenças pulmonares,
            entre elas a COVID-19.
            <br />
            <br />
            Com algoritmos cada vez mais robustos a startup também automatiza
            tarefas repetitivas, analisam dados e criam predições que facilitam
            na hora de dar um diagnóstico, tornando através da inteligência
            artificial a <span>saúde mais humana</span>.
          </SFParagraph>
        </SFCol>
      </SFRow>

      {breakpoint.xxl && (
        <CustomWavyDividerBottom primaryColor={colors.primaryDivider} />
      )}
    </SFSection>
  );
};

export default About;
