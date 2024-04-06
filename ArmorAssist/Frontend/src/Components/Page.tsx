import LeftNavbar from "./LeftNavbar";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />
      <div className="md:w-3/4 h-screen bg-[#f5f5fc] p-20 flex flex-col justify-center">
        <h1 className="text-3xl text-center">ArmourAssist</h1>
        <h1 className="text-center">Keep Your Gear Mission-Ready</h1>
      </div>
    </div>
  );
};

export default Page;
