import  React from "react";

function Coupons() {
  const items = [
    { status: "可使用", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" },
    { status: "可使用", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" },
    { status: "可使用", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" },
    { status: "已失效", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" },
    { status: "已失效", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" },
    { status: "已失效", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/77b902d9021e58246933a9ef92c52f071a88f21572fe2adf35dabf7701178b84?", title: "滿千送百" }
  ];

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="d-flex justify-content-start gap-3">
          <button className="btn btn-outline-brown">可使用</button>
          <button className="btn btn-outline-brown">已失效</button>
        </div>
        <hr className="my-4" />
        <div className="row row-cols-1 row-cols-md-3">
          {items.filter(item => item.status === "可使用").map((item, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <img loading="lazy" src={item.imgSrc} className="card-img-top" alt="商品圖片" />
                <div className="card-body text-center">
                  <p className="card-text">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="row">
          {items.filter(item => item.status === "已失效").map((item, index) => (
            <div key={index} className="col-md-4 col-12 mb-4">
              <div className="card h-100">
                <img loading="lazy" src={item.imgSrc} className="card-img-top" alt="商品圖片" />
                <div className="card-body text-center">
                  <p className="card-text">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
      .card {
        border: none;
        overflow: hidden;
        width: 80%;
      }
      .btn-outline-brown:hover {
        background-color: var(--brown);
        color: white; 
        border-color: var(--grey);
      }
      `}</style>
    </>
  );
}

export default Coupons;
