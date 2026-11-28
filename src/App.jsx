import AddTwo from "./components/AddTwo";
import AddProductForm from "./components/AddProductForm";
import Banner from "./components/Banner";
import BookingForm from "./components/BookingForm";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";
import Counter from "./components/Counter";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Login from "./components/Login";
import OrderButton from "./components/OrderButton";
import PasswordInput from "./components/PasswordInput";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SayHello from "./components/SayHello";
import TaskList from "./components/TaskList";
import WelcomeBanner from "./components/WelcomeBanner";
import WelcomeMessage from "./components/WelcomeMessage";
import Features from "./components/Features";
import StoreList from "./components/StoreList";


function App() {

  return (
    <>
      <Container>
        <Header />
        <Login />
        <BookingForm />
        <AddProductForm />
        <CourseForm />
        <Products />
        <SayHello />
        <PasswordInput />
        <ProductCard />
        <Features />
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
        <StoreList />
        <TaskList />
        <WelcomeMessage />
        <ContactForm />
        <Counter />
      </Container>
    </>
  )
}

export default App;
