import styled from "styled-components";
import tw from "twin.macro";
export const TicketsContainer = styled.div`
  ${tw`flex mb-10 flex-wrap flex-1 bg-white shadow rounded`};
  height: 500px;

  thead tr th:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  thead tr th:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
