'use server';

const fetchAnime = async ()=>{
  const response = await fetch('https://shikimori.one/api/animes');
  const data = awat response.json();
}