class Controller {
    
    constructor(module)
    {
        this.module = module
    }
    
    boot()
    {
    
    }

    state(property = false)
    {
        if(!property) return store.state[`${this.module}`]
        
        return this.nested(store.state[`${this.module}`], property)
    }
    
    nested(object, string) {
        string = string.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        string = string.replace(/^\./, '');           // strip a leading dot
        let split = string.split('.');
        for (let iteration = 0, limit = split.length; iteration < limit; ++iteration) {
            let key = split[iteration];
            if (key in object) {
                object = object[key];
            } else {
                return;
            }
        }
        return object;
    }


    save(property = false, value)
    {
        property = property.split('.')

        if(property.length == 1)
            this.state()[property[0]] = value 
        else if(property.length == 2 )
            this.state()[property[0]][property[1]] = value
        else if(property.length == 3)
            this.state()[property[0]][property[1]][property[2]] = value
        else if(property.length == 4)
            this.state()[property[0]][property[1]][property[2]][property[3]] = value
        else if(property.length == 5)
            this.state()[property[0]][property[1]][property[2]][property[3]][property[4]] = value
        else if(property.length == 6)
            this.state()[property[0]][property[1]][property[2]][property[3]][property[4]][property[5]] = value

        return this

    }
    
    store(mutation, resource)
    {
        if(typeof store !== 'undefined')
            store.commit(`${this.module}/${mutation}`, resource)
        
        return this
    }

    
}


export default Controller