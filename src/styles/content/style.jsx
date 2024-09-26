import styled from "styled-components";
import { Row, Col } from "antd";
import { heightSection, heightColumn } from "../helpers/contentHelper.jsx";

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
`;

export const SFSection = styled(SFMainContent)`
  height: ${(props) =>
    props.height || heightSection(props.breakpoint) || "100vh"};
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
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.padding || "1% 0"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;

export const SFCol = styled(Col)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || heightColumn(props.breakpoint)};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  align-content: ${(props) => props.alignContent || "start"};
`;
