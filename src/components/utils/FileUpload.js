import React, { useState } from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import axios from "axios";
const FileUploadContents = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function FileUpload() {
  const [images, setImages] = useState([]);
  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    axios.post("/api/todo/image", formData, config).then((res) => {
      if (res.data.success) {
        console.log(res.data);
        setImages([...images, res.data.filePath]);
        //기존이미지 + 새로운 이미지를 넣어줌
      } else {
        alert("파일을 저장하는데 실패했습니다.");
        console.log(res);
      }
    });
    //formData, config를 같이 넣어주지 않으면 file을 보낼 때 에러가 발생한다.
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <FileUploadContents {...getRootProps()}>
              <input {...getInputProps()} />
              <BsPlus style={{ fontSize: "50px" }} />
            </FileUploadContents>
          </section>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                display: "flex",
                width: "300px",
                height: "300px",
                overflowX: "scroll",
              }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
