/** @jsx jsx */
import { Box, jsx, Themed, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const Maker = () => {
  return (
    <Box data-test="subscription-container">
      <Themed.h4 data-test="subscription-title">
        <Trans>Who is behind this?</Trans>
      </Themed.h4>
      <Themed.ul>
        <li>
          <LinkUI href="https://twitter.com/theowenyoung">Owen Young</LinkUI>
        </li>
      </Themed.ul>
    </Box>
  )
}

export default Maker
