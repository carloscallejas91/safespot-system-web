import {
  SFSection,
  SFRow,
  SFCol,
  SFOverlay,
} from "../../styles/content/style.jsx";
import {
  SFMainTitle,
  SFSecondaryTitle,
} from "../../styles/typography/style.jsx";
import { SFBackgroundVideo } from "../../styles/video/style.jsx";
import { Button, Grid } from "antd";
import { DownOutlined } from "@ant-design/icons";
import colors from "../../constants/colors.jsx";
import { scrollToSection } from "../../utils/ScrollToSection.jsx";
import videoBg from "../../assets/bg-video-home-alt-2.mp4";
import staticBackground from "../../assets/bck-home.png";

const Home = ({ id }) => {
  const { useBreakpoint } = Grid;
  const breakpoint = useBreakpoint();

  return (
    <SFSection id={id} backgroundImage={staticBackground} as="section">
      <SFOverlay />

      {breakpoint.md && (
        <SFBackgroundVideo src={videoBg} autoPlay loop muted controls={false} />
      )}

      <SFRow
        justify="center"
        alignContent={breakpoint.md ? "end" : "end"}
        gutter={[16, 16]}
        style={{ flex: "2" }}
      >
        <SFCol xs={22} sm={22} md={22} lg={20} xl={20}>
          <SFMainTitle breakpoint={breakpoint} level={2}>
            Inteligência artificial
          </SFMainTitle>

          <SFSecondaryTitle
            color={colors.primary}
            breakpoint={breakpoint}
            level={3}
          >
            tornando a saúde
          </SFSecondaryTitle>

          <SFSecondaryTitle breakpoint={breakpoint} level={3}>
            mais <span>humana</span>
          </SFSecondaryTitle>
        </SFCol>
      </SFRow>
      <SFRow
        justify="center"
        margin=" 5% 0"
        gutter={[16, 16]}
        style={breakpoint.md ? { flex: "1" } : { flex: "2" }}
      >
        <Button
          ghost
          shape="circle"
          icon={<DownOutlined />}
          onClick={() => scrollToSection("sobre")}
        />
      </SFRow>
    </SFSection>
  );
};

export default Home;
