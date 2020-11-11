import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Wrapper, Content } from "./styles";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  bgImage?: string;
}
const Section: React.ForwardRefRenderFunction<HTMLDivElement, IProps> = (
  { bgColor, bgImage = "", children, ...rest },
  ref
) => {
  const divRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => divRef?.current as HTMLDivElement);
  return (
    <Wrapper bgColor={bgColor} bgImage={bgImage} ref={divRef} {...rest}>
      <Content>{children}</Content>
    </Wrapper>
  );
};
export default forwardRef(Section);
