class FlashState {
    private state:{[key:string]:string|null}
    constructor(){
        this.state = {};
    }

    get(key:string):string|null{
        const value = this.state[key];
        this.state[key] = null;
        return value;
    }

    set(key:string,value:string):void{
        this.state[key] = value;
    }
}

export default new FlashState();