

// function Circle(radius){
       
//     this.radius = radius

//     let defaultLocation = {
//         x : 1,
//         y : 1
//     }

//     this.getDefaultLocation = () => {
//         return defaultLocation
//     }
//     this.draw = () => {
//         console.log('draw')
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get : function(){
//             return defaultLocation
//         },
//         set: function(value){
//             if (!value.x || !value.y){
//                 throw new Error('invalid location')
//             }
//             defaultLocation = value
//         }
//     })
// }

// const circle = new Circle(10)
// circle.defaultLocation = {x:2, y:4}
// console.log(circle.defaultLocation)
// circle.draw()

function Stopwatch(){
    this.duration = 0
    this.running = false
    this.timer

    this.start = () =>{
        if (this.running){
            console.log('already started')
        }else{
            this.running = true
            this.startTime = Date.now() - (this.duration * 1000)
            this.timer = setInterval(() => {
                this.duration = (Date.now() - this.startTime) / 1000
            },1000)
        }
    }
    this.stop = () => {
        if (!this.running){
            console.log('already stopped')
        }else{
            clearInterval(this.timer)
            this.running = false
        }
    }
    this.clear = () =>{
        this.duration = 0
    }
}

let sw = new Stopwatch()












