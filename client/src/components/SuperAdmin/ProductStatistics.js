import React from "react";

const ProductStatistics = () => {
  return (
    
    <div className="col-md-12">
      <div className="card mb-2 shadow-sm" >
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe 
          style={{
            background: "#F1F5F4",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%",
            height: "350px",
          }}

          src="https://charts.mongodb.com/charts-3algahez-dypvu/embed/charts?id=6244f85e-7a30-4f81-8d41-4f0ca6ec6b29&maxDataAge=3600&theme=light&autoRefresh=true"
          >
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductStatistics;