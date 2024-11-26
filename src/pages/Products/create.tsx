
import AuthLayout from "../../layouts/AuthLayout";
import AddProductProvider from "../../context/ManageProductContext";
import AddProductContent from "../../components/ManageProductContent";
const ProductCreate: React.FC = () => {
  return (
    <AuthLayout>
      <AddProductProvider product={null} optionGrps={null}>
        <AddProductContent/>
      </AddProductProvider>
    </AuthLayout>
  );
};
export default ProductCreate;
