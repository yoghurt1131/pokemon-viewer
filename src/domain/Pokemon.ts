
export class Pokemon {
    id: number;
    name: string;
    frontImgUrl: string;
    backImgUrl: string;
    shinyFrontImgUrl: string;
    shinyBackImgUrl: string;

    constructor(id: number, name: string, 
        frontImgUrl: string, backImgUrl: string, shinyFrontImgUrl: string, shinyBackImgUrl: string) {
        this.id = id;
        this.name = name;
        this.frontImgUrl = frontImgUrl;
        this.backImgUrl = backImgUrl;
        this.shinyFrontImgUrl = shinyFrontImgUrl;
        this.shinyBackImgUrl = shinyBackImgUrl;
    }

    getImageUrl(front: boolean, shiny: boolean): string {
        if(front && !shiny) {
            return this.frontImgUrl
        } else if(front && shiny) {
            return this.shinyFrontImgUrl;
        } else if (!front && !shiny) {
            return this.backImgUrl;
        } else {
            return this.shinyBackImgUrl;
        }
    }
}