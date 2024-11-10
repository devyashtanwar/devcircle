import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://zaydns.com/cdn/shop/files/shopify_size_1.png?v=1692957092"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Zaydn Sneakers</Typography>
        <Typography color={medium}>zaydns.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Sneakers that tell your story—make every move count with ZadynSneaker!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
