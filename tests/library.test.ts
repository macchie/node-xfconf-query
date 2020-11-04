import XFConfQuery from "../src/library";

describe("Base tests", () => {
  it("should create Library", () => {
    expect(XFConfQuery.read).toBeDefined();
    expect(XFConfQuery.list).toBeDefined();
  });

  it("should list 'xfce4-power-manager' properties", async () => {
    const list = XFConfQuery.list('xfce4-power-manager') || [];
    expect(list.length).toBeGreaterThanOrEqual(0);
  });

  it("should read 'xfce4-power-manager' '/xfce4-power-manager/dpms-enabled' property", async () => {
    const value = XFConfQuery.read('xfce4-power-manager', '/xfce4-power-manager/dpms-enabled');
    expect(value).toBeDefined();
  });
});
