import styled from "styled-components";

export const SFBackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: ${(props) => props.position || "fixed"};
  z-index: ${(props) => props.zIndex || "-1"};
`;
