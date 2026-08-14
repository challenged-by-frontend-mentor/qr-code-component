import qrImage from "../assets/image-qr-code.png"

const Card = () => {
  return (
    <main className="card">
      <img
        src={qrImage}
        alt="QR code to scan and visit Frontend Mentor"
        className="card__qr-code"
      />
      <div className="card__content">
        <h1 className="card__title">
          Improve your front-end skills by building projects
        </h1>
        <p className="card__description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}

export default Card
