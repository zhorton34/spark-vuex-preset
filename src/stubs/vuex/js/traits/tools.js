import TopLeft from '@Slot/tools/top-left'
import TopRight from '@Slot/tools/top-right'
import MiddleLeft from '@Slot/tools/middle-left'
import BottomRight from '@Slot/tools/bottom-right'
import MiddleRight from '@Slot/tools/middle-right'
import TopOuterLeft from '@Slot/tools/top-outer-left'

export default {
    data() {
        return {
            toolPositions: [
                TopLeft,
                TopRight,
                MiddleLeft,
                MiddleRight,
                BottomRight,
                TopOuterLeft
            ]
        }
    }
}