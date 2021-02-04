class Form {

  constructor() {
    this.input = createInput().attribute('placeholder', 'Name');
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var R2
    var title = createElement('h2')
    title.html("Disney Quizes");
    title.position(325, 0);
    

    this.input.position(317, 175);
    this.button.position(375, 230);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      var Q1 = createElement('h2')
      Q1.html("What is the name of the girl from stitch?");
      Q1.position(200, 75);
      
      var box2;
      box2=createSprite(395,95,420,35)
      drawSprites()
      var button1=createButton('Lily')
      button1.position(250,200)
      button1.size(100,40)
      var R1 = createElement('h2')
      var R3 = createElement('h2')

      button1.mousePressed(()=>{
        
        R1.html("WRONG")
        R1.position(250,200)
      })

      var button2=createButton('Lilo')
      button2.position(450,200)
      button2.size(100,40)

      button2.mousePressed(()=>{
        button2.hide()
        button1.hide()
        R1.hide()
        Q1.html("What is the name of the chicken from Moana?(No caps, No spaces)")
        Q1.size(420,35)
        box2=createSprite(395,105,420,70)

        var input2 = createInput().attribute('placeholder', 'Chicken name');
        input2.position(317,175)
        
        
        
        var button3=createButton('Submit')
      button3.position(360,200)
     
      button3.mousePressed(()=>{
        R2 = input2.value();
        
        if(R2 === "heihei"){

          R3.html("CONGRATS!")
        R3.position(300,350)

        }else{
          R3.html("WRONG! TRY AGAIN.")
          R3.position(270,350)
        }
      })


      })

      player.name = this.input.value();
      player.update();

      playerCount+=1;
      player.index = playerCount;
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
