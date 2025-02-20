import AddIcon from "../assets/hugeIcons/Add";
import { Link } from "react-router-dom";
interface Props {
  text: string;
  location: string;
}
const AddButton: React.FC<Props> = ({ text, location }) => {
  return (
    <Link
      to={location}
      className="flex bg-green-600 hover:bg-green-500 items-center hover:text-white hover:no-underline text-white px-3 gap-2 font-poppins rounded-md py-2 font-medium"
    >
      <div>
        <AddIcon size={16} color={"#fff"} />
      </div>
      <span>{text}</span>
    </Link>
  );
};

export default AddButton;
