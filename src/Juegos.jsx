import "./Juegos.css";
const Juegos = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="container">
          <h1 style={{ color: "white" }}>Jueguitos 👾</h1>
          <a
            href="https://www.juegos.com/juego/ludo-con-amigos"
            target="_blank"
            rel="noreferrer"
            className="imagen_container"
          >
            <img src="/ludo.jpg" alt="ludo" className="imagen_juego" />
          </a>
          <a
            href="https://tetris.com/play-tetris"
            target="_blank"
            rel="noreferrer"
            className="imagen_container"
          >
            <img src="tetris.webp" alt="tetris" className="imagen_juego" />
          </a>
          <a
            href="https://www.jigsaw365.com/play/spy-x-family-cbaa97f5-ff2e-4bbe-94c2-5230c5b83625"
            target="_blank"
            rel="noreferrer"
            className="imagen_container"
          >
            <img src="anya.jpeg" alt="anya" className="imagen_juego" />
          </a>
          <a
            href="https://www.minijuegos.com/juego/super-mario-world-online"
            target="_blank"
            rel="noreferrer"
            className="imagen_container"
          >
            <img src="smw.webp" alt="mario" className="imagen_juego" />
          </a>
          <a
            href="https://wordlegame.org/es"
            target="_blank"
            rel="noreferrer"
            className="imagen_container"
          >
            <img src="wordle.jpg" alt="wordle" className="imagen_juego" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Juegos;
