function first(){
    console.log(this);
}

const second = ()=>{
    console.log(this)
}

first();
second();