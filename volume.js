class Volume{
    constructor(){
        this.audio_file=document.getElementById("audio_file");
        this.audio_file.Volume=50/100;

        this.volume_range=document.getElementById("volume_range");
        this.volume_range.onchange=()=>{
            this.audio_file.Volume=this.volume_range.value/100;
        }

        this.volume_speed=document.getElementById("volume_speed");
        this.audio_file.playbackRate=1;
        this.volume_speed.onchange=()=>{
        this.audio_file.playbackRate=this.volume_speed.value/100;
        }
    }
}

onload=new Volume();
