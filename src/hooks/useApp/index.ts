import { useAppState } from "@Contexts/app/app.provider";
const useApp = () => {
  const headerData = useAppState("headerData");
  const footerData = useAppState("footerData");
  return { headerData, footerData };
};

export default useApp;
