$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 630, 90, 10, "black");
    createPlatform(500, 500, 90, 10, "hotpink");
    createPlatform(400, 300, 90, 10, "hotpink");
    createPlatform(600, 400, 80, 10, "black");
    createPlatform(900, 400, 80, 10, "black");
    createPlatform(850, 600, 90, 10, "hotpink");
    createPlatform(1000, 200, 90, 10, "hotpink");
    createPlatform(1200, 650, 90, 10, "hotpink");
    createPlatform(200, 200, 80, 10, "black");
    createBadPlatform(1100, 500, 80, 10, "red");
    createPlatform(800, 250, 80, 10, "hotpink");
    createPlatform(600, 200, 80, 10, "hotpink");



    // TODO 3 - Create Collectables
    createCollectable("database", 220, 150);
    createCollectable("max", 910, 340);
    createCollectable("steve", 1200, 100, 0.5, 0.7);
    createCollectable("grace", 200, 100, 0, 1, 1100, 1300, 2)

    // TODO 4 - Create Cannons
    createCannon("right", 500, 2500);
    createCannon("top", 800, 3500);
    createCannon("left", 140, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
