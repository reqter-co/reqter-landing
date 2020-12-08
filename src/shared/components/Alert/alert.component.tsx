import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import tw from "twin.macro";
import Button from "../Button";
import { Wrapper } from "./alert.style";

export interface IAlert {
  title: string;
  description: string;
  okButtonText: string;
  cancelButtonText: string;
  okButtonAction?: () => void;
  onCancel?: () => void;
  onOk?: () => void;
  isApiCallOKButton?: boolean;
}

let toggleAlert = (alertInfo?: IAlert): void => undefined;

const Alert = () => {
  const [show, _toggleAlert] = useState(false);
  const [info, setInfo] = useState<IAlert>();
  const [ajaxSpinner, toggleSpinner] = useState(false);

  useEffect(() => {
    if (show) document.body.style.overflowY = "hidden";
    else {
      document.body.style.overflowY = "auto";
      toggleSpinner(false);
    }
  }, [show]);

  toggleAlert = (alertInfo?: IAlert) => {
    setInfo(alertInfo);
    _toggleAlert((prev) => !prev);
  };
  function handleCloseModal() {
    if (!ajaxSpinner) {
      if (info?.onCancel) {
        info.onCancel();
      }
      _toggleAlert((prev) => !prev);
    }
  }
  function handleOkBtnClicked() {
    if (!info?.isApiCallOKButton) {
      _toggleAlert((prev) => !prev);
    } else {
      toggleSpinner(true);
    }
    if (info?.onOk) {
      info.onOk();
    }
  }
  return show
    ? ReactDOM.createPortal(
        <Wrapper>
          <div className="alert">
            <div className="alert__bg" onClick={handleCloseModal} />
            <div className="alert__content">
              <div className="alert__header">
                <span className="title">{info?.title}</span>
                <span
                  className="icon-cross closeIcn"
                  onClick={handleCloseModal}
                ></span>
              </div>
              <div className="alert__body">
                <span>{info?.description}</span>
              </div>
              <div className="alert__footer">
                <Button
                  cls={tw`bg-gray-600 hover:bg-gray-700 w-24`}
                  size="sm"
                  onClick={handleCloseModal}
                >
                  {info?.cancelButtonText}
                </Button>
                <Button
                  cls={tw`w-24`}
                  size="sm"
                  onClick={handleOkBtnClicked}
                  loading={ajaxSpinner}
                >
                  {info?.okButtonText}
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>,
        document.body
      )
    : null;
};

export { Alert, toggleAlert };
