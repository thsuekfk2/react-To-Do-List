import "./Main.scss";

const Main = () => {
  return (
    <div>
      <div className="main-image"></div>
      <MainItem
        title={"felices sueños"}
        contents1={"당신은 오늘 무슨 꿈을 꾸셨나요? "}
        contents2={"당신의 꿈을 담아보세요"}
      />
      <MainItem
        title={"Dreams come true"}
        contents1={"당신의 꿈들 입니다"}
        contents2={"포기하지마세요"}
      />
    </div>
  );
};

function MainItem(props) {
  return (
    <div>
      <div className="main-wrap">
        <div className="main-contents">
          <div className="main-contents-title">
            <p>{props.title}</p>
          </div>
          <div className="main-contents-item">
            <p>{props.contents1}</p>
            <p>{props.contents2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
