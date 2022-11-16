import {defaultDomainLangs, defaultLang, espaniaDomainLang, langs} from "~/helpers/langs";
import {defaultDomain, espaniaDomain} from "~/helpers/domains";

export default function ({ i18n, req, route }) {
  const domain = req.headers.host;
  const path   = route.path;

  const url = `${ domain }${ path }`;

  const reNotDefaultLang = new RegExp(`${ defaultDomain }/(${ defaultDomainLangs.join('|') })`);
  const reEspaniaLang = new RegExp(espaniaDomain);

  if (reNotDefaultLang.test(url)) {
    const params = reNotDefaultLang.exec(url);

    i18n.setLocale(params[1]);
  } else if (reEspaniaLang.test(url)) {
    i18n.setLocale(espaniaDomainLang);
  } else {
    i18n.setLocale(defaultLang)
  }
}
