import {StoreProvider} from "../../../src/app/providers/StoreProvider/index.ts";

export const StoreDecorator = (initialState) => (Story) =>
(  <StoreProvider initialState={initialState}>
    <Story/>
  </StoreProvider>);
