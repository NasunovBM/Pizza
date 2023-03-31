import React from "react";
function Categories({ value, onClickCategories }) {
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // console.log("categories", value);
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategories(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
