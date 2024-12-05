import { Feature } from "./Feature";

export const Features = () => {
  // Static features data
  const featuresData = [
      {
        title: "Unparalleled Cinematic Experience",
        description: "Immerse yourself in a world of unparalleled visuals.",
        image_path: "/Images/features/imax.webp",
      },
      {
        title: "Delight in Dolby Atmos",
        description: "Experience sound like never before.",
        image_path: "/Images/features/sound.webp",
      },
      {
        title: "Tantalizing Treats",
        description: "Enjoy delicious snacks while watching your favorite movies.",
        image_path: "/Images/features/food.webp",
      },
      {
        title: "Luxurious Escape",
        description: "Relax in our comfortable lounge seating.",
        image_path: "/Images/features/lounge.webp",
      },
  ];

  // Generate feature components
  const featuresHtml = featuresData.map((feature, idx) => (
    <Feature key={idx} {...feature} idx={idx} />
  ));

  return (
    <section className="section-features container">
      <h4 className="subheading">What you&apos;ll get?</h4>
      <h2 className="section-features-heading heading-secondary">
        Unleash the Movie Magic and Discover Our Spectacular Features
      </h2>
      <div className="feature-contents">{featuresHtml}</div>
    </section>
  );
};
