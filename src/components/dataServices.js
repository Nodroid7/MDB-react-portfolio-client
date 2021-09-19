
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";


export default class dataServices {
  static instance = null;

  static getInstance() {

    if (dataServices.instance == null) {
      dataServices.instance = new dataServices();
    }
    return this.instance;
  }

  showNotification(state, str,title="", duration=5000, callBack) {
    // if (str !== 'timeout of 15000ms exceeded') return;
    NotificationManager[state](
      str,//content string
      title,//title
      duration,//duration time
      () => {//callBack function
        if (callBack) {
          callBack();
        }
      }
    );

  }

}
export const dataService = dataServices.getInstance();
