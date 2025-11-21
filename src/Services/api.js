const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODI0OWRiYzc5ZjY3NWZkZGUxNjdhY2VkMmI2MzJiOCIsIm5iZiI6MTc2MzY4MTYwNC44NCwic3ViIjoiNjkxZmE1NDQxZDlhZDQ3ZmJiNGEyZGJjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l8LXOq4Elk65UuBbVqtkKVOKUfYg9XJfpwIOyXAs5is'
  }
};

 popularMovies=async ()=>{
    try{
        let response=await fetch(url,options);
        let data=await response.json();
    }
    catch(err){
        console.error(`fetch failed ${err}`);
    }
}