import { useContext, useEffect } from "react";
import { DivsContext } from "../../Provider";
import CardCss from "./cards.module.css";

function Cards() {
  const { number, deleteNumber } = useContext(DivsContext);

  return (
    <div className={CardCss.cards}>
      {number.map((item, index) => (
        <div className={CardCss.card} key={index}>
          <button
            className={CardCss.cardCancel}
            onClick={() => {
              deleteNumber(item.id);
            }}
          >
            X
          </button>
          <div className={CardCss.cardNumber}>{item.random[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
