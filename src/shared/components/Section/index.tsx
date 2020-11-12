import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Wrapper, Content, Title, Description } from "./section.style";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  bgImage?: string;
  title?: string;
  description?: string;
}
const Section: React.ForwardRefRenderFunction<HTMLDivElement, IProps> = (
  { bgColor, bgImage = "", title, description, children, ...rest },
  ref
) => {
  const divRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => divRef?.current as HTMLDivElement);
  return (
    <Wrapper bgColor={bgColor} bgImage={bgImage} ref={divRef} {...rest}>
      <Content>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children}
      </Content>
    </Wrapper>
  );
};
export default forwardRef(Section);
