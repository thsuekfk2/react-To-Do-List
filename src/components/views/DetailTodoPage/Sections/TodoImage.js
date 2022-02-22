import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function TodoImage(props) {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    if (props.detail.images && props.detail.images.length > 0) {
      let images = [];
      props.detail.images.map((item) => {
        images.push({
          original: `http://localhost:5000/${item}`,
          thumbnail: `http://localhost:5000/${item}`,
        });
      });
      setImages(images);
    }
  }, [props.detail]);
  //[] 이것은 return 부분이 랜더링이 된 후  라이프 사이클이 한번 작동 시키는 것이다.
  //라이프 사이클이 작동을 시킬 때  images가 없다 보니까 아무거서도 안나온다.
  //하지만 [props.detail]을 넣으면,  [props.detail]이 바뀔 때 마다 실행해주라는 뜻

  return (
    <div>
      <ImageGallery items={Images}></ImageGallery>
    </div>
  );
}

export default TodoImage;
