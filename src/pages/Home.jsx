import LeftBar from "../components/leftbar/LeftBar";
import MainPage from "../components/mainPage/MainPage";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="mainColumns">
          <div className="mainLeft">
            <LeftBar />
          </div>
          <div className="mainRight">{<MainPage />}</div>
        </div>
      </div>
    </div>
  );
}
