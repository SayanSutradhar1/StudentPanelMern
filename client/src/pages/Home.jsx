import Form from "../components/Form";
import SideBox from "../components/SideBox";

const Home = () => {
  return (
    <div className="h-full gap-8 flex flex-1 justify-center flex-wrap-reverse">
      <div className="min-h-screen box-border items-center flex px-16 max-[490px]:px-1  max-[600px]:px-6 justify-around max-[600px]:justify-center max-[600px]:flex-col flex-wrap max-[490px]:items-center">
        <Form />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <SideBox />
      </div>
    </div>
  );
};

export default Home;
