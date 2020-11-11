import Cookies from "js-cookie";
// mock the user api
const getUser = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));
  const token = Cookies.get("@caaser-token");
  if (token) {
    // authorized
    return {
      profile: {
        first_name: "Saeed",
        last_name: "Padyab",
        avatar: {
          en: "http://news.stanford.edu/thedish/wp-content/uploads/sites/2/2016/10/Decker.jpg",
          fa: "http://news.stanford.edu/thedish/wp-content/uploads/sites/2/2016/10/Decker.jpg",
        },
      },
    };
  }

  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};

export default getUser;
