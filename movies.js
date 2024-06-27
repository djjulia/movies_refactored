function Movie({ data }) {
  const { imageUrl, title, showTime, screen, row, seat } = data;

  const myStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: 'cover',
  };

  const InfoSection = ({ label, value }) => (
    <div className="info-section">
      <label>{label}</label>
      <span>{value}</span>
    </div>
  );

  return (
    <div className="movie-card">
      <div className="movie-header" style={myStyle}>
        <div className="header-icon-container">
          <a href="#">
            <i className="material-icons header-icon"></i>
          </a>
        </div>
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
          <a href="#">
            <h3 className="movie-title">{title}</h3>
          </a>
          <div className="imax-logo"></div>
        </div>
        <div className="movie-info">
          <InfoSection label="Date & Time" value={showTime} />
          <InfoSection label="Screen" value={screen} />
          <InfoSection label="Row" value={row} />
          <InfoSection label="Seat" value={seat} />
        </div>
      </div>
    </div>
  );
}
