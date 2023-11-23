import React, { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';

const Playlist = () => {
    const [{ token }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlayListData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                });
            const { items } = response.data;
            console.log(items);
        };
        getPlayListData();
    }, [token, dispatch]);
    return (
        <div>Playlist</div>
    )
};

export default Playlist;