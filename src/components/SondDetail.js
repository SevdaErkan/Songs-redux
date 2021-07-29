import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  // console.log("pr", props);
  return (
    <div>
      {song !== null ? (
        <>
          <h3>Details for</h3>
          <p>Title : {song.title}</p>
          <p>Duration:{song.duration}</p>
        </>
      ) : (
        "Select a song"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
