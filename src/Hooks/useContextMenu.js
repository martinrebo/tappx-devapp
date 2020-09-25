import { useEffect, useCallback, useState } from "react";

const useContextMenu = outerRef => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [menu, showMenu] = useState(false);
  const [dataId, setDataId] = useState(false);

  const handleContextMenu = useCallback(
    event => {
      event.preventDefault();
      if (outerRef && outerRef?.current?.contains(event.target)) {
        setXPos(`${event.pageX}px`);
        setYPos(`${event.pageY}px`);
        showMenu(true);
        setDataId(event.target.dataset.id)
        console.log(event.target)
      } else {
        showMenu(false);
      }
    },
    [showMenu, outerRef, setXPos, setYPos]
  );

  const handleClick = useCallback((e) => {
    
    showMenu(false);

  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return { xPos, yPos, menu, dataId };
};

export default useContextMenu;