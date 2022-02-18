import React from "react";
import Layout from "../../Layout/Layout";
import "./UploadListPage.scss";
function UploadListPage() {
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
              <input></input>

              <label>Explanation</label>
              <textarea></textarea>

              <label>Price</label>
              <input></input>
              <label>select</label>
              <select>
                <option>1</option>
                <option>2</option>
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
