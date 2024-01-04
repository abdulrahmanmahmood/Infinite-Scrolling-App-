'use server';

export const fetchAnime = async ()=>{
  const response = await fetch('https://shikimori.one/api/animes/3');
  const data = await response.json();
  console.log(data);
  
  return data;
}