export default {
    use(state, {direction, component})
    {
        let tool = $tools.get(direction).get()
        
        tool.show = true
        tool.component = component
    },
    
    with(state, {direction, props})
    {
        let tool = $tools.get(direction).get()
    
        tool.props = props
    },
    
    hide(state, {direction})
    {
        let tool = $tools.get(direction).get()
    
        tool.show = false
        tool.props = {}
        tool.component = {}
    }
}
