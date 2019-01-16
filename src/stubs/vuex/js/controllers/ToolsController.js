import Controller from "@Controller/Controller";

let module = 'tools'

class ToolsController extends Controller
{
    run(hook) {
        this.state('names').each((tool) => this[tool]()[hook]())
    }
    maps() {
        return $controller.MapsController
    }
    measure() {
        return $controller.MeasureController
    }
    waypoint() {
        return $controller.WaypointController
    }
    tracking() {
        return $controller.TrackingController
    }
    location() {
        return $controller.LocationController
    }

    measures() {
        return $controller.MeasureController
    }
    waypoints() {
        return $controller.WaypointController
    }
    trackings() {
        return $controller.TrackingController
    }
    track() {
        return $controller.TrackingController
    }
    
    locations() {
        return $controller.LocationController
    }
    
    get types() {
        return this.state('types')
    }
    
    active()
    {
        let ActiveTool = this.types[this.get('middle.left').component.name]
        
        return (ActiveTool) ? $controller[ActiveTool] : false
    }
    
    get(direction)
    {
        return this.state(direction).get()
    }
    
    operate(tool) {
        if(!this.state('names').includes(tool.toLowerCase()))
            return console.log(`${tool}: Not Valid Option - Options are ${this.state('names').listify()}`)
        
        return this.use('middle.left', this.state('actions').where('name', '=', tool).first().component)
    }
    
    use(direction, component)
    {
        let deactivate = this.state(direction).component.name
        
        if(typeof deactivate !== 'undefined')
            $tools[deactivate]().onDeactivation()
        
        $tools.save('middle.left.show', true)
        this.save('hasActiveTool', true)

        let tool = this.state(direction)
        
        tool.component = component
        $tools[component.name]().onActivation()
        
        return tool
    }

    with(direction, props)
    {
        let tool = this.nested(this, direction)
        
        tool.with(props)
        
        return tool
    }
    hide(direction)
    {
        let tool = this.state(direction)
        
        tool.show = false 

        this.save('hasActiveTool', false)
        
        return tool
    }
    operate(tool) {
        if(!this.state('names').includes(tool.toLowerCase()))
            return console.log(`${tool}: Not Valid Option - Options are ${this.state('names').listify()}`)
        
        return this.use('middle.left', this.state('actions').where('name', '=', tool).first().component)
    }
}

export default new ToolsController(module)