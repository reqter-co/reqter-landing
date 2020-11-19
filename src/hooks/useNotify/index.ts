import { notify, IToast } from "@Shared/components/Toast/toast.component";
const useNotify = () => {
  const showNotify = (notifyInfo: IToast) => {
    notify(notifyInfo);
  };
  return { showNotify };
};
export default useNotify;
