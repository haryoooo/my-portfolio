import Navbar from "../components/Navbar";
import Button from "../components/ButtonClick"
import download from "../assets/download.png"

export default function Header() {
  return (
    <div className="flex justify-between my-5 md:px-[50px]">
      <div className="font-bold text-lg">Portfolio.</div>
      <div>
        <Navbar />
      </div>
      <div>
        <Button titles={"Resume"} url={download} width={18} />
      </div>
    </div>
  );
}
