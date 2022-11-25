import React, { Component } from "react";

class TracksInterface extends Component {
  state = {
    headers: [
      "Likes",
      "Playlists",
      "Charts",
      "My Recommendations",
      "Liked Recommendations",
    ],
    tracks: [
      ["Lorem1", "Ipsum", "3:21"],
      ["Lorem2", "Ipsum", "3:21"],
      ["Lorem3", "Ipsum", "3:21"],
      ["Lorem4", "Ipsum", "3:21"],
      ["Lorem5", "Ipsum", "3:21"],
      ["Lorem6", "Ipsum", "3:21"],
      ["Lorem7", "Ipsum", "3:21"],
      ["Lorem8", "Ipsum", "3:21"],
    ],
  };
  render() {
    return (
      <div>
        <section className="mainInterface">
          <p className="headersClassLocation">
            {this.state.headers.map((header) => (
              <span className="headersClass" key={header}>
                {header}
              </span>
            ))}
          </p>
          <section className="tracksPanel">
            <header>
              <div className="nameHeaderLocation">
                <span className="profilePageSmallText">Name</span>
              </div>
              <div className="nameHeaderLocation">
                <span className="profilePageSmallText">Artist</span>
              </div>
            </header>
            {this.state.tracks.map((track, index) => (
              <div className="tracksGrid" key={track[0]}>
                <div className="tracksClass">{index + 1}</div>
                <div className="tracksClass">{track[0]}</div>
                <div className="tracksClass">{track[1]} </div>
                <div className="tracksClass">{track[2]}</div>
              </div>
            ))}
          </section>
        </section>
        <aside className="searchbar">
          <div className="searchbarPanel">
            <span className="searchbarText">Search</span>
          </div>
        </aside>
      </div>
    );
  }
}

export default TracksInterface;
