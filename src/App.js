import React from "react";
import BoxList from "./components/Box-List/box-list";
import ShowOrder from "./components/Show-Order/ShowOrder";

const App = () => {
  const [colors, setColors] = React.useState([]);
  const [showOrder, setShowOrder] = React.useState(false);

  const displayOrder = (colors) => {
    setColors(colors);
    setShowOrder(true);
  }

  return <div>{showOrder ? <ShowOrder colors={colors} /> : <BoxList showOrder={displayOrder} />}</div>;
};

export default App;
