export class TimeUtils {
  constructor() {}

  static getTime(time) {
    let secondTime = 0;
    const timeArr = time.split(" ");

    for (let el of timeArr) {
      el = el.toLowerCase();
      if (el.endsWith("h")) {
        const number = parseInt(el.replace("h", ""), 10);
        secondTime += number * 3600;
      } else if (el.endsWith("m")) {
        const number = parseInt(el.replace("m", ""), 10);
        secondTime += 60 * number;
      } else {
        const number = parseInt(el.replace("s", ""), 10);
        secondTime += number;
      }
    }

    return Number.isNaN(secondTime) ? 0 : secondTime;
  }

  static displayTime(time) {
    let [hours, minutes, seconds] = [0, 0, 0];

    hours = Math.floor(time / 3600);
    minutes = Math.floor((time % 3600) / 60);
    seconds = time % 60;

    return String(hours).padStart(2, "0") + String(minutes).padStart(2, "0") + String(seconds).padStart(2, "0");
  }

  static getAllCommitsTimes(commits) {
    let commitsTime = 0;
    commits.map((commit) => (commitsTime += TimeUtils.getTime(commit.timeSpend)));

    return TimeUtils.displayTime(commitsTime);
  }
}
