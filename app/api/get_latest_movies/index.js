const axios = require('axios');

var Data = [];

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies',
  params: {
    currentCountry: 'US',
    purchaseCountry: 'US',
    homeCountry: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'd25956cc33msh3cb5f1429b1e9f8p189cf6jsn97321b471225',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

export default async (req, res) => {

  try {
    const response = await axios.request(options);

    response.data.forEach(movie_id => {
        setTimeout(()=>{
         Get_movie_details(movie_id);
        }, 3000)
    })

    res.status(200).json({ message: `Done` , data: Data});
  } catch (error) {
    res.status(500).json({ error: error });
  }
}


const Get_movie_details = (movie_id) =>{
    movie_id = movie_id.split("/").filter(i=> i!=="")[1];
    axios.get("https://online-movie-database.p.rapidapi.com/title/get-details",{
        params: {
            tconst: movie_id
        },
        headers: {
            'X-RapidAPI-Key': 'd25956cc33msh3cb5f1429b1e9f8p189cf6jsn97321b471225',
            'X-RapidAPI-Host': "online-movie-database.p.rapidapi.com"
        }
    }).then(function (response) {
        Data.push(response.data); 
    })
}


