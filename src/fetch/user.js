const baseUrl = "http://localhost:8080/api";

export const getUser = async (pathname, body) => {
  try {
    const response = await fetch(`${baseUrl}${pathname}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    return await response.json();
  } catch (err) {
    console.log("error", err.message);
    throw Error({ message: "Something went wrong. Please try again." });
  }
};

// {
//   message: "No token. User not authorized";
// }
// {
//   message: "This username is incorrect";
// }
// {
//   message: "This password is incorrect";
// }
