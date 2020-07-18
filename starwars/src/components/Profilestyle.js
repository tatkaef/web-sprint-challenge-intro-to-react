import styled from "styled-components";

const Txt = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 300px;
  border: 4px dotted red;
  background-color: pink;
  width: 60%;

  .close-pr {
    display: none;
  }

  h3 {
    color: darkblue;
  }

  p {
    display: flex;
    align-items: center;
    // border: 1px solid black;
  }
`;

export default Txt;
