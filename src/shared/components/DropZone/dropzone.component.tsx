import { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { Container } from "./dropzone.style";

interface IDropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  onDropped: (file: any) => void;
}
const DropZone: React.FC<IDropZoneProps> = ({ onDropped }) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    let div = dropRef.current;
    if (div) {
      div.addEventListener("dragenter", handleDragIn);
      div.addEventListener("dragleave", handleDragOut);
      div.addEventListener("dragover", handleDrag);
      div.addEventListener("drop", handleDrop);
    }
    return () => {
      let div = dropRef.current;
      if (div) {
        div.removeEventListener("dragenter", handleDragIn);
        div.removeEventListener("dragleave", handleDragOut);
        div.removeEventListener("dragover", handleDrag);
        div.removeEventListener("drop", handleDrop);
      }
    };
  }, []);
  function handleDrag(e: any) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDragIn(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0)
      setDragging(true);
  }

  function handleDragOut(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.includes("image")) {
        if (onDropped) onDropped(file);
      }
      e.dataTransfer.clearData();
    }
  }
  return (
    <Container
      ref={dropRef}
      css={[
        dragging
          ? tw`border-4 border-dashed border-gray-200`
          : tw`border border-gray-300`,
      ]}
    >
      <span>Drop your image here</span>
      <div>
        <span>Or Browse</span>
        <input type="file" />
      </div>
    </Container>
  );
};
export default DropZone;
