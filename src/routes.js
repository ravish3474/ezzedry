import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const SubAdminList = React.lazy(() => import('./views/pages/subAdmin/SubAdminList'))
const UsersList = React.lazy(() => import('./views/pages/users/UsersList'))
const AddSubAdmin = React.lazy(() => import('./views/pages/subAdmin/AddSubAdmin'))
const Coupon = React.lazy(() => import('./views/pages/coupon/Coupon'))
const AddCoupon = React.lazy(() => import('./views/pages/coupon/AddCoupon'))
const Curfew = React.lazy(() => import('./views/pages/curfew/Curfew'))
const CategoryList = React.lazy(() => import('./views/pages/categories/Categories'))
const AddCategory = React.lazy(() => import('./views/pages/categories/AddCategory'))
const EarningsList = React.lazy(() => import('./views/pages/earnings/Earnings'))
const Currency = React.lazy(() => import('./views/pages/currency/Currency'))
const Batchpayment = React.lazy(() => import('./views/pages/batch_payment/Batch_payment'))
const RiderList = React.lazy(() => import('./views/pages/rider/RiderList'))
const AddRider = React.lazy(() => import('./views/pages/rider/AddRider'))
const ViewRider = React.lazy(() => import('./views/pages/rider/ViewRider'))
const AddProduct = React.lazy(() => import('./views/pages/products/AddProduct'))
const ProductsList = React.lazy(() => import('./views/pages/products/ProductsList'))
const Sliders = React.lazy(() => import('./views/pages/app_sliders/Sliders'))
const AddSlider = React.lazy(() => import('./views/pages/app_sliders/AddSlider'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/users', name: 'Users', component: UsersList },
  { path: '/sub-admin', name: 'SubAdmin', component: SubAdminList },
  { path: '/sub-admin-add', name: 'SubAdminAdd', component: AddSubAdmin },
  { path: '/coupon', name: 'Coupon', component: Coupon },
  { path: '/add-coupon', name: 'Add Coupon', component: AddCoupon },
  { path: '/curfew', name: 'Curfew', component: Curfew },
  { path: '/category', name: 'Category', component: CategoryList },
  { path: '/add-category', name: 'Add Category', component: AddCategory },
  { path: '/earnings', name: 'earnings', component: EarningsList },
  { path: '/currency', name: 'currency', component: Currency },
  { path: '/rider', name: 'Riders', component: RiderList },
  { path: '/rider-request', name: 'All Riders Requests', component: RiderList },
  { path: '/add-rider', name: 'Add Rider', component: AddRider },
  { path: '/view-rider', name: 'View Rider', component: ViewRider },
  { path: '/products', name: 'Manage Products', component: ProductsList },
  { path: '/add-product', name: 'Add Product', component: AddProduct },
  { path: '/app-sliders', name: 'App Sliders', component: Sliders },
  { path: '/add-app-sliders', name: 'Add App-Sliders', component: AddSlider },

  { path: '/batch-payments', name: 'batch-payments', component: Batchpayment },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', component: Placeholders },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
