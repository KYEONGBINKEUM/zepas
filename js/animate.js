 //스크롤매직

    //애니메이트1
    (function () {

      var controller = new ScrollMagic.Controller();

      var tween1 = TweenMax.to('#animate1', 2, {
        scale: 0.8,
        opacity: 0,
        rotation: 0,
        //repeat: -1,
        y:0 });


      var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: "70%" }).

      setTween(tween1).
      addTo(controller).
      addIndicators({
        name: "1" });


    })();
    
        
    /* 애니메이트2
    (function () {

    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('#animate2', 2, {
        scale: 1,
        opacity: 0,
        rotation: 0,
        //repeat: -1,
        y:0 });


    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: "30%" }).

    setTween(tween1).
    addTo(controller).
    addIndicators({
        name: "2" });
    })();
    */
