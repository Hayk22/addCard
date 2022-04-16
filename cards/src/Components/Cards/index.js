import { useContext } from "react";
import CardCss from "./cards.module.css";
import { NumberContext } from "../../Provider";

function Cards() {
  const { number, deleteNumber } = useContext(NumberContext);

  return (
    <div className={CardCss.cards}>
      {number.map((item, index) => (
        <div className={CardCss.card} key={index}>
          <button
            className={CardCss.cardCancel}
            onClick={() => {
              deleteNumber(index);
            }}
          >
            X
          </button>
          <div className={CardCss.cardNumber}>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
