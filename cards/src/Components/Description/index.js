import DescriptionCss from "./description.module.css";

function Description() {
  return (
    <div className={DescriptionCss.ds}>
      <div>
        Press the "add card" button to add the new Card.Use the "sort Cards"
        button to sort the Cards by the increase.Press X icon on the top right
        to delete them.
      </div>
    </div>
  );
}
export default Description;
