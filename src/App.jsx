import AddTwo from "./components/AddTwo";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Intro from "./components/Intro";
import OrderButton from "./components/OrderButton";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SayHello from "./components/SayHello";
import WelcomeBanner from "./components/WelcomeBanner";


function App() {

  return (
    <>
      <SayHello />
      <ProductCard />
      <WelcomeBanner />
      <WelcomeBanner />
      <OrderButton />
      <Banner />
      <Intro />
      <AddTwo />
      <div className="flex flex-col items-center w-full border">
        <h2 className="font-bold text-5xl">Our Products</h2>

        <ProductList />
      </div>

      <CourseList />
    </>
  )
}

export default App;
