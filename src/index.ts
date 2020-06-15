import { Application } from "./app";

const application = new Application();

setImmediate(async () => {
  await application.start();
  console.log('Application started.')
});