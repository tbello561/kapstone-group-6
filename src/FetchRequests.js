
const baseURL = "http://localhost:3000"

export const loginRequest = (username, password) => {
    return fetch(baseURL + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username,
            password,
        }),
    })
    .then((res) => res.json())
};


export const logoutRequest = (id) => {
    return fetch(baseURL + "auth/logout", {
        headers: { Authorization: "Bearer " + id },
    }).then((res) => res.json());
};

export async function createTodo (username, id) {
  let response = await fetch (baseURL + "todos", {
    method: "POST",
    headers: { Authorization: "Bearer " + id, "Content-Type": "application/json" },
    body: JSON.stringify({
        text: title,
        text: workout,
        text: dueDate
    }),
  })
  
  let result = await response.json()
  
  if (response.status !== 201) {
    console.log(result.message)
  }
    
  return result
};

export async function createRequest(username, password) {
    let displayName = username;
    try {
      let user = await retrieveRequest(username);
      if (!user) {
        let response = await fetch(baseURL + "users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            displayName,
            password,
          })
        });
        let userData = await response.json();
        return userData;
      } else {
        console.log("User already exists");
        return null;
      }
      
    } catch (err) {
      console.log("da")
      console.error(err);
    }
  };

  export async function retrieveRequest(username) {
    let response = await fetch(baseURL + `users/${username}`, {
      headers: { "Content-Type": "application/json" },
    })
    if (response.status === 404) return null;
    else return await response.json();
  };


