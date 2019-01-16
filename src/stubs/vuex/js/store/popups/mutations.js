export default {
    
    show(state, {size, component, props})
    {
        let popup = state.popup[size]
    
        popup.show = true
        popup.props = props
        
        if(component)
            popup.component = component
    },
    
    hide(state, {size})
    {
        let popup = state.popup[size]
    
        popup.show = false
    
        popup.form = {}
    },
}
