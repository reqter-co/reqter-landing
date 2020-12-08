import { fadeInUp } from "@Shared/animations";
import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div<{}>`
  .alert {
    ${tw`fixed top-0 bottom-0 left-0 right-0`}
    height: 100%;
    z-index: 100;
    &__bg {
      background: rgba(0, 0, 0, 0.5);
      z-index: 101;
      height: 100%;
      width: 100%;
    }
    &__content {
      position: fixed;
      top: 40px;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 102;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 0.3rem;
      background: white;
      outline: 0;
      display: flex;
      flex-direction: column;
      padding: 20px;
      animation: ${fadeInUp} 0.5s;
    }
    &__header {
      display: flex;
      align-items: center;
      .title {
        ${tw`flex-1 text-2xl font-bold`}
      }
      .closeIcn {
        color: gray;
        font-size: 11px;
        cursor: pointer;
        transition-duration: 0.2s;
        &:hover {
          transition-duration: 0.2s;
          color: black;
        }
      }
    }
    &__body {
      flex: 1;
      padding: 15px 0 40px 0;
      font-size: 14px;
    }
    &__footer {
      display: flex;
      justify-content: flex-end;
      button:last-child {
        margin: 0 5px;
      }
    }
  }

  @media (max-width: 576px) {
    .alert {
      &__content {
        width: auto;
        margin: 0 10px;
      }
    }
  }
  @media (min-width: 576px) {
    .alert {
      &__content {
        width: 500px;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 768px) {
    .alert {
      &__content {
        width: 500px;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 992px) {
    .alert {
      &__content {
        width: 500px;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 1200px) {
    .alert {
      &__content {
        width: 500px;
        margin: 0 auto;
      }
    }
  }
`;
