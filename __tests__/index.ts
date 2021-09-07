import { hellowWorld } from "../src";

test("Hellow World", async () => {
    const data = await hellowWorld()
    expect(data).toBe("Hellow World");
});
