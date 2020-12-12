var locales = ["en", "fa"];
var defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;
module.exports = {
  i18n: {
    locales: locales,
    defaultLocale: locales.includes(defaultLocale) ? defaultLocale : "en",
  },
  async rewrites() {
    return [
      {
        source: "/account",
        destination: "/account/profile",
      },
    ];
  },
};
