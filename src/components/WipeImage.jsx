/**
 * Image with the ".img-highlight" cover that wipes away on scroll (IX2 a-46 "Highlight").
 * `wrapperClass` is "wipe-container" (hero) or "wipe-wrapper" (section images).
 */
export default function WipeImage({ wrapperClass = 'wipe-wrapper', src, alt = '', className, imgProps }) {
  return (
    <div className={wrapperClass}>
      <div className="img-highlight" />
      <img loading="lazy" src={src} alt={alt} className={className} {...imgProps} />
    </div>
  );
}
