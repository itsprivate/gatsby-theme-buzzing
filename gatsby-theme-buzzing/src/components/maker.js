/** @jsx jsx */
import { Box, jsx, Styled, Link as LinkUI } from "theme-ui"
import { Trans } from "react-i18next"

const Maker = () => {
  return (
    <Box data-test="subscription-container">
      <Styled.h4 data-test="subscription-title">
        <Trans>Who is behind this?</Trans>
      </Styled.h4>
      <Styled.ul>
        <li>
          <LinkUI href="https://twitter.com/theowenyoung">Owen Young</LinkUI>
        </li>
      </Styled.ul>
    </Box>
  )
}

export default Maker
