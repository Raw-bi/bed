var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create(),
    world = engine.world;



var projectCanvas = document.querySelector('.mehrwert-canva');

// create a renderer
var render = Render.create({
    element: projectCanvas,
    engine: engine,
    options: {
        width: projectCanvas.offsetWidth,
        height: projectCanvas.offsetHeight,
        pixelRatio: 2,
        background: 'transparent',
        wireframes: false,
    }
});

// create bounds
var groundHeight = 80;
// Change the isStatic property to false
var ground = Bodies.rectangle(
    render.options.width / 2, render.options.height + groundHeight / 2, render.options.width, groundHeight, { isStatic: true, render: { visible: false } });
var wallLeft = Bodies.rectangle(-80, render.options.height / 2, 160, render.options.height, { isStatic: true, render: { visible: false } });

var wallRight = Bodies.rectangle(render.options.width + 80, render.options.height / 2, 160, render.options.height, { isStatic: true, render: { visible: false } })
var roof = Bodies.rectangle(
    render.options.width / 2, -80, render.options.width, 160, { isStatic: true, render: { visible: false } })






// create objects

// art & design
var illustration = Bodies.rectangle(0, 0, 60, 60, { render: { sprite: { texture: '1mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var art = Bodies.rectangle(0, 0, 60, 60, { render: { sprite: { texture: '4mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var threeD = Bodies.rectangle(0, 0, 60, 60, { render: { sprite: { texture: '3mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var graphic = Bodies.rectangle(160, 300, 60, 60, { render: { sprite: { texture: '2mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var photo = Bodies.rectangle(150, 380, 60, 60, { render: { sprite: { texture: '4mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
// video
var documentary = Bodies.rectangle(220, 240, 60, 60, { render: { sprite: { texture: '2mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var animation = Bodies.rectangle(200, 190, 60, 60, { render: { sprite: { texture: '4mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var vintage = Bodies.rectangle(190, 40, 60, 60, { render: { sprite: { texture: '1mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var short = Bodies.rectangle(170, 290, 50, 50, { render: { sprite: { texture: '1mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
//misc
var website = Bodies.rectangle(160, 220, 60, 60, { render: { sprite: { texture: '2mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var article = Bodies.rectangle(300, 180, 60, 60, { render: { sprite: { texture: '3mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var music = Bodies.rectangle(200, 160, 60, 60, { render: { sprite: { texture: '4mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })
var star = Bodies.rectangle(80, 160, 60, 60, { render: { sprite: { texture: '3mbDcfxXKawztA.png', xScale: 0.25, yScale: 0.25} } })


// add all of the bodies to the world
World.add(engine.world, [
  ground, wallLeft, wallRight, roof, illustration, art, threeD, graphic, photo, documentary, animation, vintage, short, website, article, music, star
]);


// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// Allow page scrolling in matter.js window
mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

// Detect clicks vs. drags
let click = false;

document.addEventListener('mousedown', () => click = true);
document.addEventListener('mousemove', () => click = false);
document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));


// run the engine
Matter.Runner.run(engine);

// run the renderer
Render.run(render);
