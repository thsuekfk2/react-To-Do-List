import { React, useState } from "react";
import Layout from "../../Layout/Layout";
import "./UploadListPage.scss";
import FileUpload from "../../utils/FileUpload";
import axios from "axios";

function UploadListPage(props) {
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

  const updateImages = (newImages) => {
    //받아온 파라미터를 setImage로 image에 넣어줌

    setImage(newImages);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //자동적으로 리프레쉬 되는것을 방지
    //간단한 유효성 체크
    //(모든 칸이 채워지지 않으면 알림창 )
    if (!title || !description || !price || !image || !period) {
      return alert("모든 값을 넣어주셔야 합니다.");
    }
    //서버에 채운 값들을 request 보낸다.
    const body = {
      //로그인 된 사람의 아이디
      writer: props.user.userData._id,
      title: title,
      description: description,
      price: price,
      image: image,
      period: period,
    };
    axios.post("/api/todo", body).then((res) => {
      if (res.data.success) {
        alert("상품 업로드에 성공했습니다.");
        //업로드 페이지에 상품을 저장하고 저절로 랜딩 페이지로 오게 하기
        props.history.push("/");
      } else {
        alert("상품 업로드에 실패했습니다.");
      }
    });
  };
  return (
    <div>
      <Layout>
        <div
          className="upload-contents-wrap"
          style={{ marginTop: "70px", paddingTop: "70px" }}
        >
          <div className="upload-title">Write down your dreams</div>
          <div className="upload-input-form">
            <FileUpload refreshFunction={updateImages} />
            <form
              onSubmit={submitHandler}
              style={{ display: "flex", flexDirection: "column" }}
            >
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
              <button type="submit">Confirm</button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default UploadListPage;
