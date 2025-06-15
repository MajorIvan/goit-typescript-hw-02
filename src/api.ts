import axios from "axios";

export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type UnsplashApiResponse = {
  results: Image[];
  total: number;
  total_pages: number;
};

const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashApiResponse> => {
  const accessKey = "piE9EcbbHjRxyOxFyLQbzpSYxKOax2U8dY2kGWHPIuw";
  const response = await axios.get<UnsplashApiResponse>(
    `https://api.unsplash.com/search/photos/?client_id=${accessKey}`,
    {
      params: {
        query,
        page,
        per_page: 20,
        orientation: "landscape",
      },
    }
  );

  return response.data;
};

// const fetchImages = async (query, page) => {
//   const accessKey = "piE9EcbbHjRxyOxFyLQbzpSYxKOax2U8dY2kGWHPIuw";
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos/?client_id=${accessKey}`,
//     {
//       params: { query, page, per_page: 20, orientation: "landscape" },
//     }
//   );

//   return response.data;
// };

export default fetchImages;
