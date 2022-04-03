.pragma library

//если мы хотим обратиться к элементу, мы должны его передать через CSS и принять в JS

function func() {

}


//======================================
let i = -131.65;
let time = 0;
var root = true;

function run(frame){
    if(frame.rotation < 131.65 && root){
        i+=0.5;
        frame.rotation = i;
    }else{
        i-=0.5;
        if(i < -131.65){
        root = true;
        }
        else{
            frame.rotation = i;
            root = false;
        }
    }
    time+=0.1;
}
//======================================

