import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/cards/cards";

export default function Products() {
  return (
    <div className="flex flex-row mx-[5%] mt-[5%]">
      <Filtered />
      <span className="w-[10%]"></span>
      <Cards />
    </div>
  );
}
