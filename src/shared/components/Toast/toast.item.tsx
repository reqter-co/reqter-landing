import Icon from "@Shared/components/Icon";
import React from "react";
import {
  ItemWrapper,
  IconBox,
  TextBox,
  Title,
  Description,
} from "./toast.style";
const ToastItem = (props: any) => {
  const { toast, animation, deleteToast } = props;

  const deleteT = () => {
    deleteToast(toast.id);
  };
  return (
    <ItemWrapper className={animation} onClick={deleteT}>
      <IconBox type={toast.type}>
        <Icon
          name={
            toast?.type === "success"
              ? "circle-checked"
              : toast?.type === "error"
              ? "circle-times"
              : toast?.type === "warning"
              ? "warning"
              : toast?.type === "info"
              ? "circle-info"
              : ""
          }
        />
      </IconBox>
      <TextBox>
        {toast.title && <Title>{toast.title}</Title>}
        {toast.description && <Description>{toast.description}</Description>}
      </TextBox>
    </ItemWrapper>
  );
};
export default ToastItem;
