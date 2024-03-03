class HtmlElement {
    constructor (name, selfClosed, text, atributes, styles, childrens){
        this.name = name
        this.selfClosed = selfClosed
        this.text = text
        this.atributes = atributes
        this.styles = styles
        this.childrens - childrens
    }
    setAtributes(){
        
    }
    setStyle(){

    }
    setChildrenEnd(){

    }
    setChildrenBegin(){

    }
    getHtml(){

    }
}

let wrapper = new HtmlElement("div", "</>", "What is Lorem Ipsum?", ["id=", "style=", "src=", "alt=", "href=", "target="], 
["display", "width", "margin", "text-align"], ["div", "h3", "p"])
