const fs = require("node:fs");
const test = require("node:test");
const assert = require("node:assert/strict");


test("HTML principal existe", () => {
    assert.ok(fs.existsSync("index.html"));
});


test("Manifesto PWA existe", () => {
    assert.ok(fs.existsSync("manifest.json"));
});


test("Service Worker existe", () => {
    assert.ok(fs.existsSync("sw.js"));
});


test("Versão do aplicativo está correta", () => {
    const app = fs.readFileSync("app.js", "utf8");


    assert.match(
        app,
        /APP_VERSION = "1\.0\.0"/
    );
});
