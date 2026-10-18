"use client";

import { useActionState } from "react";
import { placeOrder } from "@/app/actions/orderActions";

const initialState = {
  status: "idle",
  fieldErrors: {},
  message: "",
};

export default function OrderForm() {
  const [state, formAction, isPending] = useActionState(
    placeOrder,
    initialState,
  );

  return (
    <form
      action={formAction}
      style={{
        maxWidth: "360px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div>
        <label
          htmlFor="dishId"
          style={{ display: "block", fontWeight: "bold" }}
        >
          Select Dish
        </label>
        <select
          id="dishId"
          name="dishId"
          defaultValue="kitfo"
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="kitfo">Kitfo Special</option>
          <option value="shiro">Shiro Tegamino</option>
          <option value="tibs">Beef Tibs</option>
          <option value="invalid-dish">Invalid Dish (Triggers 422)</option>
        </select>
        {state.fieldErrors?.dishId && (
          <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>
            {state.fieldErrors.dishId}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" style={{ display: "block", fontWeight: "bold" }}>
          Ethiopian Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="0911223344"
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
        {state.fieldErrors?.phone && (
          <p style={{ color: "red", fontSize: "13px", margin: "4px 0 0" }}>
            {state.fieldErrors.phone}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        style={{
          padding: "10px",
          background: isPending ? "#aaa" : "#0070f3",
          color: "white",
          border: "none",
          cursor: isPending ? "not-allowed" : "pointer",
        }}
      >
        {isPending ? "Placing Order..." : "Place Order (Server Action)"}
      </button>

      {state.message && (
        <p
          style={{
            color: state.status === "success" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
