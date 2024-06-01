import React, { ReactNode } from "react"

// Container
type CardProps = {
  children: ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card w-96 bg-zinc-900 ${className}`}>
      <div className="card-body">
          { children }
      </div>
    </div>
  )
}

// Title
type CardTitleProps = {
  children: ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <div className={`card-title ${className}`}>
      { children }
    </div>
  )
}

// Content
type CardContentProps = {
  children: ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      { children }
    </div>
  )
}

// Action
type CardActionProps = {
  children: ReactNode,
  className?: string
}

export const CardAction: React.FC<CardActionProps> = ({ children, className }) => {
  return (
    <div className={`card-actions ${className}`}>
      { children }
    </div>
  )
}