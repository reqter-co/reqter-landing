import styled from "styled-components";
import tw, { theme } from "twin.macro";
export const Container = styled.div<{}>`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 24px;
    float: right;
    .switch input {
      display: none;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input.default:checked + .slider {
      background-color: #444;
    }
    input.primary:checked + .slider {
      ${tw`bg-primary-light-color`}
    }
    input.success:checked + .slider {
      background-color: #8bc34a;
    }
    input.info:checked + .slider {
      background-color: #3de0f5;
    }
    input.warning:checked + .slider {
      background-color: #ffc107;
    }
    input.danger:checked + .slider {
      background-color: #f44336;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px ${theme`colors.primary-light-color`};
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    } /* Hide default HTML checkbox */
    .switch input {
      display: none;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input.default:checked + .slider {
      background-color: #444;
    }
    input.primary:checked + .slider {
      ${tw`bg-primary-light-color`}
    }
    input.success:checked + .slider {
      background-color: #8bc34a;
    }
    input.info:checked + .slider {
      background-color: #3de0f5;
    }
    input.warning:checked + .slider {
      background-color: #ffc107;
    }
    input.danger:checked + .slider {
      background-color: #f44336;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }
`;
