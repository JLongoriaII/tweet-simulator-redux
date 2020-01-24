export const getStateLocalStorage = () => {
  const tweetsStorage = localStorage.getItem("tweets");
  if (tweetsStorage === null) {
    return undefined;
  } else {
    return JSON.parse(tweetsStorage);
  }
};

export const setStateLocalStorage = state => {
  localStorage.setItem("tweets", JSON.stringify(state));
};
