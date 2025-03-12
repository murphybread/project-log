export class TimeUtils {
  constructor() {}

  static getTime(time) {
    let secondTime = 0;
    const timeArr = time.split(" ");

    for (let el of timeArr) {
      el = el.toLowerCase();
      if (el.endWiths("h")) {
        let [number, letter] = el.split("h");
        secondTime += number * 3600;
      } else if (el.endWiths("m")) {
        let [number, letter] = el.split("m");
        secondTime += 60 * number;
      } else {
        let [number, letter] = el.split("s");
        secondTime += number;
      }
    }

    return secondTime;
  }

  static displayTime(time) {
    let [hours, minutes, seconds] = [0, 0, 0];

    hours = Math.floor(time / 3600);
    minutes = Math.floor((time % 3600) / 60);
    seconds = time % 60;

    return hours.padStart(2, "0") + minutes.padStart(2, "0") + seconds.padStart(2, "0");
  }

  static getAllCommitsTimes(commits) {
    let commitsTime = 0;
    commits.map((commit) => (commitsTime += TimeUtils.getTime(commit.timeSpend)));

    return TimeUtils.displayTime(commitsTime);
  }
}
