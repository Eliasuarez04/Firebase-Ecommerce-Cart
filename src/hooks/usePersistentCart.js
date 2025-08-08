import { useEffect, useState } from 'react'
import { db } from '../firebase'
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore'

const CART_ID = 'usuario-demo' // puedes luego usar userId si implementas login

export const usePersistentCart = () => {
  const [cart, setCart] = useState([])

  // Cargar carrito desde Firebase al inicio
  useEffect(() => {
    const loadCart = async () => {
      const ref = doc(db, 'carts', CART_ID)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        setCart(snap.data().items || [])
      }
    }
    loadCart()
  }, [])

  // Sincronizar con Firebase cada vez que el carrito cambie
  useEffect(() => {
    const ref = doc(db, 'carts', CART_ID)
    setDoc(ref, { items: cart })
  }, [cart])

  return [cart, setCart]
}
