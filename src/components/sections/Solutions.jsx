import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import { SFMainTitle, SFText } from "../../styles/typography/style.jsx";
import { Grid } from "antd";
import colors from "../../constants/colors.jsx";
import CustomCard from "../widgets/CustomCard.jsx";
import CustomTriangleDividerBottom from "../widgets/CustomTriangleDividerBottom.jsx";
import backgroundImage from "../../assets/bg-solutions.png";
import imgSolutions1 from "../../assets/img-solutions-1.png";
import imgSolutions2 from "../../assets/img-solutions-2.png";
import imgSolutions3 from "../../assets/img-solutions-3.png";
import imgSolutions4 from "../../assets/img-solutions-4.png";

const Solutions = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection
      id={id}
      breakpoint={breakpoint}
      backgroundImage={backgroundImage}
      as="section"
    >
      <SFRow
        height="auto"
        justify="center"
        margin={breakpoint.lg ? "0" : "15% 0"}
        gutter={[16, 16]}
      >
        <SFCol
          height="auto"
          breakpoint={breakpoint}
          xs={20}
          sm={20}
          md={20}
          lg={20}
          xl={20}
        >
          <SFText color={colors.primary} breakpoint={breakpoint}>
            Explore as nossas soluções e descubra como podemos atender às suas
            necessidades
          </SFText>
          <SFMainTitle breakpoint={breakpoint}>Principais soluções</SFMainTitle>
        </SFCol>

        <SFCol xs={22} sm={11} md={7} lg={21} xl={5}>
          <CustomCard
            image={imgSolutions2}
            alt="Ícone de detecção de aglomerações"
            description="Detecção de aglomerações, uso de máscara facial e controle de temperatura corporal."
            color={"white"}
          />
        </SFCol>

        <SFCol xs={22} sm={11} md={7} lg={7} xl={5}>
          <CustomCard
            image={imgSolutions3}
            alt="Ícone de detecção de câncer"
            description="Detecção dos vários tipos de câncer de pele através de aplicativo utilizando técnicas de machine learning."
            color={"white"}
          />
        </SFCol>

        <SFCol xs={22} sm={11} md={7} lg={7} xl={5}>
          <CustomCard
            image={imgSolutions1}
            alt="Ícone de detecção de COVID"
            description="Praticas para detecção de doenças pulmonares através de imagens computadorizadas."
            color={"white"}
          />
        </SFCol>

        <SFCol xs={22} sm={11} md={21} lg={7} xl={5}>
          <CustomCard
            image={imgSolutions4}
            alt="Ícone de soluções Avançadas de Business Intelligence"
            description="Soluções Avançadas de Business Intelligence."
            color={"white"}
          />
        </SFCol>
      </SFRow>

      {breakpoint.lg && <CustomTriangleDividerBottom />}
    </SFSection>
  );
};

export default Solutions;
