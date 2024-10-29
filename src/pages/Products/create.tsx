
import AuthLayout from "../../layouts/AuthLayout";
import AddProductProvider from "../../context/AddProductContext";
import AddProductContent from "../../components/AddProductContent";
const ProductCreate: React.FC = () => {
  return (
    <AuthLayout>
      <AddProductProvider>
        <AddProductContent/>
      </AddProductProvider>
    </AuthLayout>
  );
};
export default ProductCreate;
