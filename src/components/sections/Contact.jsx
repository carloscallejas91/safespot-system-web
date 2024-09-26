import { SFSection, SFRow, SFCol } from "../../styles/content/style.jsx";
import { SFBackgroundVideo } from "../../styles/video/style.jsx";
import { SFText, SFTerciaryTitle } from "../../styles/typography/style.jsx";
import { Grid } from "antd";
import { MailOutlined } from "@ant-design/icons";
import colors from "../../constants/colors.jsx";
import CustomTriangleDividerTop from "../widgets/CustomTriangleDividerTop.jsx";
import videoBg from "../../assets/bg-video-contact.mp4";

const Contact = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@safespot.com.br";
  };

  return (
    <SFSection
      id={id}
      height="100vh"
      backgroundColor={colors.overlay}
      breakpoint={breakpoint}
      as="section"
    >
      {breakpoint.lg && <CustomTriangleDividerTop />}

      <SFBackgroundVideo
        src={videoBg}
        position="absolute"
        autoPlay
        loop
        muted
      />

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
          lg={20}
          xl={20}
        >
          <SFTerciaryTitle level={4} fontSize="1.5rem" breakpoint={breakpoint}>
            <b>
              Se tiver dúvidas, não hesite em nos chamar. Estamos prontos para
              ajudar!
            </b>
          </SFTerciaryTitle>
          <SFTerciaryTitle level={4} color={colors.primary} breakpoint={breakpoint}>
            Entre em contato
          </SFTerciaryTitle>

          <div
            onClick={handleEmailClick}
            style={{
              cursor: "pointer",
              justifyContent: "center",
              display: "flex",
              marginTop: "5%",
            }}
          >
            <MailOutlined style={{ fontSize: "1.5rem", marginRight: 8 }} />
            <SFText fontWeight="400" breakpoint={breakpoint}>
              contato@safespot.com.br
            </SFText>
          </div>
        </SFCol>
      </SFRow>
    </SFSection>
  );
};

export default Contact;
