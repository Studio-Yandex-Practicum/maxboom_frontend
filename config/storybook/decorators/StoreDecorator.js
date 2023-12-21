import {StoreProvider} from "../../../src/app/providers/SroreProvider/index.js";

export const StoreDecorator = (initialState) => (Story) =>
(  <StoreProvider initialState={initialState}>
    <Story/>
  </StoreProvider>);

