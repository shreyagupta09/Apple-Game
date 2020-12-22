onEvent("slider1", "mousemove", function( ) {
  setPosition("image2_basket", getNumber("slider1"), 350, 80, 50);
  setText("Y1", getYPosition("image2_basket"));
  setText("Y2", getYPosition("image2_basket")+50);
  setText("X1", getNumber("slider1"));
  setText("X2", getNumber("slider1") + 80);
  setPosition("X1", getXPosition("image2_basket") - 20, getYPosition("image2_basket") + 20, 50, 20);
  setPosition("X2", getXPosition("image2_basket") + 80, getYPosition("image2_basket") + 20, 50, 20);
  setPosition("Y1", getXPosition("image2_basket") + 20, getYPosition("image2_basket") - 20, 50, 20);
  setPosition("Y2", getXPosition("image2_basket") + 20, getYPosition("image2_basket") + 50, 50, 20);
});
timedLoop(1, function() {
  var X1 = getXPosition("image2_basket");
  var X2 = getXPosition("image2_basket") + 80;
  setPosition("Image1_apple", 100, getYPosition("Image1_apple") + 1, 25, 25);
  if (getYPosition("Image1_apple") + 25 > 350 && (getYPosition("Image1_apple") < 400 && (getXPosition("Image1_apple") > X1 && getXPosition("Image1_apple") < X2))) {
    setText("label1", "you got it");
    hideElement("Image1_apple");
  } else {
    setText("label1", "keep playing");
  }
});
