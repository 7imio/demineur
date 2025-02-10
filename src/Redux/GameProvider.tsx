import { Provider } from "react-redux";
import { store } from "../store/store";
import { ReactNode } from "react";

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default GameProvider;
