import  React from "react";

function FavoriteArticles() {
  const items = [
    { title: "滿盒色香味｜達克瓦茲好茶禮盒 好味上市", date: "2024.02.09", count: 45 }
  ];

  return (
    <>
      <div className="container p-5 border rounded">
        <div className="mb-4">
          <div className="d-flex flex-column gap-3">
            <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-3 flex-grow-1">
                <div className="col-3">查詢訂單時間</div>
                <input type="date" className="form-control" defaultValue="2024-01-01" />
                <div className="border-top border-2 w-25"></div>
                <input type="date" className="form-control" defaultValue="2024-01-02" />
              </div>
              <div className="d-flex gap-3">
              <button className="btn btn-brown text-white">確定送出</button>
              <button className="btn btn-brown text-white">取消查詢</button>
            </div>
            </div>
          </div>
          <hr className="my-2 mt-5"/>
          <div className="d-flex justify-content-around text-primary-dark mt-4">
            <div>文章標題</div>
            <div>收藏日期</div>
            <div>被收藏數</div>
          </div>
          <hr className="my-2" />
          {items.map((item, index) => (
            <div key={index} className="d-flex justify-content-around text-primary-dark">
              <div>{item.title}</div>
              <div>{item.date}</div>
              <div>{item.count}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FavoriteArticles;
