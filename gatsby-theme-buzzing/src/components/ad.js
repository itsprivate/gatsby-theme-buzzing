/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import AdSense from "react-adsense"
const Ad = () => {
  return (
    <Box data-test="ad-container">
      <AdSense.Google
        client="ca-pub-5211209136530011"
        slot="9469977903"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </Box>
  )
}

export default Ad
