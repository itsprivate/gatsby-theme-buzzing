import React from "react"
import i18n from "i18next"
import { I18nextProvider } from "react-i18next"
import withDefaults from "../../utils/default-options"

const wrapPageElement = ({ element, props }, themeOptions) => {
  const { i18nextOptions } = withDefaults(themeOptions)
  const locale = props.pageContext.locale
  const i18nextResources = props.pageContext.i18nextResources || {}

  const i18nConfig = {
    lng: locale,
    resources: i18nextResources,
    ...i18nextOptions,
  }

  i18n.init(i18nConfig)

  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
}

export { wrapPageElement }
