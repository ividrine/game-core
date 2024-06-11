import Welcome from "../../components/Welcome";

const Home = () => {
  return (
    <div className="basis-full flex">
      {/* Welcome  */}
      <div className="basis-full flex items-center justify-center">
        <div className="text-white text-center">
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default Home;
