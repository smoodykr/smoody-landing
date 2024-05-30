const baseURL = 'http://183.109.32.60:8000/api';

const signupAPI =  async function(data){
  const response = await fetch(baseURL+'/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

const loginAPI = async function(data){
  const response = await fetch(baseURL+'/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}

const shareCodeAPI = async function(shareCode){
  const response = await fetch(baseURL+`/share/${shareCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
}