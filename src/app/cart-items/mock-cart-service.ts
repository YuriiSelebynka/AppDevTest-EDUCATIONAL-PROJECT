export class MockCartService {

    getProducts() {
        return [
            {
                id: 2,
                name: 'Appium',
                price: 15,
                quantity: 1,
                status: '2 left',
                description: "this course help us to understand automation testing",
                imgaddress : "http://appium.io/img/code-bg.gif"
            },
            {
                id: 3,
                name: 'Angular',
                price: 20,
                quantity: 3,
                status: '4 left',
                description: "this course help us to understand automation testing",
                imgaddress : "https://upload.wikimedia.org/wikipedia/commons/4/4f/SoftwareDevelopmentLifeCycle.jpg"
            }
        ];
    };
}