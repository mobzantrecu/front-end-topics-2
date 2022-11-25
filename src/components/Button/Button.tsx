import styled from "styled-components";

export type ButtonProps = {
  theme: {
    main: string;
  };
};

const Button = styled.button<ButtonProps>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main || "palevioletred"};
  border: 2px solid ${(props) => props.theme.main || "palevioletred"};
`;

export default Button;
