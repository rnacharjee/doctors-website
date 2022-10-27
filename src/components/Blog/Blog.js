import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1>My - Blogs</h1>

      <div className="text-start bg-light p-2 rounded mb-4">
        <h5>Food Allergies and Intolerances</h5>
        <strong>30-Apr-2022</strong>
        <br />
        <p>
          Food allergies affect people of all ages but are increasing in
          children. Currently, 1 in 25 children are affected by food allergies.
          This number increased over 18% from 1997 to 2007. Food allergies are
          when the body reacts to food like it is a foreign substance that is
          bad for the body. Specifically, food allergies are reactions to
          protein in foods. Proteins contain antigens that are specific to that
          food. During an allergic reaction, the body makes an immune response
          in reaction to the antigen. Exposure to the food antigen triggers a
          chemical response in the body. This chemical response results in
          symptoms. Symptoms can occur immediately or hours after ingestion.
          Symptoms include
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
      <div className="text-start bg-light p-2 rounded mb-4">
        <h5>Fluids and Hydration</h5>
        <strong>3-May-2022</strong>
        <br />
        <p>
          Fluid intake increases as we grow bigger and older. We also need more
          fluids when we are active, have a fever, or are in warmer climates.
          How much fluid do children need? Babies under 6 months of age will get
          all the fluids they need via breastmilk or formula. Most babies drink
          between 28-36 ounces of breastmilk or formula daily. Between 6-9
          months of age, a baby can have up to 4 ounces of water a day in
          addition to formula or breastmilk. This increases to 8 ounces between
          9-12 months. Toddlers need 4 cups of fluids every day, school age
          children need 5 cups, and older children need 7-8 cups of fluids per
          day.
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
      <div className="text-start bg-light p-2 rounded mb-4">
        <h5>First Aid</h5>
        <strong>13-May-2022</strong>
        <br />
        <p>
          From scraped knees to splinters to burns, injuries happen when your
          child is learning, growing, and exploring the world. Learning how to
          respond to these injuries, including basic first aid, when to seek
          further care, and what to stock in your first aid kit, can help you
          feel prepared and calm during an emergency.
        </p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
