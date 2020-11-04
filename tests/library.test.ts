import XFConfQuery from "../src/library";

describe("Base tests", () => {
  it("should create Library", () => {
    expect(XFConfQuery.read).toBeDefined();
    expect(XFConfQuery.list).toBeDefined();
  });

  it("should create Library", async () => {
    const list = XFConfQuery.list(`xfce4-power-manager`) || [];
    expect(list.length).toBeGreaterThanOrEqual(0);
  });
});
