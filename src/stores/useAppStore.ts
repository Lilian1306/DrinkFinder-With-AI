import { create } from "zustand";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoriteSlice";
import { createNotificationSlice, type NotificatioSliceType } from "./notificationSlice";
import { createAISlice, type AISlice } from "./aiSlice";


export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificatioSliceType & AISlice>()(devtools((...a) => ({
   ...createRecipeSlice(...a),
   ...createFavoritesSlice(...a),
   ...createNotificationSlice(...a),
   ...createAISlice(...a)
})))