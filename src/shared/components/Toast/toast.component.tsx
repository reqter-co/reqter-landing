import React, { useState, useEffect } from "react";
import { Wrapper } from "./toast.style";
import Item from "./toast.item";

interface INotify {
  position:
    | "top-right"
    | "top-left"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center";
  autoDelete: boolean;
  autoDeleteTime: number;
}
interface IToast {
  id?: number;
  title?: string;
  description?: string;
  type: "success" | "error" | "warning" | "info" | "default";
}
let notify = (props: IToast): any => [props];
let deleteToast = (id: any): any => [id];

const Toast = (props: INotify) => {
  const { position, autoDelete, autoDeleteTime } = props;
  const [list, setList] = useState<IToast[]>([]);
  //   useEffect(() => {
  //     setList([...list]);
  //     // eslint-disable-next-line
  //   }, [list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [autoDelete, autoDeleteTime, list]);

  notify = (notifyObj) => {
    setList((prev) => [
      ...prev,
      { ...notifyObj, id: Math.floor(Math.random() * 101 + 1) },
    ]);
  };
  deleteToast = (id: any) => {
    const listItemIndex = list.findIndex((e: any) => e.id === id);
    list.splice(listItemIndex, 1);
    setList([...list]);
  };

  return (
    <Wrapper className={position}>
      {list &&
        list.map((toastInfo, index) => (
          <Item
            key={index}
            toast={toastInfo}
            animation={position}
            deleteToast={deleteToast}
          />
        ))}
    </Wrapper>
  );
};

export { Toast, notify, deleteToast };
