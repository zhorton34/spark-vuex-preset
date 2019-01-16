import Controller from '@Controller/Controller'

let module = 'sliders'

class SliderController extends Controller
{
    get(direction)
    {
        return this.state(`slide.${direction}`)
    }
    
    right(component, props = {})
    {
        let direction = 'right'
        
        this.store('show', {direction, component, props})
    
        return $slide
    }
    
    left(component, props = {})
    {
        let direction = 'left'
        
        this.store('show', {direction, component, props })
        
        return $slide
    }
    full(component, props = {})
    {
        let direction = 'full'
        
        this.store('show', {direction, component, props })
    
        return $slide
    }
    
    hide(direction = false)
    {
        if(!direction)
            this.hide('left').hide('right').hide('full')
        
        this.store('hide', {direction})
        
        return $slide
    }

    show(direction, props, component = {})
    {
        this.store('show', {direction, props , component})
    
        return $slide
    }
    
    props(direction)
    {
        return this.state(`slide.${direction}`).props
    }
}

export default new SliderController(module)