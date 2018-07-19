import "./style.scss";
import Vue from 'vue';
import genres from "./util/genres";

import MovieList from "./components/MovieList.vue";
import MovieFilter from "./components/MovieFilter.vue";

import VueResource from "vue-resource";
Vue.use(VueResource);

new Vue({
    el: "#app",
    data:{
        genre: [],
        time: [],
        movie: []
    },
    methods:{
        check2(category, title, checked){
            if(checked){
                this[category].push(title);
            }
            else{
                let index = this[category].indexOf(title);
                if(index > -1){
                    this[category].splice(index,1);
                }
            }
        }
    },
    components: {
       MovieList,
        MovieFilter
    },
    created(){
        this.$http.get('/api').then(res => {
            this.movie = res.data;
            console.log(this.movie);
        })
    }
})