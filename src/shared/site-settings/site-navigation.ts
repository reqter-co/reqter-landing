export const HOME_PAGE = "/";
export const PRODUCT_PAGE = "/product";
export const SOLUTIONS_PAGE = "/solutions";
export const LEARN_PAGE = "/learn";
export const PRICING_PAGE = "/pricing";
export const BLOG_PAGE = "/blog";
export const SPACES_PAGE = "/spaces";
export const ACCOUNT_PAGE = "/account/basic-info";
export const LOGOUT_PAGE = "/";
export const LOGIN_PAGE = "/login";
export const SIGN_UP_PAGE = "/signup";
export const FORGOT_PASS_PAGE = "/forgot-pass";
export const CONFIRM_EMAIL_PAGE = "/confirm-email";
export const ACCOUNT_BASIC_INFO = "/account/basic-info";
export const ACCOUNT_BILLING = "/account/billing";
export const ACCOUNT_CHANGE_PASSWORD = "/account/change-password";
export const ACCOUNT_SETTINGS = "/account/settings";
export const TICKETS = "/tickets";
// =====================
type Props = {
  id: string;
  defaultName: string;
  href: string;
  icon: string;
  needsLogin: boolean;
};
export const HOME_MENU_ITEM = {
  id: "nav.home",
  defaultName: "Home",
  href: HOME_PAGE,
  needsLogin: false,
};

export const PRODUCT_MENU_ITEM = {
  id: "nav.product",
  defaultName: "Product",
  href: PRODUCT_PAGE,
  needsLogin: false,
};
export const SOLUTIONS_MENU_ITEM = {
  id: "nav.solutions",
  defaultName: "Solutions",
  href: SOLUTIONS_PAGE,
  needsLogin: false,
};
export const LEARN_MENU_ITEM = {
  id: "nav.learn",
  defaultName: "Learn",
  href: LEARN_PAGE,
  needsLogin: false,
};
export const PRICING_MENU_ITEM = {
  id: "nav.pricing",
  defaultName: "Pricing",
  href: PRICING_PAGE,
  needsLogin: false,
};
export const BLOG_MENU_ITEM = {
  id: "nav.blog",
  defaultName: "Blog",
  href: BLOG_PAGE,
  needsLogin: false,
};
export const SPACES_MENU_ITEM: Props = {
  id: "nav.spaces",
  defaultName: "My Spaces",
  href: SPACES_PAGE,
  icon: "health",
  needsLogin: true,
};
export const ACCOUNT_MENU_ITEM: Props = {
  id: "nav.account",
  defaultName: "Account",
  href: ACCOUNT_PAGE,
  icon: "math",
  needsLogin: true,
};
export const LOGOUT_MENU_ITEM: Props = {
  id: "nav.logout",
  defaultName: "Logout",
  href: LOGOUT_PAGE,
  needsLogin: true,
  icon: "sign-out",
};
export const ACCOUNT_BASIC_INFO_SIDEBAR = {
  id: "account.side.basic.info",
  title: "Basic Info",
  defaultName: "Basic Info",
  href: ACCOUNT_BASIC_INFO,
  needsLogin: true,
};
export const ACCOUNT_BILLING_SIDEBAR = {
  id: "account.side.billing",
  title: "Billing",
  defaultName: "Billing",
  href: ACCOUNT_BILLING,
  needsLogin: true,
};
export const ACCOUNT_CHANGE_PASSWORD_SIDEBAR_ITEM = {
  id: "account.side.change.password",
  title: "Change Password",
  defaultName: "Change Password",
  href: ACCOUNT_CHANGE_PASSWORD,
  needsLogin: true,
};
export const ACCOUNT_SETTINGS_SIDEBAR = {
  id: "account.side.settings",
  title: "Settings",
  defaultName: "Settings",
  href: ACCOUNT_SETTINGS,
  needsLogin: true,
};
export const TICKETS_MENU_ITEM = {
  id: "nav.tickets",
  title: "Tickets",
  defaultName: "Tickets",
  href: TICKETS,
  needsLogin: true,
};
// ===========================================
export const isUserPages = (currentRoute: string) => {
  return AUTHORIZED_MENU_ITEMS.some((route) => route.href === currentRoute);
};
export const AUTHORIZED_MENU_ITEMS = [
  SPACES_MENU_ITEM,
  TICKETS_MENU_ITEM,
  ACCOUNT_BASIC_INFO_SIDEBAR,
  ACCOUNT_BILLING_SIDEBAR,
  ACCOUNT_CHANGE_PASSWORD_SIDEBAR_ITEM,
  ACCOUNT_SETTINGS_SIDEBAR,
];
export const DESKTOP_MENU_ITEMS = [
  PRODUCT_MENU_ITEM,
  SOLUTIONS_MENU_ITEM,
  LEARN_MENU_ITEM,
  PRICING_MENU_ITEM,
  BLOG_MENU_ITEM,
];
export const MOBILE_MENU_ITEMS = [
  ...AUTHORIZED_MENU_ITEMS,
  PRODUCT_MENU_ITEM,
  SOLUTIONS_MENU_ITEM,
  LEARN_MENU_ITEM,
  PRICING_MENU_ITEM,
  BLOG_MENU_ITEM,
];
export const USER_DROPDOWN_MENU_ITEMS: Props[] = [
  SPACES_MENU_ITEM,
  ACCOUNT_MENU_ITEM,
  LOGOUT_MENU_ITEM,
];
export const ACCOUNT_SIDEBAR_ITEMS = [
  ACCOUNT_BASIC_INFO_SIDEBAR,
  ACCOUNT_BILLING_SIDEBAR,
  ACCOUNT_CHANGE_PASSWORD_SIDEBAR_ITEM,
  ACCOUNT_SETTINGS_SIDEBAR,
];
