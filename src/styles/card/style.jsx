import styled from "styled-components";
import { Card } from "antd";

export const SFCard = styled(Card)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  text-align: ${(props) => props.textAlign || "center"};
  justify-content: ${(props) => props.justifyContent || "left"};
  border-bottom: ${(props) => props.borderBottom || "4px solid black"};
  margin: ${(props) => props.margin || "0"};
`;
