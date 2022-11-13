import "./wave.css";

export default function Wave() {
  return (
    <div className="overflow-hidden fixed lg:inset-0 hidden lg:block">
      <div className="ocean1">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="ocean2">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}
