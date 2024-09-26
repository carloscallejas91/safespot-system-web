import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import {
  SFTerciaryTitle,
  SFParagraph,
  SFText,
} from "../../styles/typography/style.jsx";
import { Grid } from "antd";
import colors from "../../constants/colors.jsx";
import CustomWavyDividerBottom from "../widgets/CustomWavyDividerBottom.jsx";
import CustomTriangleDividerTop from "../widgets/CustomTriangleDividerTop.jsx";
import backgroundImage from "../../assets/img-1.png";
import image from "../../assets/img-ia-saude.png";

const ArtificialIntelligenceHealthcare = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();
  return (
    <SFSection
      id={id}
      breakpoint={breakpoint}
      backgroundImage={backgroundImage}
      as="section"
    >
      {breakpoint.lg && <CustomTriangleDividerTop />}
      <SFRow
        height="100%"
        backgroundColor={colors.overlay}
        justify="center"
        padding={!breakpoint.xl && "5% 0 10% 0"}
        gutter={breakpoint.lg ? [16, 16] : [0, 16]}
      >
        <SFCol
          height="auto"
          xs={20}
          sm={20}
          md={20}
          lg={12}
          xl={12}
          style={breakpoint.lg ? { paddingLeft: "0" } : { paddingTop: "5%" }}
        >
          <img
            width="100%"
            height="100%"
            src={image}
            alt="Imagem de pulmão"
            style={{ objectFit: "cover", zIndex: "-1" }}
          />
        </SFCol>
        <SFCol
          height="auto"
          justify="center"
          align="center"
          alignContent="center"
          xs={20}
          sm={20}
          md={20}
          lg={12}
          xl={12}
        >
          <SFText textAlign="left" breakpoint={breakpoint}>
            Inteligência artificial na saúde
          </SFText>
          <SFTerciaryTitle
            color={colors.primary}
            textAlign="left"
            breakpoint={breakpoint}
          >
            Detecção de doenças pulmonares através de imagens computadorizadas
          </SFTerciaryTitle>
          <SFParagraph textAlign="left" breakpoint={breakpoint}>
            O predomínio do aprendizado de máquina (Machine Learning), uma das
            técnicas de Inteligência Artificial, tem aumentado exponencialmente
            nos últimos anos devido à alta demanda e aos avanços da tecnologia.
            O potencial do aprendizado de máquina para criar valor a partir dos
            dados tornou-o atraente para empresas de diversos setores, inclusive
            na área da saúde.
          </SFParagraph>
        </SFCol>
      </SFRow>

      {breakpoint.lg && (
        <CustomWavyDividerBottom primaryColor={colors.secondaryDivider} />
      )}
    </SFSection>
  );
};

export default ArtificialIntelligenceHealthcare;
