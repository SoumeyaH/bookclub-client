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
    // console.log("error", err.message);
    return {
      errors: {
        generic: "Something went wrong. Please try again later.",
      },
    };
  }
};
