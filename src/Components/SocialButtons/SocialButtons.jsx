import { shoperyIcons } from "../../data/data";
import "./SocialButtons.css";

export default function SocialButtons({ includeLink = false, label = "Social media preview" }) {
  const networks = ["facebook", "twitter", "pinterest", "instagram", ...(includeLink ? ["link"] : [])];
  return <div className="social-buttons d-flex" role="group" aria-label={label}>
    {networks.map(network => {
      const Icon = shoperyIcons[network];
      return <button type="button" key={network} aria-label={`${network === "link" ? "Copy link" : network} (preview)`} title="Preview only" aria-disabled="true"><Icon aria-hidden="true" /></button>;
    })}
  </div>;
}
