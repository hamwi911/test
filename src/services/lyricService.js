import httpService from "./httpService";
import CONFIG from '../utility/CONFIG';


export function getTrackList() {
    return httpService.get(`${CONFIG.baseURL}/chart.tracks.get?
      chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=3cd6efa61643ed874c65585d8cc22601`);
};


export function getTrackLyric(lyricId) {
    return httpService.get(`${CONFIG.baseURL}/track.lyrics.get?
              track_id=${lyricId}&apikey=3cd6efa61643ed874c65585d8cc22601`);
};

export function getTrackById(trackId) {
    return httpService.get(`${CONFIG.baseURL}/track.get?
        track_id=${trackId}&apikey=3cd6efa61643ed874c65585d8cc22601`)
}
