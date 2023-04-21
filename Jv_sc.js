class Player{
    constructor(){
    var heightMain=document.getElementById("player");
    heightMain.style.height=screen.height +"px";
    if(screen.width<640){
    heightMain.style.width=screen.height +"px";
    }
    var heightDiv=document.getElementById("content");
    heightDiv.style.height=screen.height-300 +"px";
}
}
onload=new Player();

                               //class Buttons//

class Audio_Player{
    constructor() {
        this.audio_file=document.getElementById("audio_file");
        this.title_audio=document.getElementById("title_radio");
        this.play_pause_button=document.getElementById("play_pause");
        this.isPlayed;
        this.play_pause_button.onclick=()=>{
            this.play_pause();}

        this.names_radio=[];
        this.names_radio[0]="Radio Médéa";
        this.names_radio[1]="Radio Alger";
        this.names_radio[2]="Radio Oran";
        this.names_radio[3]="Radio Adrar ";
        this.names_radio[4]="Radio Laghouat";
        this.names_radio[5]="Radio Blida";
        this.names_radio[6]="Radio Tlemcen";
        this.names_radio[7]="Radio Setif";
        this.names_radio[8]="Radio Tipaza";
        this.names_radio[9]="Radio Boumerdes";

        this.source_radio=[];
        this.source_radio[0]="https://webradio.tda.dz/Medea_64K.mp3";
        this.source_radio[1]="https://webradio.tda.dz/ElBahdja_64K.mp3";
        this.source_radio[2]="https://webradio.tda.dz/Oran_64K.mp3";
        this.source_radio[3]="https://webradio.tda.dz/Adrar_64K.mp3";
        this.source_radio[4]="https://webradio.tda.dz/Laghouat_64K.mp3";
        this.source_radio[5]="https://webradio.tda.dz/Blida_64K.mp3";
        this.source_radio[6]="https://webradio.tda.dz/Tlemcen_64K.mp3";
        this.source_radio[7]="https://webradio.tda.dz/Setif_64K.mp3";
        this.source_radio[8]="https://webradio.tda.dz/Tipaza_64K.mp3";
        this.source_radio[9]="https://webradio.tda.dz/Boumerdes_64K.mp3";

        this.server=0;      

        this.setResource();

        document.getElementById("next").onclick=()=>{
             if(this.server<this.source_radio.length-1){
              ++this.server;
             // this.isPlayed=false; 
              this.play_pause_button.src="play.png";
             }else{
                this.server=0;
             }
         localStorage.setItem("save_p",this.server);
         this.setResource();
        }

        document.getElementById("back").onclick=()=>{
            if(this.server>=this.source_radio.length-1){
                --this.server;
              //  this.isPlayed=false;
                this.play_pause_button.src="pause.png";
               }else{
                this.server=this.source_radio.length-1;
               }
         localStorage.setItem("save_p",this.server);
        this.setResource();        
        }
        
        }
    
    setResource(){
        if(localStorage.getItem("save_p")!=null){
        this.server=localStorage.getItem("save_p");
        }
        this.audio_file.src=this.source_radio[this.server];
        this.title_audio.innerHTML=this.names_radio[this.server]; 
    }

    play_pause(){
        if(this.isPlayed==false){
            this.play_pause_button.src="pause.png";
            audio_file.play();
            this.isPlayed=true;
            
        }else{
            this.play_pause_button.src="play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

}


onload=new Audio_Player();


