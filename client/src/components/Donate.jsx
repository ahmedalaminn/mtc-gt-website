import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="h-dvh flex flex-col justify-center items-center bg-gray-900 text-white p-6"> 
      <h2 className="text-4xl font-bold mb-6"> Donate </h2>
      <div className="text-center">
        <Link
          to="/checkout"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Donate;
