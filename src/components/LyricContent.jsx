import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LyricContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const trackDetail = this.props.data.trackDetail;
        const lyric = this.props.data.lyricContent;
        return (
            <div>
                <Link to='/'>
                    <strong>back</strong>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>{trackDetail.track_name}</h1>
                <h3>by {trackDetail.artist_name}</h3>
                <p>{lyric.lyrics_body}</p>
                <span><strong>Album Name: </strong>{trackDetail.album_name}</span>
                <br/>
                <span><strong>Song Genre: </strong>{trackDetail.track_rating}</span>
            </div>
        );
    }
}

export default LyricContent;
