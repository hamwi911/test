import React, {Component} from 'react';
import LyricContent from "../../components/LyricContent";
import {getTrackById, getTrackLyric} from "../../services/lyricService";

class LyricPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyricContent: '',
            trackDetail: ''
        }
    }


    async componentDidMount() {
        const lyric = await getTrackLyric(this.props.match.params.id);
        const trackDetail = await getTrackById(this.props.match.params.id);
        // console.log(lyric)
        // console.log(trackDetail)
        this.setState({
             lyricContent: lyric.data.message.body.lyrics,
             trackDetail: trackDetail.data.message.body.track
        });

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <LyricContent data={this.state}/>
            </div>
        );
    }
}

export default LyricPage;
