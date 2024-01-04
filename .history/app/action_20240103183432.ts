'use server';

export const fetchAnime = async ()=>{
  const response = await fetch('https://shikimori.one/api/animes/2');
  const data = await response.json();
  console.log(data);
  
  return data;
}