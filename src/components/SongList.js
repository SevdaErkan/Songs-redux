import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { selectSong } from "../actions";

class Songlist extends Component {
  constructor() {
    super();
    this.state = {};
  }
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="list" key={song.title}>
          <div className="content">{song.title}</div>
          <div className="right">
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </Button>
          </div>
        </div>
      );
    });
  }
  render = () => {
    return <div>{this.renderList()}</div>;
  };
}

const mapStateToProps = (state) => {
  // console.log(state)
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(Songlist);
