export default {
    
    show(state, {direction, component, props})
    {
        let slide = state.slide[direction]
        
        slide.show = true
        slide.props = props
        
        if(component)
            slide.component = component
    },
    
    hide(state, {direction})
    {
        let slide = state.slide[direction]
        
        slide.show = false
        
        slide.form = {}
    },
}
