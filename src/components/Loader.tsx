import DinoLoader from "../assets/dino-loader.gif";

export default function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <img src={DinoLoader} alt="loader" />
      </div>
    </div>
  );
}
