//buttons 
const rectangleBtn = document.getElementById('rectangleBtn');
const squareBtn = document.getElementById('squareBtn');
const circleBtn = document.getElementById('circleBtn');
const triangleBtn = document.getElementById('triangleBtn');
//inputs
const rectangleHeight = document.getElementById('rectangleHeight');
const rectangleWidth = document.getElementById('rectangleWidth');
const squareSides = document.getElementById('squareSides');
const circleRadius = document.getElementById('circleRadius');
const triangleHeight = document.getElementById('triangleHeight');
//HTML 
const shapeContainer = document.getElementById('shape-container');
const shapeType = document.getElementById('shapeType')
const shapeHeight = document.getElementById('shapeHeight')
const shapeWidth = document.getElementById('shapeWidth')
const shapeRadius = document.getElementById('shapeRadius')
const shapeArea = document.getElementById('shapeArea')
const shapePerimeter = document.getElementById('shapePerimeter')


class Shape {
    constructor(dimension){
        this.dimension = dimension;
    }
}


class Rectangle extends Shape {
    constructor(dimension, width) {
        super(dimension)
        this.width = width;
        this.rectangle = document.createElement("div");
        this.rectangle.style.width = `${this.width}px`;
        this.rectangle.style.height = `${this.dimension}px`;
        this.rectangle.style.backgroundColor = "green"
        this.rectangle.style.border = "1px solid black"
        this.posX = Math.floor(Math.random() * 850)
        this.posY = Math.floor(Math.random() * 850)
        this.rectangle.style.position = 'absolute';
        this.rectangle.style.left = `${this.posY}px`
        this.rectangle.style.top = `${this.posX}px`
        this.rectangle.addEventListener("click", () => {
            this.describe()
        })
        this.rectangle.addEventListener("dblclick", () => {
            shapeContainer.removeChild(this.rectangle)
        })

        shapeContainer.appendChild(this.rectangle)
    }
    describe() {
        shapeType.innerHTML = "Shape Type: Rectangle"
        shapeHeight.innerHTML = `Shape Height: ${this.dimension}px`
        shapeWidth.innerHTML = `Shape Width: ${this.width}px`
        shapeRadius.innerHTML = `Shape Radius: NA`
        shapeArea.innerHTML = `Shape Area: ${this.dimension * this.width}px`
        shapePerimeter.innerHTML = `Shape Perimeter: ${(this.dimension * 2) + (this.width * 2)}px`
    }
}

rectangleBtn.addEventListener("click", () => {
    new Rectangle(rectangleHeight.value, rectangleWidth.value)
})


class Square extends Shape {
    constructor(dimension) {
        super(dimension)
        this.square = document.createElement('div')
        this.square.style.width = `${this.dimension}px`
        this.square.style.height = `${this.dimension}px`
        this.square.style.backgroundColor = 'red'
        this.square.style.border = "1px solid black"
        this.posX = Math.floor(Math.random() * 850)
        this.posY = Math.floor(Math.random() * 850)
        this.square.style.position = "absolute";
        this.square.style.left = `${this.posY}px`
        this.square.style.top = `${this.posX}px`
        this.square.addEventListener("click", ()=> {
            this.describe()
        })
        this.square.addEventListener("dblclick", ()=> {
            shapeContainer.removeChild(this.square)
        })


        shapeContainer.appendChild(this.square)
    }
    describe() {
        shapeType.innerHTML = "Shape Type: Square"
        shapeHeight.innerHTML = `Shape Height: ${this.dimension}px`
        shapeWidth.innerHTML = `Shape Width: ${this.dimension}px`
        shapeRadius.innerHTML = `Shape Radius: NA`
        shapeArea.innerHTML = `Shape Area: ${this.dimension * this.dimension}px`
        shapePerimeter.innerHTML = `Shape Perimeter: ${(this.dimension * 2) + (this.dimension * 2)}px`
    }
}


squareBtn.addEventListener("click", () => {
    new Square(squareSides.value)
})

class Circle extends Shape {
    constructor(dimension){
        super(dimension)
        this.circle = document.createElement('div')
        this.circle.style.height = `${this.dimension * 2}px`
        this.circle.style.width = `${this.dimension * 2}px`
        this.circle.style.borderRadius = '100%'
        this.circle.style.backgroundColor = 'purple';
        this.posX = Math.floor(Math.random() * 850)
        this.posY = Math.floor(Math.random() * 850)
        this.circle.style.position = 'absolute'
        this.circle.style.left = `${this.posY}px`
        this.circle.style.top = `${this.posX}px`

        this.circle.addEventListener("click", () => {
            this.describe()
        })
        this.circle.addEventListener("dblclick", () => {
                shapeContainer.removeChild(this.circle)
        })

        shapeContainer.appendChild(this.circle)
    }
    describe() {
        shapeType.innerHTML = "Shape Type: Circle"
        shapeHeight.innerHTML = `Shape Height: ${this.dimension * 2}px`
        shapeWidth.innerHTML = `Shape Width: ${this.dimension * 2}px`
        shapeRadius.innerHTML = `Shape Radius: ${this.dimension}`
        shapeArea.innerHTML = `Shape Area: ${Math.PI * Math.pow(this.dimension, 2)}px`
        shapePerimeter.innerHTML = `Shape Perimeter: ${2 * Math.PI * this.dimension}px`
    }
}

circleBtn.addEventListener("click", () => {
    new Circle(circleRadius.value)
})

class Triangle extends Shape {
    constructor(dimension){
        super(dimension)
        this.triangle = document.createElement('div');
        this.triangle.style.borderRight = `${this.dimension /2}px solid transparent`
        this.triangle.style.borderLeft = `${this.dimension /2}px solid transparent`
        this.triangle.style.borderBottom = `${this.dimension}px solid yellow`
        this.posX = Math.floor(Math.random() * 850)
        this.posY = Math.floor(Math.random() * 850)
        this.triangle.style.position = 'absolute';
        this.triangle.style.left = `${this.posX}px`
        this.triangle.style.top = `${this.posY}px`
            this.triangle.addEventListener("click", () => {
                this.describe()
            })
            this.triangle.addEventListener("dblclick", () => {
                shapeContainer.removeChild(this.triangle)
            })

        shapeContainer.appendChild(this.triangle)
    }
    describe() {
        shapeType.innerHTML = "Shape Type: Triangle"
        shapeHeight.innerHTML = `Shape Height: ${this.dimension}px`
        shapeWidth.innerHTML = `Shape Width: ${this.dimension}px`
        shapeRadius.innerHTML = `Shape Radius: NA`
        shapeArea.innerHTML = `Shape Area: ${0.5 * this.dimension * this.dimension}px`
        shapePerimeter.innerHTML = `Shape Perimeter: ${2 * this.dimension + Math.pow(Math.pow(this.dimension, 2) + Math.pow(this.dimension, 2), 0.5)}px`
    }
}

triangleBtn.addEventListener("click", () => {
    new Triangle(triangleHeight.value)
})