<template>
        <div id = "movie-list">
                Movie List
                <MovieItem v-for="(movie, index) in filteredMovies" v-bind:key ="index" class = "movie" v-bind:movie = "movie"> </MovieItem>
            </div>
</template>

<script>
import genres from "../util/genres";
import MovieItem from "./MovieItem.vue";
    export default {
            props:['genre','time', 'movie'],
            methods: {
                moviesPassesGenreFilter(movie){
                    if(!this.genre.length){
                        return true;
                    }
                     return this.genre.find(genre => movie.genre === genre);
                }
            },
            computed:{
                filteredMovies(){
                    return this.movie.filter(this.moviesPassesGenreFilter);
                }
            },
            components: {
                MovieItem
            }
        }
</script>