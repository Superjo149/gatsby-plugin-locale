import React from "react"
import { injectIntl } from "gatsby-plugin-locale"
import SEO from "../components/seo"

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "title" })}`} />
}

export default injectIntl(Redirect)
