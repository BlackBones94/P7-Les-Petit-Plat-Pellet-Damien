export class TagAppliance{
    constructor(data){
        this.id = data.id
        this.appliance = data.appliance
    }

    getTagDOM(){
        return `
        <div class="tag-applaince" id="tag${this.id}">
            <span>${this.appliance}</span>
    </div>`
    }
}

