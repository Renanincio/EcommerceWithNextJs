import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cart`,
      line_items: body.cart.map((item: any) => ({
        price_data: {
          currency: "brl",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erro ao criar sessão de checkout:", error);
    return new Response(JSON.stringify({ error: "Erro ao criar sessão" }), {
      status: 500,
    });
  }
}