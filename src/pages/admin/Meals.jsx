import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { postAdminMeals } from "../../store/admin/adminMealsThunk";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    title: "",
    description: "",
    price: "",
  });

  const titleChangeHandler = (event) => {
    setValue({
      ...value,
      title: event.target.value,
    });
  };

  const descriptionChangeHandler = (event) => {
    setValue({
      ...value,
      description: event.target.value,
    });
  };

  const priceChangeHandler = (event) => {
    setValue({
      ...value,
      price: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: value.title,
      description: value.description,
      price: +value.price,
    };

    dispatch(postAdminMeals(data));

    setValue({
      title: "",
      description: "",
      price: "",
    });
  };

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          title
          <input
            type="text"
            value={value.title}
            onChange={titleChangeHandler}
          />
        </label>
        <label>
          description
          <input
            type="text"
            value={value.description}
            onChange={descriptionChangeHandler}
          />
        </label>
        <label>
          price
          <input
            type="number"
            value={value.price}
            onChange={priceChangeHandler}
          />
        </label>
        <div>
          <button>Add </button>
        </div>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          color: "#fff",
        }}
      >
        {meals.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
