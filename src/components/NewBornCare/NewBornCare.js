import React from "react";

const NewBornCare = () => {
  return (
    <div className="container mt-4 bg-dark text-light rounded">
      <h1 className=" rounded py-2">Essential New Born Care</h1>
      <h3 className="text-start text-warning">Handling a Newborn :</h3>
      <div className="text-start   p-2 rounded">
        <ul>
          <li>
            Wash your hands (or use a hand sanitizer) before handling your baby.
            Newborns don't have a strong immune system yet, so they're at risk
            for infection. Make sure that everyone who handles your baby has
            clean hands.
          </li>
          <li>
            Support your baby's head and neck. Cradle the head when carrying
            your baby and support the head when carrying the baby upright or
            when you lay your baby down.
          </li>
          <li>
            Never shake your newborn, whether in play or in frustration. Shaking
            can cause bleeding in the brain and even death. If you need to wake
            your infant, don't do it by shaking — instead, tickle your baby's
            feet or blow gently on a cheek.
          </li>
          <li>
            Make sure your baby is securely fastened into the carrier, stroller,
            or car seat. Limit any activity that could be too rough or bouncy.
          </li>
          <li>
            Remember that your newborn is not ready for rough play, such as
            being jiggled on the knee or thrown in the air.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NewBornCare;
