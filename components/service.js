import React from 'react';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
const useFetch = async (url) => {
  return fetch(url, requestOptions)
    .then((j) => j.json())
    .then((j) => j.response_data);
};

export { useFetch };
