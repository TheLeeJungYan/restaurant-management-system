import AuthLayout from "../layouts/AuthLayout";
import SearchBar from "../components/SearchBar";
import UserImg from "../assets/images/user.jpg";
import Products from "../data/product" ;
const ProductManagement: React.FC = () =>{
    const getProImageUrl: (id: number) => string = (id) => {
    return new URL(`../assets/products/${id}.jpg`, import.meta.url).href;
    };
    return (
        <AuthLayout>
            <header className="flex items-center">
          <SearchBar />
          <div className="ml-auto bg-white rounded-full p-2 border border-gray-200 cursor-pointer flex gap-2 items-center">
            <img
              src={UserImg}
              alt=""
              className="rounded-full h-12 w-12 object-cover flex-1"
            />
          </div>
        </header>
        <div className="flex flex-wrap">
            {Products && Products.map((p)=>{
                return (
                    <div className="flex basis-1/4 px-2 py-3">
                        <div className="bg-white flex flex-col border flex-1 overflow-hidden rounded-xl">
                            <img src={getProImageUrl(p.ID)} alt="" className="w-full h-60 object-cover"/>
                            <div className="flex flex-col px-4 py-4">
                                <span className="ml-1 font-inter font-semibold text-sm">Name</span>
                                <input type="text" className="outline-0 border rounded-md py-2 px-4 font-poppins w-2/3 border-gray-300 text-gray-500" value={p.NAME}/>
                                <span className="ml-1 font-inter font-semibold text-sm mt-2">Price</span>
                                <input type="text" className="outline-0 border rounded-md py-2 px-4 font-poppins w-2/3 border-gray-300 text-gray-500" value={p.PRICE}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </AuthLayout>
    )
}

export default ProductManagement;