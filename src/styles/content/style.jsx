import styled from "styled-components";
import colors from "../../constants/colors.jsx";
import { Row, Col } from "antd";

export const SFMainContent = styled.div`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};
  align-content: ${(props) => props.alignContent || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  background-image: url(${(props) => props.backgroundImage || "none"});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

export const SFSection = styled(SFMainContent)`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
`;

export const SFContent = styled.div`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "5%"};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "start"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;

export const SFRow = styled(Row)`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "1% 0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  align-content: ${(props) => props.alignContent || "center"};
`;

export const SFCol = styled(Col)`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  align-content: ${(props) => props.alignContent || "start"};
`;

export const SFOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlay};
  zindex: 0;
`;
