Movie Component
Description
The Movie component is a React component designed to display information about a movie, including its title, show time, screen, row, and seat. It also includes a background image and an icon link. This component is structured to be clean and maintainable, with extracted subcomponents for repeated sections.

Props
The Movie component accepts a single prop:

data (object): An object containing the following properties:
imageUrl (string): The URL of the movie's background image.
title (string): The title of the movie.
showTime (string): The date and time of the movie show.
screen (string): The screen number where the movie is being shown.
row (string): The row number of the seat.
seat (string): The seat number.
Usage
To use the Movie component, simply import it into your React application and pass the appropriate data object as a prop.

Example
javascript
Copy code
import React from 'react';
import Movie from './Movie';

const movieData = {
  imageUrl: 'https://example.com/movie-image.jpg',
  title: 'Inception',
  showTime: 'July 16, 2020 - 7:00 PM',
  screen: '5',
  row: 'D',
  seat: '12',
};

function App() {
  return (
    <div className="App">
      <Movie data={movieData} />
    </div>
  );
}

export default App;
Component Structure
The Movie component is structured as follows:

Movie Header: Displays the background image and an icon link.
Movie Content: Contains the movie title and other details such as show time, screen, row, and seat.
Info Section: A reusable subcomponent that displays a label and a value.
Code
javascript
Copy code
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
Styling
The component assumes the presence of the following CSS classes for styling:

movie-card
movie-header
header-icon-container
header-icon
movie-content
movie-content-header
movie-title
imax-logo
movie-info
info-section
You can customize these styles as per your design requirements.

License
This component is open-source and available under the MIT License.
