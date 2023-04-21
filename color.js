class Color{
    constructor(){
        this.Color1=document.getElementById("Color1");
        this.Color1.onclick=()=>{
        this.select_color("Color1");
        }

        this.Color2=document.getElementById("Color2");
        this.Color2.onclick=()=>{
        this.select_color("Color2");
        }

        this.Color3=document.getElementById("Color3");
        this.Color3.onclick=()=>{
        this.select_color("Color3");
        }

        this.Color4=document.getElementById("Color4");
        this.Color4.onclick=()=>{
        this.select_color("Color4");
        }
        if(localStorage.getItem("ColorPage")==null){
            document.body.style.background="rgb(219 189 81 / 84%)";
        }
        this.select_color(localStorage.getItem("ColorPage"));

    }
    select_color(color){
        if(color=="Color1"){
        document.body.style.background="#a56363";
        }

        if(color=="Color2"){
            document.body.style.background="rgb(219 189 81 / 84%)";
            }
            if(color=="Color3"){
                document.body.style.background="rgb(81 219 219 / 84%)";
                }

                if(color=="Color4"){
                    document.body.style.background="rgb(0 4 0 / 84%)";
                                        }
        localStorage.setItem("ColorPage",color)

    }
}

onload=new Color();
