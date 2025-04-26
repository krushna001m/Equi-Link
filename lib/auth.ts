"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { AuthState, User } from "./types"
import { currentUser } from "./data"

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>
  signup: (userData: Partial<User>) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  })
  const router = useRouter()

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem("equilink_user")
    if (storedUser) {
      try {
        setAuthState({
          user: JSON.parse(storedUser),
          isLoading: false,
          error: null,
        })
      } catch (error) {
        setAuthState({
          user: null,
          isLoading: false,
          error: "Invalid stored user data",
        })
      }
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
    }
  }, [])

  const login = async (email: string, password: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll just check if the email matches our mock user
      if (email === currentUser.email) {
        setAuthState({
          user: currentUser,
          isLoading: false,
          error: null,
        })
        localStorage.setItem("equilink_user", JSON.stringify(currentUser))
        router.push("/dashboard")
      } else {
        setAuthState({
          user: null,
          isLoading: false,
          error: "Invalid email or password",
        })
      }
    } catch (error) {
      setAuthState({
        user: null,
        isLoading: false,
        error: "An error occurred during login",
      })
    }
  }

  const signup = async (userData: Partial<User>) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, we'll create a new user based on the provided data
      const newUser: User = {
        id: `user-${Date.now()}`,
        name: userData.name || "New User",
        email: userData.email || "user@example.com",
        userType: userData.userType || "mentee",
        createdAt: new Date(),
      }

      setAuthState({
        user: newUser,
        isLoading: false,
        error: null,
      })
      localStorage.setItem("equilink_user", JSON.stringify(newUser))
      router.push("/dashboard")
    } catch (error) {
      setAuthState({
        user: null,
        isLoading: false,
        error: "An error occurred during signup",
      })
    }
  }

  const logout = () => {
    localStorage.removeItem("equilink_user")
    setAuthState({
      user: null,
      isLoading: false,
      error: null,
    })
    router.push("/")
  }

  return <AuthContext.Provider value={{ ...authState, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
