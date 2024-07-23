import { Type } from './ActionType';

export const initialState = {
	// Initialize the state with the basket data from localStorage or an empty array if localStorage is empty
	basket: JSON.parse(localStorage.getItem('basket')) || [],
	user: null,
};

export const reducer = (state, action) => {
	let newBasket;

	switch (action.type) {
		case Type.ADD_TO_BASKET:
			// check if the item exists
			const existingItem = state.basket.find(
				(item) => item.id === action.item.id
			);
			// If the item doesn't exist, add it to the basket with an initial amount of 1
			if (!existingItem) {
				newBasket = [...state.basket, { ...action.item, amount: 1 }];
				// If the item exists update its amount
			} else {
				newBasket = state.basket.map((item) =>
					item.id === action.item.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}
			// Save the updated basket to localStorage
			localStorage.setItem('basket', JSON.stringify(newBasket));
			return {
				...state,
				basket: newBasket,
			};
		// same goes for the removing part
		case Type.REMOVE_FROM_BASKET:
			const index = state.basket.findIndex((item) => item.id === action.id);
			newBasket = [...state.basket];
			if (index >= 0) {
				if (newBasket[index].amount > 1) {
					newBasket[index] = {
						...newBasket[index],
						amount: newBasket[index].amount - 1,
					};
				} else {
					newBasket.splice(index, 1);
				}
			}
			localStorage.setItem('basket', JSON.stringify(newBasket));
			return {
				...state,
				basket: newBasket,
			};
		case Type.EMPTY_BASKET:
			return {
				...state,
				basket: [],
			};

		case Type.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};
