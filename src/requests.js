
const requests = {
    fetchTrending: `https://netflixsinatraapi.herokuapp.com/trending`,
    fetchNetflixOriginals: `https://netflixsinatraapi.herokuapp.com/netflix_originals`,
    fetchTopRated: `https://netflixsinatraapi.herokuapp.com/top_rated`,
    fetchActionMovies: `https://netflixsinatraapi.herokuapp.com/action`,
    fetchComedyMovies: `https://netflixsinatraapi.herokuapp.com/comedy`,
    fetchHorrorMovies: `https://netflixsinatraapi.herokuapp.com/horror`,
    fetchRomanceMovies: `https://netflixsinatraapi.herokuapp.com/romance`,
    fetchDocumentaries: `https://netflixsinatraapi.herokuapp.com/documentaries`,
}

const categoryComments = {
    netflixOriginalComments: "/netflix_original_comments",
    trendingComments: "/trending_comments",
    topRatedComments: "/top_rated_comments",
    actionComments: "/action_comments",
    comedyComments: "/comedy_comments",
    horrorComments: "/horror_comments",
    romanceComments: "/romance_comments",
    documentaryComments: "/documentary_comments"
}
export { requests, categoryComments }