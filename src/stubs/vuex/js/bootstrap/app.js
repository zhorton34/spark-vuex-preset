import $controller from '@Controller/'
import store from './../store/'
export default {
    $controller,
    'store': store,
    '$pop': $controller.PopUpController,
    '$slide': $controller.SliderController,
}

