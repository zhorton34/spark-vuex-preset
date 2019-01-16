window.$mouse = {}

import '@Boot/mouse'
import '@Boot/helpers'
import '@Boot/prototypes'
import '@Boot/magicMethods'
import app from "@Boot/app";

import 'lodash'

iterate(app.aliases).forEach(([key, value]) => alias(key, value))

import '@Boot/router'