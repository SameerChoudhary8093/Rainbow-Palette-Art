import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Ye backend route hai, yaha secret key safe rehti hai
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, currency = "INR" } = body;

    // Keys check karna
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Razorpay keys missing in .env" }, { status: 500 });
    }

    // Razorpay client initialize karna
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Order banane ka format (Razorpay paise paise (paise) me count karta hai, isliye * 100)
    const options = {
      amount: amount * 100, // Rs 500 = 50000 paise
      currency,
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    };

    // Razorpay se order create karwana
    const order = await razorpay.orders.create(options);

    // Frontend ko order details wapas bhejna
    return NextResponse.json({ order }, { status: 200 });

  } catch (error: any) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
