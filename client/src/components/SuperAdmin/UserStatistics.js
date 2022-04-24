import React from "react";

const UserStatistics = () => {
  return (
    <div className="col-md-12">
      <div className="card mb-2 shadow-sm" >
        <article className="card-body">
          <h5 className="card-title">Users statistics</h5>
          <iframe 
          style={{
            background: "#FFFFF",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width:"100%",
            height:"350px",
            display:"inline-block"
          }}

          src="https://charts.mongodb.com/charts-3algahez-dypvu/embed/charts?id=62479af8-792a-4675-845c-3b4242853780&maxDataAge=3600&theme=light&autoRefresh=true"          >
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default UserStatistics;