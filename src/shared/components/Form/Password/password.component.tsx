import React, {
  ForwardRefRenderFunction,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import Icon from "@Shared/components/Icon";
import { Wrapper, Input, PasswordVisibility } from "./password.style";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const InputCmp: ForwardRefRenderFunction<HTMLInputElement, IProps> = (
  props,
  ref
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef?.current as HTMLInputElement);
  const { hasError } = props;
  const [isVisiblePassword, togglePassVisibility] = useState(false);
  function handleEyeClicked() {
    togglePassVisibility((prev) => !prev);
  }
  return (
    <Wrapper hasError={hasError}>
      <Input
        type={isVisiblePassword ? "text" : "password"}
        ref={inputRef}
        {...props}
      />
      <PasswordVisibility onClick={handleEyeClicked}>
        <Icon name={isVisiblePassword ? "eye-slash" : "eye"} />
      </PasswordVisibility>
    </Wrapper>
  );
};

export default forwardRef(InputCmp);
