import Card from "./Card";

const ListCards = () => {
  const cards = [
    {id:1,  image: "/images/logo-chrome.svg", title: "Add to Chrome", minVersion: 62 },
    {id:2,  image: "/images/logo-firefox.svg", title: "Add to Firefox", minVersion: 55 },
    { id:3, image: "/images/logo-opera.svg", title: "Add to Opera", minVersion: 46 },
  ];
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap justify-center ">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          minVersion={card.minVersion}
          index = {card.id}
        />
      ))}
    </div>
  );
};

export default ListCards;
