import Masonry from "react-masonry-css";
import { Wrapper } from "./masonry.style";
const breakpointColumnsObj = {
  default: 2,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </Wrapper>
  );
};
export default MasonryLayout;
