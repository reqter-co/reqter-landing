import { toggleAlert, IAlert } from "@Shared/components/Alert/alert.component";
const useAlert = () => {
  const showAlert = (info: IAlert) => {
    toggleAlert(info);
  };
  const closeAlert = () => {
    toggleAlert();
  };
  return { showAlert, closeAlert };
};
export default useAlert;
