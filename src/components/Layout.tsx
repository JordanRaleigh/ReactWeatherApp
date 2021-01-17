import { FunctionComponent } from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto 30rem;
  grid-template-columns: calc(50% - 0.5rem) calc(50% - 0.5rem);
  grid-template-areas:
    "header header"
    "weather weather";
  gap: 1rem;

  border-radius: 0.25rem;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.3);
  color: #222;
  max-width: 50rem;

  .header {
    grid-area: header;
    text-align: center;
  }

  .card {
    grid-area: weather;
  }

  .section {
    box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    padding: 1rem;
  }

  .calculation {
    font-size: 5rem;
    text-align: center;
  }

  * {
    font-family: sans-serif;
  }

  blockquote {
    font-style: italic;
  }

  td {
    padding: 0.5rem;
  }

  td:nth-of-type(1) {
    font-style: italic;
    text-transform: lowercase;
  }

  td:nth-of-type(2) {
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

const Layout: FunctionComponent = (props) => {
  if (!props.children || !Array.isArray(props.children)) {
    return null;
  }

  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Layout;
