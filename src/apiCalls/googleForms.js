import axios from "axios";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdIDG20va84cRmEdRirOWnJXXPG81qknX_Fl5W86jd8iBcY3A/formResponse";
const CORS_PROXY = "https://cors-escape.herokuapp.com/";

const GOOGLE_FORM_KEYS = {
  firstName: "entry.1931988162",
  lastName: "entry.265434425",
  email: "entry.2064402157",
  phone: "entry.884271054",
  service: "entry.1111044604",
  budget: "entry.908464186",
  projectDetail: "entry.1647559967",
};

export const saveResponse = async (data) => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(GOOGLE_FORM_KEYS[key], value);
  }
  await axios
    .post(GOOGLE_FORM_ACTION_URL, formData)
    .then(() => {
      console.log("response", response);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
