import { createSideBar } from './utils/sidebar'

export default {
  '/front/': createSideBar('front'),
  '/back/': createSideBar('back'),
  '/learns/': createSideBar('learns'),
  '/cases/': createSideBar('cases'),
  '/uses/': createSideBar('uses'),
}