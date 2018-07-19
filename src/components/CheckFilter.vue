<template>
    <div v-bind:class = "{
        'check-filter': true, 'active':checked}" v-on:click="check">
    <span class = "checkbox">.</span>
        <span class = "check-filter-title">{{title}}</span>
    </div>
</template>

<script>
    export default {
                data() {
                    return{
                        checked: false
                    }
                },
                props: [ 'title'],
                methods:{
                    check(){
                        this.checked = !this.checked;
                        this.$emit('checkfilter', "genre", this.title, this.checked);

                    }
                }
            }
</script>