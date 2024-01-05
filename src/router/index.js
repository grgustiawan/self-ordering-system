import { createRouter, createWebHistory } from 'vue-router'
import BranchView from '../views/BranchView.vue'
import MainView from '../views/MainView.vue'
import StoreView from '../views/StoreView.vue'
// import OffersView from '../views/OffersView.vue'
import ProfileView from '../views/ProfileView.vue'
import CategoryView from '../views/CategoryView.vue'
import VoucherView from '../views/VoucherView.vue'
import NotificationView from '../views/NotificationView.vue'
import CartView from '../views/CartView.vue'
import CouponView from '../views/CouponsView.vue'
import FoodView from '@/views/FoodView.vue'
import EmptyCartView from '@/views/EmptyCartView.vue'
import LandingViewVue from '@/views/LandingView.vue'
import CategoryDetailView from '@/views/CategoryDetailView.vue'
import RecomendedViewVue from '@/views/RecomendedView.vue'
import UnderConstructionViewVue from '../views/UnderConstructionView.vue';
import SubmittedView from '../views/SubmittedView.vue'
import BillViewVue from '@/views/BillView.vue'

const routes = [
  {path: '/', name: 'Home', component: LandingViewVue},
  {path: '/branch', name: 'Branch', component : BranchView},
  {path: '/main', name: 'Main', component: MainView},
  {path: '/store', name: 'Store', component: StoreView},
  {path: '/offers', name: 'Offer', component: UnderConstructionViewVue},
  {path: '/profile', name: 'Profile', component: ProfileView},
  {path: '/categories', name: 'Category', component: CategoryView},
  {path: '/category', name: 'CategoryDetail', component: CategoryDetailView},
  {path: '/recomended', name: 'Recomended', component: RecomendedViewVue},
  {path: '/voucher', name: 'Voucher', component: VoucherView},
  {path: '/coupon', name: 'Coupon', component: CouponView},
  {path: '/notification', name: 'Notification', component: NotificationView},
  {path: '/cart', name: 'Cart', component: CartView},
  {path: '/cart-empty', name: 'CartEmpty', component: EmptyCartView},
  {path: '/food', name: 'Food', component: FoodView},
  {path: '/submitted', name: 'Submitted', component: SubmittedView},
  {path: '/receipt', name: 'Receipt', component: BillViewVue},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

export default router
