"use client";

export function BuyButton({ product }: any) {
  return (
    <button onClick={() => alert(`You bought ${product}`)}>
      Buy {product}
    </button>
  );
}
