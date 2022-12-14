import sendRequest from "./send-request";
const BASE_URL = "/api/news";

export function topStories() {
  return sendRequest(`${BASE_URL}/topstories`);
}

export function getSavedStories() {
  return sendRequest(`${BASE_URL}/savedstories`);
}

export function searchStories(searchParam) {
  return sendRequest(`${BASE_URL}/search`, "POST", searchParam);
}
