import axios from "axios";

const API_KEY = "22552656-a52d92f58f7bf96e8efb5df9f";
const BASE_URL = "https://pixabay.com/api/";

const fetchGetImages = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) =>
  axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((responce) => responce.data);

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchGetImages };
