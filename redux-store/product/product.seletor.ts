import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IProductState } from "./product.types";

const selectProductState = (state: any) => state.product;

export const selectProductList = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.products
);

export const selectProduct = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.product
);

export const selectProductActivityInProgress = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.isActivityInProgress
);

export const selectProductError = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.error
);

export const selectProductMessage = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.message
);

export const selectProductId = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.id
);

export const selectProductImageError = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.error.image
);

export const selectProductNameError = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.error.name
);

export const selectProductDescriptionError = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => productState.error.description
);

export const selectProductErrorCleanUp = createDraftSafeSelector(
  selectProductState,
  (productState: IProductState) => (productState.error = {})
);
