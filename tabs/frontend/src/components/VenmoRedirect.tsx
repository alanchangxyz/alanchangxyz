import { useEffect } from "react";
import { redirect, useLocation, useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";

const VenmoRedirect = () => {
  const { venmo } = useParams();
  if (!venmo) {
    redirect("/tabs");
  }

  const location = useLocation();
  let amount = null;
  let mode = null;
  if (location.state) {
    amount = location.state.amount ?? null;
    mode = location.state.mode ?? null;
  }

  const generateVenmoLink = (): string =>
    isMobile ?
      `venmo://paycharge?recipients=${venmo}&txn=${mode ?? "pay"}${amount ? `&amount=${amount}` : ""}`
      : `https://venmo.com/${venmo}?txn=${mode ?? "pay"}${amount ? `&amount=${amount}` : ""}`;

  useEffect(() => window.location.replace(generateVenmoLink()))

  return null;
};

export default VenmoRedirect;
