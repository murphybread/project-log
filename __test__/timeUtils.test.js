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
      expect(TimeUtils.displayTime(3661)).toBe("010101");
      expect(TimeUtils.displayTime(7200)).toBe("020000");
      expect(TimeUtils.displayTime(5445)).toBe("013045");
    });

    it("should handle zero time", () => {
      expect(TimeUtils.displayTime(0)).toBe("000000");
    });
  });

  describe("getAllCommitsTimes", () => {
    it("should calculate total time from commits", () => {
      const commits = [{ timeSpend: "2h" }, { timeSpend: "30m" }, { timeSpend: "45s" }];

      // Note: There's a bug in the implementation with timeSpend vs. timeSpent
      // and the padStart method is used incorrectly
      // This test is written for the expected correct behavior
      expect(TimeUtils.getAllCommitsTimes(commits)).toBe("023045");
    });

    it("should handle empty commits array", () => {
      expect(TimeUtils.getAllCommitsTimes([])).toBe("000000");
    });
  });
});
