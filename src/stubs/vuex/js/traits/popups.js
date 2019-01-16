import SmallPopUp from '@Slot/pop-ups/small'
import LargePopUp from '@Slot/pop-ups/large'
import MediumPopUp from '@Slot/pop-ups/medium'
export default {
    data() {
        return {
            popUps: [
                SmallPopUp,
                LargePopUp,
                MediumPopUp,
            ]
        }
    }
}