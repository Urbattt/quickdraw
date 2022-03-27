function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    background("white");
    }
    
    function clearcanvas(){
    background("white");
    
    }

    random_no = Math.floor((Math.random()*array_1.length)+1);
    Element_of_array = array_1[random_no]; 
    console.log(random_no);
console.log(Element_of_array);
sketch="";
timer_count=0;
timer_check="";
draw_sketch="";
answer_holder="";
score=0;