import styled from "styled-components";
import colors from "../../constants/colors.jsx";
import { Typography } from "antd";
import {
  fontSizeTitle,
  fontSizeSecondaryTitle,
  fontSizeTerciaryTitle,
  fontSizeText,
  fontSizeParagraph,
  lineHeightTitle,
  lineHeightTerciaryTitle,
  lineHeightText,
} from "../helpers/fontHelper.jsx";

export const SFBaseText = styled(Typography)`
  &&& {
    color: ${(props) => props.color || "white"};
    text-align: ${(props) => props.textAlign || "center"};
    margin-top: ${(props) => props.marginTop || "0.5rem"};
    margin-bottom: ${(props) => props.marginBottom || "1rem"};
  }
`;

export const SFMainTitle = styled(SFBaseText)`
  &&& {
    font-size: ${(props) => props.fontSize || fontSizeTitle(props?.breakpoint)};
    line-height: ${(props) => lineHeightTitle(props?.breakpoint)};
    font-weight: 500;
  }
`;

export const SFSecondaryTitle = styled(SFBaseText)`
  &&& {
    font-size: ${(props) =>
      props.fontSize || fontSizeSecondaryTitle(props?.breakpoint)};
    line-height: ${(props) => lineHeightTitle(props?.breakpoint)};
    font-weight: 200;
  }

  & span {
    color: ${colors.primary};
  }
`;

export const SFTerciaryTitle = styled(SFBaseText)`
  &&& {
    font-size: ${(props) =>
      props.fontSize || fontSizeTerciaryTitle(props?.breakpoint)};
    line-height: ${(props) => lineHeightTerciaryTitle(props?.breakpoint)};
    font-weight: 200;
  }

  & span {
    color: ${colors.primary};
  }
`;

export const SFText = styled(SFBaseText)`
  &&& {
    font-size: ${(props) => props.fontSize || fontSizeText(props?.breakpoint)};
    line-height: ${(props) => props.lineHeight || "1.20rem"};
    font-weight: ${(props) => props.fontWeight || "500"};
  }
`;

export const SFParagraph = styled(SFBaseText)`
  &&& {
    font-size: ${(props) =>
      props.fontSize || fontSizeParagraph(props?.breakpoint)};
    line-height: ${(props) => lineHeightText(props?.breakpoint)};
    font-weight: 400;

    & span {
      color: ${colors.primary};
    }
  }
`;
