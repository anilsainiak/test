class Rectangle{
    #ar; //can only be read or written within the class body
    constructor(height,width){
        this.height=height
        this.width=width

        this.#ar=undefined;   //private
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        this.#ar=this.width*this.height;
        return this.#ar;
    }

}

const rec1=new Rectangle(5,4);
console.log(rec1.area)
console.log(rec1.height,rec1.width,rec1.ar)
