export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  // Remove after developing
  // token:
  //   "BQB2l_0daa4NuYk0cKueIxv1I6cQ9hDxvATpbvboBynAoUhcFIu-QBzf2URJtXVHHH7g0ZwDDPPxMfDCeoD9PDlVTEinw2Zcebm77J31fJZmZ4fFc0wajKzlfevRo0GRUWNWtvq5lOIKnQNw6-OgbfsbeynB3-OwwL2VSJDlVZu9RZ86WWGO",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};
export default reducer;
