import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  const grandTotal = orderDetails.totals.grandTotal;
  return (
    <>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {grandTotal}</h2>
    </>
  );
}
