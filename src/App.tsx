import routers from "@/routers/route";
import { FC } from "react";
import { useRoutes } from "react-router-dom";
const App: FC<any> = (props) => {
  const element = useRoutes(routers);
  return element;
};

export default App;
