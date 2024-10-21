const Basket: React.FC = () => {
  return (
    <div className="w-112 h-full shrink-0 py-5 px-1">
      <div className="h-fit px-6 py-3 bg-white rounded-xl border border-gray-200 flex flex-col">
        <div className="head flex flex-col py-4 gap-2 border-b">
          <div className="text-2xl font-semibold font-nunito ">
            Current Order
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-1/2 border border-gray-200 rounded-xl px-2 py-2 font-poppins text-ellipsis text-sm outline-0 shadow-sm"
            >
              <option value="" disabled className="text-gray-100">
                Please select a table....
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col py-4"></div>
        <div className="py-2">
          <div
            id="subtotal"
            className="bg-gray-100 py-2 rounded-lg flex flex-col gap-2 px-4 *:flex *:justify-between *:items-center [&>div>div:first-child]:font-semibold [&>div>div:first-child]:text-gray-400 text-gray-800 [&>div>div:nth-child(2)]:font-poppins "
          >
            <div>
              <div>Subtotal</div>
              <div>RM 0.00</div>
            </div>
            <div>
              <div>Discount sales</div>
              <div>- RM 0.00</div>
            </div>
            <div>
              <div>Total Sales Tax</div>
              <div>RM 0.00</div>
            </div>
          </div>
        </div>
        <div
          id="total"
          className="flex justify-between items-center px-4 py-2 border-t text-2xl font-semibold font-inter"
        >
          <div>Total</div>
          <div>RM0.00</div>
        </div>
        <button className="bg-primaryColor text-white px-4 py-3 rounded-md font-bold text-xl mt-2">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Basket;
