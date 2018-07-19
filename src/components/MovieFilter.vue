<template>
        <div id = "movie-filter">
            Movie Filter
            <CheckFilter v-for="(genre,index) in genres" v-bind:key = index v-bind:title='genre' v-on:checkfilter="emit" ></checkfilter>
        </div>
</template>

<script>
import genres from "../util/genres";
import CheckFilter from "./CheckFilter.vue";
    export default {
            data(){
                return {
                    genres
                }
            },
        methods:{
            emit(category, title, checked){
                console.log('Emit'); 
                this.$emit("checkfilter",category, title, checked);
            }
        },
        components: {
            CheckFilter
        }
        }
</script>