import { parcel_dfx } from "../../declarations/parcel_dfx";
import App from "./App.svelte";

parcel_dfx.greet("test").then((result) => {
  console.log(result);
});

const app = new App({
  target: document.body,
  props: {
    name: "Test",
  },
});

export default app;
