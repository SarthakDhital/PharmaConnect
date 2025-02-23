"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../components/UserAuth";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [cartData, setCartData] = useState<
    {
      productId: string;
      _id: string;
      productName: string;
      productprice: number;
    }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    setAccessToken(token);
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (!accessToken) return; // Prevent API call if token is missing

      try {
        const response = await axios.get(
          "https://pharmaconnect-backend.onrender.com/cart/getCart",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setCartData(response?.data.data.products);
        setTotalPrice(response?.data.data.totalAmount);
      } catch (err) {
        console.log("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [accessToken]);

  // Prefill shipping address if user has one
  useEffect(() => {
    if (user?.location) {
      setShippingAddress(user.location);
    }
  }, [user]);

  const handleConfirmOrder = async () => {
    setLoading(true);
    setError(null);

    if (!accessToken) {
      setError("Authentication error. Please log in again.");
      setLoading(false);
      return;
    }

    const orderData = {
      userId: user?._id,
      name: user?.firstName,
      email: user?.email,
      shippingAddress, // Include editable shipping address
      cartItems: cartData.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        productPrice: item.productprice,
      })),
      totalAmount: totalPrice,
    };

    try {
      const response = await axios.post(
        "https://pharmaconnect-backend.onrender.com/order/CreateOrder",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        router.push(`/order/success/${response.data.orderId}`);
      }
    } catch (err: any) {
      console.error("Error creating order:", err);
      setError("Failed to create the order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5F41E4] mb-8">
          Checkout
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            User Information
          </h2>
          <div className="mb-6">
            <p className="text-lg text-gray-600">Name: {user?.firstName || "N/A"}</p>
            <p className="text-lg text-gray-600">Email: {user?.email || "N/A"}</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Cart Items
          </h2>
          <div className="space-y-6">
            {cartData.map((item) => (
              <div key={item._id} className="flex justify-between border-b pb-4">
                <p className="text-lg text-gray-800">{item.productName}</p>
                <p className="text-lg text-[#5F41E4]">Rs {item.productprice}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-[#5F41E4]">
                Rs {totalPrice}
              </span>
            </div>

            {/* Shipping Address Input */}
            <div className="mt-6">
              <label className="block text-lg font-semibold text-gray-800 mb-2">
                Shipping Address:
              </label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                rows={3}
                placeholder="Enter your shipping address"
              />
            </div>

            {loading ? (
              <div className="w-full text-center">
                <p className="text-lg text-gray-600">Processing your order...</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="text-red-500 text-center mb-4">{error}</div>
                )}
                <button
                  onClick={handleConfirmOrder}
                  className="w-full px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0] mt-4"
                >
                  Confirm Order
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
