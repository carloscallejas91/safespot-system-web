import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import {
  SFSecondaryTitle,
  SFParagraph,
} from "../../styles/typography/style.jsx";
import { Grid, Image } from "antd";
import colors from "../../constants/colors.jsx";
import CustomTriangleDividerBottom from "../widgets/CustomTriangleDividerBottom.jsx";
import image from "../../assets/img-business-intelligence.png";

const BusinessIntelligence = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection id={id} backgroundColor={colors.overlay} as="section">
      <SFRow
        justify="center"
        padding={!breakpoint.xl && "10% 0"}
        gutter={[16, 16]}
      >
        <SFCol xs={20} sm={20} md={20} lg={10} xl={10}>
          <SFSecondaryTitle
            level={3}
            color={colors.primary}
            breakpoint={breakpoint}
          >
            Business
            <br />
            Intelligence
          </SFSecondaryTitle>
        </SFCol>
        <SFCol height="auto" xs={20} sm={20} md={20} lg={10} xl={10}>
          <SFParagraph textAlign="left" breakpoint={breakpoint}>
            Refere-se aos sistemas, tecnologias e práticas para a coleta,
            integração, análise e apresentação de informações de negócios. O
            objetivo da Business Intelligence é dar suporte para a melhor tomada
            de decisões.
            <br />
            <br />
            Na prática, é possível prover dados e informações coletadas através
            do sistema de visão computacional do estabelecimento quanto ao
            percentual de clientes por sexo, horário de pico de movimento, área
            com menor visitação, tempo médio de permanência, entre outros
            feedbacks.
            <br />
            <br />
            Esses conhecimentos auxiliam em tomadas de decisão mais assertiva,
            na eficaz distribuição de produtos, posicionamento do staff,
            horários de descanso da equipe, seção do estabelecimento com maior
            carência de atenção, etc.
          </SFParagraph>

          <Image
            src={image}
            alt="Distânciamento entre pessoas"
            preview={false}
          />
        </SFCol>
      </SFRow>

      {breakpoint.xxl && <CustomTriangleDividerBottom />}
    </SFSection>
  );
};

export default BusinessIntelligence;
