import React, { useEffect } from "react";
import TestApi from "src/service/test/testApi";

const Main = () => {
  useEffect(() => {
    const test = async () => {
      const api = new TestApi("https://jsonplaceholder.typicode.com");

      const res = await api.getComment(1);

      console.log({ res });
    };

    test();
  }, []);

  return (
    <div>
      <img src="/assets/images/earth.jpg" />
      <div className="div_test"/>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        sapiente saepe ex fugit, tempora excepturi nam velit eveniet nihil
        architecto enim placeat exercitationem corporis omnis obcaecati
        repellendus nisi quia reiciendis!
      </div>
    </div>
  );
};

export default Main;
