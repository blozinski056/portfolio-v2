export default function Logo() {
  function home() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="logo-container" onClick={home}>
      <div className="logo">B</div>
      <div className="box-left"></div>
      <div className="box-right"></div>
    </div>
  );
}
