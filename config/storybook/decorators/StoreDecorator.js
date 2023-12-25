import {StoreProvider} from "../../../src/app/providers/SroreProvider/index.ts";

export const StoreDecorator = (initialState) => (Story) =>
(  <StoreProvider initialState={initialState}>
    <Story/>
  </StoreProvider>);

