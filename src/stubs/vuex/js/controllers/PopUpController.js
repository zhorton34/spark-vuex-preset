import Controller from "@Controller/Controller";

let module = 'popups'

class PopUpController extends Controller
{
    get(size)
    {
        return this.state(`popup.${size}`)
    }
    
    large(component, props = {})
    {
        let size = 'large'
        
        this.store('show', {size, component, props})
        
        return $pop
    }
    
    medium(component, props = {})
    {
        let size = 'medium'
        
        this.store('show', {size, component, props })
        
        return $pop
    }
    
    small(component, props = {})
    {
        let size = 'small'
        
        this.store('show', {size, component, props })
        
        return $pop
    }
    
    hide(size = false)
    {
        if(!size)
            this.hide('small').hide('medium').hide('large')
        
        this.store('hide', {size})
        
        return $pop
    }
    
    show(size, props, component = {})
    {
        this.store('show', {size, props , component})
        
        return $pop
    }
    
    props(size)
    {
        return app.$store.state.popups.popup[size].props
    }
    
}

export default new PopUpController(module)
