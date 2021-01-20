export interface Config {
  apiUrl: string;
  authorizeUrl: string;
  clientId?: string;
  clientSecret?: string;
  scopes: string;
  tokenUrl: string;
}

const config: Config = {
  apiUrl: 'https://api.spotify.com/v1',
  authorizeUrl: 'https://accounts.spotify.com/authorize',
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  scopes: 'user-read-recently-played user-top-read playlist-modify-public streaming user-read-email user-read-private',
  tokenUrl: 'https://accounts.spotify.com/api/token',
};

export default config;
