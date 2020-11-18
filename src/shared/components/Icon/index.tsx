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
} from "react-icons/fa";

const icons: { [key in string]: any } = {
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
};
const Icon = ({ name = "" }: { name: string }) => {
  return icons[name.toLowerCase()] ? icons[name.toLowerCase()] : "";
};

export default Icon;
