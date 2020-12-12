import {
  BsClock,
  BsGraphUp,
  BsLayoutWtf,
  BsChatSquareQuote,
  BsX,
} from "react-icons/bs";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaAudible,
  FaGg,
  FaBlackberry,
  FaCloudsmith,
  FaGoogle,
  FaUser,
  FaCaretDown,
  FaCaretUp,
  FaEye,
  FaGooglePlus,
  FaEyeSlash,
  FaAlignRight,
  FaCheckCircle,
  FaInfoCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaSignOutAlt,
  FaFolderPlus,
  FaPlus,
  FaCreditCard,
} from "react-icons/fa";

// type Props = {
//   time: JSX.Element;
//   financial: JSX.Element;
//   legal: JSX.Element;
//   tests: JSX.Element;
//   close: JSX.Element;
//   instagram: JSX.Element;
//   google: JSX.Element;
//   "google-plus": JSX.Element;
//   facebook: JSX.Element;
//   linkedin: JSX.Element;
//   email: JSX.Element;
//   phone: JSX.Element;
//   technology: JSX.Element;
//   measure: JSX.Element;
//   math: JSX.Element;
//   health: JSX.Element;
//   user: JSX.Element;
//   "caret-down": JSX.Element;
//   "caret-up": JSX.Element;
//   eye: JSX.Element;
//   "eye-slash": JSX.Element;
//   "align-right": JSX.Element;
//   "circle-checked": JSX.Element;
//   "circle-info": JSX.Element;
//   "circle-times": JSX.Element;
//   warning: JSX.Element;
//   "sign-out": JSX.Element;
//   plus: JSX.Element;
//   "plus-folder": JSX.Element;
//   "bank-card": JSX.Element;
// };
const icons = {
  time: <BsClock />,
  financial: <BsGraphUp />,
  legal: <BsLayoutWtf />,
  tests: <BsChatSquareQuote />,
  close: <BsX />,
  instagram: <FaInstagram />,
  google: <FaGoogle />,
  "google-plus": <FaGooglePlus />,
  facebook: <FaFacebook />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  phone: <FaPhone />,
  technology: <FaAudible />,
  measure: <FaBlackberry />,
  math: <FaCloudsmith />,
  health: <FaGg />,
  user: <FaUser />,
  "caret-down": <FaCaretDown />,
  "caret-up": <FaCaretUp />,
  eye: <FaEye />,
  "eye-slash": <FaEyeSlash />,
  "align-right": <FaAlignRight />,
  "circle-checked": <FaCheckCircle />,
  "circle-info": <FaInfoCircle />,
  "circle-times": <FaTimesCircle />,
  warning: <FaExclamationTriangle />,
  "sign-out": <FaSignOutAlt />,
  plus: <FaPlus />,
  "plus-folder": <FaFolderPlus />,
  "bank-card": <FaCreditCard />,
};
const Icon = ({ name }: { name: string }) => {
  return (icons as any)[name.toLowerCase()]
    ? (icons as any)[name.toLowerCase()]
    : "";
};

export default Icon;
