class Draw {
    constructor() {
        this.options = ['red', 'green', 'black'];
        let _result = this.drawResult()
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let colours = [];
        //Uzupełnienie tablicy poprzez losowanie kolorów
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            const colour = this.options[index]
            colours.push(colour)
        }
        return colours
    }

}
