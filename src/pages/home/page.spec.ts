import { HomePage } from './page';

declare var describe, beforeEach, it, expect;

describe("HomePage", () => {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it("should contain 'Hello world!' in 'content' property", () => {

        expect(page.content).toEqual("Hello world!");
    });
});