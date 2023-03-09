import React from "react";

const Cards = (props) => {
  const { data } = props;

  return (
    <div>
      <div>
        {!data.length ? (
          <div className="col">
            <p className="text">Add an item to cart and it will show up here</p>
          </div>
        ) : (
          <div>
            {data.map((item, index) => {
              return (
                <div className="container" key={index}>
                  <div className="row">
                    <div className="col-6">
                      <img
                        className="img-fluid mt-2"
                        src={item.image}
                        height="200px"
                        alt="Responsive image"
                      />
                    </div>
                    <div className="col-3">
                      <p className="text">{item.name}</p>
                      <p className="text">{item.category}</p>
                      <p className="text">₹{item.cost}</p>
                    </div>
                    <p></p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
