import { TimeUtils } from "../src/utils/TimeUtils";

describe("TimeUtils", () => {
  describe("getTime", () => {
    it("should convert hours to seconds", () => {
      expect(TimeUtils.getTime("2h")).toBe(7200);
      expect(TimeUtils.getTime("5h")).toBe(18000);
    });

    it("should convert minutes to seconds", () => {
      expect(TimeUtils.getTime("30m")).toBe(1800);
      expect(TimeUtils.getTime("45m")).toBe(2700);
    });

    it("should convert seconds to seconds", () => {
      expect(TimeUtils.getTime("60s")).toBe(60);
      expect(TimeUtils.getTime("90s")).toBe(90);
    });

    it("should handle mixed time formats", () => {
      expect(TimeUtils.getTime("1h 30m")).toBe(5400);
      expect(TimeUtils.getTime("2h 15m 30s")).toBe(8130);
    });

    it("should handle uppercase units", () => {
      expect(TimeUtils.getTime("2H 15M")).toBe(8100);
      expect(TimeUtils.getTime("1H 30M 45S")).toBe(5445);
    });

    it("should return 0 for empty string", () => {
      expect(TimeUtils.getTime("")).toBe(0);
    });
  });

  describe("displayTime", () => {
    it("should format seconds into hours, minutes, and seconds", () => {
      // Note: There's an issue with padStart in the implementation
      // Tests corrected based on expected behavior
      expect(TimeUtils.displayTime(3661)).toBe("01h 01m 01s");
      expect(TimeUtils.displayTime(7200)).toBe("02h 00m 00s");
      expect(TimeUtils.displayTime(5445)).toBe("01h 30m 45s");
    });

    it("should handle zero time", () => {
      expect(TimeUtils.displayTime(0)).toBe("00h 00m 00s");
    });
  });

  describe("getAllCommitsTimes", () => {
    it("should calculate total time from commits", () => {
      const commits = [{ timeSpent: "2h" }, { timeSpent: "30m" }, { timeSpent: "45s" }];
      expect(TimeUtils.getAllCommitsTimes(commits)).toBe("02h 30m 45s");
    });

    it("should handle empty commits array", () => {
      expect(TimeUtils.getAllCommitsTimes([])).toBe("00h 00m 00s");
    });
  });

  describe("getRecentCommitsDate", () => {
    const commits = [{ createdAt: "2023-01-18T11:45:00Z" }, { createdAt: "2023-01-20T11:45:00Z" }];
    it("should display korean time", () => {
      expect(TimeUtils.getRecentCommitsDate(commits)).toBe("2023. 1. 20. 오후 8:45:00");
    });
  });
});
