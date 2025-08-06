'use client'
import { createContext, useContext, useReducer, ReactNode } from 'react'

interface ICartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface ICartState {
    items: ICartItem[];
    total: number;
}

type CartAction = | {type: 'ADD_ITEM'; payload: Omit<ICartItem, 'quantity' > & {quantity?: number}} | {type: 'REMOVE_ITEM'; payload: string} | {type: 'UPDATE_QUANTITY'; payload: {id: string; quantity: number}} | {type: 'CLEAR_CART'}

const CartContext = createContext<{
    state: ICartState
    addItem: (item: Omit<ICartItem, 'quantity'> & { quantity?: number }) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    items: ICartItem[]
    total: number
  } | null>(null)

  const cartReducer = (state: ICartState, action: CartAction): ICartState => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id)
        
        if (existingItem) {
          const updatedItems = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
          return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
          }
        }
        
        const newItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
      }
      
      case 'REMOVE_ITEM': {
        const newItems = state.items.filter(item => item.id !== action.payload)
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
      }
      
      case 'UPDATE_QUANTITY': {
        const newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
        
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
      }
      
      case 'CLEAR_CART':
        return { items: [], total: 0 }
      
      default:
        return state
    }
  }

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(cartReducer, {items: [], total: 0})

    const addItem = (item: Omit<ICartItem, 'quantity' > & {quantity?: number}) => {
        dispatch({type: 'ADD_ITEM', payload: item})
    }

    const removeItem = (id: string) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }

    const updateQuantity = (id: string, quantity: number) => {
        dispatch({type: 'UPDATE_QUANTITY', payload: {id, quantity}})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    return (
        <CartContext.Provider value={{
            state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            items: state.items,
            total: state.total
        }}
        >
        {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}