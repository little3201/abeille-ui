import Vue from 'vue'
import { Ripple } from 'vuetify/lib/directives'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VAvatar,
  VBtn,
  VCard,
  VCardActions,
  VCardSubtitle,
  VCardTitle,
  VCardText,
  VCol,
  VContent,
  VContainer,
  VDivider,
  VFooter,
  VForm,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAction,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VNavigationDrawer,
  VRow,
  VSpacer,
  VSheet,
  VSubheader,
  VTextField,
  VTextarea,
  VToolbarItems
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAvatar,
    VBtn,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardTitle,
    VCardText,
    VCol,
    VContent,
    VContainer,
    VDivider,
    VFooter,
    VForm,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAction,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VNavigationDrawer,
    VRow,
    VSpacer,
    VSheet,
    VSubheader,
    VTextField,
    VTextarea,
    VToolbarItems
  },
  directives: {
    Ripple
  }
})

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#FF6F00'
      }
    }
  },
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
}

export default new Vuetify(opts)
