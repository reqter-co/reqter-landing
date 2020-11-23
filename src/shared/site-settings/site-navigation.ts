export const HOME_PAGE = "/";
export const PRODUCT_PAGE = "/product";
export const SOLUTIONS_PAGE = "/solutions";
export const LEARN_PAGE = "/learn";
export const PRICING_PAGE = "/pricing";
export const BLOG_PAGE = "/blog";
export const SPACES_PAGE = "/spaces";
export const ACCOUNT_PAGE = "/account";
export const LOGOUT_PAGE = "/";
export const LOGIN_PAGE = "/login";
export const SIGN_UP_PAGE = "/signup";
export const FORGOT_PASS_PAGE = "/forgot-pass";
export const CONFIRM_EMAIL_PAGE = "/confirm-email";
// =====================
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
export const SPACES_MENU_ITEM = {
  id: "nav.spaces",
  defaultName: "My Spaces",
  href: SPACES_PAGE,
  needsLogin: true,
};
export const ACCOUNT_MENU_ITEM = {
  id: "nav.account",
  defaultName: "Account",
  href: ACCOUNT_PAGE,
  needsLogin: true,
};
export const LOGOUT_MENU_ITEM = {
  id: "nav.logout",
  defaultName: "Logout",
  href: LOGOUT_PAGE,
  needsLogin: true,
};
// ===========================================
export const AUTHORIZED_MENU_ITEMS = [SPACES_MENU_ITEM, ACCOUNT_MENU_ITEM];
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
export const USER_DROPDOWN_MENU_ITEMS = [
  ...AUTHORIZED_MENU_ITEMS,
  LOGOUT_MENU_ITEM,
];
