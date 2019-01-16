import SearchBar from '@Section/search'
import MeasuringTool from '@Section/tools/active/measure'
import WaypointTool from '@Section/tools/active/waypoint'
import LocationTool from '@Section/tools/active/location'
import TrackingTool from '@Section/tools/active/tracking'
import LayersButton from '@Component/tools/buttons/layers'
import TopRightActions from '@Section/tools/top-right/actions'
import BottomRightMapOptions from '@Section/tools/bottom-right/zoom-options'

export default {
    hasActiveTool: false,
    names: ['measure', 'waypoint', 'tracking', 'location'],
    types: {
        'measure': 'MeasureController',
        'waypoint': 'WaypointController',
        'tracking': 'TrackingController',
        'location': 'LocationController'
    },
	middle: {
        left: {
            get() {
                return this
            },
            show: true,
            props: {},
            component: '',
        },
        right: {
            get() {
                return this
            },
            show: true,
            props: {},
            component: '',
        },
    },
    top: {
	    outer: {
	        left: {
                get() {
                    return this
                },
	            show: true,
                props: {},
                component: LayersButton
            }
        },
	    left: {
            get() {
                return this
            },
	        show: true,
            props: {},
            component: SearchBar,
        } ,
        right: {
            get() {
                return this
            },
	        show: true,
            props: {},
            component: TopRightActions
        },
    },
    
    bottom: {
	    right: {
            get() {
                return this
            },
	        show: false,
            props: {},
            component: BottomRightMapOptions
        },
    },
    
    actions: [{
            key: 'measure',
            hovering: false,
            name: 'Measure',
            mobileOnly: false,
            icon: 'tools/measure',
            component: MeasuringTool,
            hoverIcon: 'tools/measure-hover',
            class: 'measure-radio border img-check',
        },
        {
            key: 'location',
            hovering: false,
            name: 'Location',
            mobileOnly: false,
            component: LocationTool,
            icon: 'tools/marklocation',
            hoverIcon: 'tools/marklocation-hover',
            class: 'marklocation-radio border img-check',
        },
        {
            key: 'waypoint',
            name: 'Waypoint',
            hovering: false,
            mobileOnly: false,
            icon: 'tools/waypoint',
            component: WaypointTool,
            hoverIcon: 'tools/waypoint-hover',
            class: 'waypoint-radio border img-check',
    
        },
        {
            key: 'tracking',
            hovering: false,
            mobileOnly: true,
            name: 'Tracking',
            icon: 'tools/track',
            component: TrackingTool,
            hoverIcon: 'tools/track-hover',
            class: 'track-radio border img-check',
        }
    ]
}
