/** @jsx jsx */
import { Box, jsx, Themed, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const Archive = () => {
  return (
    <Box data-test="subscription-container">
      <Themed.h4 data-test="subscription-title">
        <Trans>Archive</Trans>
      </Themed.h4>
      <Themed.ul>
        <li>
          <LinkUI href="/archive/">Archive</LinkUI>
        </li>
      </Themed.ul>
    </Box>
  )
}

export default Archive
