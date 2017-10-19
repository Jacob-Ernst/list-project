const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

const parseJSON = (response) => {
  return response.json();
}

const getAll = (cb) => {
  return fetch(`api/todos`, {
    accept: "application/json"
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

const create = (params, cb) => {
  return fetch(`api/todos`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb);
}

const destroy = (id, cb) => {
  return fetch(`api/todos/${id}`, {
    method: "DELETE"
  })
  .then(checkStatus)
  .then(cb);
}

const Client = { getAll, create, destroy };
export default Client;
