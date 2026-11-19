import AddTwo from "./components/AddTwo";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";
import Counter from "./components/Counter";
import CourseList from "./components/CourseList";
import Intro from "./components/Intro";
import OrderButton from "./components/OrderButton";
import PasswordInput from "./components/PasswordInput";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import SayHello from "./components/SayHello";
import TaskList from "./components/TaskList";
import WelcomeBanner from "./components/WelcomeBanner";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

  return (
    <>
      <Container>
        <SayHello />
        <PasswordInput />
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
        <TaskList />
        <WelcomeMessage />
        <ContactForm />
        <Counter />
      </Container>
    </>
  )
}

export default App;
