import { useContext } from "react";
import { DivsContext } from "../../Provider";
import HeaderCss from "./header.module.css";

function Header() {
  const { addNumber, sortNumbers } = useContext(DivsContext);

  return (
    <header className={HeaderCss.header}>
      <nav>
        <button className={HeaderCss.button} onClick={addNumber}>
          Add Card
        </button>
        <button className={HeaderCss.button} onClick={sortNumbers}>
          Sort Card
        </button>
      </nav>
    </header>
  );
}

export default Header;
