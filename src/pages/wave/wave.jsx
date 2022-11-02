import "./wave.css";

export default function Wave() {
  return (
    <div className="overflow-hidden fixed lg:inset-0 hidden lg:block">
      <div class="ocean1">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>

      <div class="ocean2">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}
