import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import {
  SFSecondaryTitle,
  SFParagraph,
} from "../../styles/typography/style.jsx";
import { SFCard } from "../../styles/card/style.jsx";
import { Grid, Image } from "antd";
import colors from "../../constants/colors.jsx";
import CustomTriangleDividerTop from "../widgets/CustomTriangleDividerTop.jsx";
import CustomTriangleDividerBottom from "../widgets/CustomTriangleDividerBottom.jsx";
import imgChallenges from "../../assets/img-challenges.png";

const BusinessIntelligence = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection
      id={id}
      breakpoint={breakpoint}
      backgroundColor={colors.primary}
      as="section"
    >
      {breakpoint.lg && <CustomTriangleDividerTop />}
      <SFRow
        height="auto"
        justify="center"
        padding={!breakpoint.xl && "10% 0"}
        gutter={[16, 16]}
      >
        <SFCol
          height="auto"
          alignContent="center"
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <SFSecondaryTitle
            level={2}
            fontSize="3rem"
            color="black"
            breakpoint={breakpoint}
          >
            Desafios
          </SFSecondaryTitle>
          <SFCard height="auto" margin="5% 0">
            <SFParagraph color="black" textAlign="left" breakpoint={breakpoint}>
              <b>IdeiaGov: </b>desenvolvimento de algoritmo para diagnóstico do
              Covid-19 através de imagem de Tomografia Computadorizada e Raios-x
              de tórax.
            </SFParagraph>
          </SFCard>
          <SFCard height="auto">
            <SFParagraph color="black" textAlign="left" breakpoint={breakpoint}>
              <b>Kaggle: </b>desenvolvimento de um algoritmo para classificação
              de imagens da caixa torácica a fim de diagnosticar algumas das
              doenças pulmonares mais comuns.
            </SFParagraph>
          </SFCard>
        </SFCol>
        <SFCol
          height="auto"
          alignContent="center"
          xs={20}
          sm={20}
          md={20}
          lg={10}
          xl={10}
        >
          <SFCard height="auto" margin="5% 0">
            <SFSecondaryTitle
              level={2}
              fontSize="3rem"
              color="black"
              breakpoint={breakpoint}
            >
              Desafios concluídos
            </SFSecondaryTitle>

            <SFParagraph color="black" textAlign="left" breakpoint={breakpoint}>
              A SafeSpot possui vasta experiência quando se trata de soluções
              através de aprendizado de maquina, prova disso é que ao participar
              do desafio “O Uso de Algoritmos de Inteligência Artificial no
              auxílio de Médicos Radiologistas no Diagnóstico do COVID-19
              através de imagem de Tomografia Computadorizada e Raios-X de
              Tórax”, organizado pelo IdeiaGov, atingiu notável acurácia na
              detecção de COVID-19 positivos, chegando aos incríveis 96,9% de
              acerto, como mostra a imagem a seguir:
            </SFParagraph>
            <Image
              src={imgChallenges}
              alt="Resultado do desafio"
              preview={false}
            />
          </SFCard>
        </SFCol>
      </SFRow>

      {breakpoint.lg && <CustomTriangleDividerBottom />}
    </SFSection>
  );
};

export default BusinessIntelligence;
