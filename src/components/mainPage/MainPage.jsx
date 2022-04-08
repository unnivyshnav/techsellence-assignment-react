import MainTop from "../mainTop/MainTop";
import "./mainPage.css";
import image from "../../images/image2.png";
import close from "../../svgs/closeBig.svg";
import polygonInv from "../../svgs/polygonInv.svg";
import polygon from "../../svgs/polygon.svg";
import attachment from "../../svgs/attachment.svg";

export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="mainTopSection">
        <MainTop />
      </div>
      <div className="mainMiddleSection">
        <img className="pdf" src={image} alt="" />
      </div>
      <div className="mainBottomSection">
        <div className="attachments">
          <div className="attachment">
            <div>Data_Files.xls</div>
            <div className="svg">
              <img src={close} alt="" />
            </div>
          </div>
          <div className="attachment">
            <div>Report_1.pdf</div>
            <div className="svg">
              <img src={close} alt="" />
            </div>
          </div>
        </div>
        <div className="commentBox">
          <div className="commentTop">
            <div className="commentTopL">
              <div className="commentOptions bold">
                <div className="roundButton ">
                  <b>B</b>
                </div>
                <div className="roundButton">
                  <i>I</i>
                </div>
                <div className="roundButton">
                  <b>
                    <u>U</u>
                  </b>
                </div>
                <div className="roundButton">
                  <s>S</s>
                </div>
                <div className="roundButton">Aa</div>
                <div className="roundButton">
                  A
                  <div className="polygon">
                    <img src={polygon} alt="" />
                  </div>
                </div>
                <div className="roundButton">
                  A
                  <div className="polygon">
                    <img src={polygonInv} alt="" />
                  </div>
                </div>
                <div className="CommentSelect">
                  <select name="" id="">
                    <option value="">Calibri (Body)</option>
                    <option value="">Calibri (Body)</option>
                  </select>
                </div>
                <div className="CommentSelect">
                  <select name="" id="">
                    <option value="">18</option>
                    <option value="">19</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="commentTopR">
              <div className="commentOptions bold">
                <div className="attachmentIcon">
                  <img src={attachment} alt="" />
                </div>
                <div className="commentBtn">
                  <button>Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
