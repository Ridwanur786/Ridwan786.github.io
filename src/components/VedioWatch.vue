<template>
    <h1>Now Playing: {{ selectedVideo.title }}</h1>
    <video controls :src="getVideoPath(selectedVideo.file)"></video>
</template>


<script lang="ts">

    import { defineComponent } from "vue";
    import {  useRoute } from "vue-router";

    interface Video{
        id:number,
        title: string;
        file: string;
    }
    export default defineComponent({
        data() {
            return {
                  selectedVideo:{} as Video,
                  videos: [
        { id: 1, title: "Video 1", file: "video1.mp4" },
        { id: 2, title: "Video 2", file: "video2.mp4" },
        // Add more videos as needed
      ] as Video[],
        };
        },
        created() {
            this.loadVideo();
        },
        watch:{
            $route:'loadVideo',
        },

        methods:{
            loadVideo(){
                const route = useRoute();
                const videoId = route.params.id;

             // Find the selected video by id
                const selectedVideo = this.videos.find(
                    (video) => video.id.toString() === videoId
                    );

            if (selectedVideo) {
                this.selectedVideo = selectedVideo;
            }
            },

            getVideoPath(filename: string) {
                return  `/movie/${filename}`;}
        },
    
    })
</script>