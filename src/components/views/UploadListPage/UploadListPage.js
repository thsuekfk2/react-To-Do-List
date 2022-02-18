import { React, useState } from "react";
import Layout from "../../Layout/Layout";
import "./UploadListPage.scss";
function UploadListPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState(1);
  const [image, setImage] = useState([]);

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.currentTarget.value);
  };
  const periodChangeHandler = (event) => {
    setPeriod(event.currentTarget.value);
  };
  const PeriodContents = [
    { key: 1, value: "Day" },
    { key: 2, value: "Week" },
    { key: 3, value: "Month" },
    { key: 4, value: "Year" },
    { key: 5, value: "Bucket list" },
  ];
  return (
    <div>
      <Layout>
        <div
          className="upload-contents-wrap"
          style={{ marginTop: "70px", paddingTop: "70px" }}
        >
          <div className="upload-title">Write down your dreams</div>
          <div className="upload-input-form">
            <form style={{ display: "flex", flexDirection: "column" }}>
              <label>Your dream</label>
              <input value={title} onChange={titleChangeHandler} />

              <label>Explanation</label>
              <textarea
                value={description}
                onChange={descriptionChangeHandler}
              ></textarea>

              <label>Price</label>
              <input
                type="number "
                value={price}
                onChange={priceChangeHandler}
              ></input>

              <label>Period</label>
              <select onChange={periodChangeHandler} value={period}>
                {PeriodContents.map((a) => (
                  <option key={a.key} value={a.key}>
                    {a.value}
                  </option>
                ))}
              </select>
              <button>Confirm</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default UploadListPage;
