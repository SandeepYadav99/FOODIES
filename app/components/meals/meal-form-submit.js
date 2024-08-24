"use client";
import React from 'react'
import { useFormStatus } from "react-dom";
import classes from './meal-form-submit.module.css'
const MealFormSubmit = () => {
    const { pending } = useFormStatus();
  return <button type="submit">{pending ? "Loading..." : "Share Meal"}</button>

}

export default MealFormSubmit