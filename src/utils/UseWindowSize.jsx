import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 992) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }

    // Verificação inicial
    handleResize();

    // Adicione o ouvinte de redimensionamento
    window.addEventListener("resize", handleResize);

    // Não se esqueça de remover o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen;
};
