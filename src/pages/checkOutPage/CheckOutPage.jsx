import Header from "../../components/header/Header";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CheckoutSummary from "./CheckOutSummery";

const CheckOutPage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section>
        <div className="main-container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "My Account", href: "/my-account" },
              { label: "Product", href: "/shop:id" },
              { label: "View Cart", href: "/cart" },
              { label: "Check Out" },
            ]}
            maxVisible={4}
          />

          <div className="flex justify-between">
            <div className="bg-yellow-300 w-full">Check Out</div>
            <CheckoutSummary />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckOutPage;
