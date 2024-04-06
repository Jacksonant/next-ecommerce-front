import styled from "styled-components";
import { ButtonStyle } from "./Button";
import Link from "next/link";

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

export default function ButtonLink({ children, ...rest }) {
  return <StyledLink {...rest}>{children}</StyledLink>;
}
