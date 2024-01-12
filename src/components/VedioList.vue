<template>
    <div>
        <h1>Video list</h1>
    <div v-for="video in videos" :key="video.id" >
    <p>{{ video.title }}</p>
    <router-link :to="{name: 'watch', params:{id:video.id}}">Watch</router-link>
    </div>
    </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
 import { RouteLocationNormalizedLoaded, useRoute } from "vue-router";
   
   interface Video {
        id:number,
        title:string;
   }

export default defineComponent({


    data(){
        return{
            videos: [
{ id: 1, title: 'Video 1', file: 'video1.mp4' },
{ id: 2, title: 'Video 2', file: 'video2.mp4' },
// Add more videos as needed
] as unknown as Video[],
      selectedVideo: {} as Video,
        };
    },

    methods:{
        loadVideo(){
                const route = useRoute();
                const videoId = route.params.id;

                  // Find the selected video by id
                 const selectedVideo = this.videos.find((video) => video.id.toString() === videoId);

                 if(selectedVideo){
                    this.selectedVideo =selectedVideo;
                 }
            },
    }
    // data(): {videos: Video[]};
    
    // {
        // return{
        //     videos:[
        //         {id:1, title: 'Video 1'},
        //         {id:2, title: 'Video 2'},
        //         {id:3, title: 'Video 3'},
        //     ],
        // };
    // },
});
</script>