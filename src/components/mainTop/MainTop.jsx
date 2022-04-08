import "./mainTop.css";
import pp from "../../images/pp.png";
import logout from "../../svgs/logout.svg";
import files from "../../svgs/files.svg";
import forward from "../../svgs/forward.svg";
import reply from "../../svgs/reply.svg";
import reject from "../../svgs/reject.svg";
import next from "../../svgs/next.svg";
import admin from "../../svgs/admin.svg";
import settings from "../../svgs/settings.svg";
// import files from "../../svgs/files.svg";

export default function MainTop() {
  return (
    <div className="mainTop bold">
      <div className="topTop">
        <div className="topleft">
          <table>
            <tr>
              <td className="bold">Order 10234</td>
              <td className="bold">Task Name</td>
              <td></td>
            </tr>
            <tr>
              <td>Task description</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="topRight">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>

              <td className="right pp" rowspan="2">
                <img src={pp} alt="" />
                <div className="status">2</div>
              </td>
              <td className="padding left">Welcome Mr.Das</td>
              <td className="right">
                <span>Logout</span>
                <span>
                  <img src={logout} alt="" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="blue" colSpan={2}>
                Workflow name
              </td>
              <td></td>

              <td className="left">
                <span>Admin Mode</span>
                <span>
                  <img src={admin} alt="" />
                </span>
              </td>
              <td className="right">
                <span>Settings</span>
                <span>
                  <img src={settings} alt="" />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="topBottom">
        <div className="bottomleft">
          <div className="table">
            <table className="bold table">
              <tr>
                <td>Created By</td>
                <td>Name</td>
              </tr>
              <tr>
                <td>Sent by</td>
                <td>Name</td>
              </tr>
            </table>
          </div>
          <div className="table">
            <table className="bold table">
              <tr>
                <td>Due Date</td>
                <td>Date</td>
              </tr>
              <tr>
                <td>Sent to</td>
                <td>Name</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="bottomRight">
          <div className="btnDiv">
            <div>Files</div>
            <div>
              <img src={files} alt="" />
            </div>
          </div>
          <div className="btnDiv">
            <div>Forward</div>
            <div>
              <img src={forward} alt="" />
            </div>
          </div>
          <div className="btnDiv">
            <div>Send Back</div>
            <div>
              <img src={reply} alt="" />
            </div>
          </div>
          <div className="btnDiv">
            <div>Reject</div>
            <div>
              <img src={reject} alt="" />
            </div>
          </div>
          <div className="btnDiv">
            <div>Next Assessor</div>
            <div>
              <img src={next} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
